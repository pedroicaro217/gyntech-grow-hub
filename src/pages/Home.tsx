import { ArrowRight, CheckCircle, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { CustomButton } from "@/components/ui/custom-button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-corporate-primary via-neutral-800 to-corporate-primary py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Tecnologia que organiza e impulsiona o seu negócio.
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              De um sistema de gestão completo a uma infraestrutura de TI robusta, 
              a GYNTECH é a parceira ideal para o crescimento da sua empresa.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CustomButton variant="erp" size="xl" asChild>
                <a 
                  href="https://wa.me/5562999999999?text=Olá! Gostaria de solicitar uma demonstração do GYNTECH Gestor."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>Pedir Demonstração</span>
                  <ArrowRight size={20} />
                </a>
              </CustomButton>
              
              <CustomButton variant="it-outline" size="xl" asChild>
                <Link to="/servicos" className="flex items-center space-x-2">
                  <span>Ver Serviços de TI</span>
                  <ArrowRight size={20} />
                </Link>
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-corporate-primary mb-4">
              Nossas Soluções
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Oferecemos tecnologia completa para organizar e fazer seu negócio crescer
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ERP System */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-erp-primary hover:shadow-erp transition-smooth">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-erp-secondary rounded-xl flex items-center justify-center mr-4">
                  <div className="w-8 h-8 bg-erp-primary rounded-lg"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-erp-primary">GYNTECH Gestor</h3>
                  <p className="text-neutral-600">Sistema ERP Completo</p>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 mb-6">
                O controle total do seu comércio. Sistema de gestão completo com PDV ágil, 
                controle de estoque inteligente e financeiro simplificado.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  "PDV Rápido e Intuitivo",
                  "Gestão Completa de Estoque",
                  "Controle Financeiro Integrado",
                  "Relatórios Gerenciais"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-erp-primary" size={20} />
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <CustomButton variant="erp" size="lg" className="w-full" asChild>
                <a 
                  href="https://wa.me/5562999999999?text=Quero conhecer o GYNTECH Gestor!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Demonstração
                </a>
              </CustomButton>
            </div>

            {/* IT Services */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-it-primary hover:shadow-it transition-smooth">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-it-secondary rounded-xl flex items-center justify-center mr-4">
                  <div className="w-8 h-8 bg-it-primary rounded-lg"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-it-primary">Consultoria em TI</h3>
                  <p className="text-neutral-600">Infraestrutura & Suporte</p>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 mb-6">
                Infraestrutura robusta e segura para o seu negócio. Desde redes corporativas 
                até segurança digital e suporte especializado.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  "Gestão de Servidores e Redes",
                  "Segurança Digital Avançada",
                  "E-mails Corporativos (Workplaces)",
                  "Suporte Técnico Especializado"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-it-primary" size={20} />
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <CustomButton variant="it" size="lg" className="w-full" asChild>
                <a 
                  href="https://wa.me/5562999999999?text=Preciso de consultoria em TI para minha empresa!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento
                </a>
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-corporate-primary mb-4">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Veja como a GYNTECH tem transformado negócios em todo Goiás
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-corporate-primary mb-4">
              Por que escolher a GYNTECH?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Nossos diferenciais que fazem a diferença no seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-corporate-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-corporate-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-corporate-primary mb-4">
                Atendimento Próximo e Personalizado
              </h3>
              <p className="text-neutral-600">
                Conhecemos as necessidades do pequeno e médio empresário e oferecemos 
                suporte dedicado e personalizado.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-corporate-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-corporate-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-corporate-primary mb-4">
                Foco no Crescimento do seu Negócio
              </h3>
              <p className="text-neutral-600">
                Nossas soluções são pensadas para organizar processos e impulsionar 
                o crescimento sustentável da sua empresa.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-corporate-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-corporate-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-corporate-primary mb-4">
                Melhor Custo-Benefício
              </h3>
              <p className="text-neutral-600">
                Tecnologia acessível e de qualidade, com o melhor custo-benefício 
                do mercado para o seu segmento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-corporate-primary to-neutral-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como a tecnologia pode organizar 
            e impulsionar o crescimento da sua empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton variant="erp" size="xl" asChild>
              <a 
                href="https://wa.me/5562999999999?text=Quero conhecer as soluções da GYNTECH!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            </CustomButton>
            
            <CustomButton variant="corporate-outline" size="xl" asChild>
              <Link to="/contato">
                Enviar Mensagem
              </Link>
            </CustomButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;