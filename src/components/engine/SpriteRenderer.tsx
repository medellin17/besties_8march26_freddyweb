'use client';

import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { CharacterOnScreen } from '@/story/types';

interface SpriteRendererProps extends Omit<HTMLMotionProps<"div">, "children"> {
    character: CharacterOnScreen;
}

export const SpriteRenderer = forwardRef<HTMLDivElement, SpriteRendererProps>(({ character, ...props }, ref) => {
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
            case 'left': return 'left-[2%] md:left-[5%] bottom-[25%] md:bottom-[16%] z-20';
            case 'center_left': return 'left-[5%] md:left-[22%] bottom-[16%] md:bottom-[16%] z-25';
            case 'center': return 'left-1/2 -translate-x-1/2 bottom-[15%] md:bottom-[16%] z-30';
            case 'center_shifted': return 'left-1/2 -translate-x-1/2 md:left-[55%] bottom-[25%] md:bottom-[16%] z-30';
            case 'hallway_far': return 'left-[45%] -translate-x-1/2 bottom-[20%] md:bottom-[23%] z-10';
            case 'center_right': return 'right-[5%] md:right-[22%] bottom-[16%] md:bottom-[16%] z-25';
            case 'right':
                return character.name === 'freddy'
                    ? 'right-[-18%] md:right-[5%] bottom-[25%] md:bottom-[16%] z-30'
                    : 'right-[-2%] md:right-[5%] bottom-[25%] md:bottom-[16%] z-20';
            case 'stage_left': return 'left-[-5%] md:left-[2%] bottom-[10%] md:bottom-[15%] z-20';
            case 'stage_right': return 'right-[5%] md:right-[8%] bottom-[10%] md:bottom-[15%] z-20';
            case 'party_1': return 'left-[-15%] md:left-[0%] bottom-[25%] md:bottom-[16%] z-10';
            case 'party_2': return 'left-[16%] md:left-[22%] bottom-[18%] md:bottom-[16%] z-20';
            case 'party_3': return 'right-[16%] md:right-[22%] bottom-[18%] md:bottom-[16%] z-25';
            case 'party_4': return 'right-[-15%] md:right-[0%] bottom-[25%] md:bottom-[16%] z-15';
            default: return 'left-1/2 -translate-x-1/2 bottom-[15%] md:bottom-[16%] z-30';
        }
    };

    const getSizeClass = () => {
        let baseSize = '';
        switch (character.position) {
            case 'hallway_far':
                baseSize = 'h-[35vh] md:h-[50vh]';
                break;
            case 'party_1':
            case 'party_4':
                baseSize = 'h-[31vh] md:h-[65vh]';
                break;
            case 'party_2':
            case 'party_3':
                baseSize = 'h-[35vh] md:h-[70vh]';
                break;
            case 'stage_left':
            case 'stage_right':
                baseSize = 'h-[45vh] md:h-[65vh]';
                break;
            case 'left':
            case 'right':
                baseSize = 'h-[40vh] md:h-[65vh]';
                break;
            case 'center_left':
            case 'center_right':
                baseSize = 'h-[43vh] md:h-[70vh]';
                break;
            case 'center_shifted':
            case 'center':
            default:
                baseSize = 'h-[50vh] md:h-[75vh]';
                break;
        }

        // Freddy naturally looks smaller because of his wide aspect ratio, so we scale his frame up slightly
        if (character.name === 'freddy') {
            return `${baseSize} scale-[1.10] origin-bottom`;
        }

        return baseSize;
    };

    return (
        <motion.div
            ref={ref}
            layout="position"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`absolute ${getPositionClass()} flex flex-col items-center pointer-events-none`}
            {...props}
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
});

SpriteRenderer.displayName = 'SpriteRenderer';
