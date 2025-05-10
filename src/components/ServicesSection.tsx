
import { Shield, PlusSquare, Droplets, UserCheck, Truck, BarChart3 } from 'lucide-react';
import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: 'Produtos Antialérgicos',
      description: 'Linha completa de produtos antialérgicos para proteção contra ácaros, fungos, bactérias e outros alérgenos.'
    },
    {
      icon: PlusSquare,
      title: 'Soluções para Alérgicos',
      description: 'Soluções especializadas para pessoas com alergias respiratórias, rinite, asma e sensibilidades diversas.'
    },
    {
      icon: Droplets,
      title: 'Produtos Impermeáveis',
      description: 'Capas e protetores impermeáveis que previnem o acúmulo de umidade e proliferação de microorganismos.'
    },
    {
      icon: UserCheck,
      title: 'Atendimento Personalizado',
      description: 'Consulta especializada para entender suas necessidades e oferecer os produtos mais adequados ao seu caso.'
    },
    {
      icon: Truck,
      title: 'Entrega para Todo Brasil',
      description: 'Enviamos nossos produtos para todos os estados brasileiros, com agilidade e segurança.'
    },
    {
      icon: BarChart3,
      title: 'Qualidade Comprovada',
      description: '21 anos de experiência no mercado, com produtos testados e aprovados por milhares de clientes.'
    }
  ];

  return (
    <section id="serviços" className="py-24 bg-gradient-to-b from-secondary/20 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Produtos especializados para o bem estar de pessoas alérgicas há mais de 21 anos no mercado
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <a href="#contato" className="btn-primary inline-block">
            Solicite um orçamento
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
