
import React from 'react';

interface FilmGrainProps {
  intensity?: 'light' | 'medium' | 'heavy';
}

const FilmGrain: React.FC<FilmGrainProps> = ({ intensity = 'medium' }) => {
  const opacityMap = {
    'light': 'opacity-[0.06]',
    'medium': 'opacity-[0.1]',
    'heavy': 'opacity-[0.15]',
  };

  return (
    <div 
      className={`absolute inset-0 w-full h-full film-grain ${opacityMap[intensity]} mix-blend-overlay pointer-events-none`}
    />
  );
};

export default FilmGrain;
