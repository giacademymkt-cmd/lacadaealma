import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Download, Clock, Ruler, ChevronDown, AlertTriangle, Package, BookOpen, Wrench, Layers, Scissors, Sparkles } from 'lucide-react';
import { getReceita, NIVEL_LABEL, NIVEL_COR, CATEGORIAS } from '../data/receitas';

type Aba = 'materiais' | 'abreviacoes' | 'notas' | 'receita' | 'montagem' | 'acabamento';

const ABAS: { id: Aba; label: string; icon: React.ReactNode }[] = [
  { id: 'materiais',   label: 'Materiais',    icon: <Package size={15} /> },
  { id: 'abreviacoes', label: 'Abreviações',  icon: <BookOpen size={15} /> },
  { id: 'notas',       label: 'Notas',        icon: <AlertTriangle size={15} /> },
  { id: 'receita',     label: 'Receita',      icon: <Layers size={15} /> },
  { id: 'montagem',    label: 'Montagem',     icon: <Wrench size={15} /> },
  { id: 'acabamento',  label: 'Acabamento',   icon: <Scissors size={15} /> },
];

export default function ReceitaPage() {
  const { slug } = useParams<{ slug: string }>();
  const receita = getReceita(slug ?? '');
  const [abaAtiva, setAbaAtiva] = useState<Aba>('receita');
  const [partesAbertas, setPartesAbertas] = useState<Set<number>>(new Set([0]));

  if (!receita) {
    return (
      <div className="min-h-screen bg-brand-beige flex items-center justify-center pt-20">
        <div className="text-center">
          <span className="text-5xl mb-4 block">🔍</span>
          <p className="font-serif text-2xl text-brand-dark mb-4">Receita não encontrada</p>
          <Link to="/receitas" className="text-brand-rose hover:underline flex items-center gap-1 justify-center">
            <ArrowLeft size={16} /> Voltar para receitas
          </Link>
        </div>
      </div>
    );
  }

  const toggleParte = (i: number) => {
    setPartesAbertas(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const handlePrint = () => window.print();

  const catInfo = CATEGORIAS.find(c => c.slug === receita.categoria);

  return (
    <>
      {/* ── TELA NORMAL ── */}
      <div className="min-h-screen bg-brand-beige pt-20 print:hidden">

        {/* Header */}
        <div
          className="relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${receita.corCard}99, ${receita.corCard}44, white)` }}
        >
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle, #3F3935 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          <div className="relative max-w-4xl mx-auto px-6 md:px-12 py-10">
            <Link
              to="/receitas"
              className="inline-flex items-center gap-1 text-sm text-brand-taupe hover:text-brand-dark mb-6 transition-colors"
            >
              <ArrowLeft size={15} /> Todas as receitas
            </Link>

            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Emoji */}
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl shadow-lg shrink-0"
                style={{ background: receita.corCard }}
              >
                {receita.emoji}
              </div>

              {/* Info */}
              <div className="flex-1">
                <p className="text-xs text-brand-taupe uppercase tracking-widest mb-1">
                  {catInfo?.emoji} {catInfo?.label}
                </p>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-3">
                  {receita.nome}
                </h1>
                <div className="flex flex-wrap gap-2 items-center">
                  <span
                    className="text-white text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: NIVEL_COR[receita.nivel] }}
                  >
                    {NIVEL_LABEL[receita.nivel]}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-brand-taupe bg-white/70 px-3 py-1 rounded-full">
                    <Ruler size={11} /> {receita.tamanhoFinal}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-brand-taupe bg-white/70 px-3 py-1 rounded-full">
                    <Clock size={11} /> {receita.tempoEstimado}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-brand-taupe bg-white/70 px-3 py-1 rounded-full">
                    <Layers size={11} /> {receita.partes.length} partes
                  </span>
                </div>
              </div>

              {/* Botão PDF */}
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-black transition-colors shadow-lg shrink-0"
              >
                <Download size={16} />
                Baixar PDF
              </button>
            </div>
          </div>
        </div>

        {/* Navegação de abas */}
        <div className="sticky top-[65px] z-30 bg-white/90 backdrop-blur-md border-b border-brand-rose/10 shadow-sm">
          <div className="max-w-4xl mx-auto px-6 md:px-12 overflow-x-auto">
            <div className="flex gap-1 py-2 min-w-max">
              {ABAS.map(aba => (
                <button
                  key={aba.id}
                  onClick={() => setAbaAtiva(aba.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    abaAtiva === aba.id
                      ? 'bg-brand-dark text-white shadow-sm'
                      : 'text-brand-taupe hover:text-brand-dark hover:bg-brand-blush/40'
                  }`}
                >
                  {aba.icon}
                  {aba.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Conteúdo da aba */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-10 pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={abaAtiva}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >

              {/* ── MATERIAIS ── */}
              {abaAtiva === 'materiais' && (
                <div>
                  <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">Materiais necessários</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {receita.materiais.map((m, i) => (
                      <div key={i} className="bg-white rounded-2xl p-4 border border-brand-rose/10 flex items-start gap-3">
                        <span className="text-brand-rose mt-0.5">•</span>
                        <div>
                          <p className="font-medium text-brand-dark text-sm">{m.item}</p>
                          <p className="text-xs text-brand-taupe mt-0.5">{m.detalhe}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── ABREVIAÇÕES ── */}
              {abaAtiva === 'abreviacoes' && (
                <div>
                  <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">Abreviações usadas</h2>
                  <div className="bg-white rounded-2xl border border-brand-rose/10 overflow-hidden">
                    {receita.abreviacoes.map((ab, i) => (
                      <div key={i} className={`flex items-center gap-4 px-5 py-3.5 ${i % 2 === 0 ? 'bg-brand-blush/20' : 'bg-white'}`}>
                        <code className="font-mono font-bold text-brand-dark bg-brand-rose/10 px-2 py-0.5 rounded text-sm min-w-[3rem] text-center">
                          {ab.sigla}
                        </code>
                        <span className="text-brand-taupe text-sm">{ab.significado}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── NOTAS ── */}
              {abaAtiva === 'notas' && (
                <div>
                  <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">Notas importantes</h2>
                  <div className="space-y-3">
                    {receita.notas.map((nota, i) => (
                      <div key={i} className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4">
                        <AlertTriangle size={16} className="text-amber-500 mt-0.5 shrink-0" />
                        <p className="text-sm text-amber-900">{nota}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── RECEITA ── */}
              {abaAtiva === 'receita' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-serif text-2xl font-bold text-brand-dark">Receita carreira a carreira</h2>
                    <button
                      onClick={() => setPartesAbertas(new Set(receita.partes.map((_, i) => i)))}
                      className="text-xs text-brand-taupe hover:text-brand-dark underline"
                    >
                      Expandir tudo
                    </button>
                  </div>

                  <div className="space-y-4">
                    {receita.partes.map((parte, pi) => {
                      const aberta = partesAbertas.has(pi);
                      return (
                        <div key={pi} className="bg-white rounded-2xl border border-brand-rose/10 overflow-hidden shadow-sm">
                          {/* Header da parte */}
                          <button
                            onClick={() => toggleParte(pi)}
                            className="w-full flex items-center justify-between px-5 py-4 hover:bg-brand-blush/10 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-7 h-7 rounded-full bg-brand-dark text-white text-xs font-bold flex items-center justify-center">
                                {pi + 1}
                              </span>
                              <div className="text-left">
                                <p className="font-semibold text-brand-dark">{parte.nome}</p>
                                {parte.quantidade > 1 && (
                                  <p className="text-xs text-brand-taupe">Fazer {parte.quantidade}×</p>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-brand-taupe hidden sm:block">
                                {parte.carreiras.length} carreiras
                              </span>
                              <ChevronDown
                                size={16}
                                className={`text-brand-taupe transition-transform duration-200 ${aberta ? 'rotate-180' : ''}`}
                              />
                            </div>
                          </button>

                          {/* Carreiras */}
                          <AnimatePresence initial={false}>
                            {aberta && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                className="overflow-hidden"
                              >
                                <div className="border-t border-brand-rose/10">
                                  {parte.carreiras.map((c, ci) => (
                                    <div key={ci} className="px-5 py-3 border-b border-brand-rose/5 last:border-0">
                                      <div className="flex items-start gap-3">
                                        {/* Número da carreira */}
                                        <span className="font-mono text-xs font-bold text-brand-rose bg-brand-blush px-2 py-0.5 rounded mt-0.5 shrink-0 min-w-[3rem] text-center">
                                          {c.numero}
                                        </span>
                                        <div className="flex-1">
                                          {/* Instrução */}
                                          <p className="text-sm text-brand-dark">
                                            {c.instrucao}{' '}
                                            <span className="font-bold text-brand-dark">
                                              [{c.total}]
                                            </span>
                                          </p>
                                          {/* Nota de alerta */}
                                          {c.nota && (
                                            <div className="flex items-start gap-2 mt-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
                                              <AlertTriangle size={13} className="text-amber-500 mt-0.5 shrink-0" />
                                              <p className="text-xs text-amber-800">{c.nota}</p>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  ))}

                                  {/* Fechamento */}
                                  <div className="px-5 py-3 bg-brand-sage/20">
                                    <div className="flex items-start gap-3">
                                      <span className="font-mono text-xs font-bold text-brand-taupe bg-brand-sage px-2 py-0.5 rounded mt-0.5 shrink-0 min-w-[3rem] text-center">
                                        FIM
                                      </span>
                                      <p className="text-sm text-brand-taupe italic">{parte.fechamento}</p>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ── MONTAGEM ── */}
              {abaAtiva === 'montagem' && (
                <div>
                  <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">Montagem</h2>
                  <div className="space-y-3">
                    {receita.montagem.map((passo, i) => (
                      <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-brand-rose/10">
                        <span className="w-7 h-7 rounded-full bg-brand-rose/20 text-brand-dark text-xs font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <p className="text-sm text-brand-dark leading-relaxed">{passo}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── ACABAMENTO ── */}
              {abaAtiva === 'acabamento' && (
                <div>
                  <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">Acabamento</h2>
                  <div className="space-y-3">
                    {receita.acabamento.map((passo, i) => (
                      <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-brand-rose/10">
                        <Sparkles size={16} className="text-brand-rose mt-0.5 shrink-0" />
                        <p className="text-sm text-brand-dark leading-relaxed">{passo}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Print */}
                  <div className="mt-10 bg-gradient-to-r from-brand-blush to-brand-sage/30 rounded-3xl p-8 text-center">
                    <p className="font-serif text-xl font-bold text-brand-dark mb-2">Pronta para começar?</p>
                    <p className="text-brand-taupe text-sm mb-5">Baixe em PDF para ter a receita impressa ao seu lado.</p>
                    <button
                      onClick={handlePrint}
                      className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-black transition-colors shadow-lg"
                    >
                      <Download size={16} />
                      Baixar PDF completo
                    </button>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── VERSÃO PARA IMPRESSÃO (PDF) ── */}
      <div className="hidden print:block print-content">
        <PrintView receita={receita} />
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
// COMPONENTE DE IMPRESSÃO
// ─────────────────────────────────────────────
function PrintView({ receita }: { receita: ReturnType<typeof getReceita> }) {
  if (!receita) return null;
  return (
    <div className="print-page">
      {/* Cabeçalho */}
      <div className="print-header">
        <div className="print-header-left">
          <p className="print-brand">Laçada e Alma</p>
          <h1 className="print-title">{receita.nome}</h1>
          <div className="print-badges">
            <span>{NIVEL_LABEL[receita.nivel]}</span>
            <span>{receita.tamanhoFinal}</span>
            <span>{receita.tempoEstimado}</span>
          </div>
        </div>
        <div className="print-emoji">{receita.emoji}</div>
      </div>

      {/* Materiais */}
      <section className="print-section">
        <h2>Materiais</h2>
        <ul className="print-list">
          {receita.materiais.map((m, i) => (
            <li key={i}><strong>{m.item}</strong> — {m.detalhe}</li>
          ))}
        </ul>
      </section>

      {/* Abreviações */}
      <section className="print-section">
        <h2>Abreviações</h2>
        <div className="print-abbr-grid">
          {receita.abreviacoes.map((ab, i) => (
            <div key={i} className="print-abbr-item">
              <code>{ab.sigla}</code> = {ab.significado}
            </div>
          ))}
        </div>
      </section>

      {/* Notas */}
      <section className="print-section">
        <h2>Notas Importantes</h2>
        <ul className="print-list print-notes">
          {receita.notas.map((n, i) => <li key={i}>{n}</li>)}
        </ul>
      </section>

      {/* Receita */}
      <section className="print-section">
        <h2>Receita</h2>
        {receita.partes.map((parte, pi) => (
          <div key={pi} className="print-parte">
            <h3>
              {pi + 1}. {parte.nome}
              {parte.quantidade > 1 && ` (fazer ${parte.quantidade}×)`}
            </h3>
            <table className="print-table">
              <thead>
                <tr>
                  <th>Carreira</th>
                  <th>Instrução</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {parte.carreiras.map((c, ci) => (
                  <React.Fragment key={ci}>
                    <tr className={ci % 2 === 0 ? 'print-row-alt' : ''}>
                      <td className="print-cell-num">{c.numero}</td>
                      <td>{c.instrucao}</td>
                      <td className="print-cell-total">[{c.total}]</td>
                    </tr>
                    {c.nota && (
                      <tr>
                        <td colSpan={3} className="print-note-row">
                          ⚠️ {c.nota}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
                <tr className="print-row-close">
                  <td className="print-cell-num">FIM</td>
                  <td colSpan={2}>{parte.fechamento}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </section>

      {/* Montagem */}
      <section className="print-section">
        <h2>Montagem</h2>
        <ol className="print-list">
          {receita.montagem.map((passo, i) => <li key={i}>{passo}</li>)}
        </ol>
      </section>

      {/* Acabamento */}
      <section className="print-section">
        <h2>Acabamento</h2>
        <ul className="print-list">
          {receita.acabamento.map((passo, i) => <li key={i}>{passo}</li>)}
        </ul>
      </section>

      {/* Rodapé */}
      <footer className="print-footer">
        <p>Laçada e Alma © 2026 — Receita para uso pessoal e venda das peças confeccionadas. Não redistribuir.</p>
      </footer>
    </div>
  );
}
