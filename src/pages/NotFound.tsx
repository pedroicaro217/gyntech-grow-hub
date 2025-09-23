import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-corporate-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Página não encontrada</h2>
          <p className="text-neutral-600 mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-block bg-corporate-primary text-white px-6 py-3 rounded-lg hover:bg-corporate-primary/90 transition-smooth"
          >
            Voltar ao Início
          </Link>
          
          <div className="text-sm text-neutral-500">
            <p>Ou navegue para:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Link to="/servicos" className="text-corporate-primary hover:underline">Serviços</Link>
              <Link to="/sobre" className="text-corporate-primary hover:underline">Sobre Nós</Link>
              <Link to="/contato" className="text-corporate-primary hover:underline">Contato</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
