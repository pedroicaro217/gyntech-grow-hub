import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ContactForm";
import { CustomButton } from "@/components/ui/custom-button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-corporate-primary to-neutral-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            Estamos prontos para apresentar a solução ideal para sua empresa. 
            Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-corporate-primary mb-4">
              Como Preferir Falar Conosco?
            </h2>
            <p className="text-lg text-neutral-600">
              Escolha a forma mais conveniente para entrar em contato
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border-t-4 border-erp-primary">
              <div className="w-16 h-16 bg-erp-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="text-erp-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-erp-primary mb-4">WhatsApp</h3>
              <p className="text-neutral-600 mb-6">
                Fale conosco pelo WhatsApp e receba atendimento imediato
              </p>
              <CustomButton variant="erp" size="lg" className="w-full" asChild>
                <a 
                  href="https://wa.me/5562999999999?text=Olá! Gostaria de conhecer as soluções da GYNTECH."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chamar no WhatsApp
                </a>
              </CustomButton>
            </div>

            {/* Telefone */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border-t-4 border-it-primary">
              <div className="w-16 h-16 bg-it-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-it-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-it-primary mb-4">Telefone</h3>
              <p className="text-neutral-600 mb-6">
                Ligue para nós e converse diretamente com nossos especialistas
              </p>
              <CustomButton variant="it" size="lg" className="w-full" asChild>
                <a href="tel:+5562999999999">
                  (62) 9 9999-9999
                </a>
              </CustomButton>
            </div>

            {/* E-mail */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border-t-4 border-corporate-primary">
              <div className="w-16 h-16 bg-corporate-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-corporate-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-corporate-primary mb-4">E-mail</h3>
              <p className="text-neutral-600 mb-6">
                Envie um e-mail com sua dúvida ou solicitação
              </p>
              <CustomButton variant="corporate" size="lg" className="w-full" asChild>
                <a href="mailto:contato@gyntech.com.br">
                  contato@gyntech.com.br
                </a>
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-corporate-primary mb-4">
                  Informações de Contato
                </h3>
                <p className="text-neutral-600">
                  Nossa equipe está sempre disponível para atendê-lo da melhor forma possível.
                </p>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-corporate-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-corporate-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-primary mb-1">Localização</h4>
                    <p className="text-neutral-600">
                      Goiânia - GO<br />
                      Atendemos todo o estado de Goiás
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-corporate-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-corporate-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-primary mb-1">Telefone/WhatsApp</h4>
                    <p className="text-neutral-600">
                      <a 
                        href="tel:+5562999999999"
                        className="hover:text-corporate-primary transition-smooth"
                      >
                        (62) 9 9999-9999
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-corporate-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-corporate-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-primary mb-1">E-mail</h4>
                    <p className="text-neutral-600">
                      <a 
                        href="mailto:contato@gyntech.com.br"
                        className="hover:text-corporate-primary transition-smooth"
                      >
                        contato@gyntech.com.br
                      </a>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-corporate-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-corporate-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-primary mb-1">Horário de Atendimento</h4>
                    <p className="text-neutral-600">
                      Segunda à Sexta: 8:00 - 18:00<br />
                      Sábado: 8:00 - 12:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 p-6 bg-neutral-50 rounded-xl">
                <h4 className="font-semibold text-corporate-primary mb-4">Ações Rápidas</h4>
                <div className="space-y-3">
                  <CustomButton variant="erp-outline" size="default" className="w-full justify-start" asChild>
                    <a 
                      href="https://wa.me/5562999999999?text=Quero solicitar uma demonstração do GYNTECH Gestor!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demonstração do GYNTECH Gestor
                    </a>
                  </CustomButton>
                  
                  <CustomButton variant="it-outline" size="default" className="w-full justify-start" asChild>
                    <a 
                      href="https://wa.me/5562999999999?text=Preciso de consultoria em TI para minha empresa!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Orçamento de Serviços de TI
                    </a>
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;