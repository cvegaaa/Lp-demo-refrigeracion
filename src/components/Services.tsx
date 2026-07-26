import { Wrench, Settings, Stethoscope, ArrowRight, Package } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/573135069433?text=Hola%20Refriaires%20Sinú%2C%20quiero%20información%20sobre%20sus%20servicios.";

const SERVICES = [
  {
    icon: Wrench,
    title: "Mantenimiento Preventivo y Correctivo",
    description:
      "Limpieza profunda, recarga de refrigerante y reparación de averías para alargar la vida útil de tus equipos residenciales y comerciales.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    features: ["Limpieza de filtros y coils", "Recarga de gas refrigerante", "Diagnóstico de fallas"],
  },
  {
    icon: Settings,
    title: "Instalación de Sistemas HVAC",
    description:
      "Instalación profesional de aire acondicionado residencial, comercial e industrial con normas técnicas y repuestos de calidad.",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e0676297c5?auto=format&fit=crop&w=800&q=80",
    features: ["Split, inverter y cassette", "Sistemas industriales", "Puesta en marcha garantizada"],
  },
  {
    icon: Stethoscope,
    title: "Diagnóstico y Soporte Industrial",
    description:
      "Evaluación técnica especializada para instalaciones industriales, con reportes detallados y provisión de repuestos originales.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    features: ["Auditoría energética", "Repuestos originales", "Soporte técnico continuo"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-cyan-600">
            Nuestros servicios
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Soluciones HVAC completas para tu hogar o empresa
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Desde un split residencial hasta sistemas industriales completos:
            cubrimos toda la cadena de climatización y refrigeración.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm shadow-lg">
                  <service.icon className="h-6 w-6 text-cyan-600" />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <Package className="h-4 w-4 shrink-0 text-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-600 transition-colors hover:text-cyan-700"
                >
                  Solicitar este servicio
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
