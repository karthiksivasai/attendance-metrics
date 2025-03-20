
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface EmojiConfettiProps {
  type: 'celebrate' | 'sad';
}

interface EmojiParticle {
  id: number;
  x: number;
  emoji: string;
  animationDuration: number;
  delay: number;
  size: number;
  rotation: number;
}

export const EmojiConfetti = ({ type }: EmojiConfettiProps) => {
  const [particles, setParticles] = useState<EmojiParticle[]>([]);
  
  // Define emojis for each type
  const celebrationEmojis = ['🎉', '🎊', '🥳', '✨', '🎈', '🎇', '🎆', '🏆', '👏', '💯'];
  const sadEmojis = ['😢', '😭', '😔', '😞', '💔', '🤦‍♂️', '🤦‍♀️', '😓', '😥', '😰'];
  
  useEffect(() => {
    // Create 50 emoji particles falling from the top
    const newParticles: EmojiParticle[] = [];
    const emojis = type === 'celebrate' ? celebrationEmojis : sadEmojis;
    
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100, // Random horizontal position (0-100%)
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        animationDuration: 3 + Math.random() * 5, // 3-8 seconds
        delay: Math.random() * 1.5, // 0-1.5 second delay
        size: 16 + Math.floor(Math.random() * 20), // 16-36px
        rotation: Math.random() * 360, // Random rotation 0-360 degrees
      });
    }
    
    setParticles(newParticles);
    
    // Clean up
    return () => {
      setParticles([]);
    };
  }, [type]);
  
  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute top-0 will-change-transform"
          style={{
            left: `${particle.x}%`,
            fontSize: `${particle.size}px`,
            transform: `rotate(${particle.rotation}deg)`,
            animation: `fall ${particle.animationDuration}s linear ${particle.delay}s forwards`,
            opacity: 0,
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
};
