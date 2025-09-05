
'use client';

import { useState } from 'react';

interface CreateAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateAgentModal({ isOpen, onClose }: CreateAgentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    systemPrompt: '',
    category: 'Conversational',
    price: '',
    description: '',
    websiteLink: '',
    documents: [] as File[],
    websiteUrl: ''
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ['Conversational', 'Development', 'Analytics', 'Creative', 'Business'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || [];
    setFormData(prev => ({ ...prev, documents: [...prev.documents, ...files] }));
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Create New Agent</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-full transition-all duration-200 cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-3">Agent Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#6A0DAD] focus:shadow-lg focus:shadow-[#6A0DAD]/20 transition-all duration-300"
                  placeholder="Enter a name for your agent..."
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-3">System Prompt</label>
                <textarea
                  value={formData.systemPrompt}
                  onChange={(e) => setFormData({...formData, systemPrompt: e.target.value})}
                  rows={6}
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#6A0DAD] focus:shadow-lg focus:shadow-[#6A0DAD]/20 transition-all duration-300 resize-none"
                  placeholder="Describe in detail how your agent should behave..."
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-3">Upload Documents</label>
                <div className="border-2 border-dashed border-gray-600 rounded-2xl p-8 text-center hover:border-[#6A0DAD] hover:bg-gray-800/30 transition-all duration-300">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.doc,.docx,.txt"
                    multiple
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <i className="ri-upload-cloud-2-line text-4xl text-gray-400 mb-4 block"></i>
                    <p className="text-gray-300 mb-2">Drag files here or click to upload</p>
                    <p className="text-gray-500 text-sm">PDF, DOC, DOCX, TXT supported</p>
                  </label>
                  {formData.documents.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {formData.documents.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-700 px-4 py-2 rounded-xl">
                          <span className="text-sm text-gray-300">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-400 hover:text-red-300 cursor-pointer"
                          >
                            <i className="ri-delete-bin-line"></i>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-3">Website Link (Optional)</label>
                <input
                  type="url"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})}
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#6A0DAD] focus:shadow-lg focus:shadow-[#6A0DAD]/20 transition-all duration-300"
                  placeholder="https://example.com"
                />
              </div>

              <div className="flex space-x-4 pt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 border-2 border-gray-600 text-gray-300 py-4 px-6 rounded-2xl font-semibold hover:bg-gray-700 hover:text-white hover:border-gray-500 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#6A0DAD] via-[#8B5CF6] to-[#FF69B4] text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-[#6A0DAD]/50 transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105"
                >
                  Create Agent
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}