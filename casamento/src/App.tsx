import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Heart, Gift, X, Copy, Check, ChevronDown } from 'lucide-react';

interface GiftItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

type SortOption = 'alphabetical-asc' | 'alphabetical-desc' | 'price-asc' | 'price-desc';
// Sample gift items - you can modify these later
const sampleGifts: GiftItem[] = [
  {
    id: 1,
    title: "Edição de colecionador Magic Senhor dos Anéis",
    description: "Coleção mais vendida da história",
    price: 2200,
    image: "https://assets.dacw.co/itemimages/785971_0001.jpg"
  },
  {
    id: 2,
    title: "Camisa Bucaramanga",
    description: "Pro Hudson acompanhar o Colombião",
    price: 360,
    image: "https://www.futebolreligiao.com.br/image/cache/catalog/Bucaramanga/Camisa%20I%20Atletico%20Bucaramanga%202024%20Lotto%20oficial-900x900.png"
  },
  {
    id: 3,
    title: "Camisa do Palmeiras",
    description: "Pra Angélica começar a torcer pro time certo",
    price: 360,
    image: "https://lojapalmeiras.vtexassets.com/arquivos/ids/187134-800-auto?v=638657302347100000&width=800&height=auto&aspect=true"
  },
  {
    id: 4,
    title: "Petisco de camomila",
    description: "Necessário pro Max não fugir com as alianças",
    price: 50,
    image: "https://cobasi.vteximg.com.br/arquivos/ids/1063072/Origem-Natural-Controle-e-Equilibrio-65-g.png?v=638663248150300000"
  },
  {
    id: 5,
    title: "Reclamar do casamento",
    description: "Até pode, mas só se pagar!",
    price: 10000,
    image: "https://www.mundoconectado.com.br/wp-content/uploads/2023/08/reclame-aqui-912x569.jpg"
  },
  {
    id: 6,
    title: "Entradas pra Fórmula 1",
    description: "Queremos ver McLarens campeãs!",
    price: 500,
    image: "https://rtrsports.com/wp-content/uploads/2024/07/pexels-rezk-assaf-10795564.jpg"
  },
  {
    id: 7,
    title: "Faltei pra ficar dormindo",
    description: "A gente entende que 8h é muito cedo",
    price: 1000,
    image: "https://www.psicologossaopaulo.com.br/wp-content/uploads/2016/07/dormir.jpg"
  },
  {
    id: 8,
    title: "Férias pro Max",
    description: "Vamos pra lua de mel, então ele também merece relaxar",
    price: 500,
    image: "https://i.redd.it/vu472bcn075b1.jpeg"
  },
  {
    id: 9,
    title: "Investir na loja de jogos",
    description: "Queremos largar o emprego e viver de jogos!",
    price: 300,
    image: "https://m.media-amazon.com/images/I/71PTxlXIyeL._UF894,1000_QL80_.jpg"
  },
  {
    id: 10,
    title: "Lactase",
    description: "Pro noivo poder comer o bolo de casamento",
    price: 80,
    image: "https://drogal.vtexassets.com/arquivos/ids/236463/116490.jpg?v=638633549154630000"
  },
  {
    id: 11,
    title: "Pacote de cartas",
    description: "Pro noivo sentir a emoção de abrir presente",
    price: 50,
    image: "https://images.tcdn.com.br/img/img_prod/1257377/booster_de_jogo_magic_bloomburrow_2595_2_f60c2f11b409688951f719cc9fca2243.jpg"
  },
  {
    id: 12,
    title: "Sofá novo",
    description: "Porque a gente resolveu pintar o nosso e deu errado",
    price: 5000,
    image: "https://lirp.cdn-website.com/baeb782e/dms3rep/multi/opt/Mondrian---BellArte-2-640w.png"
  },
  {
    id: 13,
    title: "Já gastei tudo na viagem",
    description: "Só vale pra quem veio de outro país pro casamento!",
    price: 10,
    image: "https://t3.ftcdn.net/jpg/06/10/21/78/360_F_610217868_WSchvKbk9BmXheDWDwPgPIFbWvrjpRuL.jpg"
  },
  {
    id: 14,
    title: "Ficha pra noiva apostar",
    description: "Assim que chegar em Las Vegas já vai perder tudo",
    price: 200,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/69/d3/db/las-vegas-casino.jpg?w=1200&h=-1&s=1"
  },
  {
    id: 15,
    title: "Projetor",
    description: "Pra gente poder ver filme no quarto quando tiver frio",
    price: 410,
    image: "https://d1r6yjixh9u0er.cloudfront.net/Custom/Content/Products/37/94/3794_projetor-inteligente-xiaomi-ate-120-versao-2-x00634_z1_637788888340300581.webp"
  }
];

function App() {
  const [selectedGift, setSelectedGift] = useState<GiftItem | null>(null);
  const [copied, setCopied] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('alphabetical-asc');

  const pixKey = "069bd4a8-b523-49c2-af07-dbf9b0c24984";

  const sortGifts = (gifts: GiftItem[], sortOption: SortOption): GiftItem[] => {
    const sortedGifts = [...gifts];
    
    switch (sortOption) {
      case 'alphabetical-asc':
        return sortedGifts.sort((a, b) => a.title.localeCompare(b.title));
      case 'alphabetical-desc':
        return sortedGifts.sort((a, b) => b.title.localeCompare(a.title));
      case 'price-asc':
        return sortedGifts.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sortedGifts.sort((a, b) => b.price - a.price);
      default:
        return sortedGifts;
    }
  };

  const sortedGifts = sortGifts(sampleGifts, sortBy);

  const openGiftModal = (gift: GiftItem) => {
    setSelectedGift(gift);
    setCopied(false);
  };

  const closeGiftModal = () => {
    setSelectedGift(null);
    setCopied(false);
  };

  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#faeed3' }}
      >
        <div className="relative z-10 text-center px-4 max-w-4xl">
          {/* Custom Monogram */}
          <div className="mx-auto mb-8 flex justify-center">
            <img 
              src="/assinatura-png.png" 
              alt="Monograma Angélica & Hudson" 
              className="max-w-[200px] h-auto"
            />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 leading-tight" style={{ color: '#000000' }}>
            <span style={{ color: '#000000' }}>Angélica</span>
            <span className="mx-2 sm:mx-3 md:mx-4 lg:mx-6" style={{ color: '#000000' }}>&</span>
            <span style={{ color: '#000000' }}>Hudson</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8" style={{ color: '#000000' }}>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" style={{ color: '#000000' }} />
              <span className="text-xl font-medium">05.10.25</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" style={{ color: '#000000' }} />
              <span className="text-xl font-medium">8h30</span>
            </div>
          </div>
          
          <p className="text-xl mt-8 font-light" style={{ color: '#000000' }}>
            <i>Somos mais do que mil, somos um.</i>
          </p>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4" style={{ color: '#9d7c4d' }}>Local da Celebração</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-medium mb-4" style={{ color: '#9d7c4d' }}>Alecrim Casa Garden</h3>
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#9d7c4d' }} />
                <p className="text-lg leading-relaxed" style={{ color: '#9d7c4d' }}>
                  R. José Manoel Rodrigues, 490<br />
                  Cintra Gordinho, Araçariguama - SP
                </p>
              </div>
              <p className="leading-relaxed" style={{ color: '#9d7c4d' }}>
                Um espaço encantador rodeado pela natureza, perfeito para celebrar 
                nosso momento especial com todos que amamos.
              </p>
            </div>
            
            <div className="bg-stone-100 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8527456877894!2d-47.26089282468495!3d-23.565842062325863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf62c2b7a9b7a7%3A0x1234567890abcdef!2sR.%20Jos%C3%A9%20Manoel%20Rodrigues%2C%20490%20-%20Cintra%20Gordinho%2C%20Ara%C3%A7ariguama%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-4" style={{ color: '#9d7c4d' }}>Traje Esporte Fino</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-12"></div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-stone-200/50">
            <div className="mb-6">
              <h3 className="text-2xl font-medium mb-4" style={{ color: '#9d7c4d' }}>Para homens</h3>
              <p className="leading-relaxed text-lg" style={{ color: '#9d7c4d' }}>
                <ul>
                <li>Calças de alfaiataria ou sarja.</li>
                <li>Camisas sociais, podendo ser usadas sem gravata.</li>
                <li>Blazers e coletes opcionais.</li>
                <li>Sapatos fechados que harmonizem com o restante do look.</li>
                </ul>
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-medium mb-4" style={{ color: '#9d7c4d' }}>Para mulheres</h3>
              <p className="leading-relaxed text-lg" style={{ color: '#9d7c4d' }}>
                <ul>
                <li>Vestido longo ou midi, com tecidos mais leves e cores claras.</li>
                <li>Calças pantalona com blusas sofisticadas.</li>
                <li>Saias midi com blazers.</li>
                <li>Macacão social.</li>
                <li>Saltos altos, como scarpins ou sandálias de salto médio.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gifts Section */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4" style={{ color: '#9d7c4d' }}>Lista de Presentes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
          </div>
          
          {/* Sort Filter */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none bg-white border-2 border-stone-300 rounded-xl px-4 py-3 pr-10 text-sm font-medium focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
                style={{ color: '#9d7c4d' }}
              >
                <option value="alphabetical-asc">Alfabética (A-Z)</option>
                <option value="alphabetical-desc">Alfabética (Z-A)</option>
                <option value="price-asc">Preço (Menor para Maior)</option>
                <option value="price-desc">Preço (Maior para Menor)</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: '#9d7c4d' }} />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {sortedGifts.map((gift) => (
              <div
                key={gift.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-stone-200/50"
                onClick={() => openGiftModal(gift)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={gift.image}
                    alt={gift.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-medium mb-2 text-sm md:text-base" style={{ color: '#9d7c4d' }}>{gift.title}</h3>
                  <p className="text-xs md:text-sm mb-3" style={{ color: '#9d7c4d' }}>{gift.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm md:text-lg font-medium" style={{ color: '#9d7c4d' }}>
                      R$ {gift.price}
                    </span>
                    <Gift className="w-4 h-4 md:w-5 md:h-5" style={{ color: '#9d7c4d' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl mb-2" style={{ color: '#9d7c4d' }}>Esperamos todos lá!<br />Com carinho,<br />Angélica e Hudson</p>
          
          <div className="mt-8 flex items-center justify-center">
            <Heart className="w-6 h-6" style={{ color: '#9d7c4d' }} />
          </div>
        </div>
      </footer>

      {/* Gift Modal */}
      {selectedGift && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-stone-200">
            <div className="sticky top-0 bg-white p-4 border-b border-stone-100 flex items-center justify-between">
              <h3 className="text-xl font-medium" style={{ color: '#9d7c4d' }}>Presente</h3>
              <button
                onClick={closeGiftModal}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" style={{ color: '#9d7c4d' }} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="w-32 h-32 mx-auto overflow-hidden rounded-xl mb-4">
                <img
                  src={selectedGift.image}
                  alt={selectedGift.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h4 className="text-xl font-medium mb-2" style={{ color: '#9d7c4d' }}>{selectedGift.title}</h4>
              <p className="mb-4" style={{ color: '#9d7c4d' }}>{selectedGift.description}</p>
              <p className="text-2xl font-medium mb-6" style={{ color: '#9d7c4d' }}>R${selectedGift.price}</p>
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-stone-200/50">
                <p className="text-center leading-relaxed mb-4" style={{ color: '#9d7c4d' }}>
                  Nossa casa já está pronta e cheia de amor, mas se quiser nos dar um agrado, pode fazer um PIX de qualquer valor!
                </p>
                
                {/* QR Code */}
                <div className="w-40 h-40 mx-auto mb-4 rounded-xl overflow-hidden border border-stone-200">
                  <img 
                    src="/qr-code-hudson.jpg" 
                    alt="QR Code PIX" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Copy Button */}
                <button
                  onClick={copyPixKey}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-6 rounded-xl font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5" />
                      Chave copiada!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      Copiar chave
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;