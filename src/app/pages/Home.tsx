import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Heart,
  Brain,
  Users,
  Sparkles,
  ArrowRight,
  Check,
  MessageCircle,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      title: "Psicoterapia Individual",
      description: "Espaço acolhedor para autoconhecimento e transformação de padrões emocionais.",
      icon: Brain,
      category: "Psicoterapia",
    },
    {
      title: "Reiki",
      description: "Prática integrativa para equilíbrio energético e bem-estar complementar.",
      icon: Sparkles,
      category: "Práticas Integrativas",
    },
    {
      title: "Florais",
      description: "Apoio natural no processo terapêutico para questões emocionais.",
      icon: Heart,
      category: "Práticas Integrativas",
    },
  ];

  const painPoints = [
    {
      title: "Ansiedade e Sobrecarga",
      description: "Você sente que precisa dar conta de tudo e não consegue parar?",
      icon: Brain,
    },
    {
      title: "Autoestima e Autocobrança",
      description: "A sensação de não ser suficiente está te esgotando?",
      icon: Heart,
    },
    {
      title: "Relacionamentos",
      description: "Padrões que se repetem e afetam suas conexões?",
      icon: Users,
    },
    {
      title: "Fases de Transição",
      description: "Mudanças na vida que trazem desafios emocionais?",
      icon: Sparkles,
    },
  ];

  const process = [
    {
      number: "01",
      title: "Acolher",
      description: "Um espaço seguro e sigiloso para você se expressar sem julgamentos.",
    },
    {
      number: "02",
      title: "Compreender",
      description: "Identificar padrões emocionais e comportamentais que pedem transformação.",
    },
    {
      number: "03",
      title: "Construir",
      description: "Desenvolver recursos internos para lidar com os desafios no seu ritmo.",
    },
  ];

  const testimonials = [
    {
      text: "A terapia com a Germanda me ajudou a entender meus padrões de autocobrança e construir uma relação mais amorosa comigo mesma.",
      author: "M.S.",
      role: "Cliente",
    },
    {
      text: "Encontrei um espaço verdadeiramente acolhedor onde pude trabalhar minha ansiedade sem pressa, respeitando meu tempo.",
      author: "L.P.",
      role: "Cliente",
    },
    {
      text: "As práticas integrativas complementaram meu processo terapêutico de forma surpreendente. Sinto mais equilíbrio.",
      author: "R.T.",
      role: "Cliente",
    },
  ];

  const faqs = [
    {
      q: "Como funciona a primeira sessão?",
      a: "Na primeira sessão, nos conhecemos e você compartilha o que te trouxe até aqui. É um momento de acolhimento onde vamos entender juntas se faz sentido iniciarmos o processo.",
    },
    {
      q: "Quanto tempo dura cada sessão?",
      a: "As sessões de psicoterapia têm duração de 50 minutos. As práticas integrativas variam entre 40 a 60 minutos, dependendo da modalidade.",
    },
    {
      q: "Atende online ou presencial?",
      a: "Atendo nas duas modalidades. O atendimento online é tão efetivo quanto o presencial e oferece mais flexibilidade.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1620871013163-565054af6a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwc2Vzc2lvbiUyMHBlYWNlZnVsJTIwd29tYW58ZW58MXx8fHwxNzcxNDIyMjkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Terapia acolhedora"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <motion.div {...fadeInUp}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
                Psicoterapia com{" "}
                <span style={{ color: '#C16005' }}>acolhimento</span> e{" "}
                <span style={{ color: '#F89538' }}>cuidado</span>
              </h1>
            </motion.div>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-700 mb-8"
            >
              Um espaço seguro para trabalhar ansiedade, esgotamento emocional,
              autoestima e fases de transição. Você não precisa dar conta de
              tudo sozinho(a).
            </motion.p>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20conversa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: '#F89538' }}
              >
                Agendar uma Conversa
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                to="/servicos"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 transition-all duration-300 hover:bg-gray-50"
                style={{ borderColor: '#C16005', color: '#C16005' }}
              >
                Conhecer os Serviços
              </Link>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-6 text-sm text-gray-600"
            >
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5" style={{ color: '#F89538' }} />
                <span>Atendimento online</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5" style={{ color: '#F89538' }} />
                <span>Sigiloso e acolhedor</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5" style={{ color: '#F89538' }} />
                <span>No seu ritmo</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              Para quem é este trabalho?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Se você se identifica com algumas dessas situações, podemos
              caminhar juntas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#FFF4ED' }}
                  >
                    <Icon className="h-6 w-6" style={{ color: '#F89538' }} />
                  </div>
                  <h3 className="text-xl mb-2">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como Eu Trabalho */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              Como eu trabalho
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Um processo em três movimentos, respeitando sua singularidade
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="text-center">
                  <div
                    className="inline-block text-6xl mb-6 opacity-20"
                    style={{ fontFamily: 'Playfair Display', color: '#F89538' }}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-2xl mb-4" style={{ color: '#C16005' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-6 lg:-right-8">
                    <ArrowRight
                      className="h-6 w-6 text-gray-300"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-gradient-to-b from-orange-50/30 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              Principais Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Psicoterapia e práticas integrativas para seu bem-estar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: '#FFF4ED' }}
                  >
                    <Icon className="h-8 w-8" style={{ color: '#F89538' }} />
                  </div>
                  <div className="mb-2 text-sm" style={{ color: '#F89538' }}>
                    {service.category}
                  </div>
                  <h3 className="text-2xl mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link
                    to="/servicos"
                    className="inline-flex items-center transition-colors hover:underline"
                    style={{ color: '#C16005' }}
                  >
                    Saiba mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/servicos"
              className="inline-flex items-center px-8 py-4 rounded-lg border-2 transition-all duration-300 hover:bg-gray-50"
              style={{ borderColor: '#C16005', color: '#C16005' }}
            >
              Ver Todos os Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              O que dizem sobre o trabalho
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Depoimentos de pessoas que trilharam este caminho
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-orange-50/50 to-white p-8 rounded-xl"
              >
                <MessageCircle
                  className="h-10 w-10 mb-6 opacity-20"
                  style={{ color: '#F89538' }}
                />
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: '#F89538' }}
                  >
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Curto */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              Perguntas Frequentes
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl mb-3" style={{ color: '#C16005' }}>
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/faq"
              className="inline-flex items-center transition-colors hover:underline"
              style={{ color: '#C16005' }}
            >
              Ver todas as perguntas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-12 text-center shadow-xl"
            style={{ background: 'linear-gradient(135deg, #F89538 0%, #F5C245 100%)' }}
          >
            <h2 className="text-3xl sm:text-4xl mb-6 text-white">
              Vamos construir um caminho possível?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato para agendar uma primeira conversa. Sem compromisso,
              apenas para entendermos se faz sentido caminharmos juntas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20conversa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ color: '#C16005' }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white text-white transition-all duration-300 hover:bg-white/10"
              >
                Outras formas de contato
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
