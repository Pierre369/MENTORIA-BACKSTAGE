import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowLeft, Sparkles, TicketPercent, Trophy, Users } from "lucide-react";

const BRL = (n) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const items = [
  { title: "Conta com TikTok Shop habilitado", price: 250 },
  { title: "Esteira de produtos vencedores já validados", price: 197 },
  { title: "Acompanhamento semanal das métricas e ajustes estratégicos", price: 5000 },
  { title: "Edição de vídeos + uso de IA + aulas gravadas passo a passo (acesso vitalício)", price: 1197 },
  { title: "Aulas ao vivo com suporte em tempo real", price: 997 },
  { title: "Ebook exclusivo de estratégias TikTok Shop", price: 97 },
  { title: "Premiação de faturamento para top alunos", price: null, note: "Sem custo" },
  { title: "Grupo individual no WhatsApp para suporte direto", price: 497 },
  { title: "Networking com mentorados e parceiros estratégicos", price: 997 },
  { title: "Convidados especiais durante 6 meses (SCAL)", price: null, note: "Incluso" },
  { title: "Bônus: Checklist diário de tarefas", price: 97 },
  { title: "Bônus: Templates de criativos virais", price: 297 },
];

export default function MentoriaBackstageSlides() {
  const [page, setPage] = useState(0); // 0 or 1

  const total = useMemo(() => items.reduce((acc, it) => acc + (typeof it.price === "number" ? it.price : 0), 0), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setPage((p) => Math.min(1, p + 1));
      if (e.key === "ArrowLeft") setPage((p) => Math.max(0, p - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const next = () => setPage((p) => Math.min(1, p + 1));
  const prev = () => setPage((p) => Math.max(0, p - 1));

  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-zinc-900/60 backdrop-blur rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="relative px-6 py-5 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#FF0050] to-[#00F2EA]" />
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-400">Mentoria</p>
              <h1 className="text-xl sm:text-2xl font-bold">Mentoria Backstage — TikTok Shop Brasil</h1>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded-full text-xs border ${page===0?"border-[#FF0050] text-[#FF0050]":"border-zinc-700 text-zinc-300"}`}>Slide 1</span>
            <span className={`px-2.5 py-1 rounded-full text-xs border ${page===1?"border-[#00F2EA] text-[#00F2EA]":"border-zinc-700 text-zinc-300"}`}>Slide 2</span>
          </div>
        </div>

        {/* Slides */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            {page === 0 ? (
              <motion.section
                key="page1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.35 }}
                className="p-6 sm:p-10"
              >
                <header className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs">
                    <Sparkles className="h-4 w-4 text-[#00F2EA]" />
                    <span>Do zero ao faturamento — mesmo sem experiência em edição</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold mt-3">Tudo que você vai receber</h2>
                  <p className="text-zinc-300 mt-1">Pacote completo para criar, vender e escalar no TikTok Shop.</p>
                </header>

                <ul className="grid sm:grid-cols-2 gap-3">
                  {items.map((it, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00F2EA] flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-semibold leading-snug">{it.title}</p>
                        <p className="text-sm text-zinc-400">{typeof it.price === "number" ? BRL(it.price) : it.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-zinc-800 p-5 bg-gradient-to-br from-zinc-900 to-zinc-950">
                    <div className="text-zinc-400 text-sm">Valor oficial somado</div>
                    <div className="text-3xl font-extrabold mt-1">{BRL(total)}</div>
                  </div>
                  <div className="rounded-2xl border border-[#FF0050]/40 p-5 bg-gradient-to-br from-[#1a0b12] to-[#0b1416]">
                    <div className="text-zinc-300 text-sm flex items-center gap-2"><Trophy className="h-4 w-4"/> Convidados especiais por 6 meses (SCAL)</div>
                    <div className="text-zinc-400 mt-1 text-sm">Acesso incluso aos encontros com especialistas de vendas, tráfego e branding.</div>
                  </div>
                </div>
              </motion.section>
            ) : (
              <motion.section
                key="page2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="p-6 sm:p-10"
              >
                <header className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs">
                    <TicketPercent className="h-4 w-4 text-[#FF0050]" />
                    <span>Oferta especial de lançamento</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold mt-3">Você não paga tudo isso</h2>
                  <p className="text-zinc-300 mt-1">Mentoria Backstage com acompanhamento em grupo e suporte ao vivo.</p>
                </header>

                <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-900/50">
                  <div className="text-sm text-zinc-400">Valor oficial somado</div>
                  <div className="text-2xl sm:text-3xl font-bold line-through decoration-[#FF0050] decoration-4">{BRL(total)}</div>

                  <div className="mt-4 text-sm text-zinc-400">Hoje você entra por</div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white">{BRL(2500)}</div>

                  <div className="mt-4 grid sm:grid-cols-2 gap-3">
                    <Badge text="6 meses de acompanhamento em grupo" icon={<Users className="h-4 w-4"/>} />
                    <Badge text="Aulas ao vivo e suporte em tempo real" icon={<CheckCircle2 className="h-4 w-4"/>} />
                    <Badge text="Convidados especiais (SCAL) incluídos" icon={<Sparkles className="h-4 w-4"/>} />
                    <Badge text="Bônus: Checklist + Templates" icon={<CheckCircle2 className="h-4 w-4"/>} />
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href="#comprar"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 bg-gradient-to-r from-[#FF0050] to-[#00F2EA] text-black font-bold shadow-lg"
                    >
                      Garantir minha vaga agora <ArrowRight className="h-5 w-5"/>
                    </a>
                    <p className="text-zinc-400 text-sm">Vagas limitadas. Quando fechar, só na próxima turma.</p>
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* Footer / Controls */}
        <div className="flex items-center justify-between border-t border-zinc-800 px-6 py-4">
          <button onClick={prev} disabled={page===0} className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border ${page===0?"border-zinc-800 text-zinc-600":"border-zinc-700 hover:border-zinc-600"}`}>
            <ArrowLeft className="h-4 w-4"/> Voltar
          </button>
          <div className="flex items-center gap-2">
            <Dot active={page===0} color="#FF0050"/>
            <Dot active={page===1} color="#00F2EA"/>
          </div>
          <button onClick={next} disabled={page===1} className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border ${page===1?"border-zinc-800 text-zinc-600":"border-zinc-700 hover:border-zinc-600"}`}>
            Próximo <ArrowRight className="h-4 w-4"/>
          </button>
        </div>
      </div>
    </div>
  );
}

function Dot({ active, color }: { active: boolean; color: string }) {
  return (
    <span
      className={`h-2.5 w-2.5 rounded-full ${active ? "scale-110" : "opacity-50"}`}
      style={{ background: active ? color : "#3f3f46" }}
    />
  );
}

function Badge({ text, icon }: { text: string; icon: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-800/70 border border-zinc-700 text-sm">
      {icon}
      <span>{text}</span>
    </div>
  );
}
