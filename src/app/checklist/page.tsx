import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  CheckCircle2,
  Lock,
  ArrowRight,
  Star,
  Clock,
  FileText,
} from "lucide-react";

const stages = [
  {
    number: "01",
    slug: "nie",
    title: "NIE Application",
    subtitle: "Your first step in Spain",
    description:
      "The NIE (Número de Identificación de Extranjero) is a tax identification number required for almost everything in Spain. This checklist covers the complete process — EX-15 form, Tasa 790-052, consulate appointment, and choosing between the consulate and UGE pathway.",
    steps: 8,
    time: "4–6 weeks",
    cost: "€10–€30",
    free: true,
    color: "var(--success)",
    bg: "var(--success-light)",
    keySteps: [
      "Complete EX-15 application form",
      "Pay Tasa 790-052 fee",
      "Book consulate appointment",
      "Prepare supporting documents",
      "Attend appointment",
    ],
  },
  {
    number: "02",
    slug: "dnv",
    title: "Digital Nomad Visa Application",
    subtitle: "The main visa application",
    description:
      "The Digital Nomad Visa (DNV) allows remote workers and freelancers to live legally in Spain. This comprehensive checklist covers every document requirement — EX-01, health insurance, income proof, financial proof, apostilles, translation requirements, and consulate-specific guidance.",
    steps: 14,
    time: "8–12 weeks",
    cost: "€800–€2,000",
    free: "partial",
    freeSteps: 5,
    color: "var(--primary)",
    bg: "var(--primary-light)",
    keySteps: [
      "Prepare EX-01 form",
      "Obtain qualifying health insurance",
      "Gather proof of income (3+ months)",
      "Get apostilled criminal record",
      "Book consulate appointment",
    ],
  },
  {
    number: "03",
    slug: "arrival",
    title: "Post-Approval Arrival",
    subtitle: "Settling in once approved",
    description:
      "Congratulations on your visa approval. Now the real work begins. This checklist covers everything you need to do in Spain — padrón registration, TIE card application at the local police station, Social Security number, bank account opening, and healthcare registration.",
    steps: 11,
    time: "4–8 weeks",
    cost: "€200–€600",
    free: false,
    color: "var(--accent)",
    bg: "var(--accent-light)",
    keySteps: [
      "Register on the padrón (town hall)",
      "Apply for TIE card at comisaría",
      "Open Spanish bank account",
      "Register for Social Security",
      "Register for healthcare (tarjeta sanitaria)",
    ],
  },
  {
    number: "04",
    slug: "digital",
    title: "Digital Residency Setup",
    subtitle: "Your digital identity in Spain",
    description:
      "Spain's bureaucracy is increasingly digital but requires specific certificates to access. This checklist walks you through obtaining your Certificado Digital, registering NIE to NIF conversion, Hacienda registration, getting a Spanish mobile number, and setting up local utilities.",
    steps: 9,
    time: "2–4 weeks",
    cost: "€0–€100",
    free: false,
    color: "#7c3aed",
    bg: "#f5f3ff",
    keySteps: [
      "Obtain Certificado Digital",
      "Complete NIE→NIF registration",
      "Register with Hacienda",
      "Get a Spanish mobile number",
      "Set up utility accounts",
    ],
  },
  {
    number: "05",
    slug: "compliance",
    title: "Ongoing Compliance",
    subtitle: "Keeping your status valid",
    description:
      "Residency isn't a one-time task — it requires ongoing maintenance. This checklist covers visa renewal, TIE card renewal, criminal record refresh, health insurance renewal, and Certificado Digital renewal. All expiry dates feed directly into your Expiry Dashboard.",
    steps: 7,
    time: "Ongoing",
    cost: "Variable",
    free: false,
    color: "var(--warning)",
    bg: "var(--warning-light)",
    keySteps: [
      "Renew DNV visa (annually)",
      "Renew TIE card before expiry",
      "Refresh criminal record certificate",
      "Renew health insurance",
      "Renew Certificado Digital (4 years)",
    ],
  },
];

export default function ChecklistPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Header */}
      <div
        className="py-12 lg:py-16"
        style={{
          background: "white",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 text-sm" style={{ color: "var(--muted)" }}>
              <Link href="/" style={{ color: "var(--muted)" }}>Home</Link>
              <ChevronRight size={14} />
              <span style={{ color: "var(--foreground)" }}>Checklist Journey</span>
            </div>
            <h1
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
              style={{ color: "var(--foreground)" }}
            >
              Your complete Spain checklist
            </h1>
            <p className="text-lg" style={{ color: "var(--muted)" }}>
              Five stages, 49 steps. From first NIE application to long-term
              residency compliance — one platform, no gaps.
            </p>
          </div>
        </div>
      </div>

      {/* Progress overview bar */}
      <div
        className="py-4 sticky top-16 z-40"
        style={{
          background: "white",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto pb-1">
            {stages.map((stage, i) => (
              <Link
                key={stage.slug}
                href={`/checklist/${stage.slug}`}
                className="flex items-center gap-2 shrink-0 px-3 py-1.5 rounded-lg text-sm font-medium"
                style={{
                  color: "var(--muted)",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: stage.bg, color: stage.color }}
                >
                  {i + 1}
                </span>
                <span className="hidden sm:inline">{stage.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Stages list */}
      <div className="flex-1 py-8" style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {stages.map((stage) => (
              <div
                key={stage.slug}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Left: Stage info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-base font-bold shrink-0"
                          style={{ background: stage.bg, color: stage.color }}
                        >
                          {stage.number}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <h2
                              className="text-lg font-semibold"
                              style={{ color: "var(--foreground)" }}
                            >
                              {stage.title}
                            </h2>
                            {stage.free === true && (
                              <span
                                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                                style={{
                                  background: "var(--success-light)",
                                  color: "var(--success)",
                                }}
                              >
                                Completely Free
                              </span>
                            )}
                            {stage.free === "partial" && (
                              <span
                                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                                style={{
                                  background: "var(--primary-light)",
                                  color: "var(--primary)",
                                }}
                              >
                                First 5 steps free
                              </span>
                            )}
                            {stage.free === false && (
                              <span
                                className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full"
                                style={{
                                  background: "var(--muted-light)",
                                  color: "var(--muted)",
                                }}
                              >
                                <Lock size={10} />
                                Paid
                              </span>
                            )}
                          </div>
                          <p className="text-sm" style={{ color: "var(--muted)" }}>
                            {stage.subtitle}
                          </p>
                        </div>
                      </div>

                      <p
                        className="text-sm leading-relaxed mb-5"
                        style={{ color: "var(--muted)" }}
                      >
                        {stage.description}
                      </p>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 text-sm mb-5">
                        <div className="flex items-center gap-1.5" style={{ color: "var(--muted)" }}>
                          <FileText size={14} />
                          <span>{stage.steps} steps</span>
                        </div>
                        <div className="flex items-center gap-1.5" style={{ color: "var(--muted)" }}>
                          <Clock size={14} />
                          <span>{stage.time}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Key steps */}
                    <div
                      className="lg:w-72 shrink-0 rounded-xl p-4"
                      style={{ background: stage.bg }}
                    >
                      <p
                        className="text-xs font-semibold uppercase tracking-wider mb-3"
                        style={{ color: stage.color }}
                      >
                        Key steps
                      </p>
                      <ul className="space-y-2">
                        {stage.keySteps.map((step, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 shrink-0"
                              style={{ color: stage.color }}
                            />
                            <span style={{ color: "var(--foreground)" }}>{step}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={`/checklist/${stage.slug}`}
                        className="flex items-center justify-center gap-1.5 w-full mt-4 py-2.5 text-sm font-semibold rounded-lg text-white"
                        style={{ background: stage.color }}
                      >
                        View full checklist
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Founding member banner */}
          <div
            className="mt-6 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: "var(--primary)", border: "1px solid var(--primary)" }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <Star size={18} color="white" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  Unlock all 5 stages with Founding Member access
                </h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                  €149 one-time · All checklists · Expiry dashboard · Phase 2
                  features included · Price locked for life
                </p>
              </div>
            </div>
            <Link
              href="/pricing"
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-white"
              style={{ color: "var(--primary)" }}
            >
              Claim your spot
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
