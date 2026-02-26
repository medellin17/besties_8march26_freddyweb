'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CharacterOnScreen } from '@/story/types';

interface SpriteRendererProps {
    character: CharacterOnScreen;
}

export const SpriteRenderer: React.FC<SpriteRendererProps> = ({ character }) => {
    // Approximate mappings for Fnaf-pixel.png
    // Freddy(0), Bonnie(1), Chica(2), Foxy(3)
    // Each sprite might be around 64x64 or 128x128. Let's use generic styles for now
    // We apply the pixelated class from globals.css

    // Let's create a visual placeholder mapping until exact pixels are mapped
    const getAvatarStyle = () => {
        switch (character.name) {
            case 'freddy': return 'bg-[url("/assets/sprites/Fnaf-pixel.png")] bg-[position:-10px_-10px] filter sepia-[0.3]';
            case 'bonnie': return 'bg-[url("/assets/sprites/Fnaf-pixel.png")] ...'; // need specific positions
            default: return 'bg-gray-800';
        }
    };

    const getPositionClass = () => {
        switch (character.position) {
            case 'left': return 'left-[-10%] md:left-[-5%] bottom-[15%] md:bottom-[20%] z-20';
            case 'center_left': return 'left-[10%] md:left-[20%] bottom-[18%] md:bottom-[22%] z-25';
            case 'center': return 'left-1/2 -translate-x-1/2 bottom-[20%] md:bottom-[25%] z-30';
            case 'center_right': return 'right-[10%] md:right-[20%] bottom-[18%] md:bottom-[22%] z-25';
            case 'right': return 'right-[-10%] md:right-[-5%] bottom-[15%] md:bottom-[20%] z-20';
            default: return 'left-1/2 -translate-x-1/2 bottom-[20%] md:bottom-[25%] z-30';
        }
    };

    const getSizeClass = () => {
        switch (character.position) {
            case 'left':
            case 'right':
                return 'h-[60vh] md:h-[75vh]';
            case 'center_left':
            case 'center_right':
                return 'h-[65vh] md:h-[80vh]';
            case 'center':
            default:
                return 'h-[70vh] md:h-[85vh]';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className={`absolute ${getPositionClass()} flex flex-col items-center pointer-events-none`}
        >
            <div className={`${getSizeClass()} w-auto flex items-end justify-center overflow-hidden drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]`}>
                <img
                    src={`/assets/sprites/${character.name}.png`}
                    alt={character.name}
                    className="h-full w-auto object-contain pointer-events-none"
                    onError={(e) => {
                        console.error('Sprite load error for', character.name);
                        (e.target as HTMLElement).style.display = 'none';
                        const parent = (e.target as HTMLElement).parentElement;
                        if (parent) {
                            parent.innerHTML = `<div class="w-full h-full bg-red-900 border-4 border-red-500 rounded-t-full flex items-center justify-center"><span class="font-press-start text-xs text-white uppercase">${character.name}</span></div>`;
                            parent.classList.remove('mix-blend-screen')
                        }
                    }}
                />
            </div>
        </motion.div>
    );
}
