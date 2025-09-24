import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  logo: string;
  text: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    logo: "LJ",
    text: "O sistema GYNTECH Gestor transformou a nossa operação. O controle de estoque agora é preciso e a frente de caixa é muito ágil. Recomendo!",
    author: "João da Silva",
    position: "Sócio-Proprietário",
    company: "Loja do João"
  },
  {
    id: 2,
    logo: "MM",
    text: "O atendimento do time da GYNTECH foi um diferencial. Eles entenderam nossa necessidade e implantaram uma solução que realmente funciona para o nosso dia a dia.",
    author: "Maria Oliveira",
    position: "Gerente",
    company: "Mercado da Maria"
  },
  {
    id: 3,
    logo: "CT",
    text: "A infraestrutura de TI que a GYNTECH implementou trouxe mais segurança e agilidade para todos os nossos processos. Excelente custo-benefício!",
    author: "Carlos Torres",
    position: "Diretor de TI",
    company: "Comercial Torres"
  }
];

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Content */}
      <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg relative min-h-[300px] flex flex-col justify-center">
        <div className="text-center">
          {/* Client Logo */}
          <div className="w-20 h-20 bg-corporate-secondary rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-2xl font-bold text-corporate-primary">
              {testimonials[currentSlide].logo}
            </span>
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-xl lg:text-2xl text-neutral-700 italic mb-8 leading-relaxed max-w-3xl mx-auto">
            "{testimonials[currentSlide].text}"
          </blockquote>

          {/* Author Info */}
          <div className="space-y-2">
            <p className="text-lg font-bold text-corporate-primary">
              {testimonials[currentSlide].author}
            </p>
            <p className="text-neutral-600">
              {testimonials[currentSlide].position}, {testimonials[currentSlide].company}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white hover:bg-neutral-50 border-neutral-200 shadow-md"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5 text-corporate-primary" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white hover:bg-neutral-50 border-neutral-200 shadow-md"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5 text-corporate-primary" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide
                ? "bg-corporate-primary"
                : "bg-neutral-300 hover:bg-neutral-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;