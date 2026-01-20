import React from 'react';

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-cyan-500 border-opacity-30 bg-gradient-to-r from-cyan-500 from-10% via-purple-500 via-50% to-cyan-500 to-90% p-0.5">
          <div className="rounded-2xl bg-slate-900 p-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de traders que já estão usando PineFactory para automatizar suas estratégias
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg glow-effect hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Acesse Agora - Grátis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
