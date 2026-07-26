import { useEffect, useState } from "react";
import { Snowflake, Menu, X, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/573135069433?text=Hola%20Refriaires%20Sinú%2C%20quiero%20solicitar%20una%20cotización.";
const PHONE_DISPLAY = "+57 313 5069433";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Reservar", href: "#reservar" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 shadow-lg shadow-sky-500/30">
            <Snowflake className="h-6 w-6 text-white" strokeWidth={2.2} />
          </span>
          <span
            className={`text-lg font-extrabold tracking-tight transition-colors ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            Refriaires<span className="text-cyan-500"> Sinú</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-cyan-500 ${
                  scrolled ? "text-slate-600" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:+573135069433`}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              scrolled ? "text-slate-700 hover:text-cyan-600" : "text-white/90 hover:text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/30 transition-all hover:scale-105 hover:shadow-cyan-500/50"
          >
            Cotizar ahora
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${scrolled ? "text-slate-900" : "text-white"}`}
          aria-label="Menú"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl">
          <ul className="flex flex-col px-5 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-semibold text-slate-700 hover:text-cyan-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-3 text-center text-sm font-bold text-white"
              >
                Cotizar por WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
