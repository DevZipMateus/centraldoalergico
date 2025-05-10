
import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 bg-gradient-to-b from-secondary/30 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para atender suas necessidades e responder suas dúvidas
          </p>
        </AnimatedSection>

        <div className="mt-8">
          <AnimatedSection animation="slide-in-left">
            <div className="glass-card rounded-xl p-6 sm:p-8 border-secondary/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-primary">Informações de Contato</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Telefone */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">Telefone</h4>
                    <p className="text-sm text-gray-600">(19) 99646-7776</p>
                  </div>
                </div>
                
                {/* E-mail */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">E-mail</h4>
                    <p className="text-sm text-gray-600 break-words">atendimento@centraldoalergico.com.br</p>
                  </div>
                </div>
                
                {/* Endereço */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">Endereço</h4>
                    <p className="text-sm text-gray-600">Av Interdistrital Comendador Emilio Romi, 85</p>
                    <p className="text-sm text-gray-600">Santa Bárbara D'Oeste - SP, 13456-120</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Nossa Localização</h4>
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.213414435138!2d-47.40955348255615!3d-22.75786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89c31f334f4c1%3A0x7a3d6c1025a2e116!2sAv.%20Interdistrital%20Com.%20Em%C3%ADlio%20Romi%2C%2085%20-%20Jardim%20Esmeralda%2C%20Santa%20B%C3%A1rbara%20d&#39;Oeste%20-%20SP%2C%2013456-120!5e0!3m2!1spt-BR!2sbr!4v1716312049868!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa da Central do Alérgico"
                  ></iframe>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
                <h4 className="text-lg font-medium mb-2">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/lojacentraldoalergico" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">
                    Facebook: /lojacentraldoalergico
                  </a>
                  <a href="https://www.instagram.com/centraldoalergico" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">
                    Instagram: @centraldoalergico
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/5519996467776" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-button"
        aria-label="Contato via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </section>
  );
};

export default ContactSection;
