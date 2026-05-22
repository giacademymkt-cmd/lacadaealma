import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Ruler, ChevronRight, Search } from 'lucide-react';
import { RECEITAS, CATEGORIAS, NIVEL_LABEL, NIVEL_COR } from '../data/receitas';

export default function ReceitasPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>('todas');
  const [busca, setBusca] = useState('');

  const receitasFiltradas = RECEITAS.filter(r => {
    const matchCategoria = categoriaAtiva === 'todas' || r.categoria === categoriaAtiva;
    const matchBusca = r.nome.toLowerCase().includes(busca.toLowerCase());
    return matchCategoria && matchBusca;
  });

  const categoriaComContagem = CATEGORIAS.map(c => ({
    ...c,
    count: RECEITAS.filter(r => r.categoria === c.slug).length,
  })).filter(c => c.count > 0);

  return (
    <div className="min-h-screen bg-brand-beige pt-20 print:hidden">

      {/* Hero */}
      <section className="relative py-16 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blush/60 via-white to-brand-sage/30 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-5xl mb-4">🧶</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-4">
              Receitas da Duda
            </h1>
            <p className="text-brand-taupe text-lg max-w-xl mx-auto font-light">
              Receitas 100% verificadas, carreira por carreira. Cada detalhe revisado para que sua peça fique perfeita.
            </p>
          </motion.div>

          {/* Busca */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 max-w-md mx-auto relative"
          >
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-taupe" />
            <input
              type="text"
              placeholder="Buscar receita..."
              value={busca}
              onChange={e => setBusca(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-brand-rose/40 bg-white/80 backdrop-blur-sm text-brand-dark placeholder-brand-taupe/60 text-sm focus:outline-none focus:ring-2 focus:ring-brand-rose/30 shadow-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* Categorias */}
      <section className="px-6 md:px-16 pb-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 flex-wrap justify-center">
            <button
              onClick={() => setCategoriaAtiva('todas')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                categoriaAtiva === 'todas'
                  ? 'bg-brand-dark text-white shadow-md'
                  : 'bg-white border border-brand-rose/30 text-brand-taupe hover:border-brand-rose/60 hover:text-brand-dark'
              }`}
            >
              🧶 Todas ({RECEITAS.length})
            </button>
            {categoriaComContagem.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setCategoriaAtiva(cat.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  categoriaAtiva === cat.slug
                    ? 'bg-brand-dark text-white shadow-md'
                    : 'bg-white border border-brand-rose/30 text-brand-taupe hover:border-brand-rose/60 hover:text-brand-dark'
                }`}
              >
                {cat.emoji} {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de receitas */}
      <section className="px-6 md:px-16 pb-24">
        <div className="max-w-6xl mx-auto">
          {receitasFiltradas.length === 0 ? (
            <div className="text-center py-24 text-brand-taupe">
              <span className="text-5xl mb-4 block">🔍</span>
              <p className="font-light">Nenhuma receita encontrada para "{busca}".</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
              {receitasFiltradas.map((receita, i) => (
                <motion.div
                  key={receita.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                >
                  <Link to={`/receitas/${receita.slug}`} className="block h-full group">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-rose/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">

                      {/* Imagem / Placeholder */}
                      <div
                        className="h-44 flex items-center justify-center relative overflow-hidden"
                        style={{ background: `linear-gradient(135deg, ${receita.corCard}, ${receita.corCard}99)` }}
                      >
                        {receita.imagemUrl ? (
                          <img
                            src={receita.imagemUrl}
                            alt={receita.nome}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 opacity-10"
                              style={{
                                backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
                                backgroundSize: '30px 30px',
                              }}
                            />
                            <span className="text-7xl drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                              {receita.emoji}
                            </span>
                          </>
                        )}

                        {/* Nível badge */}
                        <span
                          className="absolute top-3 right-3 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm z-10"
                          style={{ backgroundColor: NIVEL_COR[receita.nivel] }}
                        >
                          {NIVEL_LABEL[receita.nivel]}
                        </span>
                      </div>

                      {/* Conteúdo */}
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-serif text-xl font-bold text-brand-dark mb-1">
                          {receita.nome}
                        </h3>
                        <p className="text-xs text-brand-taupe uppercase tracking-wide mb-3">
                          {CATEGORIAS.find(c => c.slug === receita.categoria)?.label}
                        </p>

                        <div className="flex gap-4 text-xs text-brand-taupe mb-4">
                          <span className="flex items-center gap-1">
                            <Ruler size={12} />
                            {receita.tamanhoFinal}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {receita.tempoEstimado}
                          </span>
                        </div>

                        <div className="mt-auto">
                          <span className="flex items-center justify-between w-full text-sm font-semibold text-brand-dark group-hover:text-brand-rose transition-colors">
                            Ver Receita
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}

              {/* Card "Em breve" */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: receitasFiltradas.length * 0.07, duration: 0.5 }}
              >
                <div className="bg-white/50 rounded-3xl overflow-hidden border-2 border-dashed border-brand-rose/20 h-full flex flex-col items-center justify-center p-10 text-center min-h-[280px]">
                  <span className="text-4xl mb-3 opacity-40">✨</span>
                  <p className="font-serif text-lg text-brand-dark/40 font-bold mb-1">Em breve</p>
                  <p className="text-xs text-brand-taupe/60">
                    Novas receitas sendo preparadas com carinho
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
