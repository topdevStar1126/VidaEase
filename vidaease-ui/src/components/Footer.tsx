import Link from "next/link";
import { MapPin, Mail, Shield, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="mt-auto"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "var(--primary)" }}
              >
                <MapPin size={16} color="white" strokeWidth={2.5} />
              </div>
              <span
                className="text-base font-semibold"
                style={{ color: "var(--primary)" }}
              >
                VidaEase
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              The complete guide for English-speaking expats settling in Spain.
            </p>
            <div className="flex items-center gap-1.5 mt-4 text-xs" style={{ color: "var(--muted)" }}>
              <Mail size={13} />
              <span>hello@vidaease.com</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--foreground)" }}
            >
              Product
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/checklist", label: "Checklist Journey" },
                { href: "/dashboard", label: "Expiry Dashboard" },
                { href: "/providers", label: "Provider Directory" },
                { href: "/pricing", label: "Pricing" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Checklists */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--foreground)" }}
            >
              Checklists
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/checklist/nie", label: "NIE Application" },
                { href: "/checklist/dnv", label: "Digital Nomad Visa" },
                { href: "/checklist/arrival", label: "Post-Approval Arrival" },
                { href: "/checklist/digital", label: "Digital Residency" },
                { href: "/checklist/compliance", label: "Ongoing Compliance" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--foreground)" }}
            >
              Legal
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/gdpr", label: "GDPR" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className="mt-6 p-3 rounded-lg text-xs leading-relaxed"
              style={{
                background: "var(--muted-light)",
                color: "var(--muted)",
              }}
            >
              <div className="flex items-start gap-1.5">
                <Shield size={12} className="mt-0.5 shrink-0" />
                <span>
                  VidaEase provides information and guidance, not legal advice.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            © 2026 VidaEase LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs" style={{ color: "var(--muted)" }}>
            <FileText size={12} />
            <span>Delaware, USA · Serving expats in Spain</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
