import { MapPin, Phone, Clock, Snowflake, Award, Users } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Award,
    title: "Técnicos certificados",
    description: "Personal capacitado en marcas líderes del mercado HVAC.",
  },
  {
    icon: Snowflake,
    title: "Repuestos originales",
    description: "Usamos solo componentes garantizados para cada reparación.",
  },
  {
    icon: Users,
    title: "Atención B2B y residencial",
    description: "Servicio adaptado a hogares, comercios e industrias.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl shadow-slate-900/10">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb18f154d?auto=format&fit=crop&w=900&q=80"
                alt="Equipo técnico de Refriaires Sinú"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 p-6 text-white shadow-2xl shadow-cyan-500/30 sm:block">
              <p className="text-4xl font-extrabold">10+</p>
              <p className="text-sm font-medium text-cyan-50">años enfriando Córdoba</p>
            </div>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-cyan-600">
              Quiénes somos
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Refriaires Sinú: climatización confiable en el corazón de Montería
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Somos un equipo técnico especializado en aire acondicionado y refrigeración,
              con base en el Barrio Nariño de Montería. Atendemos clientes residenciales
              y corporativos en toda la región de Córdoba con rapidez, profesionalismo y
              garantía en cada trabajo.
            </p>

            <div className="mt-8 space-y-4">
              {HIGHLIGHTS.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                    <item.icon className="h-5 w-5 text-cyan-600" />
                  </span>
                  <div>
                    <p className="font-bold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-cyan-500" />
                <span className="text-sm font-medium text-slate-700">
                  Calle 41 #4-31, Barrio Nariño
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-cyan-500" />
                <span className="text-sm font-medium text-slate-700">Lun–Sáb · 7am–6pm</span>
              </div>
              <a
                href="tel:+573135069433"
                className="flex items-center gap-2 text-sm font-bold text-cyan-600 hover:text-cyan-700"
              >
                <Phone className="h-4 w-4" />
                +57 313 5069433
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
