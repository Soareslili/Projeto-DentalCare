import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";
import aboutImage from "../assets/ImgAbout.png";

export const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitação Enviada!",
      description: "Entraremos em contato em breve para confirmar sua consulta.",
    });
    setFormData({ name: "", phone: "", email: "" });
  };

  const benefits = [
    "Profissionais altamente qualificados",
    "Equipamentos de última geração",
    "Ambiente confortável e acolhedor",
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl  ">
              <img src={aboutImage} alt="Dentista atendendo paciente" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-bold">5000+</div>
              <div className="text-sm">Pacientes Satisfeitos</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-secundary mb-6">
                Cuidado Odontológico{" "}
                <span className="text-primary">Focado no Paciente</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nossa clínica oferece um ambiente acolhedor e profissional, onde cada paciente 
                recebe atenção personalizada. Combinamos tecnologia de ponta com cuidado humanizado 
                para garantir os melhores resultados.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="bg-[#D6EBE2] rounded-2xl p-6 space-y-4 mt-8">
              <h3 className="font-heading text-xl font-bold text-secundary">
                Agende Sua Consulta
              </h3>
              <Input
                placeholder="Nome Completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                placeholder="Telefone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <Input
                placeholder="E-mail"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Button type="submit" size="lg" className="w-full text-white">
                Solicitar Agendamento
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
