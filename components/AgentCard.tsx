
'use client';

import { useState } from 'react';

interface Agent {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  isPremium: boolean;
  category: string;
  creator: string;
}

interface AgentCardProps {
  agent: Agent;
  featured?: boolean;
}

export default function AgentCard({ agent, featured = false }: AgentCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 ${
        agent.isPremium
          ? 'border-2 border-[#FFD700] shadow-2xl shadow-[#FFD700]/30 hover:shadow-3xl hover:shadow-[#FFD700]/50'
          : 'border border-gray-700 hover:border-[#6A0DAD] hover:shadow-2xl hover:shadow-[#6A0DAD]/30'
      } ${featured ? 'lg:col-span-1' : ''}`}
      onMouseEnter={() => {
        setIsHovered(true);
        setShowTooltip(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowTooltip(false);
      }}
    >
      {/* Premium Badge */}
      {agent.isPremium && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
          ⭐ PREMIUM
        </div>
      )}

      {/* Agent Image */}
      <div className="relative h-56 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-70' : 'opacity-50'
        }`}></div>
        
        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#6A0DAD]/20 via-transparent to-[#FF69B4]/10 transition-all duration-300"></div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white truncate hover:text-[#FF69B4] transition-colors duration-200">{agent.name}</h3>
          <span className="text-[#FF69B4] font-bold text-lg whitespace-nowrap ml-3 bg-gray-800/50 px-2 py-1 rounded-lg">
            {agent.price}
          </span>
        </div>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">{agent.description}</p>
        
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">by</span>
            <span className="text-xs text-[#6A0DAD] font-semibold hover:text-[#8B5CF6] transition-colors duration-200 cursor-pointer">{agent.creator}</span>
          </div>
          <span className="bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-600">
            {agent.category}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 bg-gradient-to-r from-[#6A0DAD] via-[#8B5CF6] to-[#FF69B4] text-white py-3 px-4 rounded-xl text-sm font-semibold hover:shadow-xl hover:shadow-[#6A0DAD]/40 transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:-translate-y-0.5">
            Buy Now
          </button>
          <button className="border-2 border-gray-600 text-gray-300 py-3 px-4 rounded-xl text-sm font-semibold hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:text-white hover:border-gray-500 transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105">
            Preview
          </button>
        </div>
      </div>

      {/* Hover Tooltip */}
      {showTooltip && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 z-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-[#6A0DAD]/50 rounded-xl p-4 w-72 shadow-2xl shadow-[#6A0DAD]/20 backdrop-blur-sm">
          <h4 className="text-white font-bold mb-2 text-lg">{agent.name}</h4>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">{agent.description}</p>
          <button className="w-full bg-gradient-to-r from-[#FF69B4] to-[#FF1493] text-white py-3 px-4 rounded-xl text-sm font-semibold hover:from-[#FF1493] hover:to-[#DC143C] hover:shadow-lg hover:shadow-[#FF69B4]/40 transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105">
            Try Now
          </button>
        </div>
      )}

      {/* Enhanced Hover Glow Effect */}
      {isHovered && (
        <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 ${
          agent.isPremium
            ? 'shadow-3xl shadow-[#FFD700]/60 ring-2 ring-[#FFD700]/30'
            : 'shadow-3xl shadow-[#B100F8]/40 ring-2 ring-[#6A0DAD]/20'
        }`}></div>
      )}
    </div>
  );
}
