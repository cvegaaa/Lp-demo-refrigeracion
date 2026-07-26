import { useState, type FormEvent } from "react";
import { MessageCircle, Send, CheckCircle2, Loader2 } from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

const SERVICES = [
  "Mantenimiento preventivo",
  "Mantenimiento correctivo / reparación",
  "Instalación residencial",
  "Instalación comercial / industrial",
  "Diagnóstico técnico especializado",
  "Repuestos y repotenciación",
];

export default function Booking() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    service: SERVICES[0],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const text =
      `*Nueva solicitud de cotización — Refriaires Sinú*%0A%0A` +
      `*Nombre:* ${encodeURIComponent(form.name)}%0A` +
      `*Teléfono:* ${encodeURIComponent(form.phone)}%0A` +
      `*Servicio:* ${encodeURIComponent(form.service)}%0A` +
      `*Mensaje:* ${encodeURIComponent(form.message || "Sin mensaje adicional")}`;

    const url = `https://wa.me/573135069433?text=${text}`;

    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus("sent");
      setForm({ name: "", phone: "", service: SERVICES[0], message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 600);
  };

  return (
    <section id="reservar" className="relative overflow-hidden bg-slate-900 py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-slate-900 to-cyan-950" />
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-cyan-400">
              Reserva directa
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Agenda tu servicio técnico en menos de un minuto
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Completa el formulario y te contactamos por WhatsApp con tu cotización
              personalizada. Sin esperas, sin filas, sin intermediarios.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Respuesta el mismo día",
                "Cotización sin compromiso",
                "Técnicos certificados en Montería y Córdoba",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md sm:p-9">
            {status === "sent" ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="h-16 w-16 text-cyan-400" />
                <h3 className="mt-5 text-2xl font-bold text-white">¡Solicitud enviada!</h3>
                <p className="mt-2 text-slate-300">
                  Abriendos WhatsApp para confirmar tu cotización…
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-200">
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ej. Juan Pérez"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-slate-200">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Ej. 300 123 4567"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-slate-200">
                    Servicio requerido
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                  >
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="bg-slate-800">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-slate-200">
                    Detalle del servicio (opcional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Cuéntanos qué equipo necesitas revisar, marca, modelo, etc."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-[1.02] hover:shadow-emerald-500/50 disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enviando…
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Enviar y cotizar por WhatsApp
                    </>
                  )}
                </button>

                <a
                  href="https://wa.me/573135069433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/5"
                >
                  <MessageCircle className="h-4 w-4" />
                  O escríbenos directamente
                </a>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
