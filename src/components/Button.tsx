interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 border-transparent",
  outline: "bg-transparent text-blue-600 border-blue-200 hover:border-blue-400 hover:bg-blue-50",
  ghost:   "bg-transparent text-slate-600 border-transparent hover:bg-slate-100",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({ children, variant = "primary", size = "md", href, className = "" }: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-xl border font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls}>{children}</button>;
}
