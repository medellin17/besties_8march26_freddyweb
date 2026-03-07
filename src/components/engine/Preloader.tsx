'use client';

import React, { useEffect, useState } from 'react';
import { Scene } from '@/story/types';

interface PreloaderProps {
    storyData: Record<string, Scene>;
}

export const Preloader: React.FC<PreloaderProps> = ({ storyData }) => {
    const [assets, setAssets] = useState<string[]>([]);

    useEffect(() => {
        const collectedAssets = new Set<string>();

        // Collect all backgrounds
        collectedAssets.add('/assets/bg/office.png');
        collectedAssets.add('/assets/bg/hallway.png');
        collectedAssets.add('/assets/bg/stage.png');
        collectedAssets.add('/assets/bg/party_room.png');

        // Collect all character sprites and memes used in the story
        for (const sceneId in storyData) {
            const scene = storyData[sceneId];
            if (scene.characters) {
                scene.characters.forEach(char => {
                    collectedAssets.add(`/assets/sprites/${char.name}.png`);
                });
            }
            if (scene.dialog) {
                scene.dialog.forEach(line => {
                    if (line.memeImage) {
                        collectedAssets.add(`/assets/memes/${line.memeImage}`);
                    }
                    if (line.characters) {
                        line.characters.forEach(char => {
                            collectedAssets.add(`/assets/sprites/${char.name}.png`);
                        });
                    }
                });
            }
        }

        setAssets(Array.from(collectedAssets));
    }, [storyData]);

    return (
        <div style={{ position: 'absolute', width: 0, height: 0, opacity: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            {assets.map((src, index) => (
                <img src={src} alt="preload" decoding="async" loading="eager" key={`preload-${index}`} />
            ))}
        </div>
    );
};
