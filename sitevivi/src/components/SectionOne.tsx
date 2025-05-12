import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { cn } from '@/lib/utils';

const SectionOne: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [playSound, setPlaySound] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => setPlaySound(true), 500);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section relative pt-16 min-h-screen overflow-hidden">
      {/* Background Spline animation */}
<div className="absolute inset-0 z-0 pointer-events-none">
  <Spline scene="https://prod.spline.design/kSxGy5oS885QHnxa/scene.splinecode" />
</div>


      {/* Optional fallback image over Spline, with blur and opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm opacity-30 z-10"
        style={{ 
          backgroundImage: "url('/vivi.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Vignette overlay */}
      <div className="vignette absolute inset-0 z-20 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-30 text-center max-w-2xl px-4 mx-auto">
        <h1 
          className={cn(
            "opacity-0 text-4xl md:text-5xl lg:text-6xl font-playfair text-black drop-shadow-lg mb-8",
            isLoaded && "animate-fade-in"
          )}
        >
          A próxima sessão pode ser nossa.
        </h1>
        
        <p 
          className={cn(
           "opacity-0 text-xl md:text-2xl font-playfair italic text-black drop-shadow-md",
            isLoaded && "animate-fade-in-slow"
          )}
        >
          e se a gente criasse nosso próprio roteiro?
        </p>

        {playSound && (
          <audio 
            autoPlay 
            className="hidden"
            src="https://freesound.org/data/previews/131/131930_2337290-lq.mp3"
          />
        )}

        {/* Scroll indicator */}
        
      </div>
    </section>
  );
};

export default SectionOne;
