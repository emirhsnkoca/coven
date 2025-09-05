
'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroAgents = [
    {
      id: 1,
      name: 'Pudgy Penguins',
      creator: 'TheIglooCompany',
      stats: {
        floorPrice: '9.8367 ETH',
        items: '8,888',
        totalVolume: '478.7K ETH',
        listed: '4.2%'
      },
      mainImage: 'https://readdy.ai/api/search-image?query=cute%20cartoon%20penguin%20characters%20flying%20through%20cloudy%20sky%20with%20colorful%20outfits%2C%20whimsical%20animated%20style%20with%20soft%20pastel%20colors%2C%20adorable%20penguin%20family%20with%20different%20accessories%20like%20hats%20and%20scarves%2C%20dreamy%20cloud%20background%20with%20purple%20and%20blue%20gradient%20sky&width=1200&height=600&seq=hero-penguins&orientation=landscape',
      thumbnails: [
        'https://readdy.ai/api/search-image?query=cute%20cartoon%20penguin%20wearing%20orange%20winter%20hat%20with%20friendly%20smile%2C%20round%20chubby%20design%20in%20pastel%20colors%2C%20adorable%20character%20design%20with%20simple%20clean%20background&width=150&height=150&seq=penguin1&orientation=squarish',
        'https://readdy.ai/api/search-image?query=adorable%20cartoon%20penguin%20in%20pink%20winter%20outfit%20with%20cheerful%20expression%2C%20kawaii%20style%20character%20design%20with%20soft%20colors%2C%20cute%20penguin%20mascot%20with%20simple%20background&width=150&height=150&seq=penguin2&orientation=squarish',
        'https://readdy.ai/api/search-image?query=charming%20cartoon%20penguin%20wearing%20green%20scarf%20and%20hat%2C%20friendly%20animated%20character%20with%20round%20design%2C%20cute%20penguin%20with%20warm%20winter%20clothing%20on%20clean%20background&width=150&height=150&seq=penguin3&orientation=squarish'
      ],
      verified: true
    },
    {
      id: 2,
      name: 'AI Bot Collection',
      creator: 'TechCorp Labs',
      stats: {
        floorPrice: '12.5 ETH',
        items: '10,000',
        totalVolume: '892.3K ETH',
        listed: '3.8%'
      },
      mainImage: 'https://readdy.ai/api/search-image?query=futuristic%20AI%20robots%20in%20cyberpunk%20landscape%20with%20neon%20lights%2C%20advanced%20artificial%20intelligence%20characters%20with%20glowing%20features%2C%20premium%20tech%20aesthetic%20with%20purple%20and%20pink%20neon%20colors%2C%20sophisticated%20robotic%20designs%20in%20digital%20environment&width=1200&height=600&seq=hero-robots&orientation=landscape',
      thumbnails: [
        'https://readdy.ai/api/search-image?query=sleek%20AI%20robot%20head%20with%20golden%20metallic%20finish%20and%20glowing%20purple%20eyes%2C%20premium%20high-tech%20design%20with%20sophisticated%20details%2C%20luxury%20artificial%20intelligence%20avatar&width=150&height=150&seq=robot1&orientation=squarish',
        'https://readdy.ai/api/search-image?query=modern%20AI%20robot%20with%20pink%20and%20purple%20neon%20accents%2C%20futuristic%20design%20with%20holographic%20elements%2C%20premium%20artificial%20intelligence%20character%20design&width=150&height=150&seq=robot2&orientation=squarish',
        'https://readdy.ai/api/search-image?query=elegant%20AI%20robot%20with%20emerald%20green%20lighting%20effects%2C%20sophisticated%20technological%20design%20with%20luxury%20materials%2C%20premium%20artificial%20intelligence%20avatar&width=150&height=150&seq=robot3&orientation=squarish'
      ],
      verified: true
    },
    {
      id: 3,
      name: 'Digital Artists',
      creator: 'CreativeDAO',
      stats: {
        floorPrice: '3.2 ETH',
        items: '5,555',
        totalVolume: '156.8K ETH',
        listed: '6.1%'
      },
      mainImage: 'https://readdy.ai/api/search-image?query=colorful%20digital%20art%20characters%20in%20abstract%20creative%20landscape%2C%20vibrant%20artistic%20designs%20with%20paint%20splashes%20and%20creative%20elements%2C%20modern%20digital%20art%20collection%20with%20bright%20colors%20and%20artistic%20flair%2C%20creative%20fantasy%20environment&width=1200&height=600&seq=hero-artists&orientation=landscape',
      thumbnails: [
        'https://readdy.ai/api/search-image?query=creative%20digital%20art%20character%20with%20colorful%20paint%20splashes%2C%20artistic%20avatar%20design%20with%20vibrant%20colors%20and%20creative%20elements%2C%20modern%20digital%20art%20style&width=150&height=150&seq=artist1&orientation=squarish',
        'https://readdy.ai/api/search-image?query=artistic%20digital%20character%20with%20rainbow%20colors%20and%20creative%20design%2C%20modern%20art%20style%20avatar%20with%20vibrant%20artistic%20elements%20and%20paint%20effects&width=150&height=150&seq=artist2&orientation=squarish',
        'https://readdy.ai/api/search-image?query=creative%20digital%20art%20avatar%20with%20abstract%20design%20elements%2C%20colorful%20artistic%20character%20with%20modern%20art%20style%20and%20vibrant%20creative%20details&width=150&height=150&seq=artist3&orientation=squarish'
      ],
      verified: true
    }
  ];

  const featuredNFTs = [
    {
      id: 1,
      name: 'Taproot Wizards',
      floor: '0.194 BTC',
      image: 'https://readdy.ai/api/search-image?query=cute%20cartoon%20wizard%20character%20with%20magical%20hat%20and%20wand%2C%20colorful%20fantasy%20wizard%20design%20with%20mystical%20elements%20and%20spell%20effects%2C%20adorable%20magical%20character%20with%20sparkles%20and%20enchanted%20background&width=300&height=300&seq=wizard1&orientation=squarish',
      featured: true
    },
    {
      id: 2,
      name: 'Runestone',
      floor: '0.0014 BTC',
      image: 'https://readdy.ai/api/search-image?query=mystical%20ancient%20runestone%20with%20glowing%20Nordic%20symbols%2C%20magical%20stone%20tablet%20with%20ethereal%20blue%20light%20effects%2C%20enchanted%20rune%20crystal%20with%20mysterious%20ancient%20markings%20and%20mystical%20aura&width=300&height=300&seq=runestone1&orientation=squarish',
      featured: true
    },
    {
      id: 3,
      name: 'Motocat Racing Club',
      floor: '0.0023 BTC',
      image: 'https://readdy.ai/api/search-image?query=cute%20cat%20character%20wearing%20racing%20helmet%20and%20goggles%2C%20adorable%20cartoon%20cat%20racer%20with%20colorful%20racing%20outfit%2C%20kawaii%20style%20cat%20with%20motorcycle%20gear%20and%20racing%20accessories&width=300&height=300&seq=motocat1&orientation=squarish',
      featured: true
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroAgents.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroAgents.length) % heroAgents.length);
  };

  const currentAgent = heroAgents[currentSlide];

  return (
    <section className="relative bg-[#121212] py-8">
      <div className="max-w-full mx-auto px-4">
        <div className="flex gap-4">
          {/* Main Hero Content - Sol taraf - Sadece görselin sığacağı kadar küçültülmüş */}
          <div className="w-[650px]">
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700">
              {/* Main Hero Content */}
              <div className="relative h-[350px] flex items-end">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={currentAgent.mainImage}
                    alt={currentAgent.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* TOP SALES Label */}  
                  <div className="absolute top-4 left-6 z-20">
                    <div className="bg-gradient-to-r from-[#FF69B4] to-[#FF1493] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      TOP SALES
                    </div>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 w-full p-6">
                  <div className="flex items-end justify-between">
                    {/* Left: Collection Info */}
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <h1 className="text-3xl font-bold text-white mr-3">{currentAgent.name}</h1>
                        {currentAgent.verified && (
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <i className="ri-check-line text-white text-sm"></i>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <span className="text-gray-300 text-sm mr-2">By</span>
                        <span className="text-white text-sm font-semibold">{currentAgent.creator}</span>
                        {currentAgent.verified && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center ml-2">
                            <i className="ri-check-line text-white text-xs"></i>
                          </div>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex space-x-6 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-gray-600">
                        <div>
                          <div className="text-gray-400 text-xs mb-1">FLOOR PRICE</div>
                          <div className="text-white text-lg font-bold">{currentAgent.stats.floorPrice}</div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-xs mb-1">ITEMS</div>
                          <div className="text-white text-lg font-bold">{currentAgent.stats.items}</div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-xs mb-1">TOTAL VOLUME</div>
                          <div className="text-white text-lg font-bold">{currentAgent.stats.totalVolume}</div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-xs mb-1">LISTED</div>
                          <div className="text-white text-lg font-bold">{currentAgent.stats.listed}</div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Thumbnail Gallery */}
                    <div className="flex space-x-3 ml-6">
                      {currentAgent.thumbnails.map((thumb, index) => (
                        <div
                          key={index}
                          className="w-16 h-16 rounded-xl overflow-hidden border-2 border-gray-600 hover:border-[#FF69B4] transition-all duration-300 cursor-pointer transform hover:scale-110"
                        >
                          <img
                            src={thumb}
                            alt={`${currentAgent.name} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-[45%] transform -translate-y-1/2 bg-gradient-to-r from-[#FF69B4]/90 via-[#FF1493]/90 to-[#FF69B4]/90 hover:from-[#FF1493] hover:via-[#DC143C] hover:to-[#FF1493] text-white p-2 rounded-xl transition-all duration-300 cursor-pointer backdrop-blur-xl border-2 border-white/20 shadow-xl shadow-[#FF69B4]/50 hover:shadow-2xl hover:shadow-[#FF69B4]/70 transform hover:scale-110"
              >
                <i className="ri-arrow-left-line text-lg"></i>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-[45%] transform -translate-y-1/2 bg-gradient-to-r from-[#FF69B4]/90 via-[#FF1493]/90 to-[#FF69B4]/90 hover:from-[#FF1493] hover:via-[#DC143C] hover:to-[#FF1493] text-white p-2 rounded-xl transition-all duration-300 cursor-pointer backdrop-blur-xl border-2 border-white/20 shadow-xl shadow-[#FF69B4]/50 hover:shadow-2xl hover:shadow-[#FF69B4]/70 transform hover:scale-110"
              >
                <i className="ri-arrow-right-line text-lg"></i>
              </button>

              {/* Slide Indicators - Hero görselinin tam altına yerleştirildi */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {heroAgents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 cursor-pointer relative group ${
                      index === currentSlide 
                        ? 'w-8 h-3 bg-gradient-to-r from-[#FF69B4] via-[#FF1493] to-[#FF69B4] rounded-full shadow-lg shadow-[#FF69B4]/40' 
                        : 'w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full hover:shadow-md hover:shadow-gray-400/30 hover:scale-110'
                    }`}
                  >
                    {index === currentSlide && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF69B4] via-white to-[#FF69B4] rounded-full animate-pulse opacity-60"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured NFT Cards - Sağ taraf */}
          <div className="flex gap-4 items-start">
            {featuredNFTs.map((nft) => (
              <div
                key={nft.id}
                className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:border-[#FF69B4] hover:shadow-xl hover:shadow-[#FF69B4]/30 w-48"
              >
                {/* Featured Badge */}
                <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                  <i className="ri-star-fill mr-1"></i>
                  Featured
                </div>

                {/* Bitcoin Badge */}
                <div className="absolute top-3 right-3 z-10 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  ₿
                </div>

                {/* NFT Image */}
                <div className="relative h-40 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="text-white font-bold text-lg mb-2 truncate">{nft.name}</h3>
                  <div className="text-orange-400 font-bold text-lg">{nft.floor}</div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF69B4]/40 hover:ring-1 hover:ring-[#FF69B4]/30"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
