import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-corporate-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-corporate-primary font-bold text-xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">GYNTECH</span>
                <span className="text-sm opacity-80">IT Solutions & Services</span>
              </div>
            </div>
            <p className="text-neutral-200 mb-4 max-w-md">
              Tecnologia que organiza e impulsiona o seu negócio. Especialistas em soluções de gestão 
              e infraestrutura de TI para pequenos e médios empresários.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-sm">Goiânia - GO</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">(62) 9 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">contato@gyntech.com.br</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-neutral-200">
              <li>GYNTECH Gestor (ERP)</li>
              <li>Consultoria em TI</li>
              <li>Infraestrutura de Redes</li>
              <li>Suporte Técnico</li>
              <li>Segurança Digital</li>
              <li>E-mails Corporativos</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm text-neutral-200">
              <li>
                <Link to="/" className="hover:text-white transition-smooth">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-white transition-smooth">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-white transition-smooth">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-white transition-smooth">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-neutral-300">
          <p>&copy; 2024 GYNTECH IT Solutions & Services. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;