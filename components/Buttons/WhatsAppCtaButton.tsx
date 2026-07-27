import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  message?: string;
  phoneNumber?: string;
  text?: string;
  className?: string;
}

export default function WhatsAppCtaButton({
  message="Hi! I'm interested in your digital marketing services.",
  phoneNumber = "+919685892813",
  text = "Chat on WhatsApp",
  className = "",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#25D366]/80 px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 ${className}`}
    >
      <FaWhatsapp className="text-xl" />
      {text}
    </a>
  );
}