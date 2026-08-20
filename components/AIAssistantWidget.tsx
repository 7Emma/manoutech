"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, X, Send } from "lucide-react";

export default function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "ai" | "user"; content: string }[]>([
    {
      role: "ai",
      content: "Hi there! I'm Manou, your technical advisor. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: "I'm a demo AI assistant for now. Soon I'll be fully integrated to help you with architecture, pricing, and project specs!",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] glass-card rounded-2xl flex flex-col shadow-2xl shadow-primary/20 overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-surface/50 backdrop-blur-md flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-on-surface flex items-center gap-2">
                    Manou AI <Sparkles size={14} className="text-secondary" />
                  </h3>
                  <p className="text-[10px] text-green-400 flex items-center gap-1 font-label-mono uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-on-surface-variant hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                    msg.role === "user"
                      ? "bg-primary text-on-primary self-end rounded-tr-sm"
                      : "bg-surface-container text-on-surface self-start rounded-tl-sm border border-white/5"
                  }`}
                >
                  {msg.content}
                </motion.div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-surface/50">
              <form onSubmit={handleSend} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full bg-surface-container-highest border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-on-surface focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-2 p-2 bg-primary text-on-primary rounded-full hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 transition-all"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary flex items-center justify-center shadow-lg shadow-primary/30 border border-white/20 relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="bot"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
            >
              <Sparkles size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
