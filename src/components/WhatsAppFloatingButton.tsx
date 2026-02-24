import { WHATSAPP_URL } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const WhatsAppFloatingButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com especialista no WhatsApp"
      className="fixed bottom-6 right-6 z-[70] h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
};
