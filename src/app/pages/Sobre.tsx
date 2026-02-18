import { motion } from "motion/react";
import { Award, Heart, BookOpen, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Sobre() {
  const valores = [
    {
      icon: Heart,
      title: "Acolhimento",
      description: "Um espaço seguro onde você pode ser autêntico(a) sem julgamentos.",
    },
    {
      icon: BookOpen,
      title: "Respeito ao Processo",
      description: "Cada pessoa tem seu tempo e ritmo. Caminharemos respeitando sua singularidade.",
    },
    {
      icon: Sparkles,
      title: "Abordagem Integrativa",
      description: "Combinando psicoterapia com práticas complementares quando faz sentido.",
    },
    {
      icon: Award,
      title: "Sigilo Profissional",
      description: "Total confidencialidade e ética no cuidado com sua história.",
    },
  ];

  const formacao = [
    "Psicóloga (CRP XX/XXXXX)",
    "Especialização em Psicologia Clínica",
    "Formação em Terapia Integrativa",
    "Reiki Master",
    "Terapeuta Floral",
    "Formação em Cromoterapia",
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-orange-50/30 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Sobre <span style={{ color: '#C16005' }}>Germanda d'Orsi</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Psicóloga e terapeuta com abordagem integrativa, dedicada ao
              cuidado emocional com acolhimento e respeito.
            </p>
          </motion.div>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1764192114257-ae9ecf97eb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwbWluZGZ1bG5lc3MlMjBjYWxtfGVufDF8fHx8MTc3MTMzMDI5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Germanda d'Orsi"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl mb-6">Minha Trajetória</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Minha jornada na psicologia nasceu de um desejo profundo de
                  compreender o ser humano em sua integralidade — não apenas a
                  mente, mas também as emoções, o corpo e a energia que nos move.
                </p>
                <p>
                  Ao longo dos anos, percebi que a transformação genuína acontece
                  quando conseguimos unir diferentes saberes: a ciência da
                  psicologia com práticas milenares de cuidado e equilíbrio.
                </p>
                <p>
                  Hoje, meu trabalho é construir pontes — entre você e seu
                  autoconhecimento, entre a dor e a ressignificação, entre o que
                  te paralisa e o que te move adiante.
                </p>
                <p>
                  Acredito que cada pessoa traz consigo recursos internos
                  poderosos. Meu papel é criar um espaço seguro onde você possa
                  reconhecer, fortalecer e utilizar esses recursos no seu próprio
                  ritmo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4">Valores que guiam meu trabalho</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Princípios que fundamentam cada atendimento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => {
              const Icon = valor.icon;
              return (
                <motion.div
                  key={valor.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-sm text-center"
                >
                  <div
                    className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#FFF4ED' }}
                  >
                    <Icon className="h-8 w-8" style={{ color: '#F89538' }} />
                  </div>
                  <h3 className="text-xl mb-3">{valor.title}</h3>
                  <p className="text-gray-600">{valor.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formação */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl mb-4">Formação e Qualificações</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-orange-50/50 to-white p-8 rounded-2xl shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formacao.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#F89538' }}
                  />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 text-center text-gray-600"
          >
            <p>
              Em constante atualização através de supervisões, cursos e
              formações complementares.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl mb-6">
              Quer saber se posso te ajudar?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Agende uma primeira conversa sem compromisso
            </p>
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Vi%20seu%20site%20e%20gostaria%20de%20saber%20mais"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-lg text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: '#F89538' }}
            >
              Entrar em Contato
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
