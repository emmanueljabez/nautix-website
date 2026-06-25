import Link from "next/link";
import { LegalCard, LegalPageShell } from "@/components/legal/LegalPageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Data Deletion Instructions | Nautix",
  description: "Learn how to request deletion of your personal data from Nautix.",
  path: "/data-deletion",
});

const dataDeletionBreadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Data Deletion", path: "/data-deletion" },
]);

export default function DataDeletionPage() {
  return (
    <>
      <JsonLd data={dataDeletionBreadcrumbSchema} />
      <LegalPageShell
        badge="Privacy"
        title="Data Deletion Instructions"
        lead="Learn how to request deletion of your personal data from Nautix. We respect your privacy rights and make it easy to remove your information."
        meta={["Processing time: Within 30 days", "Last updated: November 30, 2025"]}
      >
        <LegalCard title="How to Request Data Deletion">
          <p>
            You can request deletion of your personal data directly from the Nautix app or by contacting our support
            team. Follow the instructions below based on your preferred method.
          </p>
        </LegalCard>

      <LegalCard title="Option 1: In-App Deletion Request (Recommended)" tone="highlight">
        <ol>
          <li>
            <strong>Step 1:</strong> Log in to your Nautix account at{" "}
            <a href="https://app.nautix.io" target="_blank" rel="noreferrer">
              app.nautix.io
            </a>
          </li>
          <li><strong>Step 2:</strong> Navigate to <strong>Settings</strong> from the main menu</li>
          <li><strong>Step 3:</strong> Click on the <strong>Security</strong> tab</li>
          <li><strong>Step 4:</strong> Scroll down to the <strong>Data &amp; Privacy</strong> section</li>
          <li><strong>Step 5:</strong> Click the <strong>&quot;Request Data Deletion&quot;</strong> button</li>
          <li><strong>Step 6:</strong> Review the deletion details and warnings in the confirmation dialog</li>
          <li><strong>Step 7:</strong> Confirm your deletion request</li>
          <li><strong>Step 8:</strong> You will receive a confirmation email acknowledging your request</li>
        </ol>
        <p>
          <strong>Direct link:</strong>{" "}
          <a href="https://app.nautix.io/app/settings" target="_blank" rel="noreferrer">
            app.nautix.io/app/settings
          </a>{" "}
          (then click Security tab)
        </p>
      </LegalCard>

      <LegalCard title="Option 2: Email Request">
        <p>If you prefer or are unable to access the app, you can request data deletion by email:</p>
        <ul>
          <li>Send an email to <a href="mailto:support@nautix.io">support@nautix.io</a></li>
          <li>Include your registered email address and account details</li>
          <li>Use the subject line: &quot;Data Deletion Request&quot;</li>
          <li>We will respond within 2 business days to confirm your request</li>
        </ul>
      </LegalCard>

      <LegalCard title="What Data Will Be Deleted" tone="important">
        <p>When you request data deletion, the following information will be permanently removed from our systems:</p>
        <ul>
          <li><strong>Account and profile information</strong> - Name, email, company details, role, and billing information</li>
          <li><strong>All messages and conversation history</strong> - Complete WhatsApp message history, media files, and metadata</li>
          <li><strong>Contacts and contact groups</strong> - All saved contacts, tags, and group configurations</li>
          <li><strong>WhatsApp Business Account connections</strong> - Integration settings and authentication tokens</li>
          <li><strong>Broadcast campaigns and templates</strong> - All created campaigns, message templates, and scheduled broadcasts</li>
          <li><strong>Analytics and usage data</strong> - Performance metrics, reports, and activity logs</li>
          <li><strong>Support tickets and communications</strong> - All support interactions and help desk records</li>
        </ul>
      </LegalCard>

      <LegalCard title="Important Warnings" tone="warning">
        <ul>
          <li><strong>This action is permanent and cannot be undone.</strong> Once your data is deleted, it cannot be recovered.</li>
          <li><strong>Your account will be permanently closed.</strong> You will lose access to all Nautix services.</li>
          <li><strong>Active subscriptions will be cancelled.</strong> No refunds will be issued for unused subscription periods unless required by law.</li>
          <li><strong>Data in backups may persist temporarily.</strong> While we delete data immediately from active systems, backup copies may persist for up to 90 days before being purged.</li>
          <li><strong>Some data may be retained for legal compliance.</strong> We may retain certain information as required by law, regulation, or to resolve disputes.</li>
        </ul>
      </LegalCard>

      <LegalCard title="Processing Timeline">
        <ul>
          <li><strong>Acknowledgment:</strong> You will receive a confirmation email within 24 hours of your request</li>
          <li><strong>Verification:</strong> We may contact you to verify your identity (1-3 business days)</li>
          <li><strong>Deletion:</strong> Your data will be permanently deleted within 30 days of request verification</li>
          <li><strong>Completion:</strong> You will receive a final confirmation email once deletion is complete</li>
        </ul>
      </LegalCard>

      <LegalCard title="Data Export Before Deletion">
        <p>Before requesting deletion, you may want to export your data. To do this:</p>
        <ul>
          <li>Go to <strong>Settings â†’ Security â†’ Data &amp; Privacy</strong></li>
          <li>Click <strong>&quot;Export My Data&quot;</strong> (if available)</li>
          <li>You will receive a download link via email within 48 hours</li>
        </ul>
        <p>
          Alternatively, contact <a href="mailto:support@nautix.io">support@nautix.io</a> to request a data export
          before deletion.
        </p>
      </LegalCard>

      <LegalCard title="Scope and Limitations">
        <p><strong>What we can delete:</strong></p>
        <ul>
          <li>All data directly controlled by Nautix</li>
          <li>Data stored on our servers and databases</li>
          <li>Analytics and tracking data associated with your account</li>
        </ul>
        <p><strong>What we cannot delete:</strong></p>
        <ul>
          <li>Messages already delivered to recipients&apos; WhatsApp accounts (controlled by Meta/WhatsApp)</li>
          <li>Data shared with third-party integrations you connected (CRM, support tools, etc.)</li>
          <li>Public information or content you shared outside Nautix</li>
          <li>Data required to be retained by law or regulation</li>
        </ul>
      </LegalCard>

      <LegalCard title="For Meta App Review">
        <p>If you are a Meta reviewer or need to verify our data deletion process:</p>
        <ul>
          <li>Test account credentials are provided in the App Review Notes</li>
          <li>Follow Option 1 instructions above to test the in-app deletion flow</li>
          <li>The deletion confirmation dialog clearly outlines what data will be removed</li>
          <li>The process complies with Meta&apos;s Platform Terms and Privacy Policy requirements</li>
        </ul>
      </LegalCard>

      <LegalCard title="Questions or Issues?">
        <p>If you encounter any problems requesting data deletion or have questions about the process:</p>
        <ul>
          <li>Email us at <a href="mailto:support@nautix.io">support@nautix.io</a></li>
          <li>For privacy-specific concerns, contact <a href="mailto:privacy@nautix.io">privacy@nautix.io</a></li>
          <li>Write to: Nautix Privacy Team, The Piano, 8th Floor, Brookside Drive, Westlands, Nairobi</li>
        </ul>
        <p>We typically respond to data deletion inquiries within 2 business days.</p>
      </LegalCard>

        <LegalCard title="Related Policies">
          <p>For more information about how we handle your data:</p>
          <ul>
            <li><Link href="/privacy">Privacy Policy</Link> - How we collect, use, and protect your data</li>
            <li><Link href="/terms">Terms &amp; Conditions</Link> - Rules for using Nautix services</li>
          </ul>
        </LegalCard>
      </LegalPageShell>
    </>
  );
}
