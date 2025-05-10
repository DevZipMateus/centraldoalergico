
import TestimonialCard from './TestimonialCard';
import AnimatedSection from './AnimatedSection';

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "Recomendo fortemente tanto o produto quanto a empresa para quem busca qualidade e um bom atendimento. Outro ponto que merece destaque é o prazo de entrega. A entrega foi rápida e eficiente, chegando antes do previsto.",
      author: "André",
      role: "Cliente",
      rating: 5
    },
    {
      content: "Fiz uma compra pequena e fiquei motivada a fazer uma compra maior completa para meu airbnb. Chegou no prazo perfeito e todos os produtos vieram corretos cf nota fiscal e pedido. Recomendo super.",
      author: "Renata Alvarenga",
      role: "Cliente de Franca-SP",
      rating: 5
    },
    {
      content: "Atendimento de ótima qualidade, chamei pelo ZAP vendedor super atencioso e prestativo, fez a capa do colchão sob a medida que eu precisava, material muito bom, resistente a água, costura de ótima qualidade, prazo de entrega super rápido.",
      author: "Juliana Carlos",
      role: "Cliente",
      rating: 5
    },
    {
      content: "Fiz compras de capas hospitalares de travesseiros e colchões para os meus filhos, em 2018. Apenas agora, em 2024, renovei todas as capas protetoras. Produtos de ótima qualidade que promovem saúde.",
      author: "Adriel Machado",
      role: "Cliente",
      rating: 5
    },
    {
      content: "Produtos de ótima qualidade, fácil acesso para o suporte ao cliente, atendimento rápido na solução de dúvidas. Enfim, loja excelente.",
      author: "Victor de Alencar",
      role: "Cliente",
      rating: 5
    },
    {
      content: "Produtos de qualidade, conforto e durabilidade. Excelente atendimento e entrega no prazo. Gratidão!",
      author: "Vania Aparecida",
      role: "Cliente",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-white to-secondary/20">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Depoimentos</h2>
          <p className="section-subtitle">
            Veja o que nossos clientes dizem sobre nossos produtos e serviços
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.author} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <TestimonialCard 
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
