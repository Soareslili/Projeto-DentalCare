import { motion } from "framer-motion";
import dentist1 from "../assets/Dentista1.png";
import dentist2 from "../assets/Dentista2.png";
import dentist3 from "../assets/Dentista3.png";

const team = [
  {
    name: "Dr. Ricardo Santos",
    specialty: "Implantodontia",
    crm: "CRO-SP 12345",
    image: dentist1,
  },
  {
    name: "Dra. Juliana Martins",
    specialty: "Ortodontia",
    crm: "CRO-SP 23456",
    image: dentist2,
  },
  {
    name: "Dr. Felipe Oliveira",
    specialty: "Endodontia",
    crm: "CRO-SP 34567",
    image: dentist3,
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">
            Nossa Equipe
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profissionais experientes e dedicados ao seu sorriso
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading text-xl font-semibold text-secondary mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-1">{member.specialty}</p>
                <p className="text-sm text-muted-foreground">{member.crm}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
