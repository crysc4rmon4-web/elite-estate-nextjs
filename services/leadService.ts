// services/leadService.ts
import { CONFIG } from '../config/data';

export const sendWhatsAppLead = (interest: string) => {
  const message = `Hello, I am interested in more information about: ${interest}`;
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${CONFIG.contact.whatsapp}?text=${encoded}`;
  window.open(url, '_blank');
};