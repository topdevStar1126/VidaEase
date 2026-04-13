"use client";

import { useState } from "react";
import { Lock, X, Sparkles, Bell } from "lucide-react";

type UserTier = "free" | "paid" | "founding";

interface ComingSoonProps {
  featureName: string;
  description: string;
  userTier?: UserTier;
  ctaText?: string;
  placement?: "card" | "button" | "nav";
  children?: React.ReactNode;
}

function Phase2Badge() {
  return (
    <span
      className="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full"
      style={{
        background: "var(--primary-light)",
        color: "var(--primary)",
      }}
    >
      Phase 2
    </span>
  );
}

function FoundingBadge() {
  return (
    <span
      className="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full"
      style={{
        background: "var(--gold-light)",
        color: "var(--gold)",
        border: "1px solid var(--gold-border)",
      }}
    >
      Included in your plan
    </span>
  );
}

function ModalContent({
  featureName,
  description,
  userTier,
  ctaText,
  onClose,
}: {
  featureName: string;
  description: string;
  userTier?: UserTier;
  ctaText?: string;
  onClose: () => void;
}) {
  const isFoundingMember = userTier === "founding";
  const isPaid = userTier === "paid" || isFoundingMember;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.4)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl p-6"
        style={{
          background: "white",
          boxShadow: "var(--shadow-lg)",
          border: isFoundingMember
            ? "2px solid var(--gold-border)"
            : "1px solid var(--border)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg"
          style={{ color: "var(--muted)", background: "var(--surface)" }}
        >
          <X size={16} />
        </button>

        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          style={{
            background: isFoundingMember
              ? "var(--gold-light)"
              : "var(--primary-light)",
          }}
        >
          <Sparkles
            size={22}
            style={{ color: isFoundingMember ? "var(--gold)" : "var(--primary)" }}
          />
        </div>

        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>
            {featureName}
          </h3>
          {isFoundingMember ? <FoundingBadge /> : <Phase2Badge />}
        </div>

        <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
          {description}
        </p>

        {/* Tier-specific messaging */}
        {isFoundingMember && (
          <div
            className="rounded-lg p-3 mb-5 text-sm"
            style={{
              background: "var(--gold-light)",
              border: "1px solid var(--gold-border)",
              color: "var(--gold)",
            }}
          >
            <strong>Included in your Founding Member plan</strong> at no
            additional cost when Phase 2 launches.
          </div>
        )}

        {isPaid && !isFoundingMember && (
          <div
            className="rounded-lg p-3 mb-5 text-sm"
            style={{
              background: "var(--primary-light)",
              color: "var(--primary)",
            }}
          >
            We will notify you when {featureName} is ready.
          </div>
        )}

        {!isPaid && (
          <div
            className="rounded-lg p-3 mb-5 text-sm"
            style={{
              background: "var(--surface)",
              color: "var(--muted)",
              border: "1px solid var(--border)",
            }}
          >
            {ctaText || "Available on paid plans — launching Phase 2."}
          </div>
        )}

        <div className="flex gap-2">
          {!isPaid && (
            <a
              href="/pricing"
              className="flex-1 py-2.5 text-sm font-semibold text-center rounded-lg text-white"
              style={{ background: "var(--primary)" }}
            >
              View plans
            </a>
          )}
          {isPaid && (
            <button
              className="flex-1 py-2.5 text-sm font-medium rounded-lg flex items-center justify-center gap-2"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
              }}
              onClick={onClose}
            >
              <Bell size={14} />
              Notify me at launch
            </button>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-sm font-medium rounded-lg"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--muted)",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ComingSoon({
  featureName,
  description,
  userTier,
  ctaText,
  placement = "card",
  children,
}: ComingSoonProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const isFoundingMember = userTier === "founding";

  if (placement === "button") {
    return (
      <>
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--muted)",
          }}
        >
          <Lock size={13} />
          {children || "Upload Document"}
          <span
            className="ml-1 text-xs px-1.5 py-0.5 rounded-full font-medium"
            style={{
              background: isFoundingMember
                ? "var(--gold-light)"
                : "var(--primary-light)",
              color: isFoundingMember ? "var(--gold)" : "var(--primary)",
            }}
          >
            Phase 2
          </span>
        </button>
        {modalOpen && (
          <ModalContent
            featureName={featureName}
            description={description}
            userTier={userTier}
            ctaText={ctaText}
            onClose={() => setModalOpen(false)}
          />
        )}
      </>
    );
  }

  // Card placement
  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className="relative rounded-xl p-4 cursor-pointer select-none"
        style={{
          background: isFoundingMember ? "var(--gold-light)" : "var(--surface)",
          border: isFoundingMember
            ? "1px solid var(--gold-border)"
            : "1px solid var(--border)",
          opacity: 0.75,
        }}
      >
        <div className="flex items-start gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
            style={{
              background: isFoundingMember ? "white" : "var(--muted-light)",
            }}
          >
            <Lock
              size={14}
              style={{ color: isFoundingMember ? "var(--gold)" : "var(--muted)" }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-sm font-semibold"
                style={{ color: isFoundingMember ? "var(--gold)" : "var(--muted)" }}
              >
                {featureName}
              </span>
              {isFoundingMember ? <FoundingBadge /> : <Phase2Badge />}
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
              {isFoundingMember
                ? "Included in your Founding Member plan — launching Phase 2."
                : userTier === "paid"
                ? "Coming in Phase 2 — we'll notify you when it's ready."
                : `Available on paid plans — ${ctaText || "coming Phase 2."}`}
            </p>
          </div>
        </div>
      </div>
      {modalOpen && (
        <ModalContent
          featureName={featureName}
          description={description}
          userTier={userTier}
          ctaText={ctaText}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
