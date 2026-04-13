"use client";

import Link from "next/link";
import { useState } from "react";
import {
  MapPin,
  Menu,
  X,
  ChevronDown,
  Lock,
  LogIn,
  User,
  LayoutDashboard,
  ClipboardList,
  Users,
  Sparkles,
  Settings,
} from "lucide-react";

type UserTier = "free" | "paid" | "founding" | null;

interface NavbarProps {
  userTier?: UserTier;
}

export default function Navbar({ userTier = null }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const isLoggedIn = userTier !== null;

  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
      }}
      className="sticky top-0 z-50"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "var(--primary)" }}
            >
              <MapPin size={16} color="white" strokeWidth={2.5} />
            </div>
            <span
              className="text-lg font-semibold tracking-tight"
              style={{ color: "var(--primary)" }}
            >
              VidaEase
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/checklist"
              className="px-3 py-2 text-sm font-medium rounded-md transition-colors"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--foreground)";
                (e.target as HTMLElement).style.background =
                  "var(--surface-hover)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--muted)";
                (e.target as HTMLElement).style.background = "transparent";
              }}
            >
              Checklist
            </Link>

            {/* Tools dropdown */}
            <div className="relative">
              <button
                onClick={() => setToolsOpen(!toolsOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors"
                style={{ color: "var(--muted)" }}
              >
                Tools
                <ChevronDown
                  size={14}
                  style={{
                    transform: toolsOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </button>
              {toolsOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-52 rounded-lg py-1"
                  style={{
                    background: "white",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm"
                    style={{ color: "var(--foreground)" }}
                    onClick={() => setToolsOpen(false)}
                  >
                    <LayoutDashboard size={15} style={{ color: "var(--muted)" }} />
                    Expiry Dashboard
                    {!isLoggedIn && (
                      <Lock
                        size={12}
                        className="ml-auto"
                        style={{ color: "var(--muted)" }}
                      />
                    )}
                  </Link>
                  <Link
                    href="/providers"
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm"
                    style={{ color: "var(--foreground)" }}
                    onClick={() => setToolsOpen(false)}
                  >
                    <Users size={15} style={{ color: "var(--muted)" }} />
                    Provider Directory
                  </Link>
                  <div
                    style={{
                      borderTop: "1px solid var(--border)",
                      margin: "4px 0",
                    }}
                  />
                  <Link
                    href="/ai-assistant"
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm"
                    style={{ color: "var(--muted)" }}
                    onClick={() => setToolsOpen(false)}
                  >
                    <Sparkles size={15} />
                    <span>AI Assistant</span>
                    <span
                      className="ml-auto text-xs px-1.5 py-0.5 rounded-full font-medium"
                      style={{
                        background: "var(--primary-light)",
                        color: "var(--primary)",
                      }}
                    >
                      Phase 2
                    </span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="px-3 py-2 text-sm font-medium rounded-md"
              style={{ color: "var(--muted)" }}
            >
              Pricing
            </Link>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <>
                {userTier === "founding" && (
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "var(--gold-light)",
                      color: "var(--gold)",
                      border: "1px solid var(--gold-border)",
                    }}
                  >
                    Founding Member
                  </span>
                )}
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md"
                  style={{ color: "var(--muted)" }}
                >
                  <LayoutDashboard size={15} />
                  Dashboard
                </Link>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                  style={{ background: "var(--primary-light)" }}
                >
                  <User size={15} style={{ color: "var(--primary)" }} />
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md"
                  style={{ color: "var(--muted)" }}
                >
                  <LogIn size={14} />
                  Sign in
                </Link>
                <Link
                  href="/auth/register"
                  className="px-4 py-2 text-sm font-semibold rounded-lg text-white"
                  style={{ background: "var(--primary)" }}
                >
                  Get started
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "var(--muted)" }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden border-t py-4 pb-6 space-y-1"
            style={{ borderColor: "var(--border)" }}
          >
            <Link
              href="/checklist"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm font-medium"
              style={{ color: "var(--foreground)" }}
              onClick={() => setMobileOpen(false)}
            >
              <ClipboardList size={16} style={{ color: "var(--muted)" }} />
              Checklist Journey
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm font-medium"
              style={{ color: "var(--foreground)" }}
              onClick={() => setMobileOpen(false)}
            >
              <LayoutDashboard size={16} style={{ color: "var(--muted)" }} />
              Expiry Dashboard
            </Link>
            <Link
              href="/providers"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm font-medium"
              style={{ color: "var(--foreground)" }}
              onClick={() => setMobileOpen(false)}
            >
              <Users size={16} style={{ color: "var(--muted)" }} />
              Provider Directory
            </Link>
            <Link
              href="/ai-assistant"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm font-medium"
              style={{ color: "var(--muted)" }}
              onClick={() => setMobileOpen(false)}
            >
              <Sparkles size={16} />
              AI Assistant
              <span
                className="ml-auto text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: "var(--primary-light)",
                  color: "var(--primary)",
                }}
              >
                Phase 2
              </span>
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm font-medium"
              style={{ color: "var(--foreground)" }}
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <div
              className="border-t pt-4 mt-3 flex flex-col gap-2"
              style={{ borderColor: "var(--border)" }}
            >
              <Link
                href="/auth/login"
                className="px-3 py-2.5 text-sm font-medium rounded-lg text-center"
                style={{
                  color: "var(--foreground)",
                  border: "1px solid var(--border)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="/auth/register"
                className="px-3 py-2.5 text-sm font-semibold rounded-lg text-center text-white"
                style={{ background: "var(--primary)" }}
                onClick={() => setMobileOpen(false)}
              >
                Get started free
              </Link>
            </div>
            {isLoggedIn && (
              <Link
                href="/admin"
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm font-medium"
                style={{ color: "var(--muted)" }}
                onClick={() => setMobileOpen(false)}
              >
                <Settings size={16} />
                Admin Panel
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
