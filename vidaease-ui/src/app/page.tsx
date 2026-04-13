import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Users,
  Star,
  ChevronRight,
  MapPin,
  Building2,
  Landmark,
  CreditCard,
  HeartPulse,
  FileCheck,
  Bell,
  Globe,
  Lock,
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "NIE Application",
    description:
      "EX-15 form, Tasa 790-052, consulate appointment, and pathway selection.",
    free: true,
    steps: 8,
    color: "var(--success)",
    bg: "var(--success-light)",
    slug: "nie",
  },
  {
    number: "02",
    title: "Digital Nomad Visa",
    description:
      "Document prep, EX-01, health insurance, income proof, apostilles.",
    free: "partial",
    steps: 14,
    color: "var(--primary)",
    bg: "var(--primary-light)",
    slug: "dnv",
  },
  {
    number: "03",
    title: "Post-Approval Arrival",
    description:
      "Padrón registration, TIE card, Social Security, bank account, healthcare.",
    free: false,
    steps: 11,
    color: "var(--accent)",
    bg: "var(--accent-light)",
    slug: "arrival",
  },
  {
    number: "04",
    title: "Digital Residency Setup",
    description:
      "Certificado Digital, NIE→NIF, Hacienda registration, mobile, utilities.",
    free: false,
    steps: 9,
    color: "#7c3aed",
    bg: "#f5f3ff",
    slug: "digital",
  },
  {
    number: "05",
    title: "Ongoing Compliance",
    description:
      "Visa renewal, TIE renewal, document expiry tracking and reminders.",
    free: false,
    steps: 7,
    color: "var(--warning)",
    bg: "var(--warning-light)",
    slug: "compliance",
  },
];

const features = [
  {
    icon: <CheckCircle2 size={22} />,
    title: "Step-by-step guidance",
    description:
      "Every form, document, and appointment — broken into actionable steps with official resource links.",
  },
  {
    icon: <Bell size={22} />,
    title: "Expiry reminders",
    description:
      "Automated email alerts before your criminal record, TIE card, or insurance expires. Never miss a deadline.",
  },
  {
    icon: <MapPin size={22} />,
    title: "Consulate-specific content",
    description:
      "Select your applying consulate and get guidance tailored to their specific requirements and quirks.",
  },
  {
    icon: <Users size={22} />,
    title: "Vetted provider directory",
    description:
      "English-speaking gestorías, immigration lawyers, translators, and health insurance providers.",
  },
  {
    icon: <Shield size={22} />,
    title: "GDPR-compliant security",
    description:
      "Your data is encrypted and handled in full compliance with EU privacy regulations.",
  },
  {
    icon: <Globe size={22} />,
    title: "Covers the full journey",
    description:
      "From your first NIE to multi-year residency compliance — one platform, no gaps.",
  },
];

const testimonials = [
  {
    quote:
      "VidaEase saved me weeks of research. The consulate-specific notes for Barcelona were exactly what I needed.",
    name: "Sarah M.",
    role: "Digital Nomad, Barcelona",
    initials: "SM",
  },
  {
    quote:
      "As a retiree, I was overwhelmed by the paperwork. VidaEase broke it down into manageable steps.",
    name: "David K.",
    role: "Lifestyle Retiree, Málaga",
    initials: "DK",
  },
  {
    quote:
      "The expiry dashboard is the killer feature. It pinged me before my criminal record ran out — avoided restarting the process.",
    name: "James R.",
    role: "Freelancer, Madrid",
    initials: "JR",
  },
];

const expiryItems = [
  { doc: "Criminal Record Certificate", days: 14, status: "danger" },
  { doc: "Health Insurance Policy", days: 31, status: "warning" },
  { doc: "TIE Card", days: 112, status: "success" },
  { doc: "Certificado Digital", days: 289, status: "success" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28"
        style={{ background: "white" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(26,58,92,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(224,93,38,0.04) 0%, transparent 40%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <span
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: "var(--accent-light)",
                  color: "var(--accent)",
                  border: "1px solid rgba(224,93,38,0.2)",
                }}
              >
                <Star size={11} strokeWidth={2.5} />
                Founding Member offer — 100 spots only
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              style={{ color: "var(--foreground)", lineHeight: "1.1" }}
            >
              Your complete guide to{" "}
              <span style={{ color: "var(--primary)" }}>settling in Spain</span>
            </h1>

            <p
              className="text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
              style={{ color: "var(--muted)" }}
            >
              Step-by-step checklists, expiry tracking, and vetted providers —
              everything an English-speaking expat needs, from first NIE to
              long-term residency.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/checklist/nie"
                className="flex items-center gap-2 px-6 py-3.5 text-base font-semibold rounded-xl text-white"
                style={{ background: "var(--primary)" }}
              >
                Start with the NIE checklist
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/pricing"
                className="flex items-center gap-2 px-6 py-3.5 text-base font-medium rounded-xl"
                style={{
                  color: "var(--foreground)",
                  border: "1px solid var(--border)",
                }}
              >
                View pricing
              </Link>
            </div>

            <p className="mt-4 text-sm" style={{ color: "var(--muted)" }}>
              NIE checklist is completely free — no account required.
            </p>
          </div>

          {/* Hero checklist preview */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "var(--shadow-lg)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Browser chrome */}
              <div
                className="px-4 py-3 flex items-center gap-2"
                style={{
                  background: "var(--surface)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div
                  className="flex-1 mx-4 px-3 py-1 rounded-md text-xs text-center"
                  style={{
                    background: "white",
                    border: "1px solid var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  vidaease.com/checklist/dnv
                </div>
              </div>

              <div className="p-6" style={{ background: "white" }}>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      <div
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: "var(--primary-light)",
                          color: "var(--primary)",
                        }}
                      >
                        Stage 2
                      </div>
                      <h3
                        className="text-base font-semibold"
                        style={{ color: "var(--foreground)" }}
                      >
                        Digital Nomad Visa Application
                      </h3>
                    </div>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>
                      6 of 14 steps completed
                    </p>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "var(--primary)" }}
                    >
                      43%
                    </div>
                    <div className="text-xs" style={{ color: "var(--muted)" }}>
                      Complete
                    </div>
                  </div>
                </div>

                <div
                  className="h-2 rounded-full mb-6"
                  style={{ background: "var(--border)" }}
                >
                  <div
                    className="h-2 rounded-full"
                    style={{ width: "43%", background: "var(--primary)" }}
                  />
                </div>

                <div className="space-y-2">
                  {[
                    { label: "EX-15 form completed", done: true, date: "12 Jan" },
                    { label: "Tasa 790-052 paid", done: true, date: "13 Jan" },
                    { label: "Consulate appointment booked", done: true, date: "15 Jan" },
                    { label: "Health insurance obtained", done: true, date: "18 Jan" },
                    { label: "Proof of income prepared", done: true, date: "20 Jan" },
                    { label: "Criminal record apostilled", done: true, date: "22 Jan" },
                    { label: "Financial proof documents", done: false, current: true },
                    { label: "EX-01 form completed", done: false },
                  ].map((step, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg"
                      style={{
                        background: step.current
                          ? "var(--primary-light)"
                          : "transparent",
                        border: step.current
                          ? "1px solid rgba(26,58,92,0.12)"
                          : "1px solid transparent",
                      }}
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          background: step.done
                            ? "var(--success)"
                            : step.current
                            ? "var(--primary)"
                            : "var(--border)",
                        }}
                      >
                        {step.done ? (
                          <CheckCircle2
                            size={12}
                            color="white"
                            strokeWidth={2.5}
                          />
                        ) : (
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{
                              background: step.current ? "white" : "var(--muted)",
                            }}
                          />
                        )}
                      </div>
                      <span
                        className="flex-1 text-sm"
                        style={{
                          color: step.done
                            ? "var(--muted)"
                            : step.current
                            ? "var(--primary)"
                            : "var(--foreground)",
                          textDecoration: step.done ? "line-through" : "none",
                        }}
                      >
                        {step.label}
                      </span>
                      {step.date && (
                        <span className="text-xs" style={{ color: "var(--muted)" }}>
                          {step.date}
                        </span>
                      )}
                      {step.current && (
                        <span
                          className="text-xs font-medium px-2 py-0.5 rounded-full"
                          style={{ background: "var(--primary)", color: "white" }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section
        className="py-5"
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm"
            style={{ color: "var(--muted)" }}
          >
            {[
              { icon: <Shield size={15} />, label: "GDPR compliant" },
              { icon: <Lock size={15} />, label: "Secure & encrypted" },
              { icon: <CheckCircle2 size={15} />, label: "Expert-verified content" },
              { icon: <Clock size={15} />, label: "Updated for 2026 regulations" },
              { icon: <Users size={15} />, label: "Trusted by 2,400+ expats" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2"
                style={{ color: "var(--muted)" }}
              >
                <span style={{ color: "var(--success)" }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Stages */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
              style={{ color: "var(--foreground)" }}
            >
              The complete Spain journey
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--muted)" }}
            >
              Five structured stages covering everything from your first NIE to
              long-term residency compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stages.map((stage) => (
              <Link
                key={stage.slug}
                href={`/checklist/${stage.slug}`}
                className="group relative rounded-2xl p-6"
                style={{ border: "1px solid var(--border)", background: "white" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                    style={{ background: stage.bg, color: stage.color }}
                  >
                    {stage.number}
                  </div>
                  {stage.free === true && (
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: "var(--success-light)",
                        color: "var(--success)",
                      }}
                    >
                      Free
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
                      5 steps free
                    </span>
                  )}
                  {stage.free === false && (
                    <Lock size={14} style={{ color: "var(--muted)" }} />
                  )}
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  {stage.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--muted)" }}
                >
                  {stage.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "var(--muted)" }}>
                    {stage.steps} steps
                  </span>
                  <span
                    className="flex items-center gap-1 text-xs font-medium"
                    style={{ color: stage.color }}
                  >
                    View checklist
                    <ChevronRight size={13} />
                  </span>
                </div>
              </Link>
            ))}

            {/* Founding member CTA card */}
            <div
              className="rounded-2xl p-6 flex flex-col items-center justify-center text-center"
              style={{ background: "var(--primary)", border: "1px solid var(--primary)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <Star size={18} color="white" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Founding Member
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                €149 one-time · All 5 stages · Lifetime access · Phase 2
                features included
              </p>
              <Link
                href="/pricing"
                className="flex items-center gap-1.5 text-sm font-semibold text-white"
              >
                Claim your spot
                <ArrowRight size={14} />
              </Link>
              <p
                className="text-xs mt-3"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                87 of 100 spots remaining
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expiry dashboard preview */}
      <section
        className="py-20"
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
                style={{
                  background: "var(--warning-light)",
                  color: "var(--warning)",
                  border: "1px solid rgba(217,119,6,0.2)",
                }}
              >
                <Bell size={11} />
                Expiry Dashboard
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-5"
                style={{ color: "var(--foreground)" }}
              >
                Never miss a renewal again
              </h2>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "var(--muted)" }}
              >
                Every time-sensitive document in your Spain life, tracked in one
                place. Automated email reminders before anything expires.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Criminal record, TIE card, Certificado Digital",
                  "Health insurance, passport, visa expiry",
                  "Custom entries for any document",
                  "60/30/14/7-day email reminders",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm"
                    style={{ color: "var(--foreground)" }}
                  >
                    <CheckCircle2 size={16} style={{ color: "var(--success)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg text-white"
                style={{ background: "var(--primary)" }}
              >
                View dashboard
                <ArrowRight size={14} />
              </Link>
            </div>

            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "var(--shadow-md)",
                border: "1px solid var(--border)",
                background: "white",
              }}
            >
              <div
                className="px-5 py-4 flex items-center justify-between"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <h4
                  className="text-sm font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  Expiry Dashboard
                </h4>
                <span className="text-xs" style={{ color: "var(--muted)" }}>
                  4 items tracked
                </span>
              </div>
              <div>
                {expiryItems.map((item, i) => (
                  <div
                    key={i}
                    className="px-5 py-3.5 flex items-center justify-between"
                    style={{
                      borderBottom:
                        i < expiryItems.length - 1
                          ? "1px solid var(--border)"
                          : "none",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{
                          background:
                            item.status === "danger"
                              ? "var(--danger)"
                              : item.status === "warning"
                              ? "var(--warning)"
                              : "var(--success)",
                        }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: "var(--foreground)" }}
                      >
                        {item.doc}
                      </span>
                    </div>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background:
                          item.status === "danger"
                            ? "var(--danger-light)"
                            : item.status === "warning"
                            ? "var(--warning-light)"
                            : "var(--success-light)",
                        color:
                          item.status === "danger"
                            ? "var(--danger)"
                            : item.status === "warning"
                            ? "var(--warning)"
                            : "var(--success)",
                      }}
                    >
                      {item.days} days
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="px-5 py-3 text-center"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <Link
                  href="/dashboard"
                  className="text-xs font-medium"
                  style={{ color: "var(--primary)" }}
                >
                  View full dashboard →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
              style={{ color: "var(--foreground)" }}
            >
              Everything you need to settle in Spain
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "var(--muted)" }}
            >
              Built specifically for English-speaking expats who want structured
              guidance, not a forum search.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{ border: "1px solid var(--border)", background: "white" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "var(--primary-light)",
                    color: "var(--primary)",
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20"
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold tracking-tight mb-3"
              style={{ color: "var(--foreground)" }}
            >
              Trusted by expats across Spain
            </h2>
            <div className="flex items-center justify-center gap-0.5 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={16}
                  fill="var(--warning)"
                  style={{ color: "var(--warning)" }}
                />
              ))}
            </div>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              4.9 / 5 from 240+ reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={13}
                      fill="var(--warning)"
                      style={{ color: "var(--warning)" }}
                    />
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed mb-5 italic"
                  style={{ color: "var(--foreground)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "var(--primary-light)",
                      color: "var(--primary)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "var(--foreground)" }}
                    >
                      {t.name}
                    </div>
                    <div className="text-xs" style={{ color: "var(--muted)" }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider categories preview */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold tracking-tight mb-4"
              style={{ color: "var(--foreground)" }}
            >
              Vetted providers, embedded in context
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "var(--muted)" }}
            >
              English-speaking professionals surfaced exactly when you need
              them — inline in the relevant checklist step.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: <HeartPulse size={22} />, label: "Health Insurance", count: "8 providers" },
              { icon: <FileCheck size={22} />, label: "Translation & Apostilles", count: "6 providers" },
              { icon: <Building2 size={22} />, label: "Gestorías", count: "11 providers" },
              { icon: <Landmark size={22} />, label: "Immigration Lawyers", count: "7 providers" },
              { icon: <CreditCard size={22} />, label: "Bank Accounts", count: "4 providers" },
            ].map((cat, i) => (
              <Link
                key={i}
                href="/providers"
                className="flex flex-col items-center p-5 rounded-2xl text-center"
                style={{ border: "1px solid var(--border)", background: "white" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                  style={{
                    background: "var(--primary-light)",
                    color: "var(--primary)",
                  }}
                >
                  {cat.icon}
                </div>
                <div
                  className="text-sm font-semibold mb-1"
                  style={{ color: "var(--foreground)" }}
                >
                  {cat.label}
                </div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>
                  {cat.count}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/providers"
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: "var(--primary)" }}
            >
              Browse all providers
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20" style={{ background: "var(--primary)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            <Star size={11} />
            Limited founding offer — 87 spots remaining
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Start your Spain journey today
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
            The NIE checklist is free. No account required. Upgrade when
            you&apos;re ready to tackle the full Digital Nomad Visa process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/checklist/nie"
              className="flex items-center gap-2 px-6 py-3.5 text-base font-semibold rounded-xl bg-white"
              style={{ color: "var(--primary)" }}
            >
              Start free — NIE checklist
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-2 px-6 py-3.5 text-base font-medium rounded-xl"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
              }}
            >
              View Founding Member offer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
