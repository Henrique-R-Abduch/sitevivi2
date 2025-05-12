
import React, { useEffect, useRef } from 'react';

const ParticleRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Call resize initially and on window resize
    resize();
    window.addEventListener('resize', resize);

    // Define raindrops
    interface Particle {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.floor(Math.random() * 20) + 10,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.6 + 0.1
      });
    }

    // Animation loop
    const draw = () => {
      // Clear canvas with semi-transparent black for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw each particle
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x, particle.y + particle.length);
        
        const gradient = ctx.createLinearGradient(
          particle.x, 
          particle.y, 
          particle.x, 
          particle.y + particle.length
        );
        
        gradient.addColorStop(0, `rgba(0, 179, 255, 0)`);
        gradient.addColorStop(0.5, `rgba(0, 179, 255, ${particle.opacity})`);
        gradient.addColorStop(1, `rgba(0, 179, 255, 0)`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Move particle
        particle.y += particle.speed;

        // Reset particle if it goes off screen
        if (particle.y > canvas.height) {
          particle.y = -particle.length;
          particle.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(draw);
    };

    // Start animation
    draw();

    // Clean up
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-10" 
    />
  );
};

export default ParticleRain;
