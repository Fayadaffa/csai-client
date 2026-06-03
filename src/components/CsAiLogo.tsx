type CsAiLogoIconProps = {
  size?: number;
  className?: string;
};

export function CsAiLogoIcon({ size = 32, className = "" }: CsAiLogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>

      <ellipse
        cx="40"
        cy="44"
        rx="34"
        ry="13"
        stroke="url(#ringGrad)"
        strokeWidth="3"
        fill="none"
        transform="rotate(-20 40 44)"
      />
      <circle cx="68" cy="28" r="4" fill="url(#ringGrad)" />
      <path
        d="M40 14 L44 32 L58 22 L46 36 L62 42 L44 44 L50 60 L40 48 L30 60 L36 44 L18 42 L34 36 L22 22 L36 32 Z"
        fill="url(#starGrad)"
      />
    </svg>
  );
}

type CsAiLogoProps = {
  size?: number;
  className?: string;
  textClassName?: string;
};

export default function CsAiLogo({
  size = 36,
  className = "flex items-center gap-2.5",
  textClassName = "text-2xl font-bold text-slate-800",
}: CsAiLogoProps) {
  return (
    <div className={className}>
      <CsAiLogoIcon size={size} />
      <span className={textClassName}>CS AI</span>
    </div>
  );
}
