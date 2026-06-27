import { actionSection } from "@/data/featuresData";

export default function ActionSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {actionSection.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
            {actionSection.description}
          </p>
        </div>
      </div>

      {/* Mockup container exactly matching Figma frame width 1152px */}
      <div className="mx-auto max-w-[1152px] mt-12">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white w-full flex flex-col">
          {/* Browser-style top bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200 flex-shrink-0">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 mx-4">
              <div className="h-6 w-full max-w-md rounded-md bg-white border border-slate-200 mx-auto flex items-center justify-center">
                <span className="text-[10px] text-slate-400">app.csai.com/dashboard</span>
              </div>
            </div>
          </div>
          {/* Figma Prototype Embed */}
          <div className="relative w-full aspect-[1152/720] overflow-hidden">
            <iframe
              src="https://embed.figma.com/proto/1vJoJ3RQJCII9Rudb35kZw/CS-AI---Compro?node-id=526-230&scaling=min-zoom&content-scaling=fixed&page-id=2%3A7&starting-point-node-id=526%3A3&embed-host=share&hide-ui=1"
              title="CS AI Interactive Figma Prototype"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}