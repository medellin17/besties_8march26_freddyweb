'use client';

import { useEffect, useRef } from 'react';

export function useAudio() {
    const ambientARef = useRef<HTMLAudioElement | null>(null);
    const ambientBRef = useRef<HTMLAudioElement | null>(null);
    const ambientActiveRef = useRef<'A' | 'B'>('A');
    const ambientTimerRef = useRef<number | null>(null);
    const ambientCrossfadingRef = useRef(false);
    const ambientTargetVolRef = useRef(0.10);
    const lastPlayedRef = useRef<{ [key: string]: number }>({});

    useEffect(() => {
        return () => {
            // Ensure ambient stops even if the component unmounts mid-play.
            if (ambientTimerRef.current) {
                window.clearInterval(ambientTimerRef.current);
                ambientTimerRef.current = null;
            }
            [ambientARef.current, ambientBRef.current].forEach((a) => {
                if (a) {
                    a.pause();
                }
            });
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
                audio.volume = 0.09; // Ambient should sit behind dialogue
            } else if (name === 'ring') {
                audio.volume = 0.30;
            } else if (name === 'pound-2') {
                audio.volume = 0.38;
            } else if (name === 'scream55') {
                audio.volume = 0.28;
            } else {
                audio.volume = 0.38;
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
        const src = '/assets/audio/buzz-fan-florescent2.mp3';
        const targetVol = ambientTargetVolRef.current;

        if (!ambientARef.current) {
            ambientARef.current = new Audio(src);
            ambientARef.current.loop = false;
            ambientARef.current.preload = 'auto';
            ambientARef.current.volume = targetVol;
        }
        if (!ambientBRef.current) {
            ambientBRef.current = new Audio(src);
            ambientBRef.current.loop = false;
            ambientBRef.current.preload = 'auto';
            ambientBRef.current.volume = 0;
        }

        const active = ambientActiveRef.current === 'A' ? ambientARef.current : ambientBRef.current;
        if (!active) return;
        active.volume = targetVol;

        const playPromise = active.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('[Audio] Ambient autoplay prevented:', error);
            });
        }

        // Seamless-ish loop via short crossfade to hide the audible seam.
        const CHECK_INTERVAL_MS = 100;
        const CROSSFADE_SEC = 0.35;
        const FADE_STEPS = 20;
        const fadeStepMs = Math.max(10, Math.floor((CROSSFADE_SEC * 1000) / FADE_STEPS));

        if (ambientTimerRef.current) return;
        ambientTimerRef.current = window.setInterval(() => {
            const a = ambientARef.current;
            const b = ambientBRef.current;
            const current = ambientActiveRef.current === 'A' ? a : b;
            const next = ambientActiveRef.current === 'A' ? b : a;
            if (!current || !next) return;
            if (ambientCrossfadingRef.current) return;

            const duration = current.duration;
            if (!Number.isFinite(duration) || duration <= 0) return;

            if (duration - current.currentTime <= CROSSFADE_SEC + 0.05) {
                ambientCrossfadingRef.current = true;

                try {
                    next.pause();
                    next.currentTime = 0;
                    next.volume = 0;
                } catch {
                    // ignore
                }

                const p = next.play();
                if (p !== undefined) {
                    p.catch(error => {
                        console.log('[Audio] Ambient autoplay prevented (crossfade):', error);
                        ambientCrossfadingRef.current = false;
                    });
                }

                let step = 0;
                const startVol = current.volume;
                const fadeTimer = window.setInterval(() => {
                    step += 1;
                    const t = Math.min(1, step / FADE_STEPS);
                    const vIn = targetVol * t;
                    const vOut = startVol * (1 - t);
                    next.volume = vIn;
                    current.volume = vOut;

                    if (t >= 1) {
                        window.clearInterval(fadeTimer);
                        current.pause();
                        try {
                            current.currentTime = 0;
                        } catch {
                            // ignore
                        }
                        next.volume = targetVol;
                        ambientActiveRef.current = ambientActiveRef.current === 'A' ? 'B' : 'A';
                        ambientCrossfadingRef.current = false;
                    }
                }, fadeStepMs);
            }
        }, CHECK_INTERVAL_MS);
    };

    const stopAmbient = () => {
        if (ambientTimerRef.current) {
            window.clearInterval(ambientTimerRef.current);
            ambientTimerRef.current = null;
        }
        ambientCrossfadingRef.current = false;
        [ambientARef.current, ambientBRef.current].forEach((a) => {
            if (a) {
                a.pause();
                try {
                    a.currentTime = 0;
                } catch {
                    // ignore
                }
                a.volume = 0;
            }
        });
        ambientActiveRef.current = 'A';
    };

    return { playSound, startAmbient, stopAmbient };
}
