import { motion } from "motion/react";
import { Calendar, Video, MapPin, Clock, FileText, MessageCircle, ArrowRight } from "lucide-react";

export default function ComoFunciona() {
  const steps = [
    {
      number: "01",
      title: "Primeiro Contato",
      description:
        "Entre em contato pelo WhatsApp ou formulário. Vamos trocar as primeiras mensagens para entender sua demanda inicial.",
      icon: MessageCircle,
    },
    {
      number: "02",
      title: "Primeira Conversa",
      description:
        "Agendamos uma primeira sessão (presencial ou online) sem compromisso. É um momento de nos conhecermos e entender se faz sentido caminharmos juntas.",
      icon: Calendar,
    },
    {
      number: "03",
      title: "Definição do Processo",
      description:
        "Se ambas concordarem, definimos frequência, formato e modalidade(s) que farão parte do seu processo terapêutico.",
      icon: FileText,
    },
    {
      number: "04",
      title: "Acompanhamento Contínuo",
      description:
        "Iniciamos o processo respeitando seu ritmo, com sessões regulares e ajustes conforme sua evolução e necessidades.",
      icon: ArrowRight,
    },
  ];

  const modalidades = [
    {
      icon: Video,
      title: "Atendimento Online",
      description:
        "Realizado por plataforma segura (Google Meet, Zoom ou similar). Mesma eficácia do presencial com a comodidade de estar onde você preferir.",
      vantagens: [
        "Flexibilidade de local",
        "Economia de tempo com deslocamento",
        "Conforto do seu espaço",
        "Ideal para rotinas corridas",
      ],
    },
    {
      icon: MapPin,
      title: "Atendimento Presencial",
      description:
        "Realizado em consultório acolhedor e reservado. Algumas práticas integrativas são realizadas exclusivamente presencial.",
      vantagens: [
        "Contato presencial",
        "Espaço terapêutico dedicado",
        "Ideal para práticas corporais",
        "Ambiente preparado para acolhimento",
      ],
    },
  ];

  const praticas = [
    {
      title: "Sessões Regulares",
      description:
        "Frequência combinada entre terapeuta e cliente, geralmente semanal ou quinzenal.",
    },
    {
      title: "Duração",
      description:
        "Psicoterapia: 50 minutos | Práticas integrativas: 40-90 minutos dependendo da modalidade.",
    },
    {
      title: "Investimento",
      description:
        "Valores informados no primeiro contato. Aceito diferentes formas de pagamento.",
    },
    {
      title: "Cancelamento",
      description:
        "Solicitamos avisar com 24h de antecedência para remarcação sem cobrança.",
    },
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
              Como Funciona
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda o processo do primeiro contato até o acompanhamento contínuo
            </p>
          </motion.div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4">O Processo Passo a Passo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Do primeiro contato ao início do seu processo terapêutico
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: '#FFF4ED' }}
                    >
                      <Icon className="h-8 w-8" style={{ color: '#F89538' }} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div
                      className="text-4xl mb-2 opacity-20"
                      style={{ fontFamily: 'Playfair Display', color: '#F89538' }}
                    >
                      {step.number}
                    </div>
                    <h3 className="text-2xl mb-3" style={{ color: '#C16005' }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4">Modalidades de Atendimento</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Escolha o formato que melhor se adapta à sua rotina
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {modalidades.map((modalidade, index) => {
              const Icon = modalidade.icon;
              return (
                <motion.div
                  key={modalidade.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: '#FFF4ED' }}
                  >
                    <Icon className="h-8 w-8" style={{ color: '#F89538' }} />
                  </div>
                  <h3 className="text-2xl mb-4">{modalidade.title}</h3>
                  <p className="text-gray-600 mb-6">{modalidade.description}</p>
                  <div>
                    <h4 className="mb-3 text-sm" style={{ color: '#C16005' }}>
                      Vantagens:
                    </h4>
                    <div className="space-y-2">
                      {modalidade.vantagens.map((vantagem, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: '#F89538' }}
                          />
                          <span className="text-gray-700">{vantagem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Informações Práticas */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4">Informações Práticas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detalhes importantes sobre frequência, duração e valores
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {praticas.map((pratica, index) => (
              <motion.div
                key={pratica.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-orange-50/50 to-white p-6 rounded-xl"
              >
                <h3 className="text-xl mb-3" style={{ color: '#C16005' }}>
                  {pratica.title}
                </h3>
                <p className="text-gray-600">{pratica.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compromissos */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 lg:p-12 rounded-2xl shadow-sm"
          >
            <h2 className="text-3xl mb-6 text-center">
              Meu Compromisso com Você
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: '#F89538' }} />
                <div>
                  <h4 className="mb-1">Pontualidade</h4>
                  <p className="text-gray-600">
                    Respeito seu tempo e garanto que as sessões iniciem e terminem
                    no horário combinado.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileText className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: '#F89538' }} />
                <div>
                  <h4 className="mb-1">Sigilo Profissional</h4>
                  <p className="text-gray-600">
                    Total confidencialidade conforme o Código de Ética do
                    Conselho Federal de Psicologia.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageCircle className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: '#F89538' }} />
                <div>
                  <h4 className="mb-1">Acolhimento</h4>
                  <p className="text-gray-600">
                    Um espaço seguro, sem julgamentos, onde você pode ser
                    autêntico(a) e expressar suas emoções livremente.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl mb-6">
              Ficou alguma dúvida?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Entre em contato para esclarecer qualquer questão
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Tenho%20algumas%20dúvidas%20sobre%20como%20funciona"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: '#F89538' }}
              >
                Tirar dúvidas no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
