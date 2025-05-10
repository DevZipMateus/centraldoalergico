
import PlanCard from './PlanCard';
import AnimatedSection from './AnimatedSection';

const PlansSection = () => {
  const plans = [{
    title: "Protetor de Colchão",
    price: "A partir de R$149",
    description: "Proteção completa contra ácaros e alérgenos",
    features: ["Impermeável", "100% antialérgico", "Evita mofo e bactérias", "Resistente e durável", "Variedade de tamanhos"],
    isPopular: true
  }, {
    title: "Capa para Travesseiro",
    price: "A partir de R$79",
    description: "Proteção ideal para o seu travesseiro",
    features: ["Barreira contra ácaros", "Material hipoalergênico", "Lavável", "Fechamento com zíper", "Conforto térmico"],
    isPopular: false
  }, {
    title: "Kit Completo",
    price: "A partir de R$299",
    description: "Proteção total para seu quarto",
    features: ["Protetor de colchão", "Capas para travesseiros", "Lençol antialérgico", "Fronha especial", "Desconto exclusivo"],
    isPopular: false
  }];

  return (
    <section id="produtos" className="bg-white py-16">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Produtos</h2>
          <p className="section-subtitle">
            Qualidade, variedade e fidelidade são os critérios utilizados por nossa equipe para a seleção de nossos produtos
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.title} animation="fade-in-up" delay={index * 150}>
              <PlanCard 
                title={plan.title} 
                price={plan.price} 
                description={plan.description} 
                features={plan.features} 
                isPopular={plan.isPopular} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-3">Precisa de produtos personalizados?</h3>
          <p className="text-gray-600 mb-6">
            Oferecemos produtos sob medida para necessidades específicas. 
            Entre em contato conosco para um atendimento personalizado.
          </p>
          <a href="#contato" className="btn-primary inline-block">
            Solicitar Orçamento Personalizado
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PlansSection;
