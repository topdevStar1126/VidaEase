import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  Star,
  ArrowRight,
  Lock,
  Sparkles,
  HardDrive,
  Users,
  Shield,
  Zap,
} from "lucide-react";

const coreFeatures = [
  "All 5 checklist stages",
  "Full progress tracking & date recording",
  "Expiry dashboard with manual entry",
  "Automated email deadline reminders",
  "Provider directory & enquiry forms",
  "Document template library",
  "Consulate-specific guidance",
];

const foundingFeatures = [
  "Everything in Core",
  "AI document review (Phase 2 — included free)",
  "Secure document vault (Phase 2 — included free)",
  "Lifetime price lock — never increases",
  "Direct founder access & beta testing",
  "Priority feature requests",
];

const faq = [
  {
    q: "What is a Founding Member?",
    a: "Founding Members are the first 100 users who pay a one-time €149. They get everything in Core, plus Phase 2 features (AI document review and secure document vault) at no additional cost when they launch. The price is locked for life — Founding Members never pay more.",
  },
  {
    q: "What's the difference between monthly and annual Core?",
    a: "Monthly Core is €14.99/month. Annual Core is €79/year — equivalent to €6.58/month, saving you €100.88 per year. Both give identical access. Annual billing is recommended if you're starting the DNV process.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes. You can cancel your Core subscription at any time from your account settings — no contact required. Access continues until the end of your billing period. No refunds for partial periods.",
  },
  {
    q: "Is the NIE checklist really free?",
    a: "Yes. The complete NIE checklist is free, no account required. The first 5 steps of the DNV checklist are also free (read-only). An account is only required to track progress and access paid content.",
  },
  {
    q: "Can I get a refund?",
    a: "Core subscriptions: no refunds for active periods, but you can cancel anytime. Founding Member: if the product is not delivered within 18 months of purchase, you are entitled to a full refund. We are confident that is not going to happen.",
  },
  {
    q: "When do Phase 2 features launch?",
    a: "We are targeting Q3 2026 for Phase 2 (AI document review and secure document vault). Founding Members receive these features at no additional cost. Core subscribers will be offered an upgrade path at launch pricing.",
  },
];

export default function PricingPage() {
  const foundingRemaining = 87;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Header */}
      <div
        className="py-14 lg:py-20"
        style={{
          background: "white",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Simple, transparent pricing
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Start free with the NIE checklist. Upgrade when you&apos;re ready
            to tackle the Digital Nomad Visa.
          </p>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="py-16" style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {/* Free */}
            <div
              className="rounded-2xl p-7"
              style={{
                background: "white",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div className="mb-5">
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--muted)" }}
                >
                  Free
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    €0
                  </span>
                </div>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  No credit card required
                </p>
              </div>

              <ul className="space-y-2.5 mb-7">
                {[
                  "Full NIE checklist (8 steps)",
                  "First 5 DNV steps — read only",
                  "Official resource links",
                  "No progress tracking",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2
                      size={15}
                      style={{ color: "var(--success)" }}
                    />
                    <span style={{ color: "var(--foreground)" }}>{item}</span>
                  </li>
                ))}
                {["Progress tracking", "Expiry dashboard", "Provider directory"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm opacity-40">
                    <Lock size={13} style={{ color: "var(--muted)" }} />
                    <span style={{ color: "var(--muted)", textDecoration: "line-through" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/auth/register"
                className="block w-full py-3 text-sm font-semibold text-center rounded-xl"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  background: "white",
                }}
              >
                Get started free
              </Link>
            </div>

            {/* Core */}
            <div
              className="rounded-2xl p-7"
              style={{
                background: "white",
                border: "2px solid var(--primary)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <div
                className="text-center text-xs font-semibold px-3 py-1 rounded-full mb-5 -mt-10 inline-block"
                style={{
                  background: "var(--primary)",
                  color: "white",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                  width: "fit-content",
                }}
              >
                Most popular
              </div>

              <div className="mb-5">
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--muted)" }}
                >
                  Core
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    €14.99
                  </span>
                  <span className="text-sm mb-1" style={{ color: "var(--muted)" }}>
                    /month
                  </span>
                </div>
                <div
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full cursor-pointer"
                  style={{
                    background: "var(--success-light)",
                    color: "var(--success)",
                  }}
                >
                  <Zap size={11} />
                  €79/year — save €100
                </div>
              </div>

              <ul className="space-y-2.5 mb-7">
                {coreFeatures.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2
                      size={15}
                      style={{ color: "var(--primary)" }}
                    />
                    <span style={{ color: "var(--foreground)" }}>{item}</span>
                  </li>
                ))}
                {["AI document review", "Secure document vault"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm opacity-40">
                    <Lock size={13} style={{ color: "var(--muted)" }} />
                    <span style={{ color: "var(--muted)" }}>{item}</span>
                    <span
                      className="ml-auto text-xs px-1.5 py-0.5 rounded-full"
                      style={{
                        background: "var(--primary-light)",
                        color: "var(--primary)",
                      }}
                    >
                      Phase 2
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/auth/register"
                className="block w-full py-3 text-sm font-semibold text-center rounded-xl text-white"
                style={{ background: "var(--primary)" }}
              >
                Start Core — monthly
              </Link>
              <Link
                href="/auth/register"
                className="block w-full py-2.5 mt-2 text-sm font-medium text-center rounded-xl"
                style={{
                  border: "1px solid var(--primary)",
                  color: "var(--primary)",
                }}
              >
                Or pay €79/year
              </Link>
            </div>

            {/* Founding Member */}
            <div
              className="rounded-2xl p-7 relative overflow-hidden"
              style={{
                background: "white",
                border: "2px solid var(--gold-border)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              {/* Corner decoration */}
              <div
                className="absolute top-0 right-0 w-20 h-20 opacity-10"
                style={{
                  background: "var(--gold)",
                  borderBottomLeftRadius: "100%",
                }}
              />

              <div className="mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <Star size={14} style={{ color: "var(--gold)" }} fill="var(--gold)" />
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--gold)" }}
                  >
                    Founding Member
                  </p>
                </div>
                <div className="flex items-end gap-1 mb-1">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    €149
                  </span>
                  <span className="text-sm mb-1" style={{ color: "var(--muted)" }}>
                    one-time
                  </span>
                </div>
                <p className="text-xs" style={{ color: "var(--muted)" }}>
                  Below 12 months of Core monthly (€179.88)
                </p>
              </div>

              {/* Spots remaining */}
              <div
                className="mb-5 px-3 py-2.5 rounded-xl"
                style={{
                  background: "var(--gold-light)",
                  border: "1px solid var(--gold-border)",
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold" style={{ color: "var(--gold)" }}>
                    {foundingRemaining} of 100 spots remaining
                  </span>
                </div>
                <div
                  className="h-1.5 rounded-full"
                  style={{ background: "rgba(180,83,9,0.15)" }}
                >
                  <div
                    className="h-1.5 rounded-full"
                    style={{
                      width: `${((100 - foundingRemaining) / 100) * 100}%`,
                      background: "var(--gold)",
                    }}
                  />
                </div>
              </div>

              <ul className="space-y-2.5 mb-7">
                {foundingFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--gold)" }}
                    />
                    <span style={{ color: "var(--foreground)" }}>{item}</span>
                  </li>
                ))}
              </ul>

              <p
                className="text-xs mb-4 p-3 rounded-lg italic"
                style={{
                  background: "var(--gold-light)",
                  color: "var(--gold)",
                  border: "1px solid var(--gold-border)",
                }}
              >
                &ldquo;Founding Member pricing is locked for life. When Pro
                features launch (AI review, document vault), Founding Members
                receive them at no additional cost.&rdquo;
              </p>

              <Link
                href="/auth/register?plan=founding"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-center rounded-xl text-white"
                style={{ background: "var(--gold)" }}
              >
                <Star size={14} fill="white" />
                Claim Founding Member spot
              </Link>
            </div>
          </div>

          {/* Feature comparison note */}
          <div
            className="mt-8 max-w-5xl mx-auto p-5 rounded-2xl flex flex-col sm:flex-row items-center gap-4"
            style={{
              background: "white",
              border: "1px solid var(--border)",
            }}
          >
            <div className="flex items-center gap-4">
              <div className="flex gap-2 shrink-0">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: "var(--primary-light)",
                    color: "var(--primary)",
                  }}
                >
                  <Sparkles size={15} />
                </div>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: "var(--primary-light)",
                    color: "var(--primary)",
                  }}
                >
                  <HardDrive size={15} />
                </div>
              </div>
              <div>
                <p
                  className="text-sm font-semibold mb-0.5"
                  style={{ color: "var(--foreground)" }}
                >
                  Phase 2 features: AI Document Review + Secure Document Vault
                </p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>
                  Included free for Founding Members. Available as paid add-on
                  for Core subscribers when launched (targeting Q3 2026).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-center mb-10"
            style={{ color: "var(--foreground)" }}
          >
            Frequently asked questions
          </h2>
          <div className="space-y-5">
            {faq.map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-5"
                style={{
                  border: "1px solid var(--border)",
                  background: "white",
                }}
              >
                <h3
                  className="text-sm font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  {item.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & trust */}
      <section
        className="py-10"
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm" style={{ color: "var(--muted)" }}>
            {[
              { icon: <Shield size={14} />, label: "Stripe-powered payments — PCI compliant" },
              { icon: <Lock size={14} />, label: "SSL encrypted" },
              { icon: <Users size={14} />, label: "GDPR compliant" },
              { icon: <CheckCircle2 size={14} />, label: "Cancel anytime" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span style={{ color: "var(--success)" }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "var(--primary)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to start your Spain journey?
          </h2>
          <p className="text-sm mb-7" style={{ color: "rgba(255,255,255,0.7)" }}>
            The NIE checklist is free. No card required. Upgrade at any time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/checklist/nie"
              className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl bg-white"
              style={{ color: "var(--primary)" }}
            >
              Start free
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/auth/register?plan=founding"
              className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl"
              style={{
                background: "var(--gold)",
                color: "white",
              }}
            >
              <Star size={14} fill="white" />
              Founding Member — €149
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
