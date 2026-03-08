import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6">DentalCare</h3>
            <p className="text-white/80 mb-6">
              Sua saúde bucal é nossa prioridade. Cuidado odontológico completo e humanizado.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <a href="tel:+5511999999999" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div>(11) 99999-9999</div>
                  <div className="text-sm">WhatsApp disponível</div>
                </div>
              </a>
              <a href="mailto:contato@dentalcare.com.br" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>contato@dentalcare.com.br</div>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  Av. Paulista, 1000 - 5º andar<br />
                  São Paulo, SP - CEP 01310-100
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Horário de Atendimento</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Segunda a Sexta</div>
                  <div>8:00 - 19:00</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Sábados</div>
                  <div>8:00 - 14:00</div>
                </div>
              </div>
              <div className="text-sm mt-4">
                *Atendimento de emergência 24h
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Links Rápidos</h4>
            <div className="space-y-3">
              {[
                { label: "Início", href: "#hero" },
                { label: "Serviços", href: "#services" },
                { label: "Sobre", href: "#about" },
                { label: "Equipe", href: "#team" },
                { label: "Depoimentos", href: "#testimonials" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-center text-white/60 text-sm">
            <p>© 2024 DentalCare Odontologia. Todos os direitos reservados.</p>
            <p className="mt-2">CRO Clínica: CL 12345</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
