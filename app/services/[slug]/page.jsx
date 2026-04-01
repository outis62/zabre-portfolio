import { notFound } from "next/navigation";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { services, getServiceBySlug } from "@/utils/services";

// SSG
export function generateStaticParams() {
return services.map((s) => ({ slug: s.slug }));
}

// SEO
export function generateMetadata({ params }) {
const service = getServiceBySlug(params.slug);

if (!service) {
return {
title: "Service not found",
description: "This service does not exist.",
};
}

return {
title: `${service.title} | Services`,
description: service.tagline,
openGraph: {
title: service.title,
description: service.tagline,
url: `/services/${service.slug}`,
},
};
}

export default function ServicePage({ params }) {
const idx = services.findIndex((s) => s.slug === params.slug);

if (idx === -1) return notFound();

const service = services[idx];
const prev = services[idx - 1] ?? null;
const next = services[idx + 1] ?? null;

return (
<main className="min-h-screen py-16 xl:py-24">
  <div className="container mx-auto px-6 xl:px-0">

    <Link href="/services"
      className="inline-flex items-center gap-2 text-white/50 hover:text-[#e8c97e] transition-colors duration-300 mb-12 group">
    <BsArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
    <span className="text-sm tracking-wide uppercase">All services</span>
    </Link>

    <div
      className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6 mb-16 border-b border-white/10 pb-16">
      <div>
        <span className="text-7xl font-extrabold text-outline text-transparent select-none leading-none">
          {service.num}
        </span>
        <h1 className="text-4xl xl:text-6xl font-bold text-white mt-4 leading-tight">
          {service.title}
        </h1>
        <p className="text-[#e8c97e] text-lg mt-3">{service.tagline}</p>
      </div>

      <Link href="/contact"
        className="self-start xl:self-auto inline-flex items-center gap-3 bg-[#e8c97e] text-primary font-semibold px-8 py-4 rounded-full hover:bg-[#e8c97e]/90 transition-colors duration-300 whitespace-nowrap">
      Start a project
      <BsArrowLeft className="rotate-180" />
      </Link>
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">

      <div className="flex flex-col gap-10">
        <div>
          <h2 className="text-xs uppercase tracking-widest text-white/40 mb-4">Overview</h2>
          <p className="text-white/70 text-lg leading-relaxed">{service.longDescription}</p>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-widest text-white/40 mb-6">What you get</h2>
          <ul className="flex flex-col gap-4">
            {service.deliverables.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span
                className="mt-1 w-5 h-5 rounded-full border border-[#e8c97e] flex-shrink-0 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#e8c97e]" />
              </span>
              <span className="text-white/70">{item}</span>
            </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xs uppercase tracking-widest text-white/40 mb-6">Tech & tools</h2>
        <div className="flex flex-wrap gap-3">
          {service.stack.map((tech, i) => (
          <span key={i}
            className="px-5 py-2 border border-white/10 rounded-full text-white/70 text-sm hover:border-[#e8c97e] hover:text-[#e8c97e] transition-colors duration-300">
            {tech}
          </span>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-24 pt-12 border-t border-white/10 flex justify-between items-center">
      <div>
        {prev && (
        <Link href={`/services/${prev.slug}`}
          className="flex items-center gap-3 text-white/40 hover:text-[#e8c97e] transition-colors duration-300 group">
        <BsArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="text-sm">{prev.title}</span>
        </Link>
        )}
      </div>
      <div>
        {next && (
        <Link href={`/services/${next.slug}`}
          className="flex items-center gap-3 text-white/40 hover:text-[#e8c97e] transition-colors duration-300 group">
        <span className="text-sm">{next.title}</span>
        <BsArrowLeft className="rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
        )}
      </div>
    </div>

  </div>
</main>
);
}