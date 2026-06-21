import Image from "next/image";
import { powerfulFeatures } from "@/data/featuresData";

export default function PowerfulFeatures() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {powerfulFeatures.heading}
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {powerfulFeatures.items.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md overflow-hidden"
            >
              <div className="relative h-[180px] w-full bg-slate-50 flex items-center justify-center p-4 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={280}
                  height={200}
                  className="object-contain h-full w-auto transition group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
