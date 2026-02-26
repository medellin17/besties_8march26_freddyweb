import { VNPlayer } from '@/components/engine/VNPlayer';
import { polinaStory } from '@/story/polina';

export default function PolinaPage() {
    return (
        <main className="w-full h-[100dvh]">
            <VNPlayer storyData={polinaStory} startSceneId="dedication" />
        </main>
    );
}
