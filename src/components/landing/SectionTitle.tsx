// ============================================================
// src/components/landing/SectionTitle.tsx — Sprint 3
// Reusable section header: eyebrow label + heading + subheading.
// ============================================================

interface SectionTitleProps {
  label?:       string;
  title:        string;
  description?: string;
  align?:       "center" | "left";
  inverted?:    boolean;
}

export default function SectionTitle({
  label,
  title,
  description,
  align     = "center",
  inverted  = false,
}: SectionTitleProps) {
  const isCenter = align === "center";
  return (
    <div className={`mb-14 max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {label && (
        <span
          className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
            inverted ? "bg-white/15 text-white" : "bg-indigo-50 text-indigo-600"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl font-bold leading-tight md:text-4xl ${
          inverted ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            inverted ? "text-indigo-100" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
