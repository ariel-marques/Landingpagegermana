import { Link } from "react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl" style={{ fontFamily: 'Playfair Display' }}>
                <span style={{ color: '#C16005' }}>Germanda</span>{" "}
                <span className="text-gray-700">d'Orsi</span>
              </span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Psicoterapia com abordagem integrativa e acolhedora para ansiedade, 
              esgotamento emocional, autoestima e fases de transição.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/germanda.dorsi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:contato@germandadorsi.com.br"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="mb-4 text-gray-900">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-gray-600 hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-600 hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-gray-600 hover:text-primary transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-4 text-gray-900">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 text-gray-600">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-600">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>contato@germandadorsi.com.br</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-600">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Atendimento online e presencial</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Germanda d'Orsi. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            CRP XX/XXXXX - Psicóloga
          </p>
        </div>
      </div>
    </footer>
  );
}
