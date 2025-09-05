'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedAgents from '@/components/FeaturedAgents';
import AgentGrid from '@/components/AgentGrid';
import CreateAgentModal from '@/components/CreateAgentModal';

export default function Home() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212]">
      <Header onCreateAgent={() => setShowCreateModal(true)} />
      <HeroSection />
      <FeaturedAgents />
      <AgentGrid />
      
      {showCreateModal && (
        <CreateAgentModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
}