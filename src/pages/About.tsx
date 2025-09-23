import { Users, Target, Award, Heart } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CustomButton } from "@/components/ui/custom-button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-corporate-primary to-neutral-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Sobre a GYNTECH
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            Conheça nossa história, valores e o compromisso que temos com o 
            sucesso e crescimento do seu negócio.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-corporate-primary mb-6">
                Nossa História
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
              <p className="text-xl mb-8">
                A <strong className="text-corporate-primary">GYNTECH IT Solutions & Services</strong> nasceu 
                da paixão por usar a tecnologia para resolver problemas reais de outras empresas.
              </p>
              
              <p className="mb-6">
                Fundada por especialistas com vasta experiência nas áreas técnica e comercial, 
                nossa empresa surgiu com o objetivo de democratizar o acesso à tecnologia de qualidade 
                para pequenos e médios negócios. Percebemos que muitas empresas deste segmento 
                enfrentavam dificuldades para encontrar soluções tecnológicas que fossem ao mesmo tempo 
                robustas, acessíveis e adequadas às suas necessidades específicas.
              </p>

              <p className="mb-6">
                Com sede em <strong>Goiânia-GO</strong>, começamos atendendo empresas locais e 
                rapidamente expandimos nossa atuação para todo o estado de Goiás. Hoje, com 
                planos de expansão nacional, mantemos nosso compromisso original: oferecer 
                tecnologia que realmente organiza e impulsiona o crescimento dos negócios.
              </p>

              <p className="mb-8">
                Nossa filosofia é simples: <strong className="text-corporate-primary">tecnologia deve ser uma 
                ferramenta de crescimento, não uma dor de cabeça</strong>. Por isso, desenvolvemos 
                soluções pensadas especialmente para o pequeno e médio empresário brasileiro, 
                sempre com foco na praticidade, eficiência e excelente custo-benefício.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-corporate-primary mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Os princípios que guiam nossa empresa e definem como trabalhamos 
              para o sucesso dos nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Atendimento Próximo */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-corporate-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-corporate-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-corporate-primary mb-4">
                Atendimento Próximo e Personalizado
              </h3>
              <p className="text-neutral-600">
                Cada cliente é único. Por isso, oferecemos atendimento personalizado, 
                próximo e humanizado, entendendo as necessidades específicas de cada negócio.
              </p>
            </div>

            {/* Foco no Pequeno Empresário */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-corporate-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-corporate-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-corporate-primary mb-4">
                Foco no Pequeno e Médio Empresário
              </h3>
              <p className="text-neutral-600">
                Conhecemos os desafios do pequeno e médio empresário brasileiro. 
                Nossas soluções são desenvolvidas pensando nas suas necessidades reais.
              </p>
            </div>

            {/* Melhor Custo-Benefício */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-corporate-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-corporate-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-corporate-primary mb-4">
                Melhor Custo-Benefício
              </h3>
              <p className="text-neutral-600">
                Oferecemos soluções de alta qualidade com o melhor custo-benefício do mercado, 
                tornando a tecnologia acessível para todos os tipos de negócio.
              </p>
            </div>

            {/* Excelência Técnica */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-corporate-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-corporate-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-corporate-primary mb-4">
                Excelência Técnica
              </h3>
              <p className="text-neutral-600">
                Nossa equipe de especialistas está sempre atualizada com as melhores 
                práticas e tecnologias do mercado para oferecer soluções de qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-corporate-primary mb-8">
              Nossa Missão
            </h2>
            
            <div className="bg-gradient-to-r from-corporate-primary to-neutral-800 rounded-2xl p-12 text-white">
              <p className="text-2xl leading-relaxed mb-6">
                "Ajudar pequenos e médios negócios a se organizarem e crescerem 
                através de tecnologia acessível, eficiente e de qualidade."
              </p>
              <p className="text-lg opacity-90">
                Acreditamos que toda empresa, independentemente do seu tamanho, 
                merece ter acesso às melhores ferramentas tecnológicas para crescer e prosperar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-erp-primary to-it-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Pronto para conhecer nossas soluções?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa 
            a crescer com tecnologia de qualidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton variant="corporate" size="xl" asChild>
              <a 
                href="https://wa.me/5562999999999?text=Olá! Gostaria de conhecer as soluções da GYNTECH."
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            </CustomButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;