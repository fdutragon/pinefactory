import React from 'react';

export default function Features() {
  const features = [
    {
      title: 'IA Avançada',
      description: 'Algoritmo de IA que aprende com seus dados e gera estratégias otimizadas',
      icon: '🤖'
    },
    {
      title: 'Sem Codificação',
      description: 'Interface intuitiva - não precisa de conhecimento técnico em programação',
      icon: '⚡'
    },
    {
      title: 'Backtesting Completo',
      description: 'Teste suas estratégias em dados históricos antes de usar ao vivo',
      icon: '📊'
    },
    {
      title: 'TradingView Native',
      description: 'Scripts prontos para TradingView em segundos, sem instalação adicional',
      icon: '📈'
    },
    {
      title: 'Otimização Automática',
      description: 'Ajuste automático de parâmetros para melhor desempenho',
      icon: '🎯'
    },
    {
      title: 'Comunidade Ativa',
      description: 'Compartilhe estratégias e aprenda com outros traders',
      icon: '👥'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Funcionalidades Poderosas
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          Tudo que você precisa para criar e gerenciar estratégias de trading profissionais
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-slate-700 hover:border-cyan-500 bg-slate-800 bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 transform hover:-translate-y-2"
            >
              <p className="text-4xl mb-4">{feature.icon}</p>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
