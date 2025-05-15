import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { GalleryHorizontal, Bed, Box, Shield, Hospital, Droplet, Layers, Square, List, ChevronLeft, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from '@/hooks/use-mobile';

// Define product interface
interface Product {
  id: number;
  name: string;
  image: string;
  description?: string;
  category: string;
}

// Define category interface
interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const ProductsSection = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState("all");
  const isMobile = useIsMobile();

  // Define categories
  const categories: Category[] = [
    { id: "all", name: "Todos os Produtos", icon: <GalleryHorizontal className="w-4 h-4" /> },
    { id: "allergic-free", name: "ALLERGIC FREE", icon: <Bed className="w-4 h-4" /> },
    { id: "allergic-free-mix", name: "ALLERGIC FREE MIX", icon: <Box className="w-4 h-4" /> },
    { id: "allergic-cover", name: "ALLERGIC COVER", icon: <Shield className="w-4 h-4" /> },
    { id: "napa-hospitalar", name: "NAPA HOSPITALAR", icon: <Hospital className="w-4 h-4" /> },
    { id: "pvc-dry", name: "100% PVC DRY", icon: <Droplet className="w-4 h-4" /> },
    { id: "new-dry", name: "NEW DRY", icon: <Droplet className="w-4 h-4" /> },
    { id: "tnt-pvc", name: "TNT/PVC", icon: <Layers className="w-4 h-4" /> },
    { id: "protetor-matelasse", name: "PROTETOR DE MATELASSÊ", icon: <Square className="w-4 h-4" /> },
    { id: "travesseiros", name: "TRAVESSEIROS ANTIÁCARO", icon: <Bed className="w-4 h-4" /> },
    { id: "cobreleito", name: "COBRELEITO", icon: <Bed className="w-4 h-4" /> },
    { id: "jogos-lencol", name: "JOGOS DE LENÇOL", icon: <List className="w-4 h-4" /> },
    { id: "saia-box", name: "SAIA BOX", icon: <Box className="w-4 h-4" /> }
  ];

  // Product data array with categories
  const products: Product[] = [
    {
      id: 1,
      name: "Capa de Travesseiro com Zíper",
      image: "/lovable-uploads/1746736711682_ziper capa travesseiro.jpg",
      description: "Proteção completa com fechamento em zíper",
      category: "travesseiros"
    },
    {
      id: 2,
      name: "Travesseiro Antialérgico",
      image: "/lovable-uploads/1746736710856_Travesseiro com a capa.png",
      description: "Conforto e proteção para noites tranquilas",
      category: "travesseiros"
    },
    {
      id: 3,
      name: "Proteção em Napa Premium",
      image: "/lovable-uploads/1746736709815_napa nova.png",
      description: "Material resistente e impermeável",
      category: "napa-hospitalar"
    },
    {
      id: 4,
      name: "Protetor de Colchão",
      image: "/lovable-uploads/1746736708851__MGL7474.jpeg",
      description: "Proteção completa contra ácaros",
      category: "protetor-matelasse"
    },
    {
      id: 5,
      name: "Capa Protetora Premium",
      image: "/lovable-uploads/1746736707730__MG_7516.jpeg",
      description: "Qualidade superior para sua proteção",
      category: "allergic-free"
    },
    {
      id: 6,
      name: "Matelassê Casal Impermeável",
      image: "/lovable-uploads/1746736707062_matelasse casal imp.png",
      description: "Conforto e impermeabilidade para seu colchão",
      category: "protetor-matelasse"
    },
    {
      id: 7,
      name: "Linha Institucional",
      image: "/lovable-uploads/1746736704693_institucional.png",
      description: "Soluções para hotéis e hospitais",
      category: "napa-hospitalar"
    },
    {
      id: 8,
      name: "Produtos Disponíveis na Shopee",
      image: "/lovable-uploads/1746736702970_Fundo SHOPEE.png",
      description: "Compre online com facilidade",
      category: "all"
    },
    {
      id: 9,
      name: "Allergic Free King com Zíper",
      image: "/lovable-uploads/1746736693126_allergic free king ziper.jpg",
      description: "Para camas king size com fechamento em zíper",
      category: "allergic-free"
    },
    {
      id: 10,
      name: "Allergic Free Casal com Zíper",
      image: "/lovable-uploads/1746736692313_Allergic free casal ziper.jpg",
      description: "Tamanho casal com fechamento em zíper",
      category: "allergic-free"
    },
    {
      id: 11,
      name: "Allergic Free Branco com Zíper",
      image: "/lovable-uploads/1746736690984_allergic free branco ziper.jpg",
      description: "Versão branca com fechamento em zíper",
      category: "allergic-free"
    },
    {
      id: 12,
      name: "Allergic Cov Brinde",
      image: "/lovable-uploads/1746736689942_allergiccov brinde.jpg",
      description: "Brinde exclusivo para nossos clientes",
      category: "allergic-cover"
    },
    // Produtos adicionados anteriormente
    {
      id: 13,
      name: "Allergic Free Mix",
      image: "/lovable-uploads/allergic free mix.jpg",
      description: "Proteção combinada para maior durabilidade",
      category: "allergic-free-mix"
    },
    {
      id: 14,
      name: "Travesseiros Antiácaro",
      image: "/lovable-uploads/Travesseiros.jpg",
      description: "Travesseiros com tratamento antiácaros",
      category: "travesseiros"
    },
    {
      id: 15,
      name: "TNT Colchão",
      image: "/lovable-uploads/TNT COLCHÃO.jpg",
      description: "Proteção econômica e eficiente",
      category: "tnt-pvc"
    },
    {
      id: 16,
      name: "Saia Box",
      image: "/lovable-uploads/SAIA BOX.jpg",
      description: "Proteção e acabamento elegante para seu box",
      category: "saia-box"
    },
    {
      id: 17,
      name: "New Dry",
      image: "/lovable-uploads/NEWDRY.png",
      description: "Proteção impermeável com tecnologia avançada",
      category: "new-dry"
    },
    {
      id: 18,
      name: "Jogo de Lençol Azul",
      image: "/lovable-uploads/JOGO LENCOL AZUL.jpeg",
      description: "Conjunto completo de lençóis antiácaro",
      category: "jogos-lencol"
    },
    {
      id: 19,
      name: "Allergic Free",
      image: "/lovable-uploads/Allergic free.jpg",
      description: "Proteção completa para colchão",
      category: "allergic-free"
    },
    {
      id: 20,
      name: "100% PVC Queen",
      image: "/lovable-uploads/100 PVC QUEEN.png",
      description: "Proteção impermeável para colchão queen",
      category: "pvc-dry"
    },
    // Novas imagens adicionadas
    {
      id: 21,
      name: "Cobreleito Luxo",
      image: "/lovable-uploads/cobreleito.jpeg",
      description: "Elegância e proteção para sua cama",
      category: "cobreleito"
    },
    {
      id: 22,
      name: "Matelassê Queen",
      image: "/lovable-uploads/matelassequeen.png",
      description: "Protetor de colchão para cama queen size",
      category: "protetor-matelasse"
    },
    {
      id: 23,
      name: "Napa Hospitalar Premium",
      image: "/lovable-uploads/napa hospitalar nova.png",
      description: "Proteção especializada para ambientes hospitalares",
      category: "napa-hospitalar"
    },
    // New Travesseiro products
    {
      id: 24,
      name: "Travesseiro Bambu Top",
      image: "/lovable-uploads/BAMBU TOP.jpg",
      description: "Conforto premium com tecido de bambu",
      category: "travesseiros"
    },
    {
      id: 25,
      name: "Travesseiro Feel Good",
      image: "/lovable-uploads/FEEL GOOD.jpg",
      description: "Sensação de bem-estar e sono profundo",
      category: "travesseiros"
    },
    {
      id: 26,
      name: "Travesseiro Percal Plus",
      image: "/lovable-uploads/PERCAL PLUS.jpg",
      description: "Acabamento em percal de alta qualidade",
      category: "travesseiros"
    }
  ];

  const closeImageModal = () => {
    setExpandedImage(null);
    setExpandedIndex(0);
    document.body.style.overflow = 'auto';
  };

  const openImageModal = (imageUrl: string) => {
    const index = filteredProducts.findIndex(product => product.image === imageUrl);
    setExpandedIndex(index >= 0 ? index : 0);
    setExpandedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  // Navigation functions for the expanded image modal
  const showPreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (filteredProducts.length <= 1) return;
    
    const newIndex = expandedIndex > 0 ? expandedIndex - 1 : filteredProducts.length - 1;
    setExpandedIndex(newIndex);
    setExpandedImage(filteredProducts[newIndex].image);
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (filteredProducts.length <= 1) return;
    
    const newIndex = (expandedIndex + 1) % filteredProducts.length;
    setExpandedIndex(newIndex);
    setExpandedImage(filteredProducts[newIndex].image);
  };

  // Filter products based on active category
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="produtos" className="bg-white py-16">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Produtos</h2>
          <p className="section-subtitle">
            Qualidade, variedade e proteção para o bem-estar de pessoas alérgicas há mais de 21 anos
          </p>
        </AnimatedSection>

        {/* Categories - Tabs for desktop, scrollable for mobile */}
        <div className="mb-8">
          <Tabs defaultValue="all" onValueChange={setActiveCategory} className="w-full">
            <TabsList className="hidden md:flex flex-wrap justify-center w-full h-auto bg-transparent gap-2 mb-4">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center gap-1.5 px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-accent"
                >
                  {category.icon}
                  <span className="text-xs font-medium">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Mobile category selector */}
            <div className="md:hidden overflow-x-auto pb-4">
              <div className="flex space-x-2 min-w-max">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-md whitespace-nowrap text-xs font-medium transition-colors
                      ${activeCategory === category.id 
                        ? 'bg-primary text-accent' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile view - Carousel */}
            <div className="md:hidden mt-4">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {filteredProducts.map((product) => (
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
            <TabsContent value={activeCategory} className="mt-0">
              <AnimatedSection className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
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
            </TabsContent>
          </Tabs>
        </div>

        {/* Image Modal with Navigation Controls */}
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
              
              {/* Navigation arrows */}
              {filteredProducts.length > 1 && (
                <>
                  <button 
                    onClick={showPreviousImage}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 p-2 rounded-r-lg text-white z-10"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </button>
                  
                  <button 
                    onClick={showNextImage}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 p-2 rounded-l-lg text-white z-10"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </button>
                </>
              )}
              
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src={expandedImage} 
                  alt={filteredProducts[expandedIndex]?.name || "Imagem ampliada"} 
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
              </div>
              
              {/* Product information */}
              {filteredProducts[expandedIndex] && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white rounded-b-lg">
                  <h3 className="font-semibold text-lg">{filteredProducts[expandedIndex].name}</h3>
                  {filteredProducts[expandedIndex].description && (
                    <p className="text-sm text-gray-200">{filteredProducts[expandedIndex].description}</p>
                  )}
                </div>
              )}
              
              {/* Image counter */}
              <div className="absolute top-2 left-2 bg-black/60 px-3 py-1 rounded-full text-white text-sm">
                {expandedIndex + 1} / {filteredProducts.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
