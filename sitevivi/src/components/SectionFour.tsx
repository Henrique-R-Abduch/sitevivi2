
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import ParticleRain from './ParticleRain';

const SectionFour: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null);
  
  const handleResponse = (choice: string) => {
    setResponse(choice);
    // Here you could also add logic to send the response, redirect, etc.
  };
  
  return (
    <section className="section bg-cinema-blade relative overflow-hidden">
      {/* Video background - using div with background for now */}
      <img
  src="/video.gif"
  alt="Animated background"
  className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
/>

<div className="absolute inset-0 bg-blue-900/40 z-10" />


      
      {/* Digital rain effect */}
      
      
      {/* Content container */}
      <div className="z-30 relative text-white max-w-4xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron mb-8 neon-text text-cinema-neon animate-pulse-glow">
          Take 4: Em um futuro distópico...
        </h2>
        
        <p className="text-xl md:text-2xl font-orbitron mb-16 text-white/90">
          a melhor escolha ainda é sentar do seu lado na poltrona do cinema.
        </p>
        
        {/* Floating invitation card */}
        <div className="bg-black/40 backdrop-blur-md border border-cinema-neon/30 p-8 rounded-lg shadow-lg shadow-cinema-neon/20 animate-float max-w-lg mx-auto">
          <h3 className="text-2xl font-orbitron text-cinema-neon mb-8">
            Aceita esse convite para nosso universo paralelo?
          </h3>
          
          {!response ? (
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleResponse("sim")}
                className="px-6 py-3 bg-cinema-neon text-cinema-blade font-orbitron rounded hover:bg-white transition-colors"
              >
                Sim, replicante. 
              </button>
              
              <button 
                onClick={() => handleResponse("talvez")}
                className="px-6 py-3 border border-cinema-neon text-cinema-neon font-orbitron rounded hover:bg-cinema-neon/20 transition-colors"
              >
                Depende... tem plot twist?
              </button>
            </div>
          ) : (
            <div className="animate-fade-in">
              {response === "sim" ? (
                <p className="text-xl font-orbitron text-white">
                  Perfeito. Convite aceito. <br />
                  <span className="text-cinema-neon">Nosso filme está apenas começando.</span>
                </p>
              ) : (
                <p className="text-xl font-orbitron text-white">
                  Claro que tem plot twist. <br />
                  <span className="text-cinema-neon">Estou ansioso para te contar pessoalmente.</span>
                </p>
              )}
              
              {/* Reset button */}
              <button
                onClick={() => setResponse(null)}
                className="mt-6 px-4 py-2 text-sm border border-white/30 text-white/70 rounded hover:bg-white/10 transition-colors"
              >
                Voltar
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
