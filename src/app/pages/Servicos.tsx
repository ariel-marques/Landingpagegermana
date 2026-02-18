import { motion } from "motion/react";
import { Brain, Sparkles, Heart, Droplet, Palette, Target, Circle, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function Servicos() {
  const servicosPsicoterapia = [
    {
      icon: Brain,
      title: "Psicoterapia Individual",
      description:
        "Espaço acolhedor para trabalhar questões emocionais, comportamentais e relacionais através da psicoterapia com abordagem integrativa.",
      detalhes: [
        "Ansiedade e transtornos relacionados",
        "Depressão e esgotamento emocional",
        "Autoestima e autoconhecimento",
        "Relacionamentos e vínculos afetivos",
        "Fases de transição e mudanças",
        "Luto e perdas",
      ],
      duracao: "50 minutos",
      formato: "Online ou presencial",
    },
  ];

  const servicosIntegrativos = [
    {
      icon: Sparkles,
      title: "Reiki",
      description:
        "Técnica japonesa de canalização de energia para promover equilíbrio físico, emocional e energético.",
      detalhes: [
        "Redução de ansiedade e estresse",
        "Equilíbrio energético",
        "Complemento ao processo terapêutico",
        "Bem-estar geral",
      ],
      duracao: "60 minutos",
      formato: "Presencial ou à distância",
    },
    {
      icon: Droplet,
      title: "Florais",
      description:
        "Essências florais para apoio no equilíbrio emocional, complementando o processo terapêutico.",
      detalhes: [
        "Ansiedade e medos",
        "Padrões emocionais repetitivos",
        "Transições e mudanças",
        "Questões de autoestima",
      ],
      duracao: "40-50 minutos (consulta)",
      formato: "Online ou presencial",
    },
    {
      icon: Palette,
      title: "Cromoterapia",
      description:
        "Uso terapêutico das cores para harmonização energética e bem-estar.",
      detalhes: [
        "Equilíbrio dos chakras",
        "Harmonização energética",
        "Apoio em processos emocionais",
      ],
      duracao: "50 minutos",
      formato: "Presencial",
    },
    {
      icon: Target,
      title: "Radiestesia",
      description:
        "Técnica para identificar e harmonizar desequilíbrios energéticos através de instrumentos de medição.",
      detalhes: [
        "Identificação de bloqueios energéticos",
        "Limpeza e harmonização de ambientes",
        "Equilíbrio dos campos energéticos",
      ],
      duracao: "50 minutos",
      formato: "Presencial ou à distância",
    },
    {
      icon: Circle,
      title: "Círculo da Vida",
      description:
        "Trabalho terapêutico de reconexão com diferentes áreas da vida para identificar desequilíbrios e promover integração.",
      detalhes: [
        "Mapeamento de áreas da vida",
        "Identificação de prioridades",
        "Planejamento de mudanças",
        "Autoconhecimento e clareza",
      ],
      duracao: "90 minutos",
      formato: "Online ou presencial",
    },
    {
      icon: Heart,
      title: "Humanoterapia",
      description:
        "Abordagem integrativa que trabalha corpo, mente e emoções de forma holística para o desenvolvimento humano.",
      detalhes: [
        "Integração corpo-mente-emoção",
        "Desenvolvimento pessoal",
        "Ressignificação de experiências",
        "Expansão da consciência",
      ],
      duracao: "60 minutos",
      formato: "Presencial",
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
              Serviços
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Psicoterapia e práticas integrativas para apoiar seu processo de
              autoconhecimento e bem-estar
            </p>
          </motion.div>
        </div>
      </section>

      {/* Psicoterapia */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: '#FFF4ED', color: '#F89538' }}>
              Categoria Principal
            </div>
            <h2 className="text-3xl sm:text-4xl mb-4">Psicoterapia</h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Atendimento psicológico individual com abordagem integrativa,
              acolhimento e respeito ao seu processo único.
            </p>
          </motion.div>

          <div className="space-y-8">
            {servicosPsicoterapia.map((servico, index) => {
              const Icon = servico.icon;
              return (
                <motion.div
                  key={servico.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gradient-to-br from-white to-orange-50/30 p-8 lg:p-12 rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start space-x-4 mb-6">
                        <div
                          className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: '#FFF4ED' }}
                        >
                          <Icon className="h-8 w-8" style={{ color: '#F89538' }} />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl mb-2">
                            {servico.title}
                          </h3>
                          <p className="text-gray-600">{servico.description}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="mb-3" style={{ color: '#C16005' }}>
                          O que trabalhamos:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {servico.detalhes.map((detalhe, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: '#F89538' }}
                              />
                              <span className="text-gray-700">{detalhe}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Duração</div>
                        <div className="font-medium">{servico.duracao}</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Formato</div>
                        <div className="font-medium">{servico.formato}</div>
                      </div>
                      <a
                        href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Psicoterapia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center px-6 py-3 rounded-lg text-white transition-all duration-300 hover:shadow-lg"
                        style={{ backgroundColor: '#F89538' }}
                      >
                        Quero agendar
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Práticas Integrativas */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: '#FFF4ED', color: '#F89538' }}>
              Complementares
            </div>
            <h2 className="text-3xl sm:text-4xl mb-4">Práticas Integrativas</h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Modalidades complementares que podem ser integradas ao seu processo
              terapêutico ou realizadas de forma independente, sempre respeitando
              suas necessidades e crenças.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicosIntegrativos.map((servico, index) => {
              const Icon = servico.icon;
              return (
                <motion.div
                  key={servico.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#FFF4ED' }}
                  >
                    <Icon className="h-7 w-7" style={{ color: '#F89538' }} />
                  </div>

                  <h3 className="text-2xl mb-3">{servico.title}</h3>
                  <p className="text-gray-600 mb-6">{servico.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm mb-3" style={{ color: '#C16005' }}>
                      Indicações:
                    </h4>
                    <div className="space-y-2">
                      {servico.detalhes.map((detalhe, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: '#F89538' }}
                          />
                          <span className="text-sm text-gray-700">{detalhe}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duração:</span>
                      <span className="font-medium">{servico.duracao}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Formato:</span>
                      <span className="font-medium">{servico.formato}</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20${servico.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg border-2 transition-all duration-300 hover:bg-gray-50"
                    style={{ borderColor: '#F89538', color: '#F89538' }}
                  >
                    Saber mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Observações */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-orange-50/50 to-white p-8 rounded-2xl"
          >
            <h3 className="text-2xl mb-4" style={{ color: '#C16005' }}>
              Observações Importantes
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>
                • As práticas integrativas são complementares e não substituem
                tratamento médico ou psicológico quando necessário.
              </p>
              <p>
                • Cada sessão é personalizada de acordo com suas necessidades e
                momento atual.
              </p>
              <p>
                • Respeitamos suas crenças e valores — as práticas são sugeridas
                apenas quando fazem sentido para você.
              </p>
              <p>
                • Agende uma primeira conversa para entendermos juntas qual
                caminho faz mais sentido para você.
              </p>
            </div>
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
              Pronto para começar?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Entre em contato para agendar uma conversa inicial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20conversa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: '#F89538' }}
              >
                Falar no WhatsApp
              </a>
              <Link
                to="/como-funciona"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 transition-all duration-300 hover:bg-gray-50"
                style={{ borderColor: '#C16005', color: '#C16005' }}
              >
                Entender como funciona
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
