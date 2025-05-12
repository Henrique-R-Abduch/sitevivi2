
import React, { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  currentSection: number;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ currentSection }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  
  const audioRefs = [
    useRef<HTMLAudioElement>(null), // Section 1 - Projector sound
    useRef<HTMLAudioElement>(null), // Section 2 - Piano jazz
    useRef<HTMLAudioElement>(null), // Section 3 - Subtle ambient
    useRef<HTMLAudioElement>(null), // Section 4 - Blade Runner style
  ];
  
  // Audio URLs (replace these with actual audio files)
  const audioTracks = [
    "https://freesound.org/data/previews/131/131930_2337290-lq.mp3", // Projector sound
    "https://freesound.org/data/previews/382/382310_7136918-lq.mp3", // Piano jazz
    "https://freesound.org/data/previews/529/529944_11429381-lq.mp3", // Subtle ambient
    "https://freesound.org/data/previews/459/459145_9509843-lq.mp3", // Blade Runner style synthwave
  ];

  // Stop all audio
  const stopAllAudio = () => {
    audioRefs.forEach(ref => {
      if (ref.current) {
        ref.current.pause();
        ref.current.currentTime = 0;
      }
    });
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      stopAllAudio();
      setIsPlaying(false);
      setCurrentTrack(null);
    } else {
      playTrack(currentSection);
      setIsPlaying(true);
      setCurrentTrack(currentSection);
    }
  };

  // Play specific track
  const playTrack = (trackIndex: number) => {
    stopAllAudio();
    const audioRef = audioRefs[trackIndex]?.current;
    if (audioRef) {
      audioRef.volume = 0.3; // Lower volume
      audioRef.play().catch(e => console.error("Audio playback failed:", e));
      setCurrentTrack(trackIndex);
      setIsPlaying(true);
    }
  };

  // Change track when section changes if audio is playing
  useEffect(() => {
    if (isPlaying && currentTrack !== currentSection) {
      playTrack(currentSection);
    }
  }, [currentSection]);

  return (
    <div className="bg-black/60 backdrop-blur-sm rounded-full p-3 shadow-lg">
      <button 
        className="text-white hover:text-cinema-neon transition-colors"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        )}
      </button>

      {/* Hidden audio elements */}
      {audioTracks.map((track, index) => (
        <audio
          key={index}
          ref={audioRefs[index]}
          src={track}
          loop
        />
      ))}
    </div>
  );
};

export default AudioPlayer;
