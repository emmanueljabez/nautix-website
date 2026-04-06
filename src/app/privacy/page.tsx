import type { Metadata } from "next";
import { LegalCard, LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy | Nautix",
  description: "How Nautix collects, uses, stores, and protects your data across our products and services.",
};

export default function PrivacyPage() {
  return (
    <LegalPageShell
      badge="Privacy"
      title="Privacy Policy"
      lead="How Nautix collects, uses, stores, and protects your data across our products and services."
      meta={["Effective date: November 16, 2025", "Last updated: November 16, 2025"]}
    >
      <LegalCard title="1. Who we are">
        <p>
          Nautix helps teams communicate with customers on WhatsApp. This policy covers data handled by our website,
          products, APIs, and support channels.
        </p>
      </LegalCard>

      <LegalCard title="2. Data we collect">
        <ul>
          <li><strong>Account data:</strong> Name, email, company, role, billing details.</li>
          <li><strong>Usage data:</strong> Feature interactions, device/browser info, performance metrics.</li>
          <li><strong>Content data:</strong> Messages, media, and metadata you send or receive through Nautix.</li>
          <li><strong>Integration data:</strong> Fields you sync from CRMs, support tools, or warehouses.</li>
          <li><strong>Support data:</strong> Tickets, call notes, and diagnostics you share with our team.</li>
        </ul>
        <p>
          <strong>Sensitive data:</strong> We do not ask for sensitive personal data. If you sync it, you are
          responsible for having a lawful basis to process it.
        </p>
      </LegalCard>

      <LegalCard title="3. How we use data">
        <ul>
          <li>Provide and secure the product, including fraud prevention and abuse detection.</li>
          <li>Improve performance and reliability through analytics and diagnostics.</li>
          <li>Send product updates, billing notices, and security alerts.</li>
          <li>Offer support, onboarding, and training when you request it.</li>
          <li>Comply with legal obligations and enforce our terms.</li>
        </ul>
      </LegalCard>

      <LegalCard title="4. Legal bases">
        <p>
          We process data under legitimate interest (product delivery, security), contract necessity (providing
          services), and consent (where required for marketing or specific data types).
        </p>
      </LegalCard>

      <LegalCard title="5. Sharing and transfers">
        <ul>
          <li><strong>Vendors:</strong> Hosting, observability, and communications providers under data protection agreements.</li>
          <li><strong>Integrations:</strong> Systems you connect (CRM, support, data warehouse) as configured by you.</li>
          <li><strong>Compliance:</strong> Disclosures required by law, regulation, or to protect rights and safety.</li>
        </ul>
        <p>We do not sell personal data.</p>
      </LegalCard>

      <LegalCard title="6. Security">
        <p>
          We use encryption in transit, access controls, audit logging, and least-privilege access. Credentials and
          secrets are stored securely and rotated regularly.
        </p>
        <p>
          If we become aware of a breach affecting your data, we will notify you without undue delay with details and
          remedial steps.
        </p>
      </LegalCard>

      <LegalCard title="7. Data retention">
        <p>
          We retain data for as long as needed to provide services, meet legal requirements, and resolve disputes. You
          can request deletion of specific data where legally permitted.
        </p>
        <p>
          Backups are purged on a rolling schedule. Data in logs and analytics may persist for a limited time for
          security and auditing.
        </p>
      </LegalCard>

      <LegalCard title="8. Your rights">
        <ul>
          <li>Access, correct, or delete personal data.</li>
          <li>Export data where applicable.</li>
          <li>Object to or restrict certain processing.</li>
          <li>Withdraw consent where processing is based on consent.</li>
        </ul>
        <p>
          Contact us at <a href="mailto:privacy@nautix.io">privacy@nautix.io</a> to exercise these rights. We respond
          within applicable legal timelines.
        </p>
      </LegalCard>

      <LegalCard title="9. International transfers">
        <p>
          When data moves across regions, we use appropriate safeguards such as Standard Contractual Clauses or
          equivalent mechanisms where required.
        </p>
      </LegalCard>

      <LegalCard title="10. Cookies and tracking">
        <p>
          We use cookies for authentication, session continuity, and analytics. You can manage cookies through your
          browser settings; some features may require essential cookies.
        </p>
      </LegalCard>

      <LegalCard title="11. Marketing communications">
        <p>
          We may send you product updates or offers. You can opt out at any time from the email footer or by contacting
          us. Service notifications (billing, security) are transactional and not optional.
        </p>
      </LegalCard>

      <LegalCard title="12. Children">
        <p>
          Nautix is not directed to children under 16, and we do not knowingly collect data from them. If you believe
          we have, contact us to remove it.
        </p>
      </LegalCard>

      <LegalCard title="13. Customer responsibilities">
        <p>
          If you control personal data, you are responsible for providing your end-users with notice and obtaining any
          necessary consents for processing through Nautix and your integrations.
        </p>
      </LegalCard>

      <LegalCard title="14. Subprocessors">
        <p>
          We use vetted subprocessors for hosting, messaging, analytics, and support. A current list is available on
          request; we will notify customers of material changes where legally required.
        </p>
      </LegalCard>

      <LegalCard title="15. Changes">
        <p>
          We may update this policy. Material changes will be communicated via product notices or email. Continued use
          after updates means you accept the revised policy.
        </p>
      </LegalCard>

      <LegalCard title="16. Contact">
        <p>
          Email <a href="mailto:privacy@nautix.io">privacy@nautix.io</a> or write to Nautix Privacy, The Piano, 8th
          Floor, Brookside Drive, Westlands, Nairobi.
        </p>
      </LegalCard>
    </LegalPageShell>
  );
}
