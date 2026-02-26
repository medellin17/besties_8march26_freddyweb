'use client';

import { useEffect, useRef } from 'react';

export function useAudio() {
    const ambientRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // If we have actual files, we'd initialize new Audio('/assets/audio/ambient.mp3')
        // For now, we stub this out to prevent React 19 hydration errors or DOM exceptions

        return () => {
            if (ambientRef.current) {
                ambientRef.current.pause();
            }
        };
    }, []);

    const playSound = (name: string) => {
        // const audio = new Audio(`/assets/audio/${name}.mp3`);
        // audio.play().catch(e => console.log('Audio play failed:', e));
        console.log(`[Audio played]: ${name}`);
    };

    const startAmbient = () => {
        // ambientRef.current = new Audio('/assets/audio/ambient.mp3');
        // ambientRef.current.loop = true;
        // ambientRef.current.volume = 0.3;
        // ambientRef.current.play().catch(e => console.log('Ambient audio failed:', e));
        console.log('[Ambient audio started]');
    };

    return { playSound, startAmbient };
}
