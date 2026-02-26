'use client';

import { useState, useEffect } from 'react';

export function useTypewriter(text: string, speed: number = 30) {
    const [displayedText, setDisplayedText] = useState('');
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        setDisplayedText('');
        setIsFinished(false);

        // Quick skip if text is empty
        if (!text) {
            setIsFinished(true);
            return;
        }

        let i = 0;
        const interval = setInterval(() => {
            i++;
            setDisplayedText(text.slice(0, i));
            if (i >= text.length) {
                clearInterval(interval);
                setIsFinished(true);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    const skip = () => {
        setDisplayedText(text);
        setIsFinished(true);
    };

    return { displayedText, isFinished, skip };
}
