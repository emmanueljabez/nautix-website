import { HomepageBodyClass } from "@/components/homepage/HomepageBodyClass";
import { Homepage } from "@/components/homepage/Homepage";
import {
  type HeadNodeDescriptor,
  type ScriptDescriptor,
  getMarketingMirror,
} from "@/lib/marketingMirror";

const MARKETING_BODY_BOOTSTRAP = `
  document.body.classList.add(
    "home",
    "wp-singular",
    "page-template",
    "page-template-elementor_header_footer",
    "page",
    "page-id-3841",
    "wp-embed-responsive",
    "wp-theme-lexend",
    "theme-lexend",
    "woocommerce-js",
    "no-sidebar",
    "uni-body",
    "panel",
    "bg-white",
    "text-gray-900",
    "dark:bg-gray-900",
    "dark:text-gray-200",
    "overflow-x-hidden",
    "elementor-default",
    "elementor-template-full-width",
    "elementor-kit-8",
    "elementor-page",
    "elementor-page-3841"
  );
`;

function renderScriptNode(script: ScriptDescriptor, key: string | number) {
  if (script.src) {
    return (
      <script
        key={key}
        id={script.id}
        src={script.src}
        defer={script.defer}
        async={script.async}
        type={script.type}
      />
    );
  }

  if (!script.content) {
    return null;
  }

  return (
    <script
      key={key}
      id={script.id}
      type={script.type}
      dangerouslySetInnerHTML={{ __html: script.content }}
    />
  );
}

function renderHeadNode(node: HeadNodeDescriptor, index: number) {
  const key = `${node.kind}-${node.id ?? index}`;

  if (node.kind === "link") {
    return (
      <link
        key={key}
        id={node.id}
        rel={node.rel}
        href={node.href}
        media={node.media}
        sizes={node.sizes}
        type={node.type}
      />
    );
  }

  if (node.kind === "style") {
    return (
      <style
        key={key}
        id={node.id}
        type={node.type}
        dangerouslySetInnerHTML={{ __html: node.content }}
      />
    );
  }

  return renderScriptNode(node, key);
}

export default async function Home() {
  const { headNodes, bodyScripts } = await getMarketingMirror();

  return (
    <>
      <script
        id="marketing-body-bootstrap"
        dangerouslySetInnerHTML={{ __html: MARKETING_BODY_BOOTSTRAP }}
      />
      <HomepageBodyClass />
      {headNodes.map(renderHeadNode)}
      <Homepage />
      {bodyScripts.map((script, index) => renderScriptNode(script, `body-script-${script.id ?? index}`))}
    </>
  );
}
