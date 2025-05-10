
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { GalleryHorizontal } from 'lucide-react';

// Define product interface
interface Product {
  id: number;
  name: string;
  image: string;
  description?: string;
}

const ProductsSection = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  // Product data array
  const products: Product[] = [
    {
      id: 1,
      name: "Capa de Travesseiro com Zíper",
      image: "/lovable-uploads/1746736711682_ziper capa travesseiro.jpg",
      description: "Proteção completa com fechamento em zíper"
    },
    {
      id: 2,
      name: "Travesseiro Antialérgico",
      image: "/lovable-uploads/1746736710856_Travesseiro com a capa.png",
      description: "Conforto e proteção para noites tranquilas"
    },
    {
      id: 3,
      name: "Proteção em Napa Premium",
      image: "/lovable-uploads/1746736709815_napa nova.png",
      description: "Material resistente e impermeável"
    },
    {
      id: 4,
      name: "Protetor de Colchão",
      image: "/lovable-uploads/1746736708851__MGL7474.jpeg",
      description: "Proteção completa contra ácaros"
    },
    {
      id: 5,
      name: "Capa Protetora Premium",
      image: "/lovable-uploads/1746736707730__MG_7516.jpeg",
      description: "Qualidade superior para sua proteção"
    },
    {
      id: 6,
      name: "Matelassê Casal Impermeável",
      image: "/lovable-uploads/1746736707062_matelasse casal imp.png",
      description: "Conforto e impermeabilidade para seu colchão"
    },
    {
      id: 7,
      name: "Linha Institucional",
      image: "/lovable-uploads/1746736704693_institucional.png",
      description: "Soluções para hotéis e hospitais"
    },
    {
      id: 8,
      name: "Produtos Disponíveis na Shopee",
      image: "/lovable-uploads/1746736702970_Fundo SHOPEE.png",
      description: "Compre online com facilidade"
    },
    {
      id: 9,
      name: "Allergic Free King com Zíper",
      image: "/lovable-uploads/1746736693126_allergic free king ziper.jpg",
      description: "Para camas king size com fechamento em zíper"
    },
    {
      id: 10,
      name: "Allergic Free Casal com Zíper",
      image: "/lovable-uploads/1746736692313_Allergic free casal ziper.jpg",
      description: "Tamanho casal com fechamento em zíper"
    },
    {
      id: 11,
      name: "Allergic Free Branco com Zíper",
      image: "/lovable-uploads/1746736690984_allergic free branco ziper.jpg",
      description: "Versão branca com fechamento em zíper"
    },
    {
      id: 12,
      name: "Allergic Cov Brinde",
      image: "/lovable-uploads/1746736689942_allergiccov brinde.jpg",
      description: "Brinde exclusivo para nossos clientes"
    }
  ];

  const closeImageModal = () => {
    setExpandedImage(null);
    document.body.style.overflow = 'auto';
  };

  const openImageModal = (imageUrl: string) => {
    setExpandedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  return (
    <section id="produtos" className="bg-white py-16">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Produtos</h2>
          <p className="section-subtitle">
            Qualidade, variedade e proteção para o bem-estar de pessoas alérgicas há mais de 21 anos
          </p>
        </AnimatedSection>

        {/* Mobile view - Carousel */}
        <div className="md:hidden mt-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div 
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                      onClick={() => openImageModal(product.image)}
                    >
                      <div className="relative overflow-hidden aspect-square">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                          <div className="p-4 text-white text-center w-full">
                            <GalleryHorizontal className="w-6 h-6 mx-auto mb-2" />
                            <p className="text-sm">Ver ampliado</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 flex-grow">
                        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>

        {/* Desktop view - Grid */}
        <AnimatedSection className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {products.map(product => (
            <div 
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
              onClick={() => openImageModal(product.image)}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="p-4 text-white text-center w-full">
                    <GalleryHorizontal className="w-6 h-6 mx-auto mb-2" />
                    <p className="text-sm">Ver ampliado</p>
                  </div>
                </div>
              </div>
              <div className="p-4 flex-grow">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </AnimatedSection>

        {/* Image Modal */}
        {expandedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <div 
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeImageModal}
                className="absolute -top-10 right-0 text-white hover:text-primary p-2 z-10"
              >
                Fechar
              </button>
              <img 
                src={expandedImage} 
                alt="Imagem ampliada" 
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
