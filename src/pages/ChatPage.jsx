import React from 'react';
import { Phone, Send, Plus } from 'lucide-react';

const ChatPage = () => {
  return (
    <main className="flex-1 overflow-hidden bg-gray-50">
      <div className="h-full flex">

        {/* ================= LEFT: CASE LIST ================= */}
        <aside className="hidden md:block w-72 border-r bg-white overflow-y-auto">
          <div className="p-4 border-b font-semibold text-sm">
            Active Cases
          </div>

          <div className="p-3 space-y-2">
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 cursor-pointer">
              <div className="text-xs text-emerald-600 font-semibold">CASE-9921</div>
              <div className="font-medium">Acme Corp</div>
              <div className="text-xs text-gray-500">Please send audit…</div>
            </div>

            <div className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className="text-xs text-gray-400">CASE-8823</div>
              <div className="font-medium">John Doe</div>
              <div className="text-xs text-gray-500">Underwriting complete</div>
            </div>
          </div>
        </aside>

        {/* ================= CENTER: CHAT ================= */}
        <section className="flex-1 flex flex-col bg-gray-50">

          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 bg-white border-b">
            <div>
              <div className="font-semibold">Emily Chen (RM)</div>
              <div className="text-xs text-gray-500">Acme Corp • CASE-9921</div>
            </div>
            
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="max-w-md bg-white p-3 rounded-lg text-sm shadow">
              Hello Alex, could you upload the latest audit report?
            </div>

            <div className="max-w-md ml-auto bg-blue-500 text-white p-3 rounded-lg text-sm">
              Sure, give me a moment.
            </div>

            <div className="max-w-md bg-white p-3 rounded-lg text-sm shadow">
              Received, thank you!
            </div>
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Plus className="w-5 h-5 text-gray-500" />
            </button>
            <input
              placeholder="Type a message…"
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 bg-emerald-500 rounded-lg text-white">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* ================= RIGHT: CONTEXT ================= */}
        <aside className="hidden lg:block w-80 border-l bg-white p-4">
          <h3 className="font-semibold mb-4">Case Context</h3>

          <div className="flex justify-center mb-4">
            <div className="w-28 h-28 rounded-full border-[10px] border-emerald-500 flex items-center justify-center font-bold text-xl">
              75%
            </div>
          </div>

          <div className="text-sm space-y-3">
            <div>
              <div className="text-gray-500 text-xs">Current Stage</div>
              <div className="font-medium">Underwriting</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs">Loan Amount</div>
              <div className="font-medium">$1.2M</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs">Term</div>
              <div className="font-medium">60 Months</div>
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
};

export default ChatPage;
