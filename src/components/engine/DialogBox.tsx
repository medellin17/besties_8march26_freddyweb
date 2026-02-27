'use client';

import React, { useRef, useEffect } from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronRight,
    Gamepad2,
    Camera,
    DoorClosed,
    Search,
    MessageSquare,
    Coffee,
    ShieldAlert
} from 'lucide-react';

interface DialogBoxProps {
    speaker: string | null;
    text: string;
    memeImage?: string;
    onNext: () => void;
    choices?: { text: string; nextId: string }[];
    onChoiceResult?: (nextId: string) => void;
}

const getChoiceIcon = (text: string) => {
    const t = text.toLowerCase();
    if (t.includes('brawl') || t.includes('катку')) return <Gamepad2 className="w-4 h-4" />;
    if (t.includes('камер') || t.includes('посмотреть')) return <Camera className="w-4 h-4" />;
    if (t.includes('дверь') || t.includes('закрыть')) return <DoorClosed className="w-4 h-4" />;
    if (t.includes('искать') || t.includes('посмотреть')) return <Search className="w-4 h-4" />;
    if (t.includes('уйти') || t.includes('попросить')) return <MessageSquare className="w-4 h-4" />;
    if (t.includes('чаю') || t.includes('чай')) return <Coffee className="w-4 h-4" />;
    if (t.includes('фокси') || t.includes('отпугнуть')) return <ShieldAlert className="w-4 h-4" />;
    return <ChevronRight className="w-4 h-4" />;
};

export const DialogBox: React.FC<DialogBoxProps> = ({ speaker, text, memeImage, onNext, choices, onChoiceResult }) => {
    const { displayedText, isFinished, skip } = useTypewriter(text, 35);

    const handleClick = () => {
        if (isFinished && choices && choices.length > 0) return; // Wait for choice
        if (isFinished) {
            onNext();
        } else {
            skip();
        }
    };

    return (
        <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:w-[650px] z-50 flex flex-col gap-3">
            {/* Meme Popup */}
            <AnimatePresence>
                {memeImage && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        className="absolute -top-[230px] right-2 md:right-4 w-[210px] h-[210px] rounded-lg border-2 border-white/50 overflow-hidden bg-black shadow-2xl z-[100] pointer-events-none"
                    >
                        <img src={`/assets/memes/${memeImage}`} alt="meme" className="w-full h-full object-cover" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Choices Layer */}
            <AnimatePresence mode="wait">
                {isFinished && choices && choices.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.15 } }}
                        className="flex flex-col gap-2 mb-2"
                    >
                        {choices.map((choice, i) => (
                            <motion.button
                                key={i}
                                layout
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.1 } }}
                                transition={{
                                    delay: i * 0.08,
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 25
                                }}
                                whileHover={{ scale: 1.01, x: 2 }}
                                whileTap={{ scale: 0.94, backgroundColor: 'rgba(239, 68, 68, 0.4)' }}
                                onClick={(e) => {
                                    const target = e.currentTarget;
                                    target.style.borderColor = 'rgba(239, 68, 68, 0.8)';
                                    setTimeout(() => {
                                        onChoiceResult?.(choice.nextId);
                                    }, 250);
                                }}
                                className="group relative flex items-center gap-3 bg-black/90 border border-white/10 hover:border-red-500/40 hover:bg-black text-white font-sans text-sm md:text-base p-4 rounded-lg shadow-xl overflow-hidden transition-all duration-200"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="z-10 text-red-500/80 group-hover:text-red-400 transition-colors">
                                    {getChoiceIcon(choice.text)}
                                </div>
                                <span className="z-10 font-medium tracking-wide">{choice.text}</span>
                                <ChevronRight className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Dialog Box */}
            <motion.div
                initial={false}
                animate={{ height: speaker ? 'auto' : 'auto' }}
                className="relative bg-black/85 border-2 border-white/20 rounded-xl p-5 cursor-pointer min-h-[130px] flex flex-col backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
                onClick={handleClick}
            >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-red-600/50 rounded-l-xl" />

                {speaker && (
                    <div className="font-press-start text-[9px] md:text-[11px] text-red-500 mb-3 uppercase tracking-widest drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]">
                        {speaker}
                    </div>
                )}

                <div className="font-sans text-sm md:text-[17px] leading-relaxed text-gray-100">
                    {displayedText}
                    {!isFinished && <span className="inline-block w-2 h-4 bg-red-500 ml-1 animate-pulse" />}

                    {isFinished && (!choices || choices.length === 0) && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-4 flex items-center gap-2 text-gray-500 text-[10px] md:text-xs font-press-start tracking-tighter"
                        >
                            <ChevronRight className="w-3 h-3 animate-bounce-x" />
                            <span>Нажмите, чтобы продолжить</span>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
