import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-400 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="white">
                <circle cx="5" cy="5" r="2.5"/>
                <circle cx="11" cy="5" r="2.5"/>
                <circle cx="5" cy="11" r="2.5"/>
                <circle cx="11" cy="11" r="2.5"/>
              </svg>
            </div>
            <span className="font-medium text-slate-600">CSAI Client</span>
          </div>
          <p>Sprint 1 — Setup & Foundation · Placeholder, bukan UI final</p>
          <p>© 2025 FE Intern</p>
        </div>
      </Container>
    </footer>
  );
}
