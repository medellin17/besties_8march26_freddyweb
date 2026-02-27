'use client';

import React, { useRef, useEffect } from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { motion, AnimatePresence } from 'framer-motion';

interface DialogBoxProps {
    speaker: string | null;
    text: string;
    memeImage?: string;
    onNext: () => void;
    choices?: { text: string; nextId: string }[];
    onChoiceResult?: (nextId: string) => void;
}

export const DialogBox: React.FC<DialogBoxProps> = ({ speaker, text, memeImage, onNext, choices, onChoiceResult }) => {
    const { displayedText, isFinished, skip } = useTypewriter(text, 35);
    // Optional audio ref for typing sound

    const handleClick = () => {
        if (isFinished && choices && choices.length > 0) return; // Wait for choice
        if (isFinished) {
            onNext();
        } else {
            skip();
        }
    };

    return (
        <div
            className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:w-[600px] z-50 flex flex-col gap-2"
        >
            {/* Meme Popup */}
            <AnimatePresence>
                {memeImage && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute -top-[220px] right-0 md:right-4 w-[200px] h-[200px] rounded-lg border-2 border-white overflow-hidden bg-black shadow-lg z-[100] pointer-events-none"
                    >
                        <img src={`/assets/memes/${memeImage}`} alt="meme" className="w-full h-full object-cover" />
                    </motion.div>
                )}
            </AnimatePresence>

            <div
                className="bg-black/80 border-2 border-white rounded-lg p-4 cursor-pointer min-h-[120px] flex flex-col backdrop-blur-sm"
                onClick={handleClick}
            >
                {speaker && (
                    <div className="font-press-start text-[10px] md:text-xs text-yellow-300 mb-2 uppercase tracking-tight">
                        [{speaker}]
                    </div>
                )}
                <div className="font-sans text-sm md:text-base leading-relaxed text-white">
                    {displayedText}
                    {!isFinished && <span className="animate-pulse">_</span>}
                    {isFinished && (!choices || choices.length === 0) && (
                        <span className="block mt-2 text-gray-500 text-xs animate-pulse">▼ Нажмите, чтобы продолжить</span>
                    )}
                </div>
            </div>

            {isFinished && choices && choices.length > 0 && (
                <div className="flex flex-col gap-2 mt-2">
                    {choices.map((choice, i) => (
                        <button
                            key={i}
                            onClick={() => onChoiceResult?.(choice.nextId)}
                            className="bg-black/90 border border-red-500 hover:bg-red-900/50 text-white font-sans text-sm p-3 rounded text-left transition-colors duration-200"
                        >
                            {choice.text}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
