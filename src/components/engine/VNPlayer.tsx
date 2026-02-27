'use client';

import React, { useState, useEffect } from 'react';
import { Scene } from '@/story/types';
import { DialogBox } from './DialogBox';
import { SpriteRenderer } from './SpriteRenderer';
import { useAudio } from '@/hooks/useAudio';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface VNPlayerProps {
    storyData: Record<string, Scene>;
    startSceneId: string;
}

export const VNPlayer: React.FC<VNPlayerProps> = ({ storyData, startSceneId }) => {
    const router = useRouter();
    const [currentSceneId, setCurrentSceneId] = useState<string>(startSceneId);
    const [dialogIndex, setDialogIndex] = useState(0);

    const { playSound, startAmbient, stopAmbient } = useAudio();

    const scene = storyData[currentSceneId];

    if (!scene) return <div className="text-white h-screen flex items-center justify-center" style={{ fontFamily: '"Press Start 2P"' }}>Loading...</div>;

    const currentDialog = scene.dialog[dialogIndex];
    const isLastDialog = dialogIndex === scene.dialog.length - 1;

    // Map current dialog or scene sound
    // Only play scene.sound on the first dialog line (index 0) to prevent looping on every click
    const currentSound = currentDialog?.sound || (dialogIndex === 0 ? scene?.sound : null);

    useEffect(() => {
        if (!scene) return;

        // Start ambient on first scene load
        if (currentSceneId === startSceneId && dialogIndex === 0) {
            startAmbient();
        }

        // Manage ambient audio based on background
        // User requested no ambient sound on the 'stage'
        if (scene.background === 'stage') {
            stopAmbient();
        } else if (currentSceneId !== startSceneId) {
            startAmbient(); // Ensure it resumes if we left the stage
        }

        // Play sound if attached to this specific dialog line or scene entry
        if (currentSound) {
            playSound(currentSound);
        }
    }, [currentSceneId, dialogIndex, scene, currentSound]);

    const handleNextDialog = () => {
        if (isLastDialog) {
            if (scene.isEnding) {
                // Return to main menu
                router.push('/');
                return;
            }
            if (scene.nextId) {
                setCurrentSceneId(scene.nextId);
                setDialogIndex(0);
            }
        } else {
            setDialogIndex(prev => prev + 1);
        }
    };

    const handleChoice = (nextId: string) => {
        setCurrentSceneId(nextId);
        setDialogIndex(0);
    };

    // Maps scene.background to an image URL
    const getBgUrl = () => {
        switch (scene.background) {
            case 'office': return '/assets/bg/office.png';
            case 'hallway': return '/assets/bg/hallway.png';
            case 'stage': return '/assets/bg/stage.png';
            case 'party_room': return '/assets/bg/party_room.png';
            default: return null;
        }
    };

    const bgUrl = getBgUrl();

    return (
        <div className="relative w-full h-[100dvh] overflow-hidden crt bg-black selection:bg-red-900/50 flex flex-col justify-end">

            {/* Background Layer */}
            <motion.div
                key={scene.background}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${bgUrl ? '' : 'bg-black'}`}
                style={bgUrl ? { backgroundImage: `url("${bgUrl}")` } : undefined}
            >
                {/* Dynamic filters based on effect */}
                {scene.effect === 'flash' && <div className="absolute inset-0 bg-white z-10 animate-ping opacity-50" />}
                {scene.effect === 'blackout' && <div className="absolute inset-0 bg-black z-50 animate-pulse" />}
            </motion.div>

            {/* Shake Effect Wrapper */}
            <motion.div
                className="absolute inset-0 z-10"
                animate={scene.effect === 'shake' ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
            >
                {/* Sprites Layer */}
                <AnimatePresence>
                    {scene.characters.map((char, i) => (
                        <SpriteRenderer key={`${char.name}-${i}`} character={char} />
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* UI / Dialog Layer */}
            <DialogBox
                speaker={currentDialog.speaker}
                text={currentDialog.text}
                memeImage={currentDialog.memeImage}
                onNext={handleNextDialog}
                choices={isLastDialog ? scene.choices : undefined}
                onChoiceResult={handleChoice}
            />

        </div>
    );
};
