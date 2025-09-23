import { useState } from "react";
import { CustomButton } from "@/components/ui/custom-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Obrigado!",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-corporate-primary mb-4">
          Envie sua mensagem
        </h3>
        <p className="text-neutral-600">
          Preencha o formulário abaixo e entraremos em contato em breve para 
          apresentar a melhor solução para sua empresa.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-neutral-700">
              Nome Completo *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <Label htmlFor="company" className="text-sm font-medium text-neutral-700">
              Empresa
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="mt-1"
              placeholder="Nome da sua empresa"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-neutral-700">
              E-mail *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-neutral-700">
              Telefone/WhatsApp
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1"
              placeholder="(62) 9 9999-9999"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="message" className="text-sm font-medium text-neutral-700">
            Mensagem *
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="mt-1 min-h-[120px]"
            placeholder="Conte-nos sobre sua empresa e como podemos ajudá-lo..."
          />
        </div>

        <CustomButton 
          variant="corporate" 
          size="lg" 
          type="submit" 
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? (
            "Enviando..."
          ) : (
            <>
              <Send size={18} className="mr-2" />
              Enviar Mensagem
            </>
          )}
        </CustomButton>
      </form>
    </div>
  );
};

export default ContactForm;