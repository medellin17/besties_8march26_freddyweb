'use client';

import { useEffect, useRef } from 'react';

export function useAudio() {
    const ambientRef = useRef<HTMLAudioElement | null>(null);
    const lastPlayedRef = useRef<{ [key: string]: number }>({});

    useEffect(() => {
        return () => {
            if (ambientRef.current) {
                ambientRef.current.pause();
            }
        };
    }, []);

    const playSound = (name: string, loop: boolean = false) => {
        try {
            const now = Date.now();
            if (lastPlayedRef.current[name] && now - lastPlayedRef.current[name] < 200) {
                return null; // Prevent double-play from Strict Mode or rapid clicks
            }
            lastPlayedRef.current[name] = now;

            const audio = new Audio(`/assets/audio/${name}.mp3`);
            audio.loop = loop;
            if (name === 'buzz-fan-florescent2' || name === 'ambience-2') {
                audio.volume = 0.12; // Ambient should sit behind dialogue
            } else if (name === 'ring') {
                audio.volume = 0.34;
            } else if (name === 'pound-2') {
                audio.volume = 0.42;
            } else if (name === 'scream55') {
                audio.volume = 0.32;
            } else {
                audio.volume = 0.42;
            }

            const playPromise = audio.play();

            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log(`[Audio] Autoplay prevented for ${name}:`, error);
                });
            }
            return audio;
        } catch (e) {
            console.error('[Audio] Error playing sound:', e);
            return null;
        }
    };

    const startAmbient = () => {
        if (!ambientRef.current) {
            ambientRef.current = new Audio('/assets/audio/buzz-fan-florescent2.mp3');
            ambientRef.current.loop = true;
            ambientRef.current.volume = 0.14;
        }

        const playPromise = ambientRef.current.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('[Audio] Ambient autoplay prevented:', error);
            });
        }
    };

    const stopAmbient = () => {
        if (ambientRef.current) {
            ambientRef.current.pause();
            ambientRef.current.currentTime = 0;
        }
    };

    return { playSound, startAmbient, stopAmbient };
}
