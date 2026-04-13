import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, ArrowLeft, Star, Bell, CheckCircle2, Lock } from "lucide-react";

export default function AIAssistantPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div
        className="flex-1 flex items-center justify-center py-20"
        style={{ background: "var(--surface)" }}
      >
        <div className="max-w-lg mx-auto px-4 text-center">
          {/* Icon */}
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative"
            style={{
              background: "var(--primary-light)",
              border: "1px solid rgba(26,58,92,0.12)",
            }}
          >
            <Sparkles size={32} style={{ color: "var(--primary)" }} />
            <div
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
              style={{ background: "var(--primary)", border: "2px solid white" }}
            >
              <Lock size={11} color="white" />
            </div>
          </div>

          {/* Badge */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: "var(--primary-light)",
                color: "var(--primary)",
              }}
            >
              Phase 2 — Coming Soon
            </span>
          </div>

          <h1
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            AI Assistant
          </h1>

          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
            Ask any question about your Spain visa process and get instant,
            accurate answers. No more forum searches. No more conflicting advice.
            Just clear, reliable guidance tailored to your situation.
          </p>

          {/* Features preview */}
          <div
            className="rounded-2xl p-6 mb-8 text-left"
            style={{
              background: "white",
              border: "1px solid var(--border)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--muted)" }}
            >
              What you&apos;ll be able to ask
            </p>
            <ul className="space-y-3">
              {[
                "Can I apply for the DNV while on a tourist visa in Spain?",
                "What income counts toward the 200% minimum wage requirement?",
                "How long does the Madrid consulate take to process applications?",
                "Can my criminal record from 2 countries be sent together?",
                "What documents do I need to open a Spanish bank account without a TIE?",
              ].map((q, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm"
                  style={{ color: "var(--foreground)" }}
                >
                  <CheckCircle2
                    size={14}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--primary)" }}
                  />
                  <span className="italic">&ldquo;{q}&rdquo;</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Founding member note */}
          <div
            className="rounded-xl p-4 mb-8 text-sm"
            style={{
              background: "var(--gold-light)",
              border: "1px solid var(--gold-border)",
              color: "var(--gold)",
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <Star size={13} fill="var(--gold)" />
              <strong>Founding Members</strong>
            </div>
            AI Assistant is included in your Founding Member plan at no extra
            cost when Phase 2 launches.
          </div>

          {/* Notify CTA */}
          <div
            className="flex items-center gap-3 p-4 rounded-xl mb-6"
            style={{
              background: "white",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "var(--primary-light)", color: "var(--primary)" }}
            >
              <Bell size={16} />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                Get notified at launch
              </p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                We&apos;ll email you when Phase 2 goes live.
              </p>
            </div>
            <button
              className="px-4 py-2 text-sm font-semibold rounded-lg text-white shrink-0"
              style={{ background: "var(--primary)" }}
            >
              Notify me
            </button>
          </div>

          <Link
            href="/checklist"
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: "var(--muted)" }}
          >
            <ArrowLeft size={14} />
            Back to checklist
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
