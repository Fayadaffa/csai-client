// ============================================================
// FeatureCard — sesuai Image 2:
// Ilustrasi besar di atas, label kecil abu + judul bold di bawah.
// ============================================================

import type { FeatureItem } from "@/types/landing";

// SVG ilustrasi per label — simplified purple-themed illustrations
const illustrations: Record<string, JSX.Element> = {
  "Auto-Triage": (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Document */}
      <rect x="80" y="30" width="120" height="150" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
      <line x1="100" y1="80" x2="180" y2="80" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round"/>
      <line x1="100" y1="100" x2="170" y2="100" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round"/>
      <line x1="100" y1="120" x2="160" y2="120" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round"/>
      {/* Checkmark */}
      <circle cx="92" cy="80" r="6" fill="#6366f1"/>
      <polyline points="89,80 91,82 95,78" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="92" cy="100" r="6" fill="#6366f1"/>
      <polyline points="89,100 91,102 95,98" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Avatar 1 - top */}
      <circle cx="140" cy="18" r="20" fill="#e2e8f0"/>
      <circle cx="140" cy="12" r="8" fill="#94a3b8"/>
      <ellipse cx="140" cy="28" rx="14" ry="9" fill="#94a3b8"/>
      {/* Avatar 2 - bottom left */}
      <circle cx="68" cy="148" r="22" fill="#e2e8f0"/>
      <circle cx="68" cy="141" r="9" fill="#94a3b8"/>
      <ellipse cx="68" cy="157" rx="15" ry="10" fill="#94a3b8"/>
      {/* Avatar 3 - bottom right */}
      <circle cx="216" cy="162" r="18" fill="#e2e8f0"/>
      <circle cx="216" cy="156" r="7" fill="#94a3b8"/>
      <ellipse cx="216" cy="170" rx="12" ry="8" fill="#94a3b8"/>
    </svg>
  ),
  "Reply Drafts": (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person */}
      <circle cx="170" cy="75" r="28" fill="#6366f1"/>
      <circle cx="170" cy="60" r="14" fill="#f8d7c4"/>
      <ellipse cx="170" cy="90" rx="24" ry="16" fill="#6366f1"/>
      {/* Document cards floating */}
      <rect x="40" y="20" width="80" height="60" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
      <line x1="54" y1="38" x2="106" y2="38" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="54" y1="50" x2="100" y2="50" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="110" cy="22" r="8" fill="#6366f1"/>
      <polyline points="107,22 109,24 113,20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="55" y="105" width="80" height="55" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
      <line x1="68" y1="120" x2="122" y2="120" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="68" y1="132" x2="116" y2="132" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="125" cy="107" r="8" fill="#6366f1"/>
      <polyline points="122,107 124,109 128,105" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Churn Signals": (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Exclamation mark */}
      <circle cx="180" cy="100" r="55" fill="#6366f1"/>
      <rect x="173" y="60" width="14" height="55" rx="7" fill="white"/>
      <circle cx="180" cy="130" r="9" fill="white"/>
      {/* Person */}
      <circle cx="78" cy="90" r="16" fill="#f8d7c4"/>
      <ellipse cx="78" cy="118" rx="22" ry="14" fill="#1e293b"/>
      <rect x="56" y="110" width="44" height="30" rx="4" fill="#1e293b"/>
      {/* Ground shadow */}
      <ellipse cx="180" cy="168" rx="55" ry="10" fill="#e2e8f0"/>
    </svg>
  ),
  "AI Workflows": (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Document */}
      <rect x="60" y="25" width="130" height="160" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
      {/* Colored rectangle */}
      <rect x="80" y="50" width="55" height="45" rx="4" fill="#6366f1"/>
      {/* Lines */}
      <line x1="80" y1="115" x2="170" y2="115" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round"/>
      <line x1="80" y1="130" x2="165" y2="130" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round"/>
      <line x1="80" y1="145" x2="155" y2="145" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round"/>
      {/* Brain circle - top right */}
      <circle cx="195" cy="45" r="28" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5"/>
      <circle cx="195" cy="38" r="10" fill="#94a3b8"/>
      <path d="M180 50 Q195 62 210 50" stroke="#94a3b8" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "AI Summary": (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Phone */}
      <rect x="130" y="10" width="90" height="175" rx="14" fill="#1e293b"/>
      <rect x="137" y="22" width="76" height="140" rx="6" fill="#6366f1"/>
      <rect x="155" y="165" width="40" height="5" rx="2.5" fill="#475569"/>
      {/* Person */}
      <circle cx="75" cy="80" r="18" fill="#f8d7c4"/>
      <rect x="53" y="108" width="44" height="50" rx="6" fill="#1e293b"/>
      <ellipse cx="75" cy="108" rx="22" ry="10" fill="#1e293b"/>
      {/* Code icon on phone */}
      <circle cx="173" cy="140" r="14" fill="#4f46e5"/>
      <text x="169" y="145" fontSize="14" fill="white">&lt;/&gt;</text>
      {/* Connector line */}
      <line x1="97" y1="100" x2="130" y2="110" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round"/>
    </svg>
  ),
  "Team Analytics": (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Floating cards */}
      <rect x="30" y="30" width="70" height="50" rx="6" fill="#6366f1"/>
      <rect x="110" y="20" width="55" height="40" rx="6" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5"/>
      <rect x="30" y="100" width="55" height="40" rx="6" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5"/>
      <rect x="110" y="80" width="70" height="50" rx="6" fill="#e0e7ff"/>
      {/* Person 1 */}
      <circle cx="220" cy="70" r="18" fill="#f8d7c4"/>
      <rect x="198" y="98" width="44" height="45" rx="6" fill="#64748b"/>
      {/* Person 2 sitting */}
      <circle cx="185" cy="138" r="14" fill="#f8d7c4"/>
      <rect x="165" y="162" width="40" height="5" rx="2" fill="#94a3b8"/>
      <rect x="158" y="152" width="68" height="20" rx="4" fill="#1e293b"/>
    </svg>
  ),
};

interface FeatureCardProps {
  feature: FeatureItem;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
      {/* Illustration area */}
      <div className="flex h-[220px] items-center justify-center bg-white p-4">
        <div className="h-full w-full max-w-[280px]">
          {illustrations[feature.label] ?? (
            <div className="flex h-full items-center justify-center text-slate-200">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="currentColor">
                <rect width="64" height="64" rx="8"/>
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Text */}
      <div className="border-t border-slate-100 px-5 py-5">
        <p className="mb-1.5 text-xs text-slate-400">{feature.label}</p>
        <p className="text-base font-bold leading-snug text-slate-900">{feature.title}</p>
      </div>
    </div>
  );
}
