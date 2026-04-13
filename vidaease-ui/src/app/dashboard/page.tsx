"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Bell,
  Plus,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Calendar,
  X,
  ArrowUpDown,
  Filter,
} from "lucide-react";

type Status = "danger" | "warning" | "success";

interface ExpiryItem {
  id: number;
  document: string;
  issueDate: string;
  expiryDate: string;
  daysRemaining: number;
  status: Status;
  category: string;
  reminderSchedule: string;
  linkedStep?: string;
}

const expiryData: ExpiryItem[] = [
  {
    id: 1,
    document: "Criminal Record Certificate",
    issueDate: "12 Jan 2026",
    expiryDate: "12 Apr 2026",
    daysRemaining: 14,
    status: "danger",
    category: "Application document",
    reminderSchedule: "60/30/14/7 days",
    linkedStep: "Stage 2, Step 2",
  },
  {
    id: 2,
    document: "Private Health Insurance",
    issueDate: "01 Feb 2026",
    expiryDate: "01 May 2026",
    daysRemaining: 31,
    status: "warning",
    category: "Insurance",
    reminderSchedule: "60/30/14 days",
    linkedStep: "Stage 2, Step 3",
  },
  {
    id: 3,
    document: "Digital Nomad Visa",
    issueDate: "15 Feb 2026",
    expiryDate: "15 Feb 2027",
    daysRemaining: 312,
    status: "success",
    category: "Visa",
    reminderSchedule: "90/60/30 days",
    linkedStep: "Stage 2",
  },
  {
    id: 4,
    document: "TIE Card",
    issueDate: "20 Mar 2026",
    expiryDate: "20 Mar 2028",
    daysRemaining: 711,
    status: "success",
    category: "Residency card",
    reminderSchedule: "90/60/30 days",
    linkedStep: "Stage 3, Step 2",
  },
  {
    id: 5,
    document: "Certificado Digital",
    issueDate: "01 Apr 2026",
    expiryDate: "01 Apr 2030",
    daysRemaining: 1449,
    status: "success",
    category: "Digital identity",
    reminderSchedule: "60/30/14 days",
    linkedStep: "Stage 4, Step 1",
  },
  {
    id: 6,
    document: "UK Passport",
    issueDate: "10 Sep 2018",
    expiryDate: "10 Sep 2028",
    daysRemaining: 878,
    status: "success",
    category: "Travel document",
    reminderSchedule: "6 months/3 months/1 month",
  },
];

function StatusBadge({ status, days }: { status: Status; days: number }) {
  const cfg = {
    danger: {
      bg: "var(--danger-light)",
      color: "var(--danger)",
      icon: <AlertTriangle size={11} />,
      label: `${days} days`,
    },
    warning: {
      bg: "var(--warning-light)",
      color: "var(--warning)",
      icon: <Clock size={11} />,
      label: `${days} days`,
    },
    success: {
      bg: "var(--success-light)",
      color: "var(--success)",
      icon: <CheckCircle2 size={11} />,
      label: `${days} days`,
    },
  }[status];

  return (
    <span
      className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full"
      style={{ background: cfg.bg, color: cfg.color }}
    >
      {cfg.icon}
      {cfg.label}
    </span>
  );
}

function AddItemModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.4)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="w-full max-w-md rounded-2xl p-6"
        style={{ background: "white", boxShadow: "var(--shadow-lg)", border: "1px solid var(--border)" }}
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-base font-semibold" style={{ color: "var(--foreground)" }}>
            Add expiry item
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg"
            style={{ color: "var(--muted)", background: "var(--surface)" }}
          >
            <X size={16} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--foreground)" }}>
              Document name
            </label>
            <input
              type="text"
              placeholder="e.g. Passport, Health insurance renewal"
              className="w-full px-3 py-2.5 text-sm rounded-lg"
              style={{
                border: "1px solid var(--border)",
                outline: "none",
                color: "var(--foreground)",
              }}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--foreground)" }}>
                Issue date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2.5 text-sm rounded-lg"
                style={{
                  border: "1px solid var(--border)",
                  outline: "none",
                  color: "var(--foreground)",
                }}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--foreground)" }}>
                Expiry date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2.5 text-sm rounded-lg"
                style={{
                  border: "1px solid var(--border)",
                  outline: "none",
                  color: "var(--foreground)",
                }}
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--foreground)" }}>
              Reminder schedule
            </label>
            <select
              className="w-full px-3 py-2.5 text-sm rounded-lg"
              style={{
                border: "1px solid var(--border)",
                outline: "none",
                color: "var(--foreground)",
                background: "white",
              }}
            >
              <option>90 / 30 / 14 / 7 days before</option>
              <option>60 / 30 / 14 days before</option>
              <option>6 months / 3 months / 1 month before</option>
              <option>30 / 14 / 7 days before</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2 mt-5">
          <button
            className="flex-1 py-2.5 text-sm font-semibold rounded-lg text-white"
            style={{ background: "var(--primary)" }}
          >
            Add item
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-sm font-medium rounded-lg"
            style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const userTier: "paid" | "founding" | "free" = "paid";

  const urgentCount = expiryData.filter((i) => i.status === "danger").length;
  const warningCount = expiryData.filter((i) => i.status === "warning").length;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userTier={userTier} />

      {/* Header */}
      <div
        className="py-8"
        style={{ background: "white", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div>
              <h1
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "var(--foreground)" }}
              >
                Expiry Dashboard
              </h1>
              <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                All your Spain documents in one place
              </p>
            </div>
            <button
              onClick={() => setAddModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl text-white self-start sm:self-auto"
              style={{ background: "var(--primary)" }}
            >
              <Plus size={16} />
              Add item
            </button>
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div
              className="rounded-xl p-4"
              style={{
                background:
                  urgentCount > 0 ? "var(--danger-light)" : "var(--surface)",
                border: urgentCount > 0
                  ? "1px solid rgba(220,38,38,0.2)"
                  : "1px solid var(--border)",
              }}
            >
              <div
                className="text-2xl font-bold mb-0.5"
                style={{ color: urgentCount > 0 ? "var(--danger)" : "var(--muted)" }}
              >
                {urgentCount}
              </div>
              <div className="text-xs font-medium" style={{ color: "var(--muted)" }}>
                Urgent (under 30 days)
              </div>
            </div>
            <div
              className="rounded-xl p-4"
              style={{
                background: warningCount > 0 ? "var(--warning-light)" : "var(--surface)",
                border: warningCount > 0
                  ? "1px solid rgba(217,119,6,0.2)"
                  : "1px solid var(--border)",
              }}
            >
              <div
                className="text-2xl font-bold mb-0.5"
                style={{ color: warningCount > 0 ? "var(--warning)" : "var(--muted)" }}
              >
                {warningCount}
              </div>
              <div className="text-xs font-medium" style={{ color: "var(--muted)" }}>
                Upcoming (30–90 days)
              </div>
            </div>
            <div
              className="rounded-xl p-4"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div
                className="text-2xl font-bold mb-0.5"
                style={{ color: "var(--foreground)" }}
              >
                {expiryData.length}
              </div>
              <div className="text-xs font-medium" style={{ color: "var(--muted)" }}>
                Total items tracked
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Urgent alert banner */}
      {urgentCount > 0 && (
        <div
          className="py-3 px-4"
          style={{ background: "var(--danger)", color: "white" }}
        >
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm">
            <AlertTriangle size={15} />
            <strong>Action required:</strong> Your criminal record certificate
            expires in 14 days. Start the renewal process now.
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 py-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex items-center gap-2 mb-4">
            <button
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg"
              style={{
                border: "1px solid var(--border)",
                background: "white",
                color: "var(--foreground)",
              }}
            >
              <Filter size={12} />
              Filter
            </button>
            <button
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg"
              style={{
                border: "1px solid var(--border)",
                background: "white",
                color: "var(--foreground)",
              }}
            >
              <ArrowUpDown size={12} />
              Sort by expiry
            </button>
            {["All", "Urgent", "Upcoming", "Valid"].map((f) => (
              <button
                key={f}
                className="px-3 py-1.5 text-xs font-medium rounded-lg"
                style={{
                  background: f === "All" ? "var(--primary)" : "white",
                  color: f === "All" ? "white" : "var(--muted)",
                  border: f === "All" ? "none" : "1px solid var(--border)",
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Table */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "white",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            {/* Table header */}
            <div
              className="hidden sm:grid grid-cols-12 gap-3 px-5 py-3 text-xs font-semibold uppercase tracking-wider"
              style={{
                background: "var(--surface)",
                borderBottom: "1px solid var(--border)",
                color: "var(--muted)",
              }}
            >
              <div className="col-span-4">Document</div>
              <div className="col-span-2">Issue date</div>
              <div className="col-span-2">Expiry date</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Reminders</div>
            </div>

            <div>
              {expiryData.map((item, i) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-3 px-5 py-4 items-center"
                  style={{
                    borderBottom:
                      i < expiryData.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                    background:
                      item.status === "danger"
                        ? "rgba(220,38,38,0.02)"
                        : "white",
                  }}
                >
                  <div className="sm:col-span-4">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-1.5 h-8 rounded-full shrink-0"
                        style={{
                          background:
                            item.status === "danger"
                              ? "var(--danger)"
                              : item.status === "warning"
                              ? "var(--warning)"
                              : "var(--success)",
                        }}
                      />
                      <div>
                        <div
                          className="text-sm font-medium"
                          style={{ color: "var(--foreground)" }}
                        >
                          {item.document}
                        </div>
                        <div className="text-xs" style={{ color: "var(--muted)" }}>
                          {item.category}
                          {item.linkedStep && (
                            <> · <Link href="/checklist/dnv" style={{ color: "var(--primary)" }}>{item.linkedStep}</Link></>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-2 flex items-center gap-1.5 sm:block">
                    <Calendar size={12} className="sm:hidden" style={{ color: "var(--muted)" }} />
                    <span className="text-sm" style={{ color: "var(--muted)" }}>
                      {item.issueDate}
                    </span>
                  </div>
                  <div className="sm:col-span-2 flex items-center gap-1.5 sm:block">
                    <Clock size={12} className="sm:hidden" style={{ color: "var(--muted)" }} />
                    <span
                      className="text-sm font-medium"
                      style={{
                        color:
                          item.status === "danger"
                            ? "var(--danger)"
                            : "var(--foreground)",
                      }}
                    >
                      {item.expiryDate}
                    </span>
                  </div>
                  <div className="sm:col-span-2">
                    <StatusBadge status={item.status} days={item.daysRemaining} />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex items-center gap-1.5">
                      <Bell size={12} style={{ color: "var(--muted)" }} />
                      <span className="text-xs" style={{ color: "var(--muted)" }}>
                        {item.reminderSchedule}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info note */}
          <div
            className="mt-4 flex items-start gap-2 px-4 py-3 rounded-xl text-sm"
            style={{
              background: "var(--primary-light)",
              border: "1px solid rgba(26,58,92,0.1)",
            }}
          >
            <Bell size={14} className="mt-0.5 shrink-0" style={{ color: "var(--primary)" }} />
            <p style={{ color: "var(--primary)" }}>
              <strong>Email reminders are active.</strong> You&apos;ll receive
              notifications at the scheduled intervals before each document
              expires. Manage preferences in{" "}
              <Link href="/settings" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                account settings
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {addModalOpen && <AddItemModal onClose={() => setAddModalOpen(false)} />}
      <Footer />
    </div>
  );
}
