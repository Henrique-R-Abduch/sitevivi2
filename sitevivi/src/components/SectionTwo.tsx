
import React, { useState } from 'react';
import FilmGrain from './FilmGrain';
import { cn } from '@/lib/utils';

interface CriminalRecordItem {
  label: string;
  value: string;
}

const SectionTwo: React.FC = () => {
  const [showRecord, setShowRecord] = useState(false);
  
  const criminalRecord: CriminalRecordItem[] = [
    { label: "Comida", value: "Pizza" },
    { label: "F1", value: "Ice" },
    { label: "Filme", value: "A definir" },
    { label: "Status", value: "Em aberto" },
    { label: "Observações", value: "Extremamente interessado" }
  ];
  
  return (
    <section className="section relative overflow-hidden">
  {/* Background image from public folder */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/mafia2.jpg')" }}
  />

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-zinc-900/90" />

  {/* Film grain effect */}
  <FilmGrain intensity="medium" />

  {/* Content Container */}
  <div className="z-20 text-white text-center max-w-3xl px-4 relative">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel tracking-wide text-white/90 mb-6">
      Take 2: Te ofereço uma proposta irrecusável...
    </h2>

    {/* Criminal record button */}
    <button 
      onClick={() => setShowRecord(!showRecord)}
      className="uppercase border border-white/20 px-6 py-3 text-sm md:text-base tracking-widest font-medium hover:bg-white/10 transition-colors"
    >
      {showRecord ? "Fechar Dossiê" : "Abrir Dossiê Classificado"}
    </button>

    {/* Criminal record card */}
    <div 
      className={cn(
        "relative mt-8 transition-all duration-500 ease-in-out",
        showRecord ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
      )}
    >
      <div className="bg-zinc-900/80 border border-zinc-800 p-6 md:p-8 max-w-2xl mx-auto text-left shadow-2xl relative rounded-md backdrop-blur-sm">
        {/* Gold Stamp */}
        <div className="absolute top-4 right-6 text-xs tracking-widest text-yellow-600/60 uppercase font-bold">
          Dossiê Nº 274A
        </div>

        <h3 className="font-cinzel text-xl tracking-widest text-white/80 text-center mb-6">
          ARQUIVO CLASSIFICADO
        </h3>

        {criminalRecord.map((item, index) => (
          <div 
            key={index} 
            className={cn(
              "mb-5 opacity-0",
              showRecord && `animate-fade-in [animation-delay:${index * 150}ms]`
            )}
          >
            <span className="text-zinc-500 uppercase text-xs tracking-wide">{item.label}:</span>
            <p className="text-lg mt-1 font-cinzel text-white/90">{item.value}</p>
            {index < criminalRecord.length - 1 && <hr className="border-zinc-700 mt-4" />}
          </div>
        ))}

        {/* Signature */}
        <div className="mt-8 border-t border-zinc-700 pt-3 text-xs text-zinc-400 text-center font-mono tracking-wide relative">
          Assinado por: Don Henrique, sob juramento de lealdade à sétima arte.
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-yellow-800 text-[10px] tracking-wider uppercase">Carimbo Oficial da Família</div>
        </div>

        {/* Texture overlay */}
        <div className="absolute inset-0 bg-[url('/texture-paper.png')] opacity-[0.03] pointer-events-none" />
      </div>
    </div>
  </div>
</section>

  );
};

export default SectionTwo;
