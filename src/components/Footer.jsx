import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">PineFactory</h3>
            <p className="text-slate-400 text-sm">
              Transformando trading em código. Automatize suas estratégias com IA.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-cyan-400 transition">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Preços</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Documentação</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-cyan-400 transition">Comunidade</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-cyan-400 transition">Privacidade</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Termos</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-slate-400 text-sm">
          <p>&copy; 2024 PineFactory. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-cyan-400 transition">Twitter</a>
            <a href="#" className="hover:text-cyan-400 transition">Discord</a>
            <a href="#" className="hover:text-cyan-400 transition">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
