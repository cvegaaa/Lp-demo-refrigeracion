import { Snowflake, MapPin, Phone, MessageCircle, Facebook } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/573135069433?text=Hola%20Refriaires%20Sinú%2C%20quiero%20solicitar%20una%20cotización.";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-14 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400">
                <Snowflake className="h-6 w-6 text-white" />
              </span>
              <span className="text-lg font-extrabold text-white">
                Refriaires<span className="text-cyan-500"> Sinú</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Climatización y refrigeración profesional para hogares, comercios e
              industrias en Montería y toda la región de Córdoba.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                Calle 41 #4-31, Barrio Nariño — Montería, Córdoba
              </li>
              <li>
                <a href="tel:+573135069433" className="flex items-center gap-3 hover:text-cyan-400">
                  <Phone className="h-4 w-4 shrink-0 text-cyan-500" />
                  +57 313 5069433
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-cyan-400"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-cyan-500" />
                  WhatsApp directo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Servicios</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#servicios" className="hover:text-cyan-400">Mantenimiento HVAC</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400">Instalación de equipos</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400">Diagnóstico industrial</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400">Repuestos originales</a></li>
            </ul>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium hover:text-cyan-400"
            >
              <Facebook className="h-4 w-4 text-cyan-500" />
              Síguenos en Facebook
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Refriaires Sinú · Montería, Córdoba — Colombia.
          Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
