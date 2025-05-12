
import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation when component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="bg-black text-white py-8 overflow-hidden relative">
      <div className="vignette"></div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-20 overflow-hidden">
          <div 
            className={`whitespace-nowrap transition-transform duration-[30s] ease-linear ${animate ? '-translate-x-1/2' : 'translate-x-full'}`}
            style={{ animation: animate ? 'scroll-credits 30s linear infinite' : 'none' }}
          >
            <p className="text-xl md:text-2xl font-playfair italic">
              Este convite foi dirigido, roteirizado e sonhado por alguém que não vê a hora de dividir a tela contigo. - Henrique R. Abduch
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
