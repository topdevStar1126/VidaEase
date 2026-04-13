"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  HeartPulse,
  FileText,
  Building2,
  Landmark,
  CreditCard,
  Globe,
  MapPin,
  Languages,
  ChevronRight,
  Send,
  X,
  Search,
  Filter,
} from "lucide-react";

type Category =
  | "all"
  | "health"
  | "translation"
  | "gestoria"
  | "legal"
  | "banking";

interface Provider {
  id: number;
  name: string;
  category: Category;
  type: string;
  specialty: string;
  location: string;
  languages: string[];
  description: string;
  website: string;
}

const categories = [
  { id: "all" as Category, label: "All providers", icon: <Filter size={14} /> },
  {
    id: "health" as Category,
    label: "Health Insurance",
    icon: <HeartPulse size={14} />,
  },
  {
    id: "translation" as Category,
    label: "Translation & Apostilles",
    icon: <FileText size={14} />,
  },
  {
    id: "gestoria" as Category,
    label: "Gestorías",
    icon: <Building2 size={14} />,
  },
  {
    id: "legal" as Category,
    label: "Immigration Lawyers",
    icon: <Landmark size={14} />,
  },
  {
    id: "banking" as Category,
    label: "Bank Accounts",
    icon: <CreditCard size={14} />,
  },
];

const categoryIcons: Record<Category, React.ReactNode> = {
  all: <Filter size={18} />,
  health: <HeartPulse size={18} />,
  translation: <FileText size={18} />,
  gestoria: <Building2 size={18} />,
  legal: <Landmark size={18} />,
  banking: <CreditCard size={18} />,
};

const categoryColors: Record<Category, { bg: string; color: string }> = {
  all: { bg: "var(--primary-light)", color: "var(--primary)" },
  health: { bg: "#fce7f3", color: "#be185d" },
  translation: { bg: "var(--primary-light)", color: "var(--primary)" },
  gestoria: { bg: "var(--accent-light)", color: "var(--accent)" },
  legal: { bg: "#f5f3ff", color: "#7c3aed" },
  banking: { bg: "var(--success-light)", color: "var(--success)" },
};

const providers: Provider[] = [
  {
    id: 1,
    name: "Sanitas International",
    category: "health",
    type: "Health Insurance",
    specialty: "DNV & TIE-compliant coverage",
    location: "Nationwide",
    languages: ["English", "Spanish"],
    description:
      "Comprehensive private health insurance plans designed for expats. All policies meet Spanish visa requirements with no co-payments.",
    website: "sanitas.es",
  },
  {
    id: 2,
    name: "AXA Partners Spain",
    category: "health",
    type: "Health Insurance",
    specialty: "Expat international plans",
    location: "Nationwide",
    languages: ["English", "Spanish", "French", "German"],
    description:
      "International health insurance with full Spain coverage. Accepted by consulates across Europe and North America.",
    website: "axa.es",
  },
  {
    id: 3,
    name: "Madrid Sworn Translations",
    category: "translation",
    type: "Sworn Translation",
    specialty: "Legal documents, apostilles",
    location: "Madrid",
    languages: ["English", "Spanish", "French"],
    description:
      "Official traductor jurado services for all Spanish visa applications. Criminal records, birth certificates, employment contracts.",
    website: "madridtranslations.com",
  },
  {
    id: 4,
    name: "Barcelona Document Services",
    category: "translation",
    type: "Apostille & Translation",
    specialty: "Apostilles, notarisation",
    location: "Barcelona",
    languages: ["English", "Spanish", "Catalan"],
    description:
      "Full-service document legalisation including apostille procurement, sworn translation, and notarisation for visa applications.",
    website: "barcelonadocs.com",
  },
  {
    id: 5,
    name: "Gestoría Expat Madrid",
    category: "gestoria",
    type: "Gestoría",
    specialty: "Tax registration, Hacienda, Social Security",
    location: "Madrid",
    languages: ["English", "Spanish"],
    description:
      "English-speaking gestoría specialising in expat tax setup, NIE/NIF conversion, Hacienda registration, and annual tax filings.",
    website: "gestomadrids.com",
  },
  {
    id: 6,
    name: "Costa Gestoría",
    category: "gestoria",
    type: "Gestoría",
    specialty: "Residency admin, padrón, utilities",
    location: "Málaga, Marbella",
    languages: ["English", "Spanish", "German"],
    description:
      "Full administrative support for expats on the Costa del Sol. Padrón registration, TIE applications, utility setup, bank introductions.",
    website: "costagestion.es",
  },
  {
    id: 7,
    name: "López & Partners Immigration",
    category: "legal",
    type: "Immigration Lawyer",
    specialty: "DNV, NLV, residency appeals",
    location: "Madrid, Barcelona",
    languages: ["English", "Spanish"],
    description:
      "Boutique immigration law firm specialising in Digital Nomad and Non-Lucrative Visa applications, residency extensions, and appeals.",
    website: "lopezimmigration.es",
  },
  {
    id: 8,
    name: "Spain Expat Legal",
    category: "legal",
    type: "Immigration Lawyer",
    specialty: "DNV applications, NIE, TIE",
    location: "Nationwide (remote)",
    languages: ["English", "Spanish", "French"],
    description:
      "Remote immigration law services for English-speaking clients worldwide. End-to-end DNV application management from document preparation to approval.",
    website: "spainexpatlegal.com",
  },
  {
    id: 9,
    name: "BBVA Expat Banking",
    category: "banking",
    type: "Bank Account",
    specialty: "Non-resident & resident accounts",
    location: "Nationwide",
    languages: ["English", "Spanish"],
    description:
      "BBVA offers English-language support for expat account openings. Non-resident accounts available before TIE arrival, convertible to resident.",
    website: "bbva.es",
  },
  {
    id: 10,
    name: "Wise Business Spain",
    category: "banking",
    type: "Multi-currency Account",
    specialty: "Freelancers, remote workers",
    location: "Online",
    languages: ["English", "Spanish", "40+ languages"],
    description:
      "Multi-currency account with Spanish IBAN. Ideal for digital nomads receiving income in multiple currencies. Accepted by some consulates.",
    website: "wise.com",
  },
];

function EnquiryModal({
  provider,
  onClose,
}: {
  provider: Provider;
  onClose: () => void;
}) {
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
        style={{
          background: "white",
          boxShadow: "var(--shadow-lg)",
          border: "1px solid var(--border)",
        }}
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3
              className="text-base font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              Enquire: {provider.name}
            </h3>
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              {provider.type} · {provider.location}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg"
            style={{ color: "var(--muted)", background: "var(--surface)" }}
          >
            <X size={16} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                className="block text-xs font-semibold mb-1.5"
                style={{ color: "var(--foreground)" }}
              >
                Your name
              </label>
              <input
                type="text"
                placeholder="Jane Smith"
                className="w-full px-3 py-2.5 text-sm rounded-lg"
                style={{
                  border: "1px solid var(--border)",
                  outline: "none",
                  color: "var(--foreground)",
                }}
              />
            </div>
            <div>
              <label
                className="block text-xs font-semibold mb-1.5"
                style={{ color: "var(--foreground)" }}
              >
                Email address
              </label>
              <input
                type="email"
                placeholder="jane@example.com"
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
            <label
              className="block text-xs font-semibold mb-1.5"
              style={{ color: "var(--foreground)" }}
            >
              Your message
            </label>
            <textarea
              rows={4}
              placeholder={`Hi, I'm applying for the Digital Nomad Visa and I'd like to ask about your ${provider.specialty} services...`}
              className="w-full px-3 py-2.5 text-sm rounded-lg resize-none"
              style={{
                border: "1px solid var(--border)",
                outline: "none",
                color: "var(--foreground)",
              }}
            />
          </div>
        </div>

        <div className="flex gap-2 mt-5">
          <button
            className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg text-white"
            style={{ background: "var(--primary)" }}
          >
            <Send size={13} />
            Send enquiry
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-sm font-medium rounded-lg"
            style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
          >
            Cancel
          </button>
        </div>
        <p
          className="text-xs text-center mt-3"
          style={{ color: "var(--muted)" }}
        >
          Your contact details are shared only with this provider.
        </p>
      </div>
    </div>
  );
}

export default function ProvidersPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [enquiryProvider, setEnquiryProvider] = useState<Provider | null>(null);

  const filtered = providers.filter((p) => {
    const matchesCat =
      activeCategory === "all" || p.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Header */}
      <div
        className="py-10 lg:py-14"
        style={{
          background: "white",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
              style={{ color: "var(--foreground)" }}
            >
              Provider directory
            </h1>
            <p className="text-lg" style={{ color: "var(--muted)" }}>
              English-speaking professionals verified for expats. All providers
              are also embedded inline in the relevant checklist steps.
            </p>
          </div>

          {/* Search */}
          <div className="mt-6 max-w-md relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2"
              style={{ color: "var(--muted)" }}
            />
            <input
              type="text"
              placeholder="Search by name, specialty, or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl"
              style={{
                border: "1px solid var(--border)",
                outline: "none",
                color: "var(--foreground)",
                background: "white",
              }}
            />
          </div>
        </div>
      </div>

      {/* Category tabs */}
      <div
        className="sticky top-16 z-40 py-3"
        style={{
          background: "white",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex items-center gap-1.5 shrink-0 px-3.5 py-2 text-sm font-medium rounded-xl"
                style={{
                  background:
                    activeCategory === cat.id
                      ? "var(--primary)"
                      : "var(--surface)",
                  color:
                    activeCategory === cat.id ? "white" : "var(--foreground)",
                  border:
                    activeCategory === cat.id
                      ? "none"
                      : "1px solid var(--border)",
                }}
              >
                {cat.icon}
                {cat.label}
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full"
                  style={{
                    background:
                      activeCategory === cat.id
                        ? "rgba(255,255,255,0.2)"
                        : "var(--border)",
                    color:
                      activeCategory === cat.id ? "white" : "var(--muted)",
                  }}
                >
                  {cat.id === "all"
                    ? providers.length
                    : providers.filter((p) => p.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Providers grid */}
      <div className="flex-1 py-8" style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
            {filtered.length} provider{filtered.length !== 1 ? "s" : ""} found
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((provider) => {
              const catStyle = categoryColors[provider.category];
              return (
                <div
                  key={provider.id}
                  className="rounded-2xl p-5 flex flex-col"
                  style={{
                    background: "white",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: catStyle.bg, color: catStyle.color }}
                    >
                      {categoryIcons[provider.category]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-sm font-semibold"
                        style={{ color: "var(--foreground)" }}
                      >
                        {provider.name}
                      </h3>
                      <p className="text-xs" style={{ color: "var(--muted)" }}>
                        {provider.type}
                      </p>
                    </div>
                  </div>

                  <p
                    className="text-xs font-medium mb-2"
                    style={{ color: catStyle.color }}
                  >
                    {provider.specialty}
                  </p>

                  <p
                    className="text-sm leading-relaxed mb-4 flex-1"
                    style={{ color: "var(--muted)" }}
                  >
                    {provider.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 mb-4 text-xs" style={{ color: "var(--muted)" }}>
                    <div className="flex items-center gap-1">
                      <MapPin size={11} />
                      {provider.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Languages size={11} />
                      {provider.languages.slice(0, 2).join(", ")}
                      {provider.languages.length > 2 && ` +${provider.languages.length - 2}`}
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe size={11} />
                      {provider.website}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setEnquiryProvider(provider)}
                    className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold rounded-xl"
                    style={{
                      background: "var(--primary-light)",
                      color: "var(--primary)",
                      border: "1px solid rgba(26,58,92,0.12)",
                    }}
                  >
                    <Send size={13} />
                    Send enquiry
                    <ChevronRight size={13} />
                  </button>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div
              className="text-center py-16 rounded-2xl"
              style={{ background: "white", border: "1px solid var(--border)" }}
            >
              <Search size={32} className="mx-auto mb-3" style={{ color: "var(--muted)" }} />
              <p
                className="text-base font-medium mb-1"
                style={{ color: "var(--foreground)" }}
              >
                No providers found
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Try adjusting your search or category filter.
              </p>
            </div>
          )}
        </div>
      </div>

      {enquiryProvider && (
        <EnquiryModal
          provider={enquiryProvider}
          onClose={() => setEnquiryProvider(null)}
        />
      )}
      <Footer />
    </div>
  );
}
