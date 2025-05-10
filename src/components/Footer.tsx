
import { Facebook, Instagram, Calendar, FileText, Shield, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-accent text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Central do Alérgico</h3>
            <p className="text-gray-300 mb-6">
              Atuamos há 21 anos no mercado na fabricação de produtos especializados para o bem estar de pessoas alérgicas,
              com atendimento personalizado e foco na qualidade.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/lojacentraldoalergico" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/centraldoalergico" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Produtos</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#produtos" className="hover:text-primary transition-colors">Protetores de Colchão</a></li>
              <li><a href="#produtos" className="hover:text-primary transition-colors">Capas para Travesseiros</a></li>
              <li><a href="#produtos" className="hover:text-primary transition-colors">Kits Antialérgicos</a></li>
              <li><a href="#produtos" className="hover:text-primary transition-colors">Produtos Impermeáveis</a></li>
              <li><a href="#produtos" className="hover:text-primary transition-colors">Produtos Personalizados</a></li>
              <li><a href="#produtos" className="hover:text-primary transition-colors">Acessórios Antialérgicos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#depoimentos" className="hover:text-primary transition-colors flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#serviços" className="hover:text-primary transition-colors flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="https://wa.me/5519996467776" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar Consulta
                </a>
              </li>
              <li><a href="#inicio" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#produtos" className="hover:text-primary transition-colors">Produtos</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3 w-3" />
                </div>
                <div>
                  <p>(19) 99646-7776</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3 w-3" />
                </div>
                <div>
                  <p>atendimento@centraldoalergico.com.br</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3 w-3" />
                </div>
                <div>
                  <p>Av Interdistrital Comendador Emilio Romi, 85</p>
                  <p>Santa Bárbara D'Oeste - SP, 13456-120</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-gray-400 text-sm text-center">
          <p>&copy; {currentYear} Central do Alérgico - Saúde e Conforto. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: XX.XXX.XXX/0001-XX</p>
          <p className="mt-1 text-xs">
            <a href="https://centraldoalergico.com" className="hover:text-primary transition-colors">
              centraldoalergico.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
