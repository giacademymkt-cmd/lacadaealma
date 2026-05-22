import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';
import { ChevronRight, Heart, Sparkles, MessageCircle, Camera, Shield, Gift } from 'lucide-react';
import ReceitasPage from './pages/ReceitasPage';
import ReceitaPage from './pages/ReceitaPage';

// ─────────────────────────────────────────────
// LANDING PAGE (original)
// ─────────────────────────────────────────────
function LandingPage() {
  const WHATSAPP_LINK = "https://wa.me/5553991073024?text=Olá,%20Eduarda!%20Estou%20na%20sua%20página%20e%20gostaria%20de%20consultar%20uma%20encomenda.";

  const easeInOut: Easing = "easeInOut";
  const floatSubtle = {
    y: ["-8px", "8px"],
    transition: { duration: 4, repeat: Infinity, repeatType: "reverse" as const, ease: easeInOut }
  };

  const floatRotate = {
    y: ["-10px", "15px"],
    rotate: [-3, 3],
    transition: { duration: 5, repeat: Infinity, repeatType: "reverse" as const, ease: easeInOut }
  };

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col lg:flex-row items-center pt-24 pb-12 px-6 md:px-16 gap-8 max-w-[1400px] mx-auto bg-white">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 z-20 text-center lg:text-left mt-10 md:mt-0"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-blush/80 text-brand-dark/80 text-xs font-bold uppercase tracking-[0.1em] mb-6">
            <Sparkles size={12} className="text-brand-taupe" />
            Ateliê Artesanal
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.05] mb-6 text-brand-dark">
            A arquitetura do afeto. <br className="hidden md:block"/> Um presente eterno.
          </h1>

          <p className="text-lg md:text-xl text-brand-taupe max-w-lg mx-auto lg:mx-0 mb-10 font-light leading-relaxed">
            Muito além de decoração ou brinquedos. Criamos joias táteis para proteger memórias. Para presentear adultos que amam arte ou transformar o berço num refúgio.
          </p>

          <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={WHATSAPP_LINK}
              className="inline-flex items-center justify-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest shadow-xl shadow-brand-dark/20 hover:bg-black transition-all w-full md:w-auto mt-2"
          >
            Consultar Encomendas <MessageCircle size={18} />
          </motion.a>
        </motion.div>

        <div className="flex-1 relative w-full h-[500px] md:h-[650px] mt-12 lg:mt-0 flex justify-center items-center bg-white rounded-3xl">
           <motion.img
              animate={floatRotate}
              src="/floating_yarn.png"
              alt="Lã Pastel"
              className="absolute top-[8%] right-[2%] w-24 md:w-32 z-30 drop-shadow-2xl mix-blend-multiply pointer-events-none opacity-90"
           />
           <motion.img
              animate={floatSubtle}
              src="/floating_hook.png"
              alt="Agulha 3D"
              className="absolute bottom-[5%] left-[-5%] w-32 md:w-48 z-30 drop-shadow-xl mix-blend-multiply pointer-events-none rotate-[15deg] opacity-90"
           />
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, delay: 0.2 }}
             className="relative z-10 w-[95%] sm:w-[85%] h-full max-h-[550px] rounded-[2rem] overflow-hidden shadow-2xl border-[10px] border-white group"
           >
              <img
                src="/hero_bunny.png"
                alt="Coelho no Quarto"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out"
              />
           </motion.div>
        </div>
      </section>

      {/* VALOR */}
      <section className="py-24 px-6 md:px-16 relative bg-white border-t border-brand-taupe/10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative order-2 lg:order-1 flex justify-center"
          >
             <img src="/classic_bear.png" alt="Urso Clássico" className="w-[85%] h-auto rounded-3xl shadow-xl border-8 border-white object-cover aspect-[4/5] z-10 relative" />
             <div className="absolute top-8 -right-4 w-[85%] h-full border-2 border-brand-taupe/20 rounded-3xl z-0"></div>
          </motion.div>

          <motion.div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-brand-dark leading-tight">
              Um presente para qualquer geração
            </h2>
            <div className="space-y-10">
              <div className="flex gap-5">
                 <div className="w-12 h-12 rounded-full bg-brand-blush text-brand-dark flex items-center justify-center shrink-0">
                   <Gift size={22} strokeWidth={1.5} />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold mb-2 text-brand-dark">A certeza de acertar</h3>
                   <p className="text-brand-taupe font-light leading-relaxed">
                     Não há margem de erro. Seja um projeto personalizado para o decor do quarto, ou a pelúcia afetiva para marcar presença no aniversário ou nascimento.
                   </p>
                 </div>
              </div>
              <div className="flex gap-5">
                 <div className="w-12 h-12 rounded-full bg-brand-blush text-brand-dark flex items-center justify-center shrink-0">
                   <Shield size={22} strokeWidth={1.5} />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold mb-2 text-brand-dark">Herança resistente</h3>
                   <p className="text-brand-taupe font-light leading-relaxed">
                     Ao invés de brinquedos de plástico que quebram num dia, nossos personagens são atados nó a nó. Eles acompanham o crescimento, colecionam momentos e duram a vida toda.
                   </p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-24 px-6 md:px-16 bg-brand-beige/50 border-t border-brand-taupe/10 text-center">
        <div className="max-w-[1200px] mx-auto">
           <div className="flex flex-col items-center justify-center mb-12">
             <Camera size={36} className="text-brand-dark mb-4 opacity-50" strokeWidth={1.5} />
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">Veja as Nossas Histórias Recentes</h2>
             <p className="text-brand-taupe font-light max-w-2xl text-center">
               A mágica do nosso ateliê aberto diário. Acompanhe os processos de pertinho no <a href="https://instagram.com/lacadaealma_rs" target="_blank" className="font-bold border-b border-brand-taupe hover:text-brand-dark">@lacadaealma_rs</a>
             </p>
           </div>
           <div className="bg-white border-2 border-dashed border-brand-taupe/30 rounded-[2rem] p-10 max-w-4xl mx-auto shadow-inner">
              <p className="font-bold text-brand-dark mb-4 text-xl">Espaço para o Print do Instagram</p>
              <p className="text-brand-taupe font-light mb-8 max-w-xl mx-auto">
                Como o Instagram de proteção autoral bloqueia visualizações automáticas, você pode colocar o Print (Screenshot) real diretamente aqui neste bloco!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 opacity-60">
                 <div className="bg-brand-sage aspect-square rounded overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-black/50 tracking-widest uppercase">Foto Insta</div>
                 </div>
                 <div className="bg-brand-blush aspect-square rounded overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-black/50 tracking-widest uppercase">Foto Insta</div>
                 </div>
                 <div className="bg-brand-taupe/20 aspect-square rounded overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-black/50 tracking-widest uppercase">Foto Insta</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-white text-center relative border-t border-brand-taupe/10">
         <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark tracking-tight">O Tempo da Agulha é Único.</h2>
            <p className="text-lg text-brand-taupe font-light mb-12">
              As artes exigem tranquilidade. Para encomendas personalizadas ou peças de pronta entrega, confirme nossa disponibilidade atual de agenda e datas.
            </p>
            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={WHATSAPP_LINK}
                className="inline-flex items-center gap-3 bg-brand-dark text-white px-10 py-5 rounded-full text-lg font-bold uppercase tracking-widest shadow-xl shadow-brand-dark/20 hover:bg-black transition-all"
            >
              Chamar no WhatsApp <MessageCircle size={22} />
            </motion.a>
         </div>
      </section>
    </main>
  );
}

// ─────────────────────────────────────────────
// APP RAIZ COM ROTEAMENTO
// ─────────────────────────────────────────────
export default function App() {
  const location = useLocation();
  const isReceitas = location.pathname.startsWith('/receitas');
  const WHATSAPP_LINK = "https://wa.me/5553991073024?text=Olá,%20Eduarda!%20Estou%20na%20sua%20página%20e%20gostaria%20de%20consultar%20uma%20encomenda.";

  return (
    <div className="font-sans relative bg-white text-brand-dark selection:bg-brand-taupe selection:text-white overflow-x-hidden">
      {/* Blobs decorativos */}
      <div className="fixed top-[-5%] left-[-5%] w-[40vw] h-[40vw] bg-brand-blush rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-50" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-brand-sage rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-40" />

      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-taupe/10 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300 print:hidden">
        <Link to="/" className="flex items-center gap-2">
          <Heart size={20} className="text-brand-taupe" strokeWidth={1.5} />
          <span className="font-serif font-semibold md:text-xl tracking-tight text-brand-dark">
            Laçada e Alma
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/receitas"
            className={`text-xs md:text-sm font-semibold uppercase tracking-widest transition-colors ${
              isReceitas ? 'text-brand-dark' : 'text-brand-taupe hover:text-brand-dark'
            }`}
          >
            🧶 Receitas
          </Link>
          <a
            href={WHATSAPP_LINK}
            className="flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-brand-dark hover:text-brand-rose transition-colors"
          >
            Encomendas <ChevronRight size={16} />
          </a>
        </div>
      </nav>

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/receitas" element={<ReceitasPage />} />
        <Route path="/receitas/:slug" element={<ReceitaPage />} />
      </Routes>

      {/* Footer */}
      <footer className="text-center py-12 bg-white border-t border-brand-dark/5 print:hidden">
         <Heart size={20} className="mx-auto text-brand-taupe opacity-50 mb-4" />
         <p className="font-bold text-xs uppercase tracking-[0.2em] text-brand-dark">Laçada e Alma © 2026</p>
      </footer>
    </div>
  );
}
