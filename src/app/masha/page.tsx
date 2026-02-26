import { VNPlayer } from '@/components/engine/VNPlayer';
import { mashaStory } from '@/story/masha';

export default function MashaPage() {
    return (
        <main className="w-full h-[100dvh]">
            <VNPlayer storyData={mashaStory} startSceneId="dedication" />
        </main>
    );
}
