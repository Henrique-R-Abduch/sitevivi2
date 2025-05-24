import React, { useRef, useEffect, useState } from 'react';
import TicketCard from './TicketCard';
const SectionFive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const drawCover = () => {
      ctx.fillStyle = '#999'; // cor da raspadinha
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const erase = (x: number, y: number) => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2, false);
      ctx.fill();
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e instanceof TouchEvent ? e.touches[0].clientX : e.clientX) - rect.left;
      const y = (e instanceof TouchEvent ? e.touches[0].clientY : e.clientY) - rect.top;
      erase(x, y);
    };

    const handleEnd = () => {
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let erased = 0;
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] < 128) erased++;
      }
      if (erased / (canvas.width * canvas.height) > 0.5) {
        setRevealed(true);
      }
    };

    canvas.width = 360;
    canvas.height = 640;

    drawCover();

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleMouseMove);
    canvas.addEventListener('mouseup', handleEnd);
    canvas.addEventListener('touchend', handleEnd);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleEnd);
      canvas.removeEventListener('touchend', handleEnd);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center px-4" data-section="section5">
      <h2 className="text-3xl md:text-5xl font-orbitron text-center mb-6 text-white/90 animate-pulse">
        Take 5: Ingressos
      </h2>

      <p className="text-lg text-center mb-8 text-white/70 italic">
        Raspe para revelar seu ingresso <span className="text-cinema-neon"></span>
      </p>

      <div className="relative w-[360px] h-[640px] border border-white/20 shadow-lg">
        {!revealed && (
          <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-10 cursor-crosshair touch-none" />
        )}
        <div className="relative w-[360px] h-[640px] border border-white/20 shadow-lg">
  {!revealed && (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-10 cursor-crosshair touch-none" />
  )}
  <div className="w-full h-full">
    <TicketCard />
  </div>
</div>
      </div>
    </section>
  );
};

export default SectionFive;
