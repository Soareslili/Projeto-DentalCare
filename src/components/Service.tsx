import { motion } from "framer-motion";
import { Smile, Scissors, Wrench, Baby, Sparkles, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/Button";

const services = [
  {
    icon: Smile,
    title: "Odontologia Geral e Cosmética",
    description: "Tratamentos completos para manter seu sorriso saudável e bonito.",
  },
  {
    icon: Scissors,
    title: "Procedimentos Cirúrgicos e Restauradores",
    description: "Cirurgias e reparos dentários com tecnologia avançada.",
  },
  {
    icon: Wrench,
    title: "Implantes Dentários",
    description: "Solução definitiva para substituir dentes perdidos com implantes de alta qualidade.",
  },
  {
    icon: Baby,
    title: "Odontopediatria",
    description: "Cuidado especializado e acolhedor para a saúde bucal das crianças.",
  },
  {
    icon: Sparkles,
    title: "Procedimentos Estéticos",
    description: "Clareamento, lentes de contato e transformações do sorriso.",
  },
  {
    icon: AlertCircle,
    title: "Atendimento de Emergência",
    description: "Atendimento rápido e eficiente para urgências odontológicas.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-ice-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secundary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            Soluções completas em odontologia para todas as suas necessidades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-secundary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">{service.description}</p>
                <Button variant="ghost" className="text-primary cursor-pointer hover:text-primary/80 p-0 h-auto font-medium">
                  Saiba Mais →
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};