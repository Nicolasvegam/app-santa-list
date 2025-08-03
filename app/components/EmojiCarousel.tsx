'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const emojis = [
  '/emojis/emoji_1.png',
  '/emojis/emoji_2.png',
  '/emojis/emoji_3.png',
  '/emojis/emoji_4.png',
  '/emojis/emoji_5.png',
  '/emojis/emoji_6.png',
  '/emojis/emoji_7.png',
];

interface EmojiCarouselProps {
  inline?: boolean;
}

export function EmojiCarousel({ inline = false }: EmojiCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % emojis.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const sizeClasses = inline 
    ? "w-16 h-16 sm:w-20 sm:h-20" 
    : "w-20 h-20 sm:w-24 sm:h-24";

  return (
    <div className={`${inline ? 'inline-flex items-center' : 'flex justify-center items-center'}`}>
      <div className={`relative ${sizeClasses}`}>
        {emojis.map((emoji, index) => (
          <div
            key={emoji}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={emoji}
              alt={`Emoji ${index + 1}`}
              fill
              className="object-contain"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}