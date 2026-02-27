import type { Scene } from './types';

export const mashaStory: Record<string, Scene> = {

    // ═══════════════════════════════════════════════
    // АКТ 0 — ПОСВЯЩЕНИЕ
    // ═══════════════════════════════════════════════

    dedication: {
        id: 'dedication',
        background: 'title',
        characters: [],
        dialog: [
            { speaker: null, text: 'Для Маши.' },
            { speaker: null, text: 'С 8 марта!' },
            { speaker: null, text: 'Ты самая странная и самая лучшая одновременно. Не меняйся. 🐤' },
            { speaker: null, text: '— Глеб' },
        ],
        nextId: 'intro',
    },

    // ═══════════════════════════════════════════════
    // АКТ 1 — ПРИБЫТИЕ
    // ═══════════════════════════════════════════════

    intro: {
        id: 'intro',
        background: 'office',
        characters: [],
        dialog: [
            { speaker: null, text: 'Пятница, 00:00. Ты — Маша.' },
            { speaker: null, text: 'Обстоятельства сложились так, что ты сидишь в офисе ночного охранника пиццерии Freddy Fazbear\'s.' },
            { speaker: null, text: 'Монитор. Вентилятор. Стул. Записка на двери: "Если придёт Фокси — дверь закрывай СРАЗУ".' },
            { speaker: null, text: 'Телефон звонит.' },
        ],
        sound: 'ring',
        nextId: 'phone_call',
    },

    phone_call: {
        id: 'phone_call',
        background: 'office',
        characters: [],
        dialog: [
            { speaker: 'Phone Guy', text: 'Алло. Это я. Предыдущий охранник.' },
            { speaker: 'Phone Guy', text: 'Хочу тебя предупредить о нескольких вещах.' },
            { speaker: 'Phone Guy', text: 'Первое: аниматроники двигаются. Это задумано. Не паникуй.' },
            { speaker: 'Phone Guy', text: 'Второе: Фредди — медведь. Он кажется серьёзным, но на самом деле он просто стесняется.' },
            { speaker: 'Phone Guy', text: 'Третье: сегодня у нас в беседе была тишина, потому что у меня было шесть уроков.', memeImage: 'photo_2026-02-18_23-28-43.jpg' },
            { speaker: 'Phone Guy', text: 'Блин, это не относится к делу. Ладно.' },
            { speaker: 'Phone Guy', text: 'Ну, удачи тебе, Marry. Ты справишься.' },
            { speaker: null, text: 'Внутренний детектор показывает...', memeImage: 'photo_2026-02-18_18-20-30.jpg' },
            { speaker: 'Phone Guy', text: '...наверное.' },
            { speaker: 'Phone Guy', text: '*гудки*' },
        ],
        sound: 'ring',
        nextId: 'first_look',
    },

    first_look: {
        id: 'first_look',
        background: 'office',
        characters: [],
        dialog: [
            { speaker: null, text: 'Ты переключаешь камеры. Тихо. Как-то подозрительно тихо.' },
            { speaker: null, text: 'На сцене — три аниматроника. Медведь, кролик и курица. Стоят. Смотрят в одну точку.' },
            { speaker: null, text: 'Фредди, кажется, смотрит прямо в камеру.' },
            { speaker: null, text: 'Ты отводишь взгляд.' },
            { speaker: null, text: '...Нет. Точно показалось.' },
            { speaker: null, text: 'Кто-то стучится в дверь справа.' },
        ],
        nextId: 'freddy_arrives',
    },

    // ═══════════════════════════════════════════════
    // АКТ 2 — ВСТРЕЧА С ФРЕДДИ
    // ═══════════════════════════════════════════════

    freddy_arrives: {
        id: 'freddy_arrives',
        background: 'office',
        characters: [{ name: 'freddy', expression: 'neutral', position: 'right' }],
        dialog: [
            { speaker: null, text: 'Ты медленно открываешь правую дверь. Там стоит Фредди.' },
            { speaker: null, text: 'Он в цилиндре. С микрофоном. Он смотрит на тебя с выражением человека, который уже видел всякое.' },
            { speaker: 'Фредди', text: 'Здравствуй.' },
            { speaker: 'Фредди', text: 'Ты новый охранник.' },
            { speaker: null, text: 'Это звучит не как вопрос.' },
            { speaker: 'Фредди', text: 'Я Фредди Фазбер. Медведь. Хозяин заведения, по сути.' },
        ],
        nextId: 'freddy_chat',
    },

    freddy_chat: {
        id: 'freddy_chat',
        background: 'office',
        characters: [{ name: 'freddy', expression: 'neutral', position: 'right' }],
        dialog: [
            { speaker: 'Фредди', text: 'У нас сегодня спокойно. Почти.' },
            { speaker: 'Фредди', text: 'Бонни ушёл джемовать в комнату вечеринок. Чика готовит что-то на кухне.' },
            { speaker: 'Фредди', text: 'Фокси... лучше не думай про Фокси.' },
            { speaker: null, text: 'Ты киваешь. Потом вспоминаешь записку на двери. Смотришь на Фредди.' },
            { speaker: 'Фредди', text: 'Что?' },
        ],
        choices: [
            { text: '❓ "Почему записка про Фокси?"', nextId: 'ask_foxy' },
            { text: '🕹️ "Слушай, а в Brawl Stars играешь?"', nextId: 'brawl_freddy' },
        ],
    },

    ask_foxy: {
        id: 'ask_foxy',
        background: 'office',
        characters: [{ name: 'freddy', expression: 'serious', position: 'right' }],
        dialog: [
            { speaker: 'Фредди', text: 'Фокси... особенный.' },
            { speaker: 'Фредди', text: 'Он любит бегать. Быстро. По коридорам. Ночью.' },
            { speaker: 'Фредди', text: 'И орать.' },
            { speaker: 'Фредди', text: 'Однажды он вбежал в чужой офис, увидел человека и сказал ему "Ахуенное качество у этого офиса".', memeImage: 'photo_2026-02-18_23-21-15.jpg' },
            { speaker: 'Фредди', text: 'Просто так. Встал и ушёл.' },
            { speaker: null, text: 'Долгая пауза.' },
            { speaker: 'Фредди', text: 'Закрывай дверь, если слышишь топот. Это всё, что надо знать.' },
        ],
        nextId: 'lights_flicker',
    },

    brawl_freddy: {
        id: 'brawl_freddy',
        background: 'office',
        characters: [{ name: 'freddy', expression: 'surprised', position: 'right' }],
        dialog: [
            { speaker: 'Фредди', text: 'В... что?' },
            { speaker: null, text: 'Ты объясняешь. Фредди слушает серьёзно, как будто ты рассказываешь ему теорию относительности.' },
            { speaker: 'Фредди', text: 'Понятно.' },
            { speaker: null, text: 'Пауза.' },
            { speaker: 'Фредди', text: 'Покажи.' },
            { speaker: null, text: 'Следующие двадцать минут Фредди молча изучает интерфейс у тебя над плечом.' },
            { speaker: null, text: 'Через пять минут он уже сидит вот так.', memeImage: 'photo_2026-01-31_10-09-29.jpg' },
            { speaker: 'Фредди', text: 'Окей. Окей.', memeImage: 'photo_2026-02-24_20-58-41.jpg' },
        ],
        nextId: 'lights_flicker',
    },

    // ═══════════════════════════════════════════════
    // АКТ 3 — ИНЦИДЕНТ С ФОКСИ
    // ═══════════════════════════════════════════════

    lights_flicker: {
        id: 'lights_flicker',
        background: 'office',
        characters: [{ name: 'freddy', expression: 'alert', position: 'right' }],
        dialog: [
            { speaker: null, text: 'Свет моргает.' },
            { speaker: null, text: 'Раз. Два.' },
            { speaker: null, text: 'В конце коридора — тёмный силуэт. Быстрый.' },
            { speaker: null, text: 'Мысль на одну секунду: «Разъебу ли я это в теннис?»', memeImage: 'photo_2026-02-18_23-27-28.jpg' },
            { speaker: 'Фредди', text: 'Дверь.' },
            { speaker: 'Фредди', text: 'Сейчас.' },
        ],
        effect: 'shake',
        sound: 'running-fast3',
        choices: [
            { text: '🚪 Закрыть правую дверь!', nextId: 'door_closed' },
            { text: '🙈 "А вдруг не Фокси?"', nextId: 'door_open' },
        ],
    },

    door_closed: {
        id: 'door_closed',
        background: 'office',
        sound: 'pound-2',
        characters: [{ name: 'freddy', expression: 'relieved', position: 'right' }],
        dialog: [
            { speaker: null, text: 'Ты нажимаешь кнопку. Дверь с грохотом захлопывается.' },
            { speaker: null, text: 'БУМ.' },
            { speaker: 'Фокси (за дверью)', text: 'А.' },
            { speaker: 'Фокси (за дверью)', text: 'Закрыто.' },
            { speaker: null, text: 'Тишина. Потом — удаляющийся топот.' },
            { speaker: 'Фокси (за дверью, вдали)', text: 'Будь ты проклят, Перри утконос!', memeImage: 'photo_2026-02-18_23-26-57.jpg' },
            { speaker: 'Фредди', text: 'Хорошо сработано.' },
            { speaker: 'Фредди', text: 'Ты лучше прежнего охранника. Тот каждый раз открывал.' },
        ],
        nextId: 'after_foxy',
    },

    door_open: {
        id: 'door_open',
        background: 'hallway',
        characters: [{ name: 'foxy', expression: 'jumpscare', position: 'hallway_far' }],
        dialog: [
            { speaker: null, text: 'Ты ждёшь. Ждёшь.' },
        ],
        effect: 'flash',
        nextId: 'door_open_aftermath',
    },

    door_open_aftermath: {
        id: 'door_open_aftermath',
        background: 'office',
        characters: [
            { name: 'freddy', expression: 'facepalm', position: 'right' },
            { name: 'foxy', expression: 'sheepish', position: 'left' },
        ],
        dialog: [
            { speaker: 'Фокси', text: 'АААААААААА—', sound: 'scream55' },
            { speaker: null, text: 'Фокси буквально ввалился в офис. Стоит. Смотрит на тебя.' },
            { speaker: 'Фокси', text: '...Ты не убежала.' },
            { speaker: 'Фокси', text: 'Обычно убегают.' },
            { speaker: 'Фредди', text: 'Фокси, мы сто раз говорили—' },
            { speaker: 'Фокси', text: 'Встречайте нового бойца! Меня то есть.', memeImage: 'photo_2026-02-19_17-52-30.jpg' },
            { speaker: 'Фокси', text: 'Кстати, айфон зарядишь? Пять процентов осталось.' },
        ],
        nextId: 'after_foxy',
    },

    after_foxy: {
        id: 'after_foxy',
        background: 'office',
        characters: [{ name: 'freddy', expression: 'neutral', position: 'right' }],
        dialog: [
            { speaker: null, text: 'Всё успокоилось. Фокси где-то заряжается.' },
            { speaker: 'Фредди', text: 'Слушай. Хочу тебе кое-что показать.' },
            { speaker: 'Фредди', text: 'Сегодня особый повод. Чика подготовила нечто.' },
            { speaker: null, text: 'Ты слышишь, как со стороны кухни доносится звон посуды и чьё-то бормотание.' },
        ],
        choices: [
            { text: '🎂 Пойти на кухню', nextId: 'kitchen_scene' },
            { text: '📷 Сначала ещё раз проверить камеры', nextId: 'cameras_check' },
        ],
    },

    cameras_check: {
        id: 'cameras_check',
        background: 'office',
        characters: [{ name: 'freddy', expression: 'patient', position: 'right' }],
        dialog: [
            { speaker: null, text: 'Ты переключаешь камеры. Всё спокойно.' },
            { speaker: null, text: 'Кухня. Стоп.' },
            { speaker: null, text: 'На кухне кто-то в костюме Чики двигается необычно для аниматроника.' },
            { speaker: null, text: 'Слишком... по-человечески.' },
            { speaker: 'Фредди', text: 'Это и есть то, о чём я говорил.' },
        ],
        nextId: 'kitchen_scene',
    },

    // ═══════════════════════════════════════════════
    // АКТ 4 — КУЛЬМИНАЦИЯ
    // ═══════════════════════════════════════════════

    kitchen_scene: {
        id: 'kitchen_scene',
        background: 'party_room',
        characters: [
            { name: 'chika', expression: 'excited', position: 'center' },
            { name: 'freddy', expression: 'happy', position: 'left' },
        ],
        dialog: [
            { speaker: null, text: 'Ты заходишь на кухню. Посреди комнаты стоит Чика.' },
            { speaker: null, text: 'На столе — торт.' },
            { speaker: null, text: 'На торте написано: "С 8 МАРТА, MARRY"' },
            { speaker: 'Чика', text: 'О! Ты пришла!' },
            { speaker: null, text: 'Голос. Знакомый голос.' },
            { speaker: 'Чика', text: 'Не удивляйся. Это я, Глеб.' },
        ],
        nextId: 'chika_reveal',
    },

    chika_reveal: {
        id: 'chika_reveal',
        background: 'party_room',
        characters: [
            { name: 'chika', expression: 'happy', position: 'center' },
            { name: 'freddy', expression: 'happy', position: 'left' },
        ],
        dialog: [
            { speaker: 'Чика', text: 'Phone Guy — тоже я. Костюм взял напрокат у пиццерии.' },
            { speaker: 'Чика', text: 'Помнишь фотку, что Полина сделала на 23 февраля?', memeImage: 'photo_2026-02-24_20-59-44.jpg' },
            { speaker: 'Чика', text: 'Вот. Прямо в жизни.' },
            { speaker: null, text: 'Ты смотришь на Чику. На торт. На Фредди, который почему-то выглядит довольным.' },
            { speaker: 'Фредди', text: 'Мы репетировали неделю.' },
        ],
        choices: [
            { text: '🤣 "Вы безумные"', nextId: 'ending_chaos' },
            { text: '🥺 "Это лучшее что я видела"', nextId: 'ending_heartwarming' },
            { text: '🎉 "Режь торт, зови всех"', nextId: 'ending_party' },
        ],
    },

    // ═══════════════════════════════════════════════
    // АКТ 5 — КОНЦОВКИ
    // ═══════════════════════════════════════════════

    ending_chaos: {
        id: 'ending_chaos',
        background: 'party_room',
        sound: 'chimes-2',
        characters: [
            { name: 'freddy', expression: 'happy', position: 'left' },
            { name: 'chika', expression: 'happy', position: 'center' },
        ],
        dialog: [
            { speaker: 'Чика', text: 'Мы безумные. Правда.' },
            { speaker: 'Фредди', text: 'Я хотел нормальную вечеринку.' },
            { speaker: 'Чика', text: 'А Бонни предложил пригласить Фокси.' },
            { speaker: null, text: 'В этот момент в комнату врывается Фокси. Случайно. Просто бежал мимо.' },
            { speaker: 'Фокси', text: 'Ааааааа! О. Торт.', memeImage: 'photo_2026-02-20_23-40-32.jpg' },
            { speaker: 'Фокси', text: 'Окак.' },
            { speaker: 'Все', text: '🌸 С 8-м марта, Маша! 🌸' },
            { speaker: null, text: 'Конец 🐤' },
        ],
        isEnding: true,
    },

    ending_heartwarming: {
        id: 'ending_heartwarming',
        background: 'party_room',
        sound: 'chimes-2',
        characters: [
            { name: 'freddy', expression: 'moved', position: 'left' },
            { name: 'chika', expression: 'moved', position: 'center' },
        ],
        dialog: [
            { speaker: 'Чика', text: 'Старалась... то есть старался.' },
            { speaker: 'Фредди', text: 'Мы рады, что ты пришла эту ночь.' },
            { speaker: null, text: 'Входит Бонни с гитарой. Молча начинает тихо играть.' },
            { speaker: 'Чика', text: 'Ты классная, Marry.' },
            { speaker: 'Чика', text: 'Это объективный факт.' },
            { speaker: null, text: '🌸 С 8-м марта! 🌸' },
            { speaker: null, text: 'Конец 🐤' },
        ],
        isEnding: true,
    },

    ending_party: {
        id: 'ending_party',
        background: 'party_room',
        sound: 'chimes-2',
        characters: [
            { name: 'freddy', expression: 'happy', position: 'party_1' },
            { name: 'bonnie', expression: 'happy', position: 'party_2' },
            { name: 'chika', expression: 'excited', position: 'party_3' },
            { name: 'foxy', expression: 'happy', position: 'party_4' },
        ],
        dialog: [
            { speaker: 'Чика', text: 'Вот это лучший ответ.' },
            { speaker: null, text: 'Через пять минут в комнате все. Бонни с гитарой. Фокси с телефоном (зарядился). Фредди с видом довольного шефа.' },
            { speaker: 'Фредди', text: 'Я разрезаю.' },
            { speaker: 'Бонни', text: 'Я снимаю.' },
            { speaker: 'Фокси', text: 'Я ем.' },
            { speaker: null, text: 'Пиццерия Freddy Fazbear\'s никогда не была уютнее.' },
            { speaker: 'Все', text: '🌸 С 8-м марта, Маша! 🌸' },
            { speaker: null, text: 'Конец 🐤' },
        ],
        isEnding: true,
    },
};
