import { MessageCircle, Phone, MapPin, Star, Wrench, ShieldCheck, Clock } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/573135069433?text=Hola%20Refriaires%20Sinú%2C%20quiero%20solicitar%20una%20cotización.";

const TRUST_BADGES = [
  { icon: Wrench, label: "Técnicos certificados" },
  { icon: ShieldCheck, label: "Garantía en todo servicio" },
  { icon: Clock, label: "Atención rápida en Córdoba" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-900"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80"
          alt="Sistema de aire acondicionado HVAC"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-16 sm:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="flex items-center gap-1 text-cyan-300">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-cyan-400 text-cyan-400" />
              ))}
            </span>
            <span className="text-sm font-medium text-cyan-100">
              Servicio técnico líder en Montería y Córdoba
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Aire acondicionado que{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
              nunca te falla
            </span>{" "}
            en el calor del Sinú
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Mantenimiento, instalación y diagnóstico especializado de equipos HVAC
            residenciales e industriales. Respuesta rápida, repuestos originales y
            técnicos certificados en Montería, Córdoba.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 hover:shadow-emerald-500/50"
            >
              <MessageCircle className="h-5 w-5" />
              Cotizar por WhatsApp
            </a>
            <a
              href="tel:+573135069433"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              +57 313 5069433
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-cyan-400" />
            Calle 41 #4-31, Barrio Nariño — Montería, Córdoba
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2.5">
                <badge.icon className="h-5 w-5 text-cyan-400" />
                <span className="text-sm font-medium text-slate-300">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}
