import { motion } from "motion/react";
import { MessageCircle, Mail, Instagram, MapPin, Clock, Phone } from "lucide-react";

export default function Contato() {
  const contatos = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "A forma mais rápida de entrar em contato",
      info: "(11) 99999-9999",
      link: "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais",
      cta: "Iniciar conversa",
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Conteúdos sobre saúde mental e bem-estar",
      info: "@germanda.dorsi",
      link: "https://instagram.com/germanda.dorsi",
      cta: "Seguir no Instagram",
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Para dúvidas e informações",
      info: "contato@germandadorsi.com.br",
      link: "mailto:contato@germandadorsi.com.br",
      cta: "Enviar e-mail",
    },
  ];

  const horarios = [
    { dia: "Segunda a Sexta", horario: "08h às 20h" },
    { dia: "Sábado", horario: "09h às 14h" },
    { dia: "Domingo", horario: "Fechado" },
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
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estou aqui para esclarecer dúvidas e iniciar uma conversa sobre seu
              processo de bem-estar
            </p>
          </motion.div>
        </div>
      </section>

      {/* Canais de Contato */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contatos.map((contato, index) => {
              const Icon = contato.icon;
              return (
                <motion.div
                  key={contato.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gradient-to-br from-white to-orange-50/30 p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
                >
                  <div
                    className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: '#FFF4ED' }}
                  >
                    <Icon className="h-8 w-8" style={{ color: '#F89538' }} />
                  </div>
                  <h3 className="text-2xl mb-2">{contato.title}</h3>
                  <p className="text-gray-600 mb-4">{contato.description}</p>
                  <p className="mb-6" style={{ color: '#C16005' }}>
                    {contato.info}
                  </p>
                  <a
                    href={contato.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 transition-all duration-300 hover:bg-gray-50"
                    style={{ borderColor: '#F89538', color: '#F89538' }}
                  >
                    {contato.cta}
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Horários */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#FFF4ED' }}
                >
                  <Clock className="h-6 w-6" style={{ color: '#F89538' }} />
                </div>
                <h2 className="text-2xl">Horários de Atendimento</h2>
              </div>
              <div className="space-y-4">
                {horarios.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-gray-700">{item.dia}</span>
                    <span style={{ color: '#C16005' }}>{item.horario}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-600">
                * Atendimentos mediante agendamento prévio
              </p>
            </motion.div>

            {/* Localização */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#FFF4ED' }}
                >
                  <MapPin className="h-6 w-6" style={{ color: '#F89538' }} />
                </div>
                <h2 className="text-2xl">Localização</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="mb-2" style={{ color: '#C16005' }}>
                    Atendimento Online
                  </h3>
                  <p className="text-gray-600">
                    Atendo de qualquer lugar do Brasil através de plataformas
                    seguras (Google Meet, Zoom).
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h3 className="mb-2" style={{ color: '#C16005' }}>
                    Atendimento Presencial
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Consultório em [Bairro, Cidade - SP]
                  </p>
                  <p className="text-sm text-gray-500">
                    O endereço completo é compartilhado após o agendamento da
                    sessão.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-start space-x-2">
                    <Phone className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: '#F89538' }} />
                    <div>
                      <p className="text-gray-600">Estacionamento disponível</p>
                      <p className="text-gray-600">Fácil acesso por transporte público</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mensagem de Acolhimento */}
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
              Será um prazer conversar com você
            </h2>
            <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
              Entendo que buscar ajuda nem sempre é fácil. Quero que saiba que
              este espaço é acolhedor e sem julgamentos.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Entre em contato quando se sentir pronto(a). Estou aqui para
              caminhar ao seu lado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
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
              Vamos começar?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Clique no botão abaixo para iniciar nossa conversa
            </p>
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20conversa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ color: '#C16005' }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
