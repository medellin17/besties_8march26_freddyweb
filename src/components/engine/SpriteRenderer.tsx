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
            case 'left': return 'left-[5%] md:left-[10%] bottom-[15%] md:bottom-[20%]';
            case 'center_left': return 'left-[25%] md:left-[30%] bottom-[15%] md:bottom-[20%]';
            case 'center': return 'left-1/2 -translate-x-1/2 bottom-[15%] md:bottom-[20%]';
            case 'center_right': return 'right-[25%] md:right-[30%] bottom-[15%] md:bottom-[20%]';
            case 'right': return 'right-[5%] md:right-[10%] bottom-[15%] md:bottom-[20%]';
            default: return 'left-1/2 -translate-x-1/2 bottom-[15%] md:bottom-[20%]';
        }
    };

    // We will just show an img tag or div with the full sprite-sheet mapped.
    // Wait, without exact coordinates, let's use a nice CSS clip-path or background-position.
    // Actually, for the sake of the VN MVP, we can render the character name if coordinates are wrong, 
    // but let's assume `backgroundPosition` will be passed or calculated.
    // For now, let's just make it a colored block with their name if the sprite fails, 
    // or use the next/image with object-position if we use img tag.

    // As a fallback visual while positioning is unknown:
    const getFallbackColor = () => {
        switch (character.name) {
            case 'freddy': return 'bg-amber-900 border-amber-700';
            case 'bonnie': return 'bg-purple-700 border-purple-500';
            case 'chika': return 'bg-yellow-400 border-yellow-300';
            case 'foxy': return 'bg-red-700 border-red-500';
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className={`absolute ${getPositionClass()} z-20 flex flex-col items-center pointer-events-none`}
        >
            <div className="w-[350px] h-[550px] md:w-[500px] md:h-[750px] flex items-end justify-center overflow-hidden drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                <img
                    src={`/assets/sprites/${character.name}.png`}
                    alt={character.name}
                    className="w-full h-full object-contain pointer-events-none"
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

            {/* Expression badge */}
            <div className="mt-2 bg-black/80 px-2 py-1 rounded text-[10px] text-white font-mono border border-gray-600">
                {character.expression}
            </div>
        </motion.div>
    );
}
