
import { ExternalLink, ShoppingBag, Shield, Truck } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ShopSection = () => {
  return (
    <section id="loja" className="py-24 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Loja Virtual</h2>
          <p className="section-subtitle">
            Acesse nossa loja online e compre produtos antialérgicos com segurança e comodidade
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <AnimatedSection animation="slide-in-left">
            <div className="space-y-6">
              <span className="inline-block text-sm font-semibold py-1 px-3 bg-secondary/10 text-accent rounded-full">
                Compre Online
              </span>
              <h3 className="text-3xl font-bold">
                Acesse Nossa Loja Virtual
              </h3>
              <p className="text-gray-600">
                Na nossa loja virtual você encontra toda a linha de produtos antialérgicos 
                da Central do Alérgico. Compre com segurança, receba em casa e tenha a 
                garantia de qualidade de sempre.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-700">Compra Segura</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-700">Entrega Rápida</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShoppingBag className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-700">Fácil de Usar</span>
                </div>
              </div>

              <a 
                href="https://www.lojacentraldoalergico.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Acessar Loja Virtual
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={300}>
            <div className="relative">
              <div className="absolute -top-12 -left-8 w-64 h-64 bg-primary/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/20 rounded-full filter blur-xl"></div>
              <div className="relative z-10 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-1 transform transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
                <img 
                  alt="Loja Virtual Central do Alérgico" 
                  className="rounded-2xl w-full h-auto object-cover" 
                  src="/lovable-uploads/1746736702970_Fundo SHOPEE.png" 
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
