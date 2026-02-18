import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      categoria: "Sobre a Psicoterapia",
      perguntas: [
        {
          q: "Como funciona a primeira sessão?",
          a: "Na primeira sessão, nos conhecemos e você compartilha o que te trouxe até aqui. É um momento de acolhimento onde vamos entender juntas se faz sentido iniciarmos o processo. Não há compromisso — é uma conversa inicial para avaliarmos a compatibilidade.",
        },
        {
          q: "Quanto tempo dura cada sessão de psicoterapia?",
          a: "As sessões de psicoterapia têm duração de 50 minutos. Esse é o tempo padrão que permite um trabalho profundo e ao mesmo tempo sustentável para ambas as partes.",
        },
        {
          q: "Com que frequência devo fazer terapia?",
          a: "A frequência é combinada entre nós, considerando suas necessidades e disponibilidade. O mais comum é semanal ou quinzenal. Conforme o processo avança, podemos ajustar a frequência.",
        },
        {
          q: "Quanto tempo dura um processo terapêutico?",
          a: "Não há um tempo fixo. Cada pessoa e cada demanda têm seu ritmo. Algumas questões podem ser trabalhadas em alguns meses, outras pedem mais tempo. O importante é respeitar seu processo sem pressa.",
        },
        {
          q: "Qual é a diferença entre psicólogo e psiquiatra?",
          a: "O psicólogo trabalha através da psicoterapia (conversa terapêutica, técnicas psicológicas). O psiquiatra é médico e pode prescrever medicamentos. Em muitos casos, os dois profissionais trabalham em conjunto.",
        },
      ],
    },
    {
      categoria: "Atendimento Online e Presencial",
      perguntas: [
        {
          q: "O atendimento online funciona tão bem quanto o presencial?",
          a: "Sim! Estudos científicos mostram que a terapia online tem a mesma eficácia que a presencial. O que importa é o vínculo terapêutico e o compromisso com o processo, independente do formato.",
        },
        {
          q: "Como funciona o atendimento online?",
          a: "Utilizamos plataformas seguras como Google Meet ou Zoom. Você precisa de um local privado, conexão estável à internet e um dispositivo (computador, tablet ou celular). Envio o link antes da sessão.",
        },
        {
          q: "Posso alternar entre online e presencial?",
          a: "Sim, é possível. Algumas pessoas preferem sessões presenciais em alguns momentos e online em outros, conforme a rotina. Podemos combinar a melhor forma para você.",
        },
        {
          q: "Onde fica o consultório presencial?",
          a: "O consultório fica em [BAIRRO/CIDADE - a ser preenchido]. É um espaço acolhedor e reservado, preparado para seu conforto. Compartilho o endereço completo após o agendamento.",
        },
      ],
    },
    {
      categoria: "Práticas Integrativas",
      perguntas: [
        {
          q: "As práticas integrativas substituem a psicoterapia?",
          a: "Não. As práticas integrativas (Reiki, Florais, Cromoterapia, etc.) são complementares. Elas podem apoiar seu processo terapêutico, mas não substituem o acompanhamento psicológico quando necessário.",
        },
        {
          q: "Preciso acreditar nas práticas integrativas para fazer?",
          a: "As práticas são sempre sugeridas quando fazem sentido para você e suas crenças. Nunca imponho ou insisto em algo que não ressoe com você. Respeito total à sua visão de mundo.",
        },
        {
          q: "Posso fazer apenas práticas integrativas sem psicoterapia?",
          a: "Sim, você pode optar por fazer apenas as práticas integrativas. Porém, se identificar que há questões emocionais que pedem um trabalho mais profundo, vou te orientar nesse sentido.",
        },
        {
          q: "Quanto tempo duram as sessões de práticas integrativas?",
          a: "Varia conforme a modalidade: Reiki (60 min), Florais (40-50 min), Cromoterapia (50 min), Radiestesia (50 min), Círculo da Vida (90 min), Humanoterapia (60 min).",
        },
      ],
    },
    {
      categoria: "Valores e Formas de Pagamento",
      perguntas: [
        {
          q: "Quanto custa cada sessão?",
          a: "Os valores variam conforme o tipo de atendimento (psicoterapia ou práticas integrativas). Entre em contato pelo WhatsApp e compartilho a tabela de valores atualizada.",
        },
        {
          q: "Quais formas de pagamento são aceitas?",
          a: "Aceito PIX, transferência bancária e cartão de crédito/débito. O pagamento pode ser feito por sessão ou em pacotes mensais, conforme combinarmos.",
        },
        {
          q: "Vocês aceitam convênio?",
          a: "Não trabalho diretamente com convênios. Porém, posso fornecer recibo para que você solicite reembolso junto ao seu plano (se ele oferecer essa opção).",
        },
        {
          q: "Há desconto para pagamento de pacotes?",
          a: "Sim, ofereço condições especiais para quem opta por fechar pacotes mensais. Podemos conversar sobre isso no primeiro contato.",
        },
      ],
    },
    {
      categoria: "Cancelamento e Remarcação",
      perguntas: [
        {
          q: "Como funciona o cancelamento de sessões?",
          a: "Solicitamos avisar com 24 horas de antecedência para remarcação sem cobrança. Cancelamentos com menos de 24h ou faltas sem aviso são cobrados.",
        },
        {
          q: "Posso remarcar uma sessão?",
          a: "Sim, é possível remarcar desde que avise com antecedência. Tentamos encontrar um novo horário que funcione para ambas dentro da mesma semana, quando possível.",
        },
        {
          q: "E se eu precisar pausar o processo por um tempo?",
          a: "Você tem autonomia para pausar o processo quando sentir necessidade. Conversamos sobre isso e, quando quiser retomar, basta entrar em contato.",
        },
      ],
    },
    {
      categoria: "Confidencialidade e Ética",
      perguntas: [
        {
          q: "Minhas informações são confidenciais?",
          a: "Sim, total sigilo profissional. Estou vinculada ao Código de Ética do Conselho Federal de Psicologia (CRP), que garante confidencialidade absoluta sobre tudo que é compartilhado nas sessões.",
        },
        {
          q: "Existem exceções ao sigilo?",
          a: "As únicas exceções previstas por lei são: risco iminente de vida (sua ou de terceiros) e ordem judicial. Fora isso, nada do que você contar será compartilhado.",
        },
        {
          q: "Vocês guardam prontuários?",
          a: "Sim, conforme determina o CFP, mantenho prontuários das sessões de forma segura e confidencial. Essas informações são de uso exclusivo profissional.",
        },
      ],
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
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre psicoterapia, práticas integrativas e o
              processo de atendimento
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs por Categoria */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {faqs.map((categoria, catIndex) => (
            <motion.div
              key={categoria.categoria}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl mb-6" style={{ color: '#C16005' }}>
                {categoria.categoria}
              </h2>

              <div className="space-y-4">
                {categoria.perguntas.map((faq, index) => {
                  const globalIndex = catIndex * 100 + index;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-white to-orange-50/20 rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setOpenIndex(isOpen ? null : globalIndex)
                        }
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-orange-50/30 transition-colors"
                      >
                        <span className="text-lg pr-4">{faq.q}</span>
                        <Plus
                          className={`h-5 w-5 flex-shrink-0 transition-transform ${
                            isOpen ? "rotate-45" : ""
                          }`}
                          style={{ color: '#F89538' }}
                        />
                      </button>

                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-5"
                        >
                          <p className="text-gray-600 leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Não encontrou resposta */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 lg:p-12 rounded-2xl shadow-sm text-center"
          >
            <h2 className="text-3xl mb-4">Não encontrou sua resposta?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ficarei feliz em esclarecer qualquer dúvida pelo WhatsApp
            </p>
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Tenho%20uma%20dúvida"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-lg text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: '#F89538' }}
            >
              Fazer uma Pergunta
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
