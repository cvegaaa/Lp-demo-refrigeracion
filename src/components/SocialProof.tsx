import { Star, Quote, MapPin, ThumbsUp, Users, CheckCircle2 } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Carlos Martínez",
    role: "Restaurante · Montería",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote:
      "El aire del local falló un viernes a mitad de almuerzo. Refriaires Sinú llegó en menos de dos horas y lo dejó funcionando. Profesionales de verdad.",
    rating: 5,
  },
  {
    name: "Andrés Gómez",
    role: "Gerente comercial · Córdoba",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote:
      "Instalaron tres equipos industriales en nuestra bodega. Trabajo limpio, puntual y con garantía. La mejor inversión que hicimos este año.",
    rating: 5,
  },
];

const STATS = [
  { icon: Users, value: "500+", label: "Servicios completados" },
  { icon: ThumbsUp, value: "98%", label: "Clientes satisfechos" },
  { icon: CheckCircle2, value: "10+", label: "Años de experiencia" },
  { icon: MapPin, value: "Toda", label: "Cobertura en Córdoba" },
];

export default function SocialProof() {
  return (
    <section id="testimonios" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-cyan-600">
            Confianza comprobada
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Lo que dicen nuestros clientes en Córdoba
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Alta demanda y reputación sólida en directorios locales y redes sociales
            respaldan cada servicio que realizamos.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md hover:shadow-sky-500/10"
            >
              <stat.icon className="mx-auto h-8 w-8 text-cyan-500" />
              <p className="mt-3 text-3xl font-extrabold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-slate-100" />
              <div className="flex items-center gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 text-lg leading-relaxed text-slate-700">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-cyan-100"
                />
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
