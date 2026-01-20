import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Defina sua Estratégia',
      description: 'Escolha indicadores, condições e parâmetros de forma visual'
    },
    {
      number: '02',
      title: 'IA Gera o Código',
      description: 'Nossa IA cria PineScript otimizado e profissional automaticamente'
    },
    {
      number: '03',
      title: 'Teste e Valide',
      description: 'Execute backtesting completo com dados históricos'
    },
    {
      number: '04',
      title: 'Deploy em TradingView',
      description: 'Envie direto para sua conta e comece a tradear'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Como Funciona
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-2xl font-bold mb-4 glow-effect">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
                <p className="text-slate-400 text-center text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent ml-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
