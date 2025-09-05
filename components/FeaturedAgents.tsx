
'use client';

import { useState } from 'react';
import AgentCard from './AgentCard';

export default function FeaturedAgents() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredAgents = [
    {
      id: 1,
      name: 'GPT-Elite Pro',
      price: '2.5 ETH',
      image: 'https://readdy.ai/api/search-image?query=premium%20AI%20robot%20head%20with%20golden%20metallic%20finish%20and%20glowing%20purple%20eyes%2C%20luxury%20high-tech%20design%20with%20elegant%20curves%20and%20sophisticated%20details%2C%20futuristic%20artificial%20intelligence%20avatar%20with%20premium%20materials%20and%20neon%20accents&width=300&height=300&seq=agent1&orientation=squarish',
      description: 'Premium conversational AI trained with enterprise data',
      isPremium: true,
      category: 'Conversational',
      creator: 'TechCorp Labs'
    },
    {
      id: 2,
      name: 'CodeMaster AI',
      price: '1.8 ETH',
      image: 'https://readdy.ai/api/search-image?query=sleek%20AI%20coding%20assistant%20robot%20with%20neon%20pink%20and%20purple%20circuit%20patterns%2C%20modern%20technological%20design%20with%20holographic%20code%20displays%2C%20premium%20software%20development%20artificial%20intelligence%20with%20glowing%20interfaces&width=300&height=300&seq=agent2&orientation=squarish',
      description: 'Expert code generation and debugging in 50+ programming languages',
      isPremium: true,
      category: 'Development',
      creator: 'DevForge Studio'
    },
    {
      id: 3,
      name: 'DataViz Pro',
      price: '1.2 ETH',
      image: 'https://readdy.ai/api/search-image?query=sophisticated%20data%20analysis%20AI%20with%20holographic%20charts%20and%20graphs%2C%20elegant%20purple%20and%20pink%20data%20visualization%20displays%2C%20premium%20business%20intelligence%20robot%20with%20glowing%20analytical%20interfaces%20and%20luxury%20finish&width=300&height=300&seq=agent3&orientation=squarish',
      description: 'Transform complex data into stunning visualizations and insights',
      isPremium: false,
      category: 'Analytics',
      creator: 'DataCraft Inc'
    },
    {
      id: 4,
      name: 'CreativeBot Ultra',
      price: '0.8 ETH',
      image: 'https://readdy.ai/api/search-image?query=artistic%20AI%20creative%20assistant%20with%20vibrant%20purple%20and%20pink%20energy%20streams%2C%20elegant%20design%20with%20creative%20tools%20and%20artistic%20elements%2C%20premium%20creative%20artificial%20intelligence%20with%20glowing%20artistic%20interfaces%20and%20luxury%20materials&width=300&height=300&seq=agent4&orientation=squarish',
      description: 'Amazing artwork, designs and creative content generation',
      isPremium: false,
      category: 'Creative',
      creator: 'ArtTech Studios'
    },
    {
      id: 5,
      name: 'BusinessIQ Pro',
      price: '3.2 ETH',
      image: 'https://readdy.ai/api/search-image?query=professional%20business%20AI%20advisor%20with%20golden%20accents%20and%20purple%20holographic%20displays%2C%20luxury%20corporate%20design%20with%20sophisticated%20analytics%20and%20business%20charts%2C%20premium%20artificial%20intelligence%20for%20enterprise%20solutions&width=300&height=300&seq=agent5&orientation=squarish',
      description: 'Strategic business analysis and market intelligence solutions',
      isPremium: true,
      category: 'Business',
      creator: 'CorpAI Solutions'
    },
    {
      id: 6,
      name: 'VoiceGen AI',
      price: '1.5 ETH',
      image: 'https://readdy.ai/api/search-image?query=sleek%20voice%20synthesis%20AI%20with%20sound%20waves%20and%20audio%20visualization%20in%20neon%20pink%20and%20purple%2C%20modern%20acoustic%20design%20with%20premium%20materials%2C%20advanced%20speech%20technology%20artificial%20intelligence%20with%20glowing%20sound%20interfaces&width=300&height=300&seq=agent6&orientation=squarish',
      description: 'Natural voice synthesis and audio generation technology',
      isPremium: false,
      category: 'Creative',
      creator: 'SoundTech Labs'
    },
    {
      id: 7,
      name: 'SecurityBot Elite',
      price: '2.1 ETH',
      image: 'https://readdy.ai/api/search-image?query=cybersecurity%20AI%20guardian%20with%20protective%20shields%20and%20security%20patterns%20in%20dark%20purple%20and%20pink%2C%20premium%20defense%20technology%20design%20with%20encrypted%20data%20streams%2C%20advanced%20security%20artificial%20intelligence%20with%20glowing%20protective%20interfaces&width=300&height=300&seq=agent7&orientation=squarish',
      description: 'Advanced cybersecurity monitoring and threat detection',
      isPremium: true,
      category: 'Business',
      creator: 'CyberGuard Corp'
    },
    {
      id: 8,
      name: 'ChatFlow Basic',
      price: '0.4 ETH',
      image: 'https://readdy.ai/api/search-image?query=friendly%20conversational%20AI%20with%20chat%20bubbles%20and%20communication%20elements%20in%20soft%20purple%20and%20pink%20tones%2C%20approachable%20design%20with%20messaging%20interfaces%2C%20basic%20artificial%20intelligence%20chatbot%20with%20glowing%20conversation%20displays&width=300&height=300&seq=agent8&orientation=squarish',
      description: 'Simple yet effective conversational AI for basic interactions',
      isPremium: false,
      category: 'Conversational',
      creator: 'ChatWorks'
    },
    {
      id: 9,
      name: 'AnalyticsMaster',
      price: '1.9 ETH',
      image: 'https://readdy.ai/api/search-image?query=powerful%20analytics%20AI%20with%20complex%20data%20visualizations%20and%20statistical%20charts%20in%20neon%20purple%20and%20pink%2C%20professional%20analytical%20design%20with%20premium%20dashboard%20interfaces%2C%20advanced%20data%20science%20artificial%20intelligence%20with%20glowing%20metrics%20displays&width=300&height=300&seq=agent9&orientation=squarish',
      description: 'Deep data analysis with predictive modeling capabilities',
      isPremium: false,
      category: 'Analytics',
      creator: 'DataMind Inc'
    },
    {
      id: 10,
      name: 'DesignGenius AI',
      price: '2.8 ETH',
      image: 'https://readdy.ai/api/search-image?query=elegant%20design%20AI%20with%20creative%20brushes%20and%20color%20palettes%2C%20sophisticated%20artistic%20intelligence%20with%20premium%20design%20tools%2C%20luxury%20creative%20artificial%20intelligence%20with%20glowing%20design%20interfaces%20and%20artistic%20elements&width=300&height=300&seq=agent10&orientation=squarish',
      description: 'Professional design and branding solutions with AI creativity',
      isPremium: true,
      category: 'Creative',
      creator: 'DesignCraft Studio'
    }
  ];

  const nextSlide = () => {
    if (currentIndex < featuredAgents.length - 5) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleAgents = featuredAgents.slice(currentIndex, currentIndex + 5);

  return (
    <section className="min-h-screen bg-[#121212] py-16">
      <div className="max-w-full mx-auto px-3">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-[#6A0DAD] to-[#FF69B4] bg-clip-text text-transparent">Premium Agents</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Discover our most popular and powerful AI agents, carefully selected for their exceptional capabilities and performance
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-xl transition-all duration-300 cursor-pointer ${
              currentIndex === 0 
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-[#FF69B4] via-[#FF1493] to-[#FF69B4] hover:from-[#FF1493] hover:via-[#DC143C] hover:to-[#FF1493] text-white shadow-xl shadow-[#FF69B4]/50 hover:shadow-2xl hover:shadow-[#FF69B4]/70 transform hover:scale-110'
            }`}
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= featuredAgents.length - 5}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-xl transition-all duration-300 cursor-pointer ${
              currentIndex >= featuredAgents.length - 5
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-[#FF69B4] via-[#FF1493] to-[#FF69B4] hover:from-[#FF1493] hover:via-[#DC143C] hover:to-[#FF1493] text-white shadow-xl shadow-[#FF69B4]/50 hover:shadow-2xl hover:shadow-[#FF69B4]/70 transform hover:scale-110'
            }`}
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }}
            >
              {featuredAgents.map((agent) => (
                <div key={agent.id} className="flex-shrink-0 w-1/5">
                  <AgentCard agent={agent} featured={true} />
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: featuredAgents.length - 4 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 cursor-pointer ${
                  index === currentIndex 
                    ? 'w-8 h-3 bg-gradient-to-r from-[#FF69B4] via-[#FF1493] to-[#FF69B4] rounded-full shadow-lg shadow-[#FF69B4]/40' 
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full hover:shadow-md hover:shadow-gray-400/30 hover:scale-110'
                }`}
              >
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
