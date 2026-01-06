import React, { useState } from 'react';
import { Send, Info, Clock, CheckCircle2 } from 'lucide-react';
import { BANK_USER_PHASES } from '../constants/workflow';

 
const ChatPage = ({ onNavigate }) => {
  const [messageInput, setMessageInput] = useState('');

 
  const activeReferrals = [
    {
      id: 1,
      caseId: 'RS-2024-001',
      clientName: 'Acme Corp',
      phase: BANK_USER_PHASES.VALUATION.name,
      lastMessage: 'Valuation is in progress...',
      isSelected: true
    },
    {
      id: 2,
      caseId: 'RS-2024-002',
      clientName: 'John Doe',
      phase: BANK_USER_PHASES.INITIATED.name,
      lastMessage: 'Welcome! RM assigned.',
      isSelected: false
    }
  ];

  const selectedReferral = activeReferrals.find(r => r.isSelected) || activeReferrals[0];

 
  const messages = [
    {
      id: 1,
      from: 'rm',
      text: 'Hello Alex, I have been assigned as the RM for your Acme Corp referral. The case is now in the Valuation phase.',
      time: '10:30 AM'
    },
    {
      id: 2,
      from: 'user',
      text: 'Great! How long does the valuation typically take?',
      time: '10:32 AM'
    },
    {
      id: 3,
      from: 'rm',
      text: 'Valuation usually takes 2-3 business days. I will update you once it moves to the Payment phase.',
      time: '10:35 AM'
    },
    {
      id: 4,
      from: 'user',
      text: 'Thank you for the update!',
      time: '10:36 AM'
    }
  ];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Handle send message logic here
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <main className="flex-1 overflow-hidden bg-gray-50">
      <div className="h-full flex">

        {/* ================= LEFT: REFERRAL LIST ================= */}
        <aside className="hidden md:block w-72 border-r bg-white overflow-y-auto">
          <div className="p-4 border-b">
            <h2 className="font-semibold text-sm text-gray-900">Active Referrals</h2>
            <p className="text-xs text-gray-500 mt-0.5">Chat with your RM</p>
          </div>

          <div className="p-3 space-y-2">
            {activeReferrals.map((referral) => (
              <div
                key={referral.id}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  referral.isSelected
                    ? 'bg-blue-50 border border-blue-200'
                    : 'hover:bg-gray-50 border border-transparent'
                }`}
              >
                <div className={`text-xs font-semibold mb-1 ${
                  referral.isSelected ? 'text-blue-500' : 'text-gray-400'
                }`}>
                  {referral.caseId}
                </div>
                <div className="font-medium text-gray-900">{referral.clientName}</div>
                <div className="text-xs text-gray-500 truncate mt-1">{referral.lastMessage}</div>
                <div className="mt-2">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                    referral.phase === 'Completed' ? 'bg-green-100 text-green-700' :
                    referral.phase === 'Valuation' ? 'bg-purple-100 text-purple-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {referral.phase}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* ================= CENTER: CHAT ================= */}
        <section className="flex-1 flex flex-col bg-gray-50">

          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 bg-white border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">EC</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Emily Chen</div>
                <div className="text-xs text-gray-500">Relationship Manager • {selectedReferral.clientName}</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-green-600">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Online
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-md p-3 rounded-lg text-sm ${
                  message.from === 'user'
                    ? 'bg-blue-400 text-white'
                    : 'bg-white shadow-sm border border-gray-100'
                }`}>
                  {message.text}
                  <div className={`text-xs mt-1 ${
                    message.from === 'user' ? 'text-blue-100' : 'text-gray-400'
                  }`}>
                    {message.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input - NO attachment button for Bank Users */}
          <div className="p-4 bg-white border-t">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a message to your RM..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!messageInput.trim()}
                className="p-2.5 bg-blue-400 rounded-lg text-white hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Messages are for RM communication only
            </p>
          </div>
        </section>

        {/* ================= RIGHT: REFERRAL CONTEXT (High-Level Only) ================= */}
        <aside className="hidden lg:flex lg:flex-col w-80 border-l bg-white">
          <div className="p-4 border-b">
            <h3 className="font-semibold text-gray-900">Referral Status</h3>
            <p className="text-xs text-gray-500 mt-0.5">High-level progress view</p>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            {/* Progress Circle */}
            <div className="flex justify-center mb-6">
              <div className="w-28 h-28 rounded-full border-8 border-blue-400 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">40%</div>
                  <div className="text-xs text-gray-500">Complete</div>
                </div>
              </div>
            </div>

            {/* Case Info - Limited to what Bank User can see */}
            <div className="space-y-4 mb-6">
              <div>
                <div className="text-xs font-semibold text-gray-500 mb-1">CASE ID</div>
                <div className="text-sm font-medium text-gray-900">{selectedReferral.caseId}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 mb-1">CLIENT</div>
                <div className="text-sm font-medium text-gray-900">{selectedReferral.clientName}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 mb-1">CURRENT PHASE</div>
                <div className="text-sm font-medium text-gray-900">{selectedReferral.phase}</div>
              </div>
            </div>

            {/* Phase Progress - High Level Only */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-xs font-semibold text-gray-500 mb-3">PROGRESS PHASES</h4>
              <div className="space-y-3">
                {Object.values(BANK_USER_PHASES).map((phase, index) => {
                  const isCompleted = index < 1; // Mocked: first phase completed
                  const isCurrent = index === 1; // Mocked: second phase is current
                  return (
                    <div key={phase.id} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        isCompleted ? 'bg-green-500' :
                        isCurrent ? 'bg-blue-400' :
                        'bg-gray-200'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        ) : isCurrent ? (
                          <Clock className="w-3 h-3 text-white" />
                        ) : (
                          <span className="text-xs text-gray-400">{index + 1}</span>
                        )}
                      </div>
                      <span className={`text-sm ${
                        isCompleted || isCurrent ? 'text-gray-900 font-medium' : 'text-gray-400'
                      }`}>
                        {phase.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Info Notice */}
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-blue-800">
                  Contact your RM for detailed updates about your referral.
                </p>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
};

export default ChatPage;
