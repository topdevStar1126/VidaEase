"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  Building2,
  CreditCard,
  FileText,
  Settings,
  TrendingUp,
  Star,
  AlertCircle,
  CheckCircle2,
  Clock,
  ChevronRight,
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  ToggleLeft,
  ToggleRight,
  Bell,
  MapPin,
  Eye,
} from "lucide-react";

type AdminSection =
  | "overview"
  | "checklist"
  | "users"
  | "providers"
  | "payments"
  | "leads"
  | "templates";

const SIDEBAR_ITEMS = [
  { id: "overview" as AdminSection, label: "Overview", icon: <LayoutDashboard size={16} /> },
  { id: "checklist" as AdminSection, label: "Checklist", icon: <ClipboardList size={16} /> },
  { id: "users" as AdminSection, label: "Users", icon: <Users size={16} /> },
  { id: "providers" as AdminSection, label: "Providers", icon: <Building2 size={16} /> },
  { id: "payments" as AdminSection, label: "Payments", icon: <CreditCard size={16} /> },
  { id: "leads" as AdminSection, label: "Leads", icon: <TrendingUp size={16} /> },
  { id: "templates" as AdminSection, label: "Templates", icon: <FileText size={16} /> },
];

const mockUsers = [
  { id: 1, name: "Sarah Mitchell", email: "sarah@example.com", plan: "founding", joined: "Jan 8, 2026", status: "active" },
  { id: 2, name: "David Kowalski", email: "david@example.com", plan: "core-annual", joined: "Jan 15, 2026", status: "active" },
  { id: 3, name: "James Robertson", email: "james@example.com", plan: "core-monthly", joined: "Feb 1, 2026", status: "active" },
  { id: 4, name: "Emma Wilson", email: "emma@example.com", plan: "free", joined: "Feb 10, 2026", status: "active" },
  { id: 5, name: "Michael Chen", email: "michael@example.com", plan: "core-monthly", joined: "Feb 18, 2026", status: "cancelled" },
];

const mockLeads = [
  { id: 1, user: "David Kowalski", provider: "Sanitas International", category: "Health Insurance", date: "Mar 12", status: "contacted" },
  { id: 2, user: "Sarah Mitchell", provider: "López & Partners", category: "Immigration Lawyer", date: "Mar 14", status: "converted" },
  { id: 3, user: "James Robertson", provider: "Madrid Sworn Translations", category: "Translation", date: "Mar 15", status: "pending" },
  { id: 4, user: "Emma Wilson", provider: "Gestoría Expat Madrid", category: "Gestoría", date: "Mar 18", status: "pending" },
];

const mockWebhooks = [
  { type: "subscription.created", user: "Emma Wilson", amount: "€14.99", time: "2m ago", status: "processed" },
  { type: "checkout.session.completed", user: "Tom Harris", amount: "€149.00", time: "1h ago", status: "processed" },
  { type: "subscription.payment_failed", user: "Anna Perez", amount: "€14.99", time: "3h ago", status: "failed" },
  { type: "subscription.cancelled", user: "Michael Chen", amount: "-", time: "1d ago", status: "processed" },
];

function StatCard({
  label,
  value,
  sub,
  color,
}: {
  label: string;
  value: string | number;
  sub?: string;
  color?: string;
}) {
  return (
    <div
      className="rounded-xl p-5"
      style={{ background: "white", border: "1px solid var(--border)" }}
    >
      <p className="text-xs font-medium mb-2" style={{ color: "var(--muted)" }}>
        {label}
      </p>
      <p
        className="text-2xl font-bold mb-0.5"
        style={{ color: color || "var(--foreground)" }}
      >
        {value}
      </p>
      {sub && (
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          {sub}
        </p>
      )}
    </div>
  );
}

function PlanBadge({ plan }: { plan: string }) {
  const cfg: Record<string, { label: string; bg: string; color: string }> = {
    founding: { label: "Founding", bg: "var(--gold-light)", color: "var(--gold)" },
    "core-annual": { label: "Core Annual", bg: "var(--primary-light)", color: "var(--primary)" },
    "core-monthly": { label: "Core Monthly", bg: "var(--primary-light)", color: "var(--primary)" },
    free: { label: "Free", bg: "var(--muted-light)", color: "var(--muted)" },
    cancelled: { label: "Cancelled", bg: "var(--danger-light)", color: "var(--danger)" },
  };
  const style = cfg[plan] || cfg.free;
  return (
    <span
      className="text-xs font-semibold px-2 py-0.5 rounded-full"
      style={{ background: style.bg, color: style.color }}
    >
      {style.label}
    </span>
  );
}

function LeadStatusBadge({ status }: { status: string }) {
  const cfg: Record<string, { bg: string; color: string }> = {
    pending: { bg: "var(--warning-light)", color: "var(--warning)" },
    contacted: { bg: "var(--primary-light)", color: "var(--primary)" },
    converted: { bg: "var(--success-light)", color: "var(--success)" },
    closed: { bg: "var(--muted-light)", color: "var(--muted)" },
  };
  const style = cfg[status] || cfg.pending;
  return (
    <span
      className="text-xs font-semibold px-2 py-0.5 rounded-full capitalize"
      style={{ background: style.bg, color: style.color }}
    >
      {status}
    </span>
  );
}

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState<AdminSection>("overview");
  const [foundingActive, setFoundingActive] = useState(true);

  return (
    <div className="flex min-h-screen" style={{ background: "var(--surface)" }}>
      {/* Sidebar */}
      <aside
        className="w-56 shrink-0 flex flex-col"
        style={{
          background: "white",
          borderRight: "1px solid var(--border)",
          position: "sticky",
          top: 0,
          height: "100vh",
        }}
      >
        {/* Logo */}
        <div
          className="px-5 py-4 flex items-center gap-2.5"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "var(--primary)" }}
          >
            <MapPin size={13} color="white" strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-sm font-semibold" style={{ color: "var(--primary)" }}>
              VidaEase
            </div>
            <div className="text-xs" style={{ color: "var(--muted)" }}>
              Admin Panel
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-0.5">
          {SIDEBAR_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg text-sm font-medium"
              style={{
                background:
                  activeSection === item.id
                    ? "var(--primary-light)"
                    : "transparent",
                color:
                  activeSection === item.id
                    ? "var(--primary)"
                    : "var(--muted)",
              }}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-3" style={{ borderTop: "1px solid var(--border)" }}>
          <Link
            href="/"
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium"
            style={{ color: "var(--muted)" }}
          >
            <Eye size={15} />
            View site
          </Link>
          <button
            className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg text-sm font-medium"
            style={{ color: "var(--muted)" }}
          >
            <Settings size={15} />
            Settings
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0">
        {/* Top bar */}
        <div
          className="px-6 py-4 flex items-center justify-between sticky top-0 z-40"
          style={{
            background: "white",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <h1
            className="text-base font-semibold capitalize"
            style={{ color: "var(--foreground)" }}
          >
            {activeSection}
          </h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search
                size={14}
                className="absolute left-2.5 top-1/2 -translate-y-1/2"
                style={{ color: "var(--muted)" }}
              />
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-3 py-1.5 text-sm rounded-lg w-48"
                style={{
                  border: "1px solid var(--border)",
                  outline: "none",
                  color: "var(--foreground)",
                }}
              />
            </div>
            <button
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg"
              style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
            >
              <Filter size={13} />
              Filter
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* OVERVIEW */}
          {activeSection === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="Total users" value="247" sub="+12 this week" />
                <StatCard label="Paid subscribers" value="184" sub="74.5% conversion" color="var(--primary)" />
                <StatCard label="Founding members" value="13 / 100" sub="87 spots remaining" color="var(--gold)" />
                <StatCard label="MRR" value="€1,840" sub="+€299 this month" color="var(--success)" />
              </div>

              {/* Founding member toggle */}
              <div
                className="rounded-xl p-5"
                style={{ background: "white", border: "1px solid var(--gold-border)" }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: "var(--gold-light)", color: "var(--gold)" }}
                    >
                      <Star size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                        Founding Member offer
                      </p>
                      <p className="text-xs" style={{ color: "var(--muted)" }}>
                        13 / 100 spots sold · €149 one-time
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setFoundingActive(!foundingActive)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium"
                    style={{
                      background: foundingActive
                        ? "var(--success-light)"
                        : "var(--muted-light)",
                      color: foundingActive ? "var(--success)" : "var(--muted)",
                      border: foundingActive
                        ? "1px solid rgba(5,150,105,0.2)"
                        : "1px solid var(--border)",
                    }}
                  >
                    {foundingActive ? (
                      <ToggleRight size={16} />
                    ) : (
                      <ToggleLeft size={16} />
                    )}
                    {foundingActive ? "Active" : "Deactivated"}
                  </button>
                </div>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs mb-1" style={{ color: "var(--muted)" }}>
                    <span>13 sold</span>
                    <span>87 remaining</span>
                  </div>
                  <div
                    className="h-2 rounded-full"
                    style={{ background: "var(--gold-light)" }}
                  >
                    <div
                      className="h-2 rounded-full"
                      style={{ width: "13%", background: "var(--gold)" }}
                    />
                  </div>
                </div>
              </div>

              {/* Recent webhook events */}
              <div
                className="rounded-xl overflow-hidden"
                style={{ background: "white", border: "1px solid var(--border)" }}
              >
                <div
                  className="px-5 py-3.5 flex items-center justify-between"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <h3
                    className="text-sm font-semibold"
                    style={{ color: "var(--foreground)" }}
                  >
                    Recent Stripe events
                  </h3>
                  <button
                    onClick={() => setActiveSection("payments")}
                    className="flex items-center gap-1 text-xs font-medium"
                    style={{ color: "var(--primary)" }}
                  >
                    View all
                    <ChevronRight size={12} />
                  </button>
                </div>
                <div>
                  {mockWebhooks.map((w, i) => (
                    <div
                      key={i}
                      className="px-5 py-3 flex items-center gap-3"
                      style={{
                        borderBottom:
                          i < mockWebhooks.length - 1
                            ? "1px solid var(--border)"
                            : "none",
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{
                          background:
                            w.status === "processed"
                              ? "var(--success)"
                              : "var(--danger)",
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-xs font-mono font-medium"
                          style={{ color: "var(--foreground)" }}
                        >
                          {w.type}
                        </p>
                        <p className="text-xs" style={{ color: "var(--muted)" }}>
                          {w.user} · {w.amount}
                        </p>
                      </div>
                      <span className="text-xs" style={{ color: "var(--muted)" }}>
                        {w.time}
                      </span>
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{
                          background:
                            w.status === "processed"
                              ? "var(--success-light)"
                              : "var(--danger-light)",
                          color:
                            w.status === "processed"
                              ? "var(--success)"
                              : "var(--danger)",
                        }}
                      >
                        {w.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* USERS */}
          {activeSection === "users" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  247 total users
                </p>
                <button
                  className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg text-white"
                  style={{ background: "var(--primary)" }}
                >
                  <Plus size={14} />
                  Grant access
                </button>
              </div>

              <div
                className="rounded-2xl overflow-hidden"
                style={{ background: "white", border: "1px solid var(--border)" }}
              >
                <div
                  className="grid grid-cols-12 gap-3 px-5 py-3 text-xs font-semibold uppercase tracking-wider"
                  style={{
                    background: "var(--surface)",
                    borderBottom: "1px solid var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  <div className="col-span-4">User</div>
                  <div className="col-span-3">Plan</div>
                  <div className="col-span-2">Joined</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-1"></div>
                </div>
                <div>
                  {mockUsers.map((user, i) => (
                    <div
                      key={user.id}
                      className="grid grid-cols-12 gap-3 px-5 py-3.5 items-center"
                      style={{
                        borderBottom:
                          i < mockUsers.length - 1
                            ? "1px solid var(--border)"
                            : "none",
                      }}
                    >
                      <div className="col-span-4">
                        <div
                          className="flex items-center gap-2.5"
                        >
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                            style={{
                              background: "var(--primary-light)",
                              color: "var(--primary)",
                            }}
                          >
                            {user.name.charAt(0)}
                          </div>
                          <div className="min-w-0">
                            <p
                              className="text-sm font-medium truncate"
                              style={{ color: "var(--foreground)" }}
                            >
                              {user.name}
                            </p>
                            <p
                              className="text-xs truncate"
                              style={{ color: "var(--muted)" }}
                            >
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3">
                        <PlanBadge plan={user.plan} />
                      </div>
                      <div className="col-span-2 text-xs" style={{ color: "var(--muted)" }}>
                        {user.joined}
                      </div>
                      <div className="col-span-2">
                        <span
                          className="text-xs font-medium px-2 py-0.5 rounded-full"
                          style={{
                            background:
                              user.status === "active"
                                ? "var(--success-light)"
                                : "var(--muted-light)",
                            color:
                              user.status === "active"
                                ? "var(--success)"
                                : "var(--muted)",
                          }}
                        >
                          {user.status}
                        </span>
                      </div>
                      <div className="col-span-1 flex justify-end">
                        <button style={{ color: "var(--muted)" }}>
                          <Edit2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CHECKLIST */}
          {activeSection === "checklist" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  Manage all checklist stages and steps
                </p>
                <button
                  className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg text-white"
                  style={{ background: "var(--primary)" }}
                >
                  <Plus size={14} />
                  Add step
                </button>
              </div>

              {[
                { stage: "Stage 1 — NIE Application", steps: 8, published: true, color: "var(--success)" },
                { stage: "Stage 2 — Digital Nomad Visa", steps: 14, published: true, color: "var(--primary)", freeGate: 5 },
                { stage: "Stage 3 — Post-Approval Arrival", steps: 11, published: true, color: "var(--accent)" },
                { stage: "Stage 4 — Digital Residency Setup", steps: 9, published: true, color: "#7c3aed" },
                { stage: "Stage 5 — Ongoing Compliance", steps: 7, published: true, color: "var(--warning)" },
              ].map((stage, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5"
                  style={{ background: "white", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: stage.color }}
                      />
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "var(--foreground)" }}
                        >
                          {stage.stage}
                        </p>
                        <p className="text-xs" style={{ color: "var(--muted)" }}>
                          {stage.steps} steps
                          {stage.freeGate && ` · Free gate at step ${stage.freeGate}`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{
                          background: "var(--success-light)",
                          color: "var(--success)",
                        }}
                      >
                        Published
                      </span>
                      <button style={{ color: "var(--muted)" }}>
                        <Edit2 size={14} />
                      </button>
                      <button
                        className="flex items-center gap-1 text-xs font-medium"
                        style={{ color: "var(--primary)" }}
                      >
                        View steps
                        <ChevronRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* LEADS */}
          {activeSection === "leads" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  4 open leads
                </p>
                <button
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg"
                  style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
                >
                  <Filter size={13} />
                  Filter by status
                </button>
              </div>

              <div
                className="rounded-2xl overflow-hidden"
                style={{ background: "white", border: "1px solid var(--border)" }}
              >
                <div
                  className="grid grid-cols-12 gap-3 px-5 py-3 text-xs font-semibold uppercase tracking-wider"
                  style={{
                    background: "var(--surface)",
                    borderBottom: "1px solid var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  <div className="col-span-3">User</div>
                  <div className="col-span-3">Provider</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-2">Date</div>
                  <div className="col-span-2">Status</div>
                </div>
                <div>
                  {mockLeads.map((lead, i) => (
                    <div
                      key={lead.id}
                      className="grid grid-cols-12 gap-3 px-5 py-3.5 items-center"
                      style={{
                        borderBottom:
                          i < mockLeads.length - 1
                            ? "1px solid var(--border)"
                            : "none",
                      }}
                    >
                      <div className="col-span-3 text-sm" style={{ color: "var(--foreground)" }}>
                        {lead.user}
                      </div>
                      <div className="col-span-3 text-sm" style={{ color: "var(--foreground)" }}>
                        {lead.provider}
                      </div>
                      <div className="col-span-2 text-xs" style={{ color: "var(--muted)" }}>
                        {lead.category}
                      </div>
                      <div className="col-span-2 text-xs" style={{ color: "var(--muted)" }}>
                        {lead.date}
                      </div>
                      <div className="col-span-2">
                        <LeadStatusBadge status={lead.status} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PAYMENTS */}
          {activeSection === "payments" && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <StatCard label="This month MRR" value="€1,840" color="var(--primary)" />
                <StatCard label="Annual ARR" value="€22,080" color="var(--success)" />
                <StatCard label="Failed payments" value="1" sub="Needs attention" color="var(--danger)" />
              </div>

              <div
                className="rounded-2xl overflow-hidden"
                style={{ background: "white", border: "1px solid var(--border)" }}
              >
                <div
                  className="px-5 py-3.5 flex items-center justify-between"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                    Stripe webhook log
                  </h3>
                </div>
                <div>
                  {mockWebhooks.map((w, i) => (
                    <div
                      key={i}
                      className="px-5 py-4 flex items-center gap-4"
                      style={{
                        borderBottom:
                          i < mockWebhooks.length - 1
                            ? "1px solid var(--border)"
                            : "none",
                        background:
                          w.status === "failed"
                            ? "rgba(220,38,38,0.02)"
                            : "white",
                      }}
                    >
                      {w.status === "failed" ? (
                        <AlertCircle size={15} style={{ color: "var(--danger)" }} />
                      ) : (
                        <CheckCircle2 size={15} style={{ color: "var(--success)" }} />
                      )}
                      <div className="flex-1">
                        <p
                          className="text-xs font-mono font-semibold"
                          style={{ color: "var(--foreground)" }}
                        >
                          {w.type}
                        </p>
                        <p className="text-xs" style={{ color: "var(--muted)" }}>
                          {w.user} · {w.amount}
                        </p>
                      </div>
                      <div className="text-right">
                        <p
                          className="text-xs font-semibold mb-0.5"
                          style={{
                            color:
                              w.status === "processed"
                                ? "var(--success)"
                                : "var(--danger)",
                          }}
                        >
                          {w.status}
                        </p>
                        <p className="text-xs" style={{ color: "var(--muted)" }}>
                          {w.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Placeholder for other sections */}
          {(activeSection === "providers" || activeSection === "templates") && (
            <div
              className="rounded-2xl flex flex-col items-center justify-center py-20"
              style={{ background: "white", border: "1px solid var(--border)" }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "var(--primary-light)", color: "var(--primary)" }}
              >
                {activeSection === "providers" ? (
                  <Building2 size={22} />
                ) : (
                  <FileText size={22} />
                )}
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ color: "var(--foreground)" }}
              >
                {activeSection === "providers"
                  ? "Provider Management"
                  : "Template Library"}
              </h3>
              <p className="text-sm mb-5" style={{ color: "var(--muted)" }}>
                {activeSection === "providers"
                  ? "Add, edit and assign providers to checklist steps."
                  : "Upload and manage downloadable document templates."}
              </p>
              <button
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl text-white"
                style={{ background: "var(--primary)" }}
              >
                <Plus size={14} />
                {activeSection === "providers"
                  ? "Add provider"
                  : "Upload template"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
