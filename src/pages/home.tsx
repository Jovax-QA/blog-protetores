import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Using placeholder images since original assets are in Replit environment
const heroCover = "/opengraph.jpg";
const principiaImage = "/images/Protetor Solar Principia FPS60.png";
const isdinImage = "/images/Isdin Fusion Water FPS60.png";
const bioreImage = "/images/Bioré UV Perfect Milk FPS50.png";
const lorealImage = "/images/L'Oréal Expertise com cor FPS60.png";
const ollieImage = "/images/Protetor Solar Bastão Ollie FPS95.png";

const products = [
  {
    id: 1,
    name: "Protetor Solar Principia FPS60",
    description: "Muito barato, com alta proteção FPS 60 e ideal para uso diário.",
    price: "R$ 43,35",
    badge: "Muito barato",
    image: principiaImage,
    whyLove: "✔ Alta proteção (FPS 60)\n✔ Ideal para uso diário",
    color: "bg-[#FFF0E5]",
    shopee: { url: "https://s.shopee.com.br/AADPeFV2oz?share_channel_code=1", price: "R$ 48,59" },
    amazon: { url: "https://amzn.to/4evX0bt", price: "R$ 43,35" },
    ml: { url: "https://meli.la/1LC5svA", price: "R$ 49,00" }
  },
  {
    id: 2,
    name: "Isdin Fusion Water FPS60",
    description: "Melhor premium para pele oleosa, com acabamento perfeito e toque seco.",
    price: "R$ 79,99",
    badge: "Melhor premium",
    image: isdinImage,
    whyLove: "✔ Não deixa a pele oleosa\n✔ Absorção rápida\n✔ Alta qualidade",
    color: "bg-[#E6F4F1]",
    shopee: { url: "https://s.shopee.com.br/1Vvc2c0OEa?share_channel_code=1", price: "R$ 79,99" },
    amazon: { url: "https://amzn.to/48bVqrt", price: "R$ 90,15" },
    ml: { url: "https://meli.la/2rZyk8Y", price: "R$ 116,90" }
  },
  {
    id: 3,
    name: "Bioré UV Perfect Milk FPS50",
    description: "Leve, seco e muito popular entre quem quer pele bonita no calor.",
    price: "R$ 72,00",
    badge: "Melhor custo-benefício",
    image: bioreImage,
    whyLove: "✔ Toque seco\n✔ Muito leve\n✔ Ótimo para calor",
    color: "bg-[#F3E8FF]",
    shopee: { url: "https://s.shopee.com.br/6fdiE6IPYE?share_channel_code=1", price: "R$ 72,00" },
    ml: { url: "https://meli.la/1EpoTwK", price: "R$ 72,00" }
  },
  {
    id: 4,
    name: "L'Oréal Expertise com cor FPS60",
    description: "Com base, protege e já uniformiza a pele como maquiagem.",
    price: "R$ 37,90",
    badge: "Com base",
    image: lorealImage,
    whyLove: "✔ Disfarça manchas\n✔ Substitui maquiagem\n✔ Muito vendido",
    color: "bg-[#E8F1FF]",
    shopee: { url: "https://s.shopee.com.br/5L8A0T7h9K?share_channel_code=1", price: "R$ 55,00" },
    amazon: { url: "https://amzn.to/42lSKEd", price: "R$ 37,90" },
    ml: { url: "https://meli.la/1UeAEkK", price: "R$ 37,90" }
  },
  {
    id: 5,
    name: "Protetor Solar Bastão Ollie FPS95",
    description: "Formato em stick muito viral, fácil de aplicar e carregar.",
    price: "R$ 132,05",
    badge: "Em Bastão",
    image: ollieImage,
    whyLove: "✔ Não suja a mão\n✔ Fácil de reaplicar\n✔ Muito prático no dia a dia",
    color: "bg-[#FFF7E5]",
    shopee: { url: "https://s.shopee.com.br/8pi2BgWB4T?share_channel_code=1", price: "R$ 139,00" },
    amazon: { url: "https://amzn.to/4cYsjul", price: "R$ 138,97" },
    ml: { url: "https://meli.la/1jxXDQr", price: "R$ 132,05" }
  }
];

const sticksProducts = [
  {
    id: 1,
    name: "Banana Boat Sport FPS 50+ Bastão",
    description: "Clássico resistente à água e ao suor. Prático para levar na bolsa ou na mochila.",
    price: "R$ 30",
    badge: "Mais Vendido",
    whyLove: "Escorrega fácil na pele, não arde os olhos e é ótimo para proteger nariz e ombros na praia.",
    color: "bg-[#FFF8E1]",
    tag: "Praia e Esporte",
    image: "/images/stick-1.png",
    shopee: { url: "https://shopee.com.br/search?keyword=Banana+Boat+Sport+FPS+50+bastao", price: "R$ 27" },
    ml: { url: "https://lista.mercadolivre.com.br/Banana-Boat-Sport-FPS-50-bastao", price: "R$ 32" }
  },
  {
    id: 2,
    name: "Ollie Protetor Solar em Bastão Com Cor FPS 95",
    description: "Bastão com cor e FPS 95 — proteção altíssima com acabamento natural. Vegano, resistente à água e ao suor. Disponível em 6 tons.",
    price: "R$ 139",
    badge: "FPS 95 Com Cor",
    whyLove: "A combinação de cor com proteção FPS 95 é um achado raro. Suaviza manchas de acne e melasma, unifica a pele e protege de verdade — sem precisar de maquiagem por cima.",
    color: "bg-[#FDE8D8]",
    tag: "Rosto e Pele",
    image: "/images/stick-2.webp",
    shopee: { url: "https://shopee.com.br/Ollie-Protetor-Solar-em-Bast%C3%A3o-Com-Cor-FPS-95-i.1423440087.19598142136?extraParams=%7B%22display_model_id%22%3A199174375405%2C%22model_selection_logic%22%3A3%7D&sp_atk=71900e9b-1c45-4e65-b857-bd1f65e076be&xptdk=71900e9b-1c45-4e65-b857-bd1f65e076be", price: "R$ 132,05" },
    ml: { url: "https://www.mercadolivre.com.br/ollie-bastao-protetor-solar-facial-fps-95-cor-cor20/up/MLBU2459614614", price: "R$ 139" }
  },
  {
    id: 3,
    name: "Neutrogena Beach Defense FPS 70 Bastão",
    description: "Alta proteção em formato bastão. Resistente à água por até 80 minutos. Ideal para rosto e ombros.",
    price: "R$ 40",
    badge: "Alta Proteção",
    whyLove: "O FPS 70 em bastão é raro e muito prático. Aplica rápido sem sujar as mãos — perfeito para o rosto.",
    color: "bg-[#E3F2FD]",
    tag: "Rosto e Corpo",
    image: "/images/stick-3.png",
    shopee: { url: "https://shopee.com.br/search?keyword=Neutrogena+Beach+Defense+FPS+70+bastao", price: "R$ 37" },
    ml: { url: "https://lista.mercadolivre.com.br/Neutrogena-Beach-Defense-FPS-70-bastao", price: "R$ 42" }
  },
  {
    id: 4,
    name: "Sundown Kids FPS 50 Bastão",
    description: "Fórmula suave desenvolvida para crianças. Sem perfume, sem parabenos. Aprovado por pediatras.",
    price: "R$ 22",
    badge: "Para Toda a Família",
    whyLove: "Seguro para a pele delicada dos pequenos, mas funciona muito bem nos adultos também. O preço é imbatível.",
    color: "bg-[#FCE4EC]",
    tag: "Toda a Família",
    image: "/images/stick-4.png",
    shopee: { url: "https://shopee.com.br/search?keyword=Sundown+Kids+FPS+50+bastao", price: "R$ 19" },
    ml: { url: "https://lista.mercadolivre.com.br/Sundown-Kids-FPS-50-bastao", price: "R$ 24" }
  },
  {
    id: 5,
    name: "Coppertone Sport FPS 50 Bastão",
    description: "Tecnologia antioxidante + proteção esportiva em bastão. Não escorre durante atividades intensas.",
    price: "R$ 28",
    badge: "Esportivo",
    whyLove: "A tecnologia antideslizante mantém o protetor no lugar mesmo na maior transpiração. Favorito das academias ao ar livre.",
    color: "bg-[#F3E5F5]",
    tag: "Esporte Intenso",
    image: "/images/stick-5.png",
    shopee: { url: "https://shopee.com.br/search?keyword=Coppertone+Sport+FPS+50+bastao", price: "R$ 25" },
    ml: { url: "https://lista.mercadolivre.com.br/Coppertone-Sport-FPS-50-bastao", price: "R$ 30" }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 15 }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header/Nav */}
      <header className="border-b border-border bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-center">
          <span className="font-serif font-bold text-xl tracking-tight text-primary">Achadinhos da Samanta e do Jovani</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full bg-muted h-[600px] md:h-[700px]">
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
          <img 
            src={heroCover} 
            alt="Achadinhos da Samanta e do Jovani" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24" />
      </section>

      {/* Editorial Intro */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg md:prose-xl prose-stone mx-auto"
        >
          <p className="font-serif text-2xl md:text-3xl text-foreground leading-snug text-center mb-12 text-balance italic">
            "O melhor anti-idade que você pode comprar na farmácia é, e sempre será, um excelente protetor solar."
          </p>
          <div className="h-px w-24 bg-primary mx-auto mb-12" />
        </motion.div>
      </section>

      {/* Products List */}
      <section className="py-12 pb-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {products.map((product, index) => (
              <motion.div key={product.id} variants={itemVariants}>
                <Card className={`h-full border border-border/60 shadow-sm overflow-hidden ${product.color}`}>
                  <CardContent className="p-0">
                    <div className="p-6 pb-4">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none font-medium tracking-wide">
                          {product.badge}
                        </Badge>
                        <span className="text-5xl font-serif font-black opacity-10 leading-none">0{index + 1}</span>
                      </div>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-auto object-contain rounded-lg mb-4"
                      />
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-tight mb-3 text-balance">
                        {product.name}
                      </h2>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                        {product.description}
                      </p>
                      <div className="bg-white/60 rounded-xl p-4 text-sm text-stone-700 italic border border-border/40 mb-4">
                        {product.whyLove}
                      </div>
                      <div className="space-y-2">
                        {product.shopee && (
                          <a
                            href={product.shopee.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-2 rounded-xl px-4 py-3 bg-[#EE4D2D] text-white text-sm font-semibold hover:bg-[#d93d1f] transition-colors duration-200"
                            data-testid={`link-shopee-${product.id}`}
                          >
                            <span>Shopee</span>
                            <span className="text-white/90 text-xs">Clique para visualizar</span>
                          </a>
                        )}
                        <a
                          href={product.ml.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-2 rounded-xl px-4 py-3 bg-[#FFE600] text-[#333] text-sm font-semibold hover:bg-[#f0d900] transition-colors duration-200"
                          data-testid={`link-ml-${product.id}`}
                        >
                          <span>Mercado Livre</span>
                          <span className="text-xs">Clique para visualizar</span>
                        </a>
                        {product.amazon && (
                          <a
                            href={product.amazon.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-2 rounded-xl px-4 py-3 bg-[#000000] text-white text-sm font-semibold hover:bg-[#1a1a1a] transition-colors duration-200"
                            data-testid={`link-amazon-${product.id}`}
                          >
                            <span>Amazon</span>
                            <span className="text-white/90 text-xs">Clique para visualizar</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Summary */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Comparação Rápida</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-primary mb-2">💰 Barato</h4>
                <p className="text-sm text-muted-foreground">Principia FPS60</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-primary mb-2">✨ Premium</h4>
                <p className="text-sm text-muted-foreground">Isdin Fusion Water</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm md:col-span-1 sm:col-span-2">
                <h4 className="font-bold text-primary mb-2">📌 Favorito premium</h4>
                <p className="text-sm text-muted-foreground">Isdin Fusion Water</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <span className="font-serif font-bold text-xl text-primary mb-4 block">Achadinhos da Samanta e do Jovani</span>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
            Editorial independente. Os preços mencionados são médias de mercado e podem variar. Consulte sempre um dermatologista para recomendações personalizadas.
          </p>
          <div className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} Achadinhos da Samanta e do Jovani. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
