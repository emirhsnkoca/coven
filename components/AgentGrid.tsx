
'use client';

import { useState } from 'react';

export default function AgentGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Popular');

  const categories = ['All', 'Conversational', 'Development', 'Analytics', 'Creative', 'Business'];
  const sortOptions = ['Popular', 'Price: Low to High', 'Price: High to Low', 'Newest'];

  const agents = [
    {
      id: 1,
      rank: 1,
      name: 'GPT-Elite Pro',
      verified: true,
      floor: '2.5 ETH',
      topOffer: '2.8 ETH',
      floorChange: '+1.1%',
      changeColor: 'text-green-400',
      volume: '156.8 ETH',
      sales: 42,
      listed: '15.2%',
      listedCount: '1,355 / 8,888',
      image: 'https://readdy.ai/api/search-image?query=premium%20AI%20robot%20head%20with%20golden%20metallic%20finish%20and%20glowing%20purple%20eyes%2C%20luxury%20high-tech%20design%20with%20elegant%20curves%20and%20sophisticated%20details%2C%20futuristic%20artificial%20intelligence%20avatar%20with%20premium%20materials%20and%20neon%20accents&width=60&height=60&seq=agent1&orientation=squarish',
      category: 'Conversational',
      creator: 'TechCorp Labs',
      isPremium: true
    },
    {
      id: 2,
      rank: 2,
      name: 'CodeMaster AI',
      verified: true,
      floor: '1.8 ETH',
      topOffer: '2.1 ETH',
      floorChange: '+2.3%',
      changeColor: 'text-green-400',
      volume: '298.5 ETH',
      sales: 67,
      listed: '8.4%',
      listedCount: '756 / 9,000',
      image: 'https://readdy.ai/api/search-image?query=sleek%20AI%20coding%20assistant%20robot%20with%20neon%20pink%20and%20purple%20circuit%20patterns%2C%20modern%20technological%20design%20with%20holographic%20code%20displays%2C%20premium%20software%20development%20artificial%20intelligence%20with%20glowing%20interfaces&width=60&height=60&seq=agent2&orientation=squarish',
      category: 'Development',
      creator: 'DevForge Studio',
      isPremium: true
    },
    {
      id: 3,
      rank: 3,
      name: 'DataViz Pro',
      verified: true,
      floor: '1.2 ETH',
      topOffer: '1.4 ETH',
      floorChange: '-0.8%',
      changeColor: 'text-red-400',
      volume: '89.3 ETH',
      sales: 28,
      listed: '12.7%',
      listedCount: '943 / 7,420',
      image: 'https://readdy.ai/api/search-image?query=sophisticated%20data%20analysis%20AI%20with%20holographic%20charts%20and%20graphs%2C%20elegant%20purple%20and%20pink%20data%20visualization%20displays%2C%20premium%20business%20intelligence%20robot%20with%20glowing%20analytical%20interfaces%20and%20luxury%20finish&width=60&height=60&seq=agent3&orientation=squarish',
      category: 'Analytics',
      creator: 'DataCraft Inc',
      isPremium: false
    },
    {
      id: 4,
      rank: 4,
      name: 'CreativeBot Ultra',
      verified: false,
      floor: '0.8 ETH',
      topOffer: '0.9 ETH',
      floorChange: '+5.2%',
      changeColor: 'text-green-400',
      volume: '45.7 ETH',
      sales: 19,
      listed: '6.3%',
      listedCount: '378 / 6,000',
      image: 'https://readdy.ai/api/search-image?query=artistic%20AI%20creative%20assistant%20with%20vibrant%20purple%20and%20pink%20energy%20streams%2C%20elegant%20design%20with%20creative%20tools%20and%20artistic%20elements%2C%20premium%20creative%20artificial%20intelligence%20with%20glowing%20artistic%20interfaces%20and%20luxury%20materials&width=60&height=60&seq=agent4&orientation=squarish',
      category: 'Creative',
      creator: 'ArtTech Studios',
      isPremium: false
    },
    {
      id: 5,
      rank: 5,
      name: 'BusinessIQ Pro',
      verified: true,
      floor: '3.2 ETH',
      topOffer: '3.5 ETH',
      floorChange: '-1.4%',
      changeColor: 'text-red-400',
      volume: '412.9 ETH',
      sales: 89,
      listed: '4.1%',
      listedCount: '410 / 10,000',
      image: 'https://readdy.ai/api/search-image?query=professional%20business%20AI%20advisor%20with%20golden%20accents%20and%20purple%20holographic%20displays%2C%20luxury%20corporate%20design%20with%20sophisticated%20analytics%20and%20business%20charts%2C%20premium%20artificial%20intelligence%20for%20enterprise%20solutions&width=60&height=60&seq=agent5&orientation=squarish',
      category: 'Business',
      creator: 'CorpAI Solutions',
      isPremium: true
    },
    {
      id: 6,
      rank: 6,
      name: 'VoiceGen AI',
      verified: true,
      floor: '1.5 ETH',
      topOffer: '1.7 ETH',
      floorChange: '+3.1%',
      changeColor: 'text-green-400',
      volume: '127.4 ETH',
      sales: 34,
      listed: '9.8%',
      listedCount: '588 / 6,000',
      image: 'https://readdy.ai/api/search-image?query=sleek%20voice%20synthesis%20AI%20with%20sound%20waves%20and%20audio%20visualization%20in%20neon%20pink%20and%20purple%2C%20modern%20acoustic%20design%20with%20premium%20materials%2C%20advanced%20speech%20technology%20artificial%20intelligence%20with%20glowing%20sound%20interfaces&width=60&height=60&seq=agent6&orientation=squarish',
      category: 'Creative',
      creator: 'SoundTech Labs',
      isPremium: false
    },
    {
      id: 7,
      rank: 7,
      name: 'SecurityBot Elite',
      verified: true,
      floor: '2.1 ETH',
      topOffer: '2.3 ETH',
      floorChange: '+0.5%',
      changeColor: 'text-green-400',
      volume: '203.6 ETH',
      sales: 52,
      listed: '7.2%',
      listedCount: '432 / 6,000',
      image: 'https://readdy.ai/api/search-image?query=cybersecurity%20AI%20guardian%20with%20protective%20shields%20and%20security%20patterns%20in%20dark%20purple%20and%20pink%2C%20premium%20defense%20technology%20design%20with%20encrypted%20data%20streams%2C%20advanced%20security%20artificial%20intelligence%20with%20glowing%20protective%20interfaces&width=60&height=60&seq=agent7&orientation=squarish',
      category: 'Business',
      creator: 'CyberGuard Corp',
      isPremium: true
    },
    {
      id: 8,
      rank: 8,
      name: 'ChatFlow Basic',
      verified: false,
      floor: '0.4 ETH',
      topOffer: '0.5 ETH',
      floorChange: '+8.1%',
      changeColor: 'text-green-400',
      volume: '28.9 ETH',
      sales: 15,
      listed: '18.3%',
      listedCount: '1,098 / 6,000',
      image: 'https://readdy.ai/api/search-image?query=friendly%20conversational%20AI%20with%20chat%20bubbles%20and%20communication%20elements%20in%20soft%20purple%20and%20pink%20tones%2C%20approachable%20design%20with%20messaging%20interfaces%2C%20basic%20artificial%20intelligence%20chatbot%20with%20glowing%20conversation%20displays&width=60&height=60&seq=agent8&orientation=squarish',
      category: 'Conversational',
      creator: 'ChatWorks',
      isPremium: false
    },
    {
      id: 9,
      rank: 9,
      name: 'AnalyticsMaster',
      verified: true,
      floor: '1.9 ETH',
      topOffer: '2.0 ETH',
      floorChange: '-2.1%',
      changeColor: 'text-red-400',
      volume: '167.2 ETH',
      sales: 41,
      listed: '11.5%',
      listedCount: '690 / 6,000',
      image: 'https://readdy.ai/api/search-image?query=powerful%20analytics%20AI%20with%20complex%20data%20visualizations%20and%20statistical%20charts%20in%20neon%20purple%20and%20pink%2C%20professional%20analytical%20design%20with%20premium%20dashboard%20interfaces%2C%20advanced%20data%20science%20artificial%20intelligence%20with%20glowing%20metrics%20displays&width=60&height=60&seq=agent9&orientation=squarish',
      category: 'Analytics',
      creator: 'DataMind Inc',
      isPremium: false
    },
    {
      id: 10,
      rank: 10,
      name: 'DesignGenius AI',
      verified: true,
      floor: '2.8 ETH',
      topOffer: '3.1 ETH',
      floorChange: '+4.7%',
      changeColor: 'text-green-400',
      volume: '345.8 ETH',
      sales: 73,
      listed: '5.9%',
      listedCount: '354 / 6,000',
      image: 'https://readdy.ai/api/search-image?query=elegant%20design%20AI%20with%20creative%20brushes%20and%20color%20palettes%2C%20sophisticated%20artistic%20intelligence%20with%20premium%20design%20tools%2C%20luxury%20creative%20artificial%20intelligence%20with%20glowing%20design%20interfaces%20and%20artistic%20elements&width=60&height=60&seq=agent10&orientation=squarish',
      category: 'Creative',
      creator: 'DesignCraft Studio',
      isPremium: true
    }
  ];

  const filteredAgents = agents.filter(agent => 
    selectedCategory === 'All' || agent.category === selectedCategory
  );

  return (
    <section id="marketplace" className="py-12 bg-[#0f0f23] min-h-screen">
      <div className="max-w-full mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-6">
            <button className="bg-[#ff007a] text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Top
            </button>
            <span className="text-gray-400 text-sm">Memecoin NFTs</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-400">Badged</span>
              <div className="w-2 h-2 bg-[#ff007a] rounded-full"></div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-400">USD</span>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
            <div className="flex space-x-2 text-xs text-gray-400">
              <button>10m</button>
              <button>1h</button>
              <button>6h</button>
              <button className="text-white">1d</button>
              <button>7d</button>
              <button>30d</button>
            </div>
            <button className="text-[#ff007a] text-sm font-medium">See all →</button>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-4 py-3 text-xs text-gray-400 font-medium border-b border-gray-800">
          <div className="col-span-1">#</div>
          <div className="col-span-3">Collection</div>
          <div className="col-span-1 text-right">Floor</div>
          <div className="col-span-1 text-right">Top Offer</div>
          <div className="col-span-1 text-right">Floor 1d %</div>
          <div className="col-span-1 text-right">Volume</div>
          <div className="col-span-1 text-right">Sales</div>
          <div className="col-span-1 text-right">Listed</div>
          <div className="col-span-2 text-right">Last 1d</div>
        </div>

        {/* Table Body */}
        <div className="space-y-1">
          {filteredAgents.map((agent, index) => (
            <div
              key={agent.id}
              className="grid grid-cols-12 gap-4 px-4 py-4 hover:bg-[#1a1a3a] transition-colors duration-200 cursor-pointer border-b border-gray-900/50 group"
            >
              {/* Rank */}
              <div className="col-span-1 flex items-center">
                <button className="w-4 h-4 flex items-center justify-center text-gray-400 hover:text-white">
                  <i className="ri-star-line text-xs"></i>
                </button>
                <span className="text-gray-400 text-sm ml-2">{agent.rank}</span>
              </div>

              {/* Collection */}
              <div className="col-span-3 flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  {agent.isPremium && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#ffd700] rounded-full"></div>
                  )}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-sm font-medium">{agent.name}</span>
                    {agent.verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-white text-xs"></i>
                      </div>
                    )}
                  </div>
                  <span className="text-gray-500 text-xs">{agent.creator}</span>
                </div>
              </div>

              {/* Floor */}
              <div className="col-span-1 text-right">
                <div className="text-white text-sm font-medium">{agent.floor}</div>
                <div className="text-gray-500 text-xs">--</div>
              </div>

              {/* Top Offer */}
              <div className="col-span-1 text-right">
                <div className="text-white text-sm font-medium">{agent.topOffer}</div>
                <div className="text-gray-500 text-xs">--</div>
              </div>

              {/* Floor Change */}
              <div className="col-span-1 text-right">
                <div className={`text-sm font-medium ${agent.changeColor}`}>
                  {agent.floorChange}
                </div>
              </div>

              {/* Volume */}
              <div className="col-span-1 text-right">
                <div className="text-white text-sm font-medium">{agent.volume}</div>
                <div className="text-gray-500 text-xs">{agent.sales}</div>
              </div>

              {/* Sales */}
              <div className="col-span-1 text-right">
                <div className="text-white text-sm font-medium">{agent.sales}</div>
              </div>

              {/* Listed */}
              <div className="col-span-1 text-right">
                <div className="text-white text-sm font-medium">{agent.listed}</div>
                <div className="text-gray-500 text-xs">{agent.listedCount}</div>
              </div>

              {/* Chart */}
              <div className="col-span-2 flex justify-end items-center">
                <div className="w-20 h-8 flex items-center justify-end">
                  <div className={`w-16 h-6 rounded ${
                    agent.changeColor === 'text-green-400' 
                      ? 'bg-gradient-to-r from-green-500/20 to-green-400/40' 
                      : 'bg-gradient-to-r from-red-500/20 to-red-400/40'
                  }`}>
                    <div className={`h-full w-full rounded flex items-end justify-end px-1 ${
                      agent.changeColor === 'text-green-400' 
                        ? 'bg-green-400/10' 
                        : 'bg-red-400/10'
                    }`}>
                      {agent.changeColor === 'text-green-400' ? (
                        <div className="w-full h-3 bg-green-400 rounded-sm opacity-60"></div>
                      ) : (
                        <div className="w-full h-2 bg-red-400 rounded-sm opacity-60"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>Show top</span>
            <button className="bg-gray-800 text-white px-3 py-1 rounded">10</button>
            <button className="text-gray-400 hover:text-white">25</button>
            <button className="text-gray-400 hover:text-white">50</button>
            <button className="text-gray-400 hover:text-white">100</button>
            <button className="text-gray-400 hover:text-white">
              <i className="ri-grid-line"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
