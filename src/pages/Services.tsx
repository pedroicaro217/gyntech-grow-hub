import { ArrowRight, Monitor, Database, Shield, Mail, Headphones, BarChart3 } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-corporate-primary to-neutral-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Nossas Soluções
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            Tecnologia completa para organizar seu negócio e impulsionar seu crescimento. 
            Escolha entre nosso sistema de gestão ERP ou nossos serviços especializados de TI.
          </p>
        </div>
      </section>

      {/* ERP Section */}
      <section className="py-20 bg-erp-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-erp-primary rounded-2xl mb-6">
                <BarChart3 className="text-white" size={40} />
              </div>
              <h2 className="text-4xl font-bold text-erp-primary mb-4">
                GYNTECH Gestor
              </h2>
              <p className="text-2xl text-erp-accent font-semibold mb-4">
                O controle total do seu comércio
              </p>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Sistema ERP completo e intuitivo, desenvolvido especialmente para pequenos e médios comércios. 
                Integre vendas, estoque e financeiro em uma única plataforma.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* PDV */}
              <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-erp-primary">
                <div className="w-16 h-16 bg-erp-secondary rounded-xl flex items-center justify-center mb-6">
                  <Monitor className="text-erp-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-erp-primary mb-4">PDV Ágil</h3>
                <p className="text-neutral-600 mb-4">
                  Interface rápida e intuitiva para vendas. Código de barras, busca inteligente 
                  e finalização expressa de vendas.
                </p>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• Leitor de código de barras</li>
                  <li>• Busca rápida de produtos</li>
                  <li>• Múltiplas formas de pagamento</li>
                  <li>• Impressão de cupons</li>
                </ul>
              </div>

              {/* Estoque */}
              <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-erp-primary">
                <div className="w-16 h-16 bg-erp-secondary rounded-xl flex items-center justify-center mb-6">
                  <Database className="text-erp-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-erp-primary mb-4">Controle de Estoque</h3>
                <p className="text-neutral-600 mb-4">
                  Gestão inteligente do seu estoque com alertas automáticos e 
                  controle completo de entrada e saída.
                </p>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• Alertas de estoque baixo</li>
                  <li>• Controle de lotes e validade</li>
                  <li>• Relatórios de movimentação</li>
                  <li>• Categorização de produtos</li>
                </ul>
              </div>

              {/* Financeiro */}
              <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-erp-primary">
                <div className="w-16 h-16 bg-erp-secondary rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="text-erp-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-erp-primary mb-4">Financeiro Simplificado</h3>
                <p className="text-neutral-600 mb-4">
                  Controle financeiro completo com contas a pagar, a receber e 
                  relatórios gerenciais detalhados.
                </p>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• Contas a pagar e receber</li>
                  <li>• Fluxo de caixa em tempo real</li>
                  <li>• Relatórios de lucratividade</li>
                  <li>• Controle de despesas</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <CustomButton variant="erp" size="xl" asChild>
                <a 
                  href="https://wa.me/5562999999999?text=Quero solicitar uma demonstração do GYNTECH Gestor!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2"
                >
                  <span>Solicitar Demonstração Gratuita</span>
                  <ArrowRight size={20} />
                </a>
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 bg-it-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-it-primary rounded-2xl mb-6">
                <Shield className="text-white" size={40} />
              </div>
              <h2 className="text-4xl font-bold text-it-primary mb-4">
                Consultoria e Suporte de TI
              </h2>
              <p className="text-2xl text-it-accent font-semibold mb-4">
                Infraestrutura robusta e segura para o seu negócio
              </p>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Serviços completos de tecnologia da informação para empresas que precisam de 
                infraestrutura confiável, segura e bem gerenciada.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Redes e Servidores */}
              <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-it-primary">
                <div className="w-16 h-16 bg-it-secondary rounded-xl flex items-center justify-center mb-6">
                  <Monitor className="text-it-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-it-primary mb-4">Gestão de Servidores e Redes</h3>
                <p className="text-neutral-600 mb-4">
                  Configuração, monitoramento e manutenção de servidores e redes corporativas 
                  para máxima disponibilidade e performance.
                </p>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• Configuração de servidores</li>
                  <li>• Monitoramento 24/7</li>
                  <li>• Backup automatizado</li>
                  <li>• Otimização de performance</li>
                </ul>
              </div>

              {/* Segurança Digital */}
              <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-it-primary">
                <div className="w-16 h-16 bg-it-secondary rounded-xl flex items-center justify-center mb-6">
                  <Shield className="text-it-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-it-primary mb-4">Segurança Digital</h3>
                <p className="text-neutral-600 mb-4">
                  Proteja sua empresa contra ameaças digitais com soluções avançadas 
                  de segurança e políticas de proteção de dados.
                </p>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• Firewall e antivírus corporativo</li>
                  <li>• Políticas de segurança</li>
                  <li>• Backup e recuperação</li>
                  <li>• Auditoria de segurança</li>
                </ul>
              </div>

              {/* E-mails Corporativos */}
              <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-it-primary">
                <div className="w-16 h-16 bg-it-secondary rounded-xl flex items-center justify-center mb-6">
                  <Mail className="text-it-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-it-primary mb-4">E-mails Corporativos (Workplaces)</h3>
                <p className="text-neutral-600 mb-4">
                  Configuração e gestão de e-mails corporativos profissionais com 
                  domínio próprio e ferramentas de colaboração.
                </p>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• Domínio personalizado</li>
                  <li>• Ferramentas de colaboração</li>
                  <li>• Sincronização multi-dispositivo</li>
                  <li>• Políticas de retenção</li>
                </ul>
              </div>

              {/* Suporte Técnico */}
              <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-it-primary">
                <div className="w-16 h-16 bg-it-secondary rounded-xl flex items-center justify-center mb-6">
                  <Headphones className="text-it-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-it-primary mb-4">Suporte Técnico Especializado</h3>
                <p className="text-neutral-600 mb-4">
                  Suporte técnico rápido e eficiente para manter sua operação 
                  funcionando sem interrupções.
                </p>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• Atendimento remoto e presencial</li>
                  <li>• Manutenção preventiva</li>
                  <li>• Consultoria especializada</li>
                  <li>• Treinamento de equipes</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <CustomButton variant="it" size="xl" asChild>
                <a 
                  href="https://wa.me/5562999999999?text=Preciso de consultoria em TI para minha empresa!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2"
                >
                  <span>Solicitar Orçamento Personalizado</span>
                  <ArrowRight size={20} />
                </a>
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-corporate-primary to-neutral-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Qual solução é ideal para sua empresa?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Converse com nossos especialistas e descubra a solução perfeita 
            para as necessidades do seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton variant="erp" size="xl" asChild>
              <a 
                href="https://wa.me/5562999999999?text=Quero conhecer todas as soluções da GYNTECH!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com Especialista
              </a>
            </CustomButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;