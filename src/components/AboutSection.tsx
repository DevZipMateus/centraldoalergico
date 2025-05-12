import { CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
const AboutSection = () => {
  const features = ['Produtos 100% antialérgicos', 'Materiais de alta qualidade', 'Atendimento personalizado', 'Entrega para todo Brasil', '21 anos de experiência', 'Suporte pós-venda'];
  return <section id="sobre-nós" className="py-24 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Sobre Nós</h2>
          <p className="section-subtitle">
            Conheça nossa história e nosso compromisso com a saúde e o conforto de pessoas alérgicas
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img alt="Central do Alérgico" className="w-full h-auto object-cover" src="/lovable-uploads/03a11146-3188-43cc-a826-7691fa08f12b.jpg" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full z-0"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            <span className="inline-block text-sm font-semibold py-1 px-3 bg-primary/10 text-accent rounded-full">
              Nossa História
            </span>
            <h3 className="text-3xl font-bold">21 anos de excelência</h3>
            <p className="text-gray-600">
              A Central do Alérgico atua há 21 anos no mercado na fabricação de produtos especializados para 
              o bem estar de pessoas alérgicas. Somos uma empresa que tem a preocupação com os nossos clientes 
              de forma personalizada e que está sempre atenta com a qualidade dos nossos produtos.
            </p>
            <p className="text-gray-600">
              Desta forma, vamos a cada dia crescendo e obtendo sucesso no mercado em que atuamos, devido a qualidade 
              de nossos produtos e serviços prestados, trabalhamos com atendimento personalizado e nos dedicamos 
              cada dia mais aos nossos clientes.
            </p>
            
            <p className="text-gray-600">
              Qualidade, variedade e fidelidade são os critérios utilizados por nossa equipe para a seleção de 
              nossos produtos. Nosso crescimento no mercado se deve a confiabilidade nas relações entre nossa empresa e seus clientes.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {features.map(feature => <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>)}
            </div>
            
            <a href="#contato" className="btn-primary inline-block mt-4">
              Fale com um especialista
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export default AboutSection;