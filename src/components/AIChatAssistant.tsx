import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, User, Loader2, Trash2, Maximize2, Minimize2, X, MessageSquare, Sparkles, Zap, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { generateLogisticsResponseStream } from '../services/geminiService';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIChatAssistantProps {
  mode?: 'page' | 'widget';
  onClose?: () => void;
  onExpand?: () => void;
}

export const AIChatAssistant: React.FC<AIChatAssistantProps> = ({ mode = 'page', onClose, onExpand }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm LogistMate AI. How can I help you with your logistics, FMCSA, HOS, or freight queries today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isWidget = mode === 'widget';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Add a placeholder assistant message that we will update
    const assistantMessageId = (Date.now() + 1).toString();
    const initialAssistantMessage: Message = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, initialAssistantMessage]);

    try {
      await generateLogisticsResponseStream(userMessage.content, (text) => {
        setMessages((prev) => 
          prev.map((msg) => 
            msg.id === assistantMessageId ? { ...msg, content: text } : msg
          )
        );
      });
    } catch (error) {
      setMessages((prev) => 
        prev.map((msg) => 
          msg.id === assistantMessageId 
            ? { ...msg, content: "I encountered an error while processing your request. Please check your connection and try again." } 
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: "Chat cleared. How else can I assist you with your logistics queries?",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className={`flex flex-col ${isWidget ? 'h-full w-full' : 'h-[calc(100vh-200px)] max-w-4xl mx-auto rounded-[32px] shadow-2xl border border-zinc-100'} bg-white overflow-hidden`}>
      {/* Header */}
      <div className={`px-6 py-4 bg-gradient-to-r from-[#000080] to-[#00004d] text-white flex items-center justify-between relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
        <div className="flex items-center gap-3 relative z-10">
          <div className="relative">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#000080] shadow-lg">
              <Bot size={22} />
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-[#000080] flex items-center justify-center shadow-sm">
              <Sparkles size={10} className="text-white" />
            </div>
          </div>
          <div>
            <h3 className={`font-bold ${isWidget ? 'text-sm' : 'text-lg'} flex items-center gap-2`}>
              LogistMate AI
              {!isWidget && <span className="px-2 py-0.5 bg-blue-500/20 rounded-full text-[10px] uppercase tracking-widest border border-blue-400/30">Pro</span>}
            </h3>
            {!isWidget && <p className="text-xs text-blue-200">Expert Logistics Consultant</p>}
          </div>
        </div>
        <div className="flex items-center gap-2 relative z-10">
          {isWidget && onExpand && (
            <button 
              onClick={onExpand}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors text-blue-200 hover:text-white"
              title="Open in Full Page"
            >
              <Maximize2 size={18} />
            </button>
          )}
          <button 
            onClick={clearChat}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors text-blue-200 hover:text-white"
            title="Clear Chat"
          >
            <Trash2 size={18} />
          </button>
          {isWidget && onClose && (
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors text-blue-200 hover:text-white"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className={`flex-1 overflow-y-auto p-6 space-y-4 bg-zinc-50/50`}>
        {messages.map((message) => {
          if (message.role === 'assistant' && message.content === '' && isLoading) return null;
          
          return (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-2 max-w-[90%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                  message.role === 'user' ? 'bg-[#000080] text-white' : 'bg-white text-[#000080] border border-zinc-200'
                }`}>
                  {message.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`p-4 rounded-2xl shadow-sm ${
                  message.role === 'user' 
                    ? 'bg-[#000080] text-white rounded-tr-none' 
                    : 'bg-white text-zinc-800 border border-zinc-100 rounded-tl-none'
                }`}>
                  <div className={`prose prose-sm max-w-none prose-p:leading-relaxed ${message.role === 'user' ? 'prose-invert' : ''}`}>
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                    {isLoading && message.id === messages[messages.length - 1]?.id && (
                      <span className="inline-block w-1.5 h-4 bg-[#000080] ml-1 animate-pulse" />
                    )}
                  </div>
                  <p className={`text-[9px] mt-1 opacity-50 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
        {isLoading && messages[messages.length - 1]?.content === '' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="flex gap-2 items-center bg-white p-3 rounded-xl border border-zinc-100 shadow-sm">
              <Loader2 className="animate-spin text-[#000080]" size={16} />
              <span className="text-xs text-zinc-500 font-medium">Thinking...</span>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-zinc-100">
        <div className="relative flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything about logistics..."
            className="flex-1 pl-4 pr-12 py-3 bg-zinc-50 border border-zinc-100 rounded-xl text-sm focus:ring-2 focus:ring-[#000080]/20 outline-none transition-all"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-1.5 p-2 bg-[#000080] text-white rounded-lg hover:bg-[#000066] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-900/20"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
