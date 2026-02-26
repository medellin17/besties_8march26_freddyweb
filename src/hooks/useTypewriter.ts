'use client';

import { useState, useEffect, useRef } from 'react';

export function useTypewriter(text: string, speed: number = 30) {
    const [displayedText, setDisplayedText] = useState('');
    const [isFinished, setIsFinished] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setDisplayedText('');
        setIsFinished(false);

        // Quick skip if text is empty
        if (!text) {
            setIsFinished(true);
            return;
        }

        let i = 0;
        intervalRef.current = setInterval(() => {
            i++;
            setDisplayedText(text.slice(0, i));
            if (i >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setIsFinished(true);
            }
        }, speed);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [text, speed]);

    const skip = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayedText(text);
        setIsFinished(true);
    };

    return { displayedText, isFinished, skip };
}
