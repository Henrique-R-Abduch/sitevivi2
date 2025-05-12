import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Wine, Armchair, Glasses } from 'lucide-react';

const SectionThree: React.FC = () => {
  const [showFullCard, setShowFullCard] = useState(false);

  return (
    <section className="section bg-cinema-psycho relative min-h-screen">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000_49.5%,#0002_49.5%,#0002_50.5%,#0000_50.5%),linear-gradient(to_bottom,#0000_49.5%,#0002_49.5%,#0002_50.5%,#0000_50.5%)] bg-[size:3rem_3rem]"></div>

      <div className="z-20 relative max-w-5xl mx-auto px-4 py-24 text-center text-cinema-mafia">

        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-widest mb-6 font-futura uppercase">
          Take 1: Se você gostou do cartão de visitas de Paul Allen, espere só para ver o meu...
        </h2>

        <p className="text-xl md:text-2xl max-w-3xl mx-auto font-futura mb-16">
          Boa notícia: esse convite não tem cartão de visitas... mas pode te levar pra um encontro comigo.
        </p>

        {/* CARTÃO 1: TEXTO SOLTO */}
        {!showFullCard && (
          <div className="relative bg-[#f1f0e8] text-black w-[340px] h-[190px] mx-auto rounded-sm shadow-xl border border-[#dedcd3] p-6 overflow-hidden transition-all duration-500">
            {/* Nome */}
            <div className="absolute top-6 left-6 text-[11px] uppercase tracking-widest text-[#222] font-sans">
              Vivian Petra Maprelian
            </div>

            {/* Cargo */}
            <div className="absolute top-[4.5rem] left-6 text-[9px] tracking-wider uppercase text-[#444] font-sans">
               CEO & Mulher mais atraente de Guarulhos
            </div>

            {/* Email */}
            <div className="absolute bottom-6 left-6 text-[9px] text-[#666] font-mono tracking-widest">
              Vivivamossair@gmail.com
            </div>

            {/* Telefone */}
            <div className="absolute bottom-6 right-6 text-[9px] text-[#666] font-mono tracking-widest">
              11 95751-7086
            </div>

            {/* Textura */}
            <div className="absolute inset-0 bg-[url('/texture-paper.png')] opacity-[0.04] pointer-events-none mix-blend-multiply" />
          </div>
        )}

        {/* CARTÃO 2: INSPIRADO NO FILME */}
        {showFullCard && (
          <div className="flex justify-center transition-all duration-500">
            <div
              className="relative bg-[#f1f0e8] text-black w-[340px] h-[190px] rounded-sm shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-[#dedcd3] p-6 flex flex-col justify-between hover:scale-105 hover:shadow-[0_0_30px_#aaa] cursor-pointer transition-transform"
              onMouseEnter={() =>
                new Audio('https://freesound.org/data/previews/195/195652_1676140-lq.mp3').play()
              }
            >
              {/* Top Row */}
              <div className="flex justify-between text-[10px] font-sans tracking-wider text-gray-800">
                <span>212 555 642</span>
                <div className="text-right leading-tight">
                  <div className="uppercase font-semibold">Pierce & Pierce</div>
                  <div className="text-[9px] tracking-normal">mergers and acquisitions</div>
                </div>
              </div>

              {/* Middle */}
              <div className="text-center">
                <div className="text-[11px] uppercase tracking-widest font-semibold">Henrique R. Abuch</div>
                <div className="text-[9px] tracking-wide mt-1">CEO</div>
              </div>

              {/* Bottom */}
              <div className="text-[8.5px] text-gray-700 tracking-wide text-center mt-2">
                Rua Casa Forte, 612 <br />  11 95052 6331 ·  @_abduch_
              </div>

              <div className="absolute inset-0 bg-[url('/texture-paper.png')] opacity-[0.035] mix-blend-multiply pointer-events-none rounded-sm" />
            </div>
          </div>
        )}

        {/* Botão toggle */}
        <button
          className="mt-10 text-sm tracking-widest uppercase border border-gray-600 px-4 py-2 hover:bg-white hover:text-black transition-all"
          onClick={() => setShowFullCard(prev => !prev)}
        >
          {showFullCard ? "Ver outro cartão" : "Voltar ao cartão original"}
        </button>
      </div>
    </section>
  );
};

export default SectionThree;
