import Image from "next/image";
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

        {/* Dashboard screenshot */}
        <div className="mt-12 flex justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white max-w-4xl w-full">
            {/* Browser-style top bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-6 w-48 rounded-md bg-white border border-slate-200 mx-auto flex items-center justify-center">
                  <span className="text-[10px] text-slate-400">app.csai.com/dashboard</span>
                </div>
              </div>
            </div>
            {/* Screenshot */}
            <Image
              src="/illustrations/features-dashboard.png"
              alt="CS AI Dashboard in action"
              width={900}
              height={560}
              className="w-full h-auto object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
