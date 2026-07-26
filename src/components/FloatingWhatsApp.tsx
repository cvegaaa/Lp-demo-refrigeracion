import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/573135069433?text=Hola%20Refriaires%20Sinú%2C%20quiero%20solicitar%20una%20cotización.";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-20" />
    </a>
  );
}
