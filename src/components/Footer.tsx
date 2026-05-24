import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-400 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-600">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 2a10 10 0 0 1 10 10"/>
                <path d="M12 22A10 10 0 0 1 2 12"/>
                <path d="m4.93 4.93 14.14 14.14"/>
              </svg>
            </div>
            <span className="font-semibold text-slate-600">CS AI</span>
          </div>
          <p>Secure AI assistant for SaaS customer success teams.</p>
          <p>© 2025 CS AI</p>
        </div>
      </Container>
    </footer>
  );
}
