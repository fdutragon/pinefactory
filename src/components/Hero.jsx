import React from 'react';

export default function Hero() {
  const handleTwitter = () => {
    window.open('https://x.com/felipedutragon', '_blank');
  };

  const handleWhatsApp = () => {
    const message = "Olá! Tenho interesse em conhecer mais sobre PineFactory!";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="gradient-text">PineFactory</span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-300 mb-4 max-w-2xl mx-auto">
          Crie scripts poderosos em PineScript sem codificar
        </p>

        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          Bot inteligente que gera estratégias de trading automatizadas para TradingView com IA
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={handleTwitter}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg glow-effect hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Começar Agora
          </button>
          <button 
            onClick={handleWhatsApp}
            className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
          >
            Ver Demo
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto text-sm">
          <div>
            <p className="text-2xl font-bold text-cyan-400">1000+</p>
            <p className="text-slate-400">Estratégias Criadas</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-400">99.9%</p>
            <p className="text-slate-400">Uptime</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-cyan-400">24/7</p>
            <p className="text-slate-400">Suporte</p>
          </div>
        </div>
      </div>
    </section>
  );
}
