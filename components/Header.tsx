
'use client';

import { useState } from 'react';
import CreateAgentModal from './CreateAgentModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToMarketplace = () => {
    const marketplaceSection = document.getElementById('marketplace');
    if (marketplaceSection) {
      marketplaceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="bg-[#121212] border-b border-gray-800 sticky top-0 z-40 backdrop-blur-sm">
        <div className="max-w-full mx-auto px-3 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6A0DAD] to-[#FF69B4] rounded-xl flex items-center justify-center">
                <i className="ri-robot-line text-white text-lg"></i>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#6A0DAD] to-[#FF69B4] bg-clip-text text-transparent font-['Pacifico']">
                AI Marketplace
              </span>
            </div>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for AI agents..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-6 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-[#6A0DAD] focus:shadow-lg focus:shadow-[#6A0DAD]/20 transition-all duration-300 text-sm"
                />
                <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"></i>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-6">
              <nav className="hidden lg:flex items-center space-x-8">
                <button 
                  onClick={scrollToMarketplace}
                  className="text-gray-300 hover:text-[#FF69B4] transition-colors duration-200 font-medium cursor-pointer"
                >
                  Marketplace
                </button>
                <a href="#" className="text-gray-300 hover:text-[#FF69B4] transition-colors duration-200 font-medium">
                  Categories
                </a>
                <a href="#" className="text-gray-300 hover:text-[#FF69B4] transition-colors duration-200 font-medium">
                  Trending
                </a>
              </nav>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-[#6A0DAD] via-[#8B5CF6] to-[#FF69B4] text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-xl hover:shadow-[#6A0DAD]/40 transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105"
              >
                Create Agent
              </button>

              <div className="flex items-center space-x-4">
                <button className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-all duration-200 cursor-pointer">
                  <i className="ri-notification-line text-xl"></i>
                </button>
                <button className="w-10 h-10 bg-gradient-to-br from-[#6A0DAD] to-[#FF69B4] rounded-full flex items-center justify-center text-white font-bold cursor-pointer">
                  <i className="ri-user-line text-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <CreateAgentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
