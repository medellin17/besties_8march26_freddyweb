export type Background =
    | 'title'
    | 'office'
    | 'hallway'
    | 'stage'
    | 'party_room';

export type CharacterName = 'freddy' | 'bonnie' | 'chika' | 'foxy';

export type Expression =
    | 'neutral'
    | 'happy'
    | 'sad'
    | 'surprised'
    | 'serious'
    | 'alert'
    | 'excited'
    | 'embarrassed'
    | 'sheepish'
    | 'relieved'
    | 'moved'
    | 'facepalm'
    | 'patient'
    | 'jumpscare';

export type Position =
    | 'left'
    | 'center_left'
    | 'center'
    | 'center_right'
    | 'right'
    | 'hallway_far'
    | 'center_shifted'
    | 'stage_left'
    | 'stage_right'
    | 'party_1'
    | 'party_2'
    | 'party_3'
    | 'party_4';

export type ScreenEffect = 'shake' | 'flash' | 'static' | 'blackout';

export type SoundCue =
    | 'phone_ring'
    | 'footsteps'
    | 'jumpscare'
    | 'ambient'
    | 'typing';

export interface CharacterOnScreen {
    name: CharacterName;
    expression: Expression;
    position: Position;
}

export interface DialogLine {
    speaker: string | null; // null = narrator/description
    text: string;
    memeImage?: string;     // filename from /public/assets/memes/
    sound?: string;
    effect?: ScreenEffect;
    characters?: CharacterOnScreen[];
    autoAdvanceMs?: number;
}

export interface Choice {
    text: string;
    nextId: string;
}

export interface Scene {
    id: string;
    background: Background;
    characters: CharacterOnScreen[];
    dialog: DialogLine[];
    choices?: Choice[];    // if defined — show choice buttons
    nextId?: string;       // if no choices — auto-advance
    effect?: ScreenEffect;
    sound?: string;
    isEnding?: boolean;
}
