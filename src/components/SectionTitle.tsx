interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  inverted?: boolean;
}

export default function SectionTitle({ label, title, description, align = "center", inverted = false }: SectionTitleProps) {
  const isCenter = align === "center";
  return (
    <div className={`mb-14 max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {label && (
        <span className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
          inverted ? "bg-white/10 text-white" : "bg-blue-50 text-blue-600"
        }`}>
          {label}
        </span>
      )}
      <h2 className={`text-3xl font-semibold leading-tight md:text-4xl ${inverted ? "text-white" : "text-slate-800"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${inverted ? "text-blue-100" : "text-slate-500"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
