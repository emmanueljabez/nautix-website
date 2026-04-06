import type { Metadata } from "next";
import { LegalCard, LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Terms & Conditions | Nautix",
  description: "The rules for using Nautix products, services, APIs, and content.",
};

export default function TermsPage() {
  return (
    <LegalPageShell
      badge="Legal"
      title="Terms & Conditions"
      lead="The rules for using Nautix products, services, APIs, and content."
      meta={["Effective date: November 16, 2025", "Last updated: November 16, 2025"]}
    >
      <LegalCard title="1. Acceptance of terms">
        <p>
          By accessing or using Nautix, you agree to these Terms and all referenced policies (Privacy Policy, DPA,
          Acceptable Use). If you use Nautix on behalf of an organization, you represent that you are authorized to
          bind that entity and that it accepts these Terms.
        </p>
      </LegalCard>

      <LegalCard title="2. Eligibility and accounts">
        <p>
          You must be at least 18 and able to form a contract. Keep account credentials confidential and notify us
          immediately of any unauthorized use. You are responsible for activity under your account, including by your
          personnel and contractors.
        </p>
      </LegalCard>

      <LegalCard title="3. Permitted use">
        <ul>
          <li>Use Nautix only for lawful purposes and in compliance with WhatsApp and carrier policies.</li>
          <li>Do not send spam, abusive, or deceptive messages.</li>
          <li>Do not probe, disrupt, or reverse engineer the service.</li>
          <li>Respect rate limits and API rules we publish.</li>
        </ul>
      </LegalCard>

      <LegalCard title="4. Messaging content and consents">
        <p>
          You control the content you send and must obtain all necessary consents from recipients. You will honor
          opt-outs, include required disclosures, and comply with WhatsApp template rules. We may block traffic that
          violates policy or law.
        </p>
      </LegalCard>

      <LegalCard title="5. Customer data">
        <p>
          You own your data. We process it solely to deliver and secure the service, subject to the Privacy Policy and
          any Data Processing Addendum (DPA). You are responsible for lawful collection, notice, consents, and
          accuracy of instructions you provide to us.
        </p>
      </LegalCard>

      <LegalCard title="6. Integrations and third parties">
        <p>
          Connecting external systems is at your option. You authorize us to exchange data with those services per your
          configuration. Their terms and privacy policies govern their use of data; Nautix is not responsible for
          third-party acts or omissions.
        </p>
      </LegalCard>

      <LegalCard title="7. Fees and billing">
        <p>
          Paid plans, messaging fees, and taxes are invoiced per your order or pricing page. Late payments may incur
          suspension or interest where permitted. All fees are non-refundable unless required by law or expressly
          stated otherwise.
        </p>
      </LegalCard>

      <LegalCard title="8. Service changes">
        <p>
          We may modify features, limits, or interfaces. Material changes will be communicated in-product or by email.
          Continued use after changes means you accept them.
        </p>
      </LegalCard>

      <LegalCard title="9. Suspension and termination">
        <p>
          We may suspend or terminate access for policy violations, non-payment, security risks, or legal exposure. You
          may terminate by closing your account; accrued fees remain due. Upon termination we will delete or return data
          per policy, subject to legal retention requirements.
        </p>
      </LegalCard>

      <LegalCard title="10. Intellectual property">
        <p>
          We and our licensors retain all rights to the service. You receive a limited, non-exclusive, non-transferable
          license to use Nautix during your subscription. Feedback may be used to improve the service without
          obligation or attribution.
        </p>
      </LegalCard>

      <LegalCard title="11. Confidentiality">
        <p>
          Both parties will protect non-public information shared under these Terms with the same care used for their
          own. Exceptions include information that is public, independently developed, or received without breach.
        </p>
      </LegalCard>

      <LegalCard title="12. Warranties and disclaimers">
        <p>
          Nautix is provided &ldquo;as is.&rdquo; We do not warrant uninterrupted or error-free service. To the maximum extent
          allowed by law, we disclaim implied warranties, including merchantability, fitness for a particular purpose,
          and non-infringement.
        </p>
      </LegalCard>

      <LegalCard title="13. Limitation of liability">
        <p>
          To the extent permitted by law, neither party is liable for indirect, incidental, special, or consequential
          damages, lost profits, or loss of data. Our total liability under these Terms is capped at fees paid by you
          in the 12 months before the claim.
        </p>
      </LegalCard>

      <LegalCard title="14. Indemnification">
        <p>
          You will defend and indemnify Nautix from claims arising from your content, use of the service in violation
          of law or these Terms, or misuse of third-party services you connect. We will notify you promptly and
          cooperate at your expense.
        </p>
      </LegalCard>

      <LegalCard title="15. Governing law; disputes">
        <p>
          These Terms are governed by the laws of Kenya, without regard to conflict rules. Courts in Nairobi have
          exclusive jurisdiction, unless another venue is required by law. You waive class actions and agree to bring
          claims individually.
        </p>
      </LegalCard>

      <LegalCard title="16. Changes to these Terms">
        <p>
          We may update these Terms. We will notify you of material changes. Continued use after the effective date
          means you accept the updated Terms.
        </p>
      </LegalCard>

      <LegalCard title="17. Contact">
        <p>
          Email <a href="mailto:legal@nautix.io">legal@nautix.io</a> or write to Nautix Legal, The Piano, 8th Floor,
          Brookside Drive, Westlands, Nairobi.
        </p>
      </LegalCard>
    </LegalPageShell>
  );
}
