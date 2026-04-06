import { readFile } from "node:fs/promises";
import path from "node:path";

const REMOTE_SITE_ORIGIN = "https://lexend.themegenix.com/seven";
const REMOTE_ASSET_URL_PATTERN =
  /https:\/\/lexend\.themegenix\.com\/seven\/([^"'?#]+\.(?:css|js|png|jpe?g|gif|svg|webp|woff2?|ttf|eot))(?:\?[^"'<>]*)?/gi;

function extractMatch(document: string, pattern: RegExp, label: string) {
  const match = document.match(pattern);

  if (!match) {
    throw new Error(`Unable to extract ${label} from mirrored marketing page.`);
  }

  return match[1];
}

function parseAttributes(attributeBlock: string) {
  const attributes: Record<string, string | true> = {};
  const attributePattern = /([^\s"'=<>\/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let match: RegExpExecArray | null;

  while ((match = attributePattern.exec(attributeBlock)) !== null) {
    const [, name, doubleQuoted, singleQuoted, unquoted] = match;
    attributes[name] = doubleQuoted ?? singleQuoted ?? unquoted ?? true;
  }

  return attributes;
}

function normalizeAssetUrl(value: string) {
  if (!value.startsWith(REMOTE_SITE_ORIGIN)) {
    return value;
  }

  const relativePath = value.slice(REMOTE_SITE_ORIGIN.length).split("?")[0];
  return relativePath.startsWith("/") ? relativePath : `/${relativePath}`;
}

function normalizeAssetUrlsInHtml(html: string) {
  return html.replace(REMOTE_ASSET_URL_PATTERN, (_match, assetPath: string) => `/${assetPath}`);
}

function shouldKeepLink(rel: string | undefined) {
  if (!rel) {
    return false;
  }

  return rel === "stylesheet" || rel === "icon" || rel === "apple-touch-icon";
}

function isJavaScriptType(type: string | undefined) {
  if (!type) {
    return true;
  }

  const normalized = type.toLowerCase();
  return normalized === "text/javascript" || normalized === "application/javascript";
}

export type LinkDescriptor = {
  kind: "link";
  href: string;
  rel?: string;
  id?: string;
  media?: string;
  sizes?: string;
  type?: string;
};

export type StyleDescriptor = {
  kind: "style";
  content: string;
  id?: string;
  type?: string;
};

export type ScriptDescriptor = {
  kind: "script";
  id?: string;
  src?: string;
  content?: string;
  async?: boolean;
  defer?: boolean;
  type?: string;
};

export type HeadNodeDescriptor = LinkDescriptor | StyleDescriptor | ScriptDescriptor;

function extractHeadNodes(head: string): HeadNodeDescriptor[] {
  const nodePattern =
    /<link\b([^>]*)\/?>|<style\b([^>]*)>([\s\S]*?)<\/style>|<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  const nodes: HeadNodeDescriptor[] = [];
  let match: RegExpExecArray | null;

  while ((match = nodePattern.exec(head)) !== null) {
    const [, linkAttributes, styleAttributes, styleContent, scriptAttributes, scriptContent] = match;

    if (linkAttributes !== undefined) {
      const attributes = parseAttributes(linkAttributes);
      const rel = typeof attributes.rel === "string" ? attributes.rel.toLowerCase() : undefined;
      const href = typeof attributes.href === "string" ? normalizeAssetUrl(attributes.href) : undefined;

      if (!href || !shouldKeepLink(rel)) {
        continue;
      }

      nodes.push({
        kind: "link",
        href,
        rel,
        id: typeof attributes.id === "string" ? attributes.id : undefined,
        media: typeof attributes.media === "string" ? attributes.media : undefined,
        sizes: typeof attributes.sizes === "string" ? attributes.sizes : undefined,
        type: typeof attributes.type === "string" ? attributes.type : undefined,
      });
      continue;
    }

    if (styleAttributes !== undefined) {
      const attributes = parseAttributes(styleAttributes);

      nodes.push({
        kind: "style",
        content: styleContent,
        id: typeof attributes.id === "string" ? attributes.id : undefined,
        type: typeof attributes.type === "string" ? attributes.type : undefined,
      });
      continue;
    }

    if (scriptAttributes !== undefined) {
      const attributes = parseAttributes(scriptAttributes);
      const type = typeof attributes.type === "string" ? attributes.type : undefined;

      if (!isJavaScriptType(type)) {
        continue;
      }

      nodes.push({
        kind: "script",
        id: typeof attributes.id === "string" ? attributes.id : undefined,
        src: typeof attributes.src === "string" ? normalizeAssetUrl(attributes.src) : undefined,
        content: scriptContent.trim() || undefined,
        async: attributes.async === true,
        defer: attributes.defer === true,
        type,
      });
    }
  }

  return nodes;
}

function extractBodyScripts(body: string): ScriptDescriptor[] {
  const scriptPattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  const scripts: ScriptDescriptor[] = [];
  let match: RegExpExecArray | null;

  while ((match = scriptPattern.exec(body)) !== null) {
    const attributes = parseAttributes(match[1]);
    const type = typeof attributes.type === "string" ? attributes.type : undefined;

    if (!isJavaScriptType(type)) {
      continue;
    }

    scripts.push({
      kind: "script",
      id: typeof attributes.id === "string" ? attributes.id : undefined,
      src: typeof attributes.src === "string" ? normalizeAssetUrl(attributes.src) : undefined,
      content: match[2].trim() || undefined,
      async: attributes.async === true,
      defer: attributes.defer === true,
      type,
    });
  }

  return scripts;
}

function stripScripts(html: string) {
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
}

export async function getMarketingMirror(relativePath = "index.html") {
  const mirrorPath = path.join(process.cwd(), "lexend-seven", relativePath);
  const document = await readFile(mirrorPath, "utf8");
  const head = extractMatch(document, /<head[^>]*>([\s\S]*?)<\/head>/i, "head");
  const body = extractMatch(document, /<body[^>]*>([\s\S]*?)<\/body>/i, "body");

  return {
    headNodes: extractHeadNodes(head),
    body: normalizeAssetUrlsInHtml(stripScripts(body)),
    bodyScripts: extractBodyScripts(body),
  };
}
