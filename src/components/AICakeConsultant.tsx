import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, MessageCircle } from 'lucide-react';
import { useCakeConsultant } from '../hooks/useCakeConsultant';

const AICakeConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { messages, isLoading, sendMessage } = useCakeConsultant();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    await sendMessage(inputValue);
    setInputValue('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 bg-brand-accent text-white px-5 py-3 rounded-full shadow-lg hover:shadow-2xl hover:bg-brand-accentHover transition-all duration-300 transform hover:-translate-y-1"
        >
          <Sparkles className="h-5 w-5 animate-pulse" />
          <span className="font-semibold tracking-wide hidden md:inline">Cake Consultant</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl w-[90vw] sm:w-[24rem] h-[32rem] flex flex-col overflow-hidden animate-fade-in ring-1 ring-black/5">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-accent to-brand-accentHover p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-serif font-bold text-lg tracking-wide">Dein Torten-Assistent</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages area with fancy background pattern */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-brand-base/50 relative">
            {/* Decorative background element */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #B76E79 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed shadow-sm transition-all duration-200 ${msg.role === 'user'
                    ? 'bg-brand-accent text-white rounded-br-none shadow-brand-accent/20'
                    : 'bg-white text-brand-text border border-brand-accent/5 rounded-bl-none shadow-sm'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start relative z-10">
                <div className="bg-white/80 backdrop-blur-sm border border-brand-accent/10 text-brand-muted rounded-2xl rounded-bl-none px-4 py-3 text-xs flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 bg-brand-accent/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-brand-accent/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-brand-accent/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Erzähl mir von deinem Traumkuchen..."
                className="w-full bg-gray-50 border border-gray-200 rounded-full pl-5 pr-12 py-3 text-sm text-gray-700 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/10 transition-all placeholder:text-gray-400"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-1.5 p-2 bg-brand-accent rounded-full text-white hover:bg-brand-accentHover disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md active:scale-95"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">Powered by Gemini AI</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AICakeConsultant;