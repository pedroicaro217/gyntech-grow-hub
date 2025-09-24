import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-corporate-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-corporate-primary">GYNTECH</span>
              <span className="text-xs text-neutral-600 -mt-1">IT Solutions & Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-neutral-700 hover:text-corporate-primary transition-smooth">
              Início
            </Link>
            <Link to="/servicos" className="text-neutral-700 hover:text-corporate-primary transition-smooth">
              Serviços
            </Link>
            <Link to="/sobre" className="text-neutral-700 hover:text-corporate-primary transition-smooth">
              Sobre Nós
            </Link>
            <Link to="/contato" className="text-neutral-700 hover:text-corporate-primary transition-smooth">
              Contato
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <CustomButton variant="corporate" size="default" asChild>
              <a 
                href="https://os.gyntechit.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Área do Cliente
              </a>
            </CustomButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-neutral-700 hover:text-corporate-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/servicos" 
                className="text-neutral-700 hover:text-corporate-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                to="/sobre" 
                className="text-neutral-700 hover:text-corporate-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/contato" 
                className="text-neutral-700 hover:text-corporate-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
               <CustomButton variant="corporate" size="default" className="self-start" asChild>
                 <a 
                   href="https://os.gyntechit.com.br/"
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   Área do Cliente
                 </a>
               </CustomButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;