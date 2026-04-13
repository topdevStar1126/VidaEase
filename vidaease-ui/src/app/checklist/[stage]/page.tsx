"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
import {
  ChevronRight,
  CheckCircle2,
  Circle,
  Lock,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Clock,
  DollarSign,
  FileText,
  AlertCircle,
  ArrowRight,
  Building2,
  HeartPulse,
  MapPin,
  Star,
  Info,
} from "lucide-react";

// Mock data for DNV checklist
const CONSULATES = [
  "Madrid",
  "Barcelona",
  "Valencia",
  "Seville",
  "Bilbao",
  "New York",
  "Los Angeles",
  "London",
  "Miami",
];

const DNV_STEPS: Array<{
  id: number;
  title: string;
  description: string;
  whyMatters: string;
  documents: string[];
  estimatedTime: string;
  estimatedCost: string;
  officialLink: string;
  free: boolean;
  done: boolean;
  consulateNotes?: Record<string, string>;
  providers: string[];
}> = [
  {
    id: 1,
    title: "Verify you meet the income requirement",
    description:
      "The DNV requires demonstrable income of at least 200% of Spain's minimum wage (approx. €2,646/month in 2026). You must have been working remotely for your current employer for at least 3 months, or be a freelancer with clients outside Spain.",
    whyMatters:
      "This is the first disqualifier. Consulates reject applications where income cannot be clearly evidenced. Calculate your monthly average over 3–12 months.",
    documents: [
      "Employment contract confirming remote work is permitted",
      "3 months of payslips (minimum)",
      "Bank statements showing salary deposits",
      "For freelancers: contracts with non-Spanish clients",
    ],
    estimatedTime: "1–2 days",
    estimatedCost: "Free",
    officialLink: "https://www.inclusion.gob.es/",
    free: true,
    done: false,
    providers: [],
  },
  {
    id: 2,
    title: "Obtain apostilled criminal record certificate",
    description:
      "You need a criminal record check from every country you have lived in for the past 5 years, apostilled and translated into Spanish if not issued in Spanish or English.",
    whyMatters:
      "Criminal records expire after 90 days from issue — not from apostille date. Time this carefully: apply for it no earlier than 90 days before your consulate appointment.",
    documents: [
      "Criminal record certificate from country of residence",
      "Apostille of the Hague Convention",
      "Sworn Spanish translation (if not in Spanish/English)",
    ],
    estimatedTime: "2–6 weeks",
    estimatedCost: "€50–€200",
    officialLink: "https://www.mjusticia.gob.es/",
    free: true,
    done: false,
    consulateNotes: {
      Barcelona:
        "Barcelona consulate is strict on translation quality. Use a sworn translator (traductor jurado) — not just any certified translator.",
      Madrid:
        "Madrid UGE accepts FBI or equivalent national-level criminal records directly without additional apostille in some cases. Verify with your specific case.",
    },
    providers: ["translation"],
  },
  {
    id: 3,
    title: "Get qualifying private health insurance",
    description:
      "You need private health insurance that provides full coverage in Spain for the duration of your visa (minimum 1 year). The policy must not have co-payments and must cover hospitalisation, emergency care, and repatriation.",
    whyMatters:
      "Health insurance is one of the most common rejection reasons. The policy must explicitly state it covers Spain and cannot be a travel policy.",
    documents: [
      "Health insurance policy document (Spanish or translated)",
      "Certificate of coverage confirming Spain and 1-year minimum",
      "Proof of payment",
    ],
    estimatedTime: "1–3 days",
    estimatedCost: "€600–€1,500/year",
    officialLink: "https://www.inclusion.gob.es/",
    free: true,
    done: false,
    providers: ["health-insurance"],
  },
  {
    id: 4,
    title: "Prepare financial proof (bank statements)",
    description:
      "Bank statements for the last 3–6 months demonstrating your income level. Statements must show your name, account number, and transaction history. Most consulates require certified translations if not in Spanish or English.",
    whyMatters:
      "Consulates want to see consistent income, not a large deposit made just before application. The pattern matters as much as the total.",
    documents: [
      "3–6 months of personal bank statements",
      "Certified translation if not in English or Spanish",
      "Letter from bank confirming account status (some consulates)",
    ],
    estimatedTime: "1 week",
    estimatedCost: "€0–€150 for translation",
    officialLink: "https://www.inclusion.gob.es/",
    free: true,
    done: false,
    providers: ["translation"],
  },
  {
    id: 5,
    title: "Complete EX-01 application form",
    description:
      "The EX-01 is the official visa application form for the Digital Nomad Visa. Fill it out carefully — errors are a common reason for delays. The form must be completed in full and signed.",
    whyMatters:
      "Any blank fields or inconsistencies between the form and your supporting documents will result in rejection or a request for more information, adding weeks to the process.",
    documents: [
      "Completed and signed EX-01 form",
      "Recent passport-size photograph (white background)",
      "Photocopy of all passport pages",
    ],
    estimatedTime: "2–4 hours",
    estimatedCost: "Free",
    officialLink: "https://www.inclusion.gob.es/",
    free: false, // paywall starts here
    done: false,
    providers: [],
  },
  {
    id: 6,
    title: "Apostille employment contract or client contracts",
    description:
      "Your employment contract or freelance client contracts must be apostilled if issued outside Spain. Employed applicants need a letter from their employer confirming remote work is permitted.",
    whyMatters:
      "The apostille authenticates the document for use in Spain. Without it, the consulate cannot verify the document's authenticity.",
    documents: [
      "Employment contract (apostilled)",
      "Employer letter confirming remote work (on company letterhead)",
      "For freelancers: apostilled contracts with non-Spanish clients",
    ],
    estimatedTime: "1–3 weeks",
    estimatedCost: "€50–€200",
    officialLink: "https://www.hcch.net/",
    free: false,
    done: false,
    providers: ["translation"],
  },
  {
    id: 7,
    title: "Book consulate appointment",
    description:
      "Appointments at Spanish consulates can have wait times of 4–12 weeks depending on your consulate. Book as early as possible — you can gather documents while waiting for the appointment.",
    whyMatters:
      "Appointment availability varies dramatically by location. Some consulates open slots at specific times (e.g. Monday mornings). Check your consulate's appointment system regularly.",
    documents: [
      "Appointment confirmation email",
      "All required documents prepared and organised",
    ],
    estimatedTime: "Varies by consulate (4–12 weeks wait)",
    estimatedCost: "Free",
    officialLink: "https://www.exteriores.gob.es/",
    free: false,
    done: false,
    consulateNotes: {
      Barcelona:
        "Barcelona Consulate appointments open every Monday at 8:00 AM local time. Set a reminder — slots fill in minutes.",
      "New York":
        "New York Consulate currently has 8–12 week wait times. Book as soon as you start document preparation.",
      London:
        "London Consulate offers a limited number of priority appointments. Check for cancellations via the official portal.",
    },
    providers: [],
  },
  {
    id: 8,
    title: "Pay visa application fee (Tasa 790-052)",
    description:
      "The visa application fee must be paid before your appointment using the Tasa 790-052 form. The fee is currently €73. Some consulates require the original receipt.",
    whyMatters:
      "Without proof of fee payment, your application will not be accepted at the appointment. Ensure you bring the original stamped receipt.",
    documents: [
      "Completed Tasa 790-052 form",
      "Payment receipt (original stamp required at most consulates)",
    ],
    estimatedTime: "1 day",
    estimatedCost: "€73",
    officialLink: "https://sede.policia.gob.es/",
    free: false,
    done: false,
    providers: [],
  },
];

export default function ChecklistStagePage({
  params,
}: {
  params: { stage: string };
}) {
  const [selectedConsulate, setSelectedConsulate] = useState<string>("");
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(
    new Set([1, 2, 3])
  );
  const userTier: "free" | "paid" | "founding" = "paid" as "free" | "paid" | "founding";

  const isNIE = params.stage === "nie";
  const isDNV = params.stage === "dnv";
  const stageLabel = isDNV ? "Digital Nomad Visa" : isNIE ? "NIE Application" : "Stage";

  const toggleStep = (stepId: number, isFree: boolean) => {
    if (!isFree && userTier === "free") return;
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(stepId)) next.delete(stepId);
      else next.add(stepId);
      return next;
    });
  };

  const completedCount = completedSteps.size;
  const totalSteps = DNV_STEPS.length;
  const progressPct = Math.round((completedCount / totalSteps) * 100);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userTier={userTier} />

      {/* Header */}
      <div
        className="py-8"
        style={{
          background: "white",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center gap-2 mb-4 text-sm"
            style={{ color: "var(--muted)" }}
          >
            <Link href="/" style={{ color: "var(--muted)" }}>
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/checklist" style={{ color: "var(--muted)" }}>
              Checklist
            </Link>
            <ChevronRight size={14} />
            <span style={{ color: "var(--foreground)" }}>{stageLabel}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: "var(--primary-light)",
                    color: "var(--primary)",
                  }}
                >
                  Stage 2
                </div>
                <h1
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  {stageLabel}
                </h1>
              </div>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                {completedCount} of {totalSteps} steps completed
              </p>
            </div>

            <div className="flex items-center gap-4 sm:text-right">
              <div>
                <div
                  className="text-3xl font-bold"
                  style={{ color: "var(--primary)" }}
                >
                  {progressPct}%
                </div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>
                  Complete
                </div>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div
            className="mt-4 h-2 rounded-full"
            style={{ background: "var(--border)" }}
          >
            <div
              className="h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%`, background: "var(--primary)" }}
            />
          </div>

          {/* Consulate selector (DNV only) */}
          {isDNV && (
            <div
              className="mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 rounded-xl"
              style={{
                background: "var(--primary-light)",
                border: "1px solid rgba(26,58,92,0.12)",
              }}
            >
              <div className="flex items-center gap-2 shrink-0">
                <MapPin size={15} style={{ color: "var(--primary)" }} />
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--primary)" }}
                >
                  Your applying consulate:
                </span>
              </div>
              <select
                value={selectedConsulate}
                onChange={(e) => setSelectedConsulate(e.target.value)}
                className="flex-1 px-3 py-1.5 text-sm rounded-lg"
                style={{
                  border: "1px solid rgba(26,58,92,0.2)",
                  background: "white",
                  color: "var(--foreground)",
                  outline: "none",
                }}
              >
                <option value="">Select consulate for personalised guidance</option>
                {CONSULATES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Steps */}
      <div className="flex-1 py-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-2">
            {DNV_STEPS.map((step, index) => {
              const isCompleted = completedSteps.has(step.id);
              const isExpanded = expandedStep === step.id;
              const isPaywalled = !step.free && userTier === "free";
              const consolateNote =
                selectedConsulate &&
                step.consulateNotes?.[
                  selectedConsulate as keyof typeof step.consulateNotes
                ];

              return (
                <div
                  key={step.id}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "white",
                    border: isCompleted
                      ? "1px solid rgba(5, 150, 105, 0.3)"
                      : "1px solid var(--border)",
                    boxShadow: "var(--shadow-sm)",
                    opacity: isPaywalled ? 0.7 : 1,
                  }}
                >
                  {/* Step header */}
                  <div
                    className="p-4 flex items-center gap-4 cursor-pointer select-none"
                    onClick={() =>
                      !isPaywalled &&
                      setExpandedStep(isExpanded ? null : step.id)
                    }
                  >
                    {/* Checkbox / status */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleStep(step.id, step.free || userTier !== "free");
                      }}
                      className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: isCompleted
                          ? "var(--success)"
                          : isPaywalled
                          ? "var(--muted-light)"
                          : "white",
                        border: isCompleted
                          ? "none"
                          : isPaywalled
                          ? "1px solid var(--border)"
                          : "2px solid var(--border-strong)",
                      }}
                    >
                      {isCompleted ? (
                        <CheckCircle2 size={14} color="white" strokeWidth={2.5} />
                      ) : isPaywalled ? (
                        <Lock size={11} style={{ color: "var(--muted)" }} />
                      ) : (
                        <Circle size={14} style={{ color: "var(--border-strong)" }} />
                      )}
                    </button>

                    {/* Step number */}
                    <span
                      className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                      style={{
                        background: isCompleted
                          ? "var(--success-light)"
                          : "var(--surface)",
                        color: isCompleted ? "var(--success)" : "var(--muted)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Title */}
                    <div className="flex-1 min-w-0">
                      <span
                        className="text-sm font-medium"
                        style={{
                          color: isCompleted
                            ? "var(--muted)"
                            : "var(--foreground)",
                          textDecoration: isCompleted ? "line-through" : "none",
                        }}
                      >
                        {step.title}
                      </span>
                      {isPaywalled && (
                        <span
                          className="ml-2 text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{
                            background: "var(--muted-light)",
                            color: "var(--muted)",
                          }}
                        >
                          Upgrade to unlock
                        </span>
                      )}
                    </div>

                    {/* Meta + expand */}
                    <div className="flex items-center gap-3 shrink-0">
                      {step.estimatedCost !== "Free" && (
                        <span
                          className="hidden sm:flex items-center gap-1 text-xs"
                          style={{ color: "var(--muted)" }}
                        >
                          <DollarSign size={11} />
                          {step.estimatedCost}
                        </span>
                      )}
                      <span
                        className="hidden sm:flex items-center gap-1 text-xs"
                        style={{ color: "var(--muted)" }}
                      >
                        <Clock size={11} />
                        {step.estimatedTime}
                      </span>
                      {!isPaywalled &&
                        (isExpanded ? (
                          <ChevronUp size={16} style={{ color: "var(--muted)" }} />
                        ) : (
                          <ChevronDown size={16} style={{ color: "var(--muted)" }} />
                        ))}
                    </div>
                  </div>

                  {/* Paywall inline */}
                  {isPaywalled && (
                    <div
                      className="mx-4 mb-4 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                      style={{
                        background: "var(--primary-light)",
                        border: "1px solid rgba(26,58,92,0.12)",
                      }}
                    >
                      <div>
                        <p
                          className="text-sm font-medium mb-0.5"
                          style={{ color: "var(--primary)" }}
                        >
                          This step requires a paid plan
                        </p>
                        <p className="text-xs" style={{ color: "var(--muted)" }}>
                          Unlock full progress tracking, consulate-specific
                          guidance, and all remaining steps.
                        </p>
                      </div>
                      <Link
                        href="/pricing"
                        className="shrink-0 flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg text-white"
                        style={{ background: "var(--primary)" }}
                      >
                        Upgrade
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  )}

                  {/* Expanded content */}
                  {isExpanded && !isPaywalled && (
                    <div
                      className="px-5 pb-5 border-t"
                      style={{ borderColor: "var(--border)" }}
                    >
                      {/* Consulate note */}
                      {consolateNote && (
                        <div
                          className="mt-4 flex gap-2.5 p-3.5 rounded-xl text-sm"
                          style={{
                            background: "var(--primary-light)",
                            border: "1px solid rgba(26,58,92,0.15)",
                          }}
                        >
                          <MapPin
                            size={15}
                            className="shrink-0 mt-0.5"
                            style={{ color: "var(--primary)" }}
                          />
                          <div>
                            <strong
                              className="block text-xs font-semibold mb-1"
                              style={{ color: "var(--primary)" }}
                            >
                              {selectedConsulate} consulate note
                            </strong>
                            <span style={{ color: "var(--foreground)" }}>
                              {consolateNote}
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Description + why it matters */}
                        <div>
                          <p
                            className="text-sm leading-relaxed mb-4"
                            style={{ color: "var(--muted)" }}
                          >
                            {step.description}
                          </p>
                          <div
                            className="flex gap-2.5 p-3 rounded-xl"
                            style={{ background: "var(--warning-light)" }}
                          >
                            <AlertCircle
                              size={14}
                              className="shrink-0 mt-0.5"
                              style={{ color: "var(--warning)" }}
                            />
                            <div>
                              <p
                                className="text-xs font-semibold mb-1"
                                style={{ color: "var(--warning)" }}
                              >
                                Why this matters
                              </p>
                              <p
                                className="text-xs leading-relaxed"
                                style={{ color: "var(--foreground)" }}
                              >
                                {step.whyMatters}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Documents + links */}
                        <div>
                          <p
                            className="text-xs font-semibold uppercase tracking-wider mb-2"
                            style={{ color: "var(--foreground)" }}
                          >
                            Documents needed
                          </p>
                          <ul className="space-y-1.5 mb-4">
                            {step.documents.map((doc, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm"
                                style={{ color: "var(--foreground)" }}
                              >
                                <FileText
                                  size={13}
                                  className="shrink-0 mt-0.5"
                                  style={{ color: "var(--muted)" }}
                                />
                                {doc}
                              </li>
                            ))}
                          </ul>

                          <a
                            href={step.officialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-medium mb-4"
                            style={{ color: "var(--primary)" }}
                          >
                            <ExternalLink size={12} />
                            Official resource
                          </a>

                          {/* Upload document (coming soon) */}
                          <ComingSoon
                            featureName="Secure Document Vault"
                            description="Store all your Spain application documents securely, attached to each checklist step. Coming in Phase 2."
                            userTier={userTier}
                            placement="button"
                          >
                            Upload document
                          </ComingSoon>
                        </div>
                      </div>

                      {/* Provider embed */}
                      {step.providers.includes("health-insurance") && (
                        <div className="mt-5">
                          <p
                            className="text-xs font-semibold uppercase tracking-wider mb-3"
                            style={{ color: "var(--foreground)" }}
                          >
                            Recommended health insurance providers
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                              {
                                name: "Sanitas International",
                                type: "Health Insurance",
                                specialty: "DNV-compliant coverage",
                                languages: "English, Spanish",
                              },
                              {
                                name: "AXA Spain",
                                type: "Health Insurance",
                                specialty: "Expat plans, TIE-compliant",
                                languages: "English, Spanish, French",
                              },
                            ].map((p, i) => (
                              <div
                                key={i}
                                className="p-3.5 rounded-xl flex items-start gap-3"
                                style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
                              >
                                <div
                                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                  style={{
                                    background: "var(--primary-light)",
                                    color: "var(--primary)",
                                  }}
                                >
                                  <HeartPulse size={15} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div
                                    className="text-sm font-semibold"
                                    style={{ color: "var(--foreground)" }}
                                  >
                                    {p.name}
                                  </div>
                                  <div
                                    className="text-xs mb-1"
                                    style={{ color: "var(--muted)" }}
                                  >
                                    {p.specialty}
                                  </div>
                                  <Link
                                    href="/providers"
                                    className="text-xs font-medium"
                                    style={{ color: "var(--primary)" }}
                                  >
                                    Send enquiry →
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* AI Document Review (coming soon) for EX-01/EX-15 */}
                      {(step.id === 5 || step.id === 1) && (
                        <div className="mt-5">
                          <ComingSoon
                            featureName="AI Document Review"
                            description="Upload your completed EX-01 form for field-by-field feedback. Common errors flagged before you submit."
                            userTier={userTier}
                            placement="card"
                          />
                        </div>
                      )}

                      {/* Mark complete */}
                      <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {isCompleted && (
                            <span className="text-sm" style={{ color: "var(--muted)" }}>
                              Completed on Jan 22, 2026
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => toggleStep(step.id, true)}
                          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg"
                          style={{
                            background: isCompleted
                              ? "var(--success-light)"
                              : "var(--primary)",
                            color: isCompleted ? "var(--success)" : "white",
                            border: isCompleted
                              ? "1px solid rgba(5,150,105,0.3)"
                              : "none",
                          }}
                        >
                          {isCompleted ? (
                            <>
                              <CheckCircle2 size={14} />
                              Completed
                            </>
                          ) : (
                            <>
                              <Circle size={14} />
                              Mark as complete
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Completion message */}
          {completedCount === totalSteps && (
            <div
              className="mt-6 p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-4"
              style={{
                background: "var(--success-light)",
                border: "1px solid rgba(5,150,105,0.3)",
              }}
            >
              <CheckCircle2
                size={32}
                style={{ color: "var(--success)" }}
              />
              <div className="flex-1 text-center sm:text-left">
                <h3
                  className="text-base font-semibold mb-1"
                  style={{ color: "var(--foreground)" }}
                >
                  Stage 2 complete!
                </h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  All DNV application steps done. Continue to Stage 3: Post-Approval Arrival.
                </p>
              </div>
              <Link
                href="/checklist/arrival"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg text-white"
                style={{ background: "var(--success)" }}
              >
                Next stage
                <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
