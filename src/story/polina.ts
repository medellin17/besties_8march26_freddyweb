import type { Scene } from './types';

export const polinaStory: Record<string, Scene> = {

    // ═══════════════════════════════════════════════
    // АКТ 0 — ПОСВЯЩЕНИЕ
    // ═══════════════════════════════════════════════

    dedication: {
        id: 'dedication',
        background: 'title',
        characters: [],
        dialog: [
            { speaker: null, text: 'Для Полины.' },
            { speaker: null, text: 'С 8 марта!' },
            { speaker: null, text: 'Ты умеешь делать любой день веселее просто фактом своего существования. Это важный талант. 🐤' },
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
            { speaker: null, text: 'Пятница, 00:00. Ты — Полина.' },
            { speaker: null, text: 'По какой-то невероятной цепочке событий ты устроилась ночным охранником в пиццерию Freddy Fazbear\'s.' },
            { speaker: null, text: 'Офис небольшой. Тускло горит лампа. На столе три монитора, вентилятор и записка: "НЕ ОТКРЫВАЙ ДВЕРИ. СЕРЬЁЗНО."' },
            { speaker: null, text: 'Телефон на столе начинает звонить.' },
        ],
        sound: 'phone_ring',
        nextId: 'phone_call',
    },

    phone_call: {
        id: 'phone_call',
        background: 'office',
        characters: [],
        dialog: [
            { speaker: 'Глеб (по телефону)', text: '*кряхтит* Алло. Привет. Ты добралась.' },
            { speaker: 'Глеб (по телефону)', text: 'Я предыдущий охранник. Оставляю тебе полезные советы.' },
            { speaker: 'Глеб (по телефону)', text: 'Совет первый: вентилятор не выключай. Он не охлаждает, просто... так надо.' },
            { speaker: 'Глеб (по телефону)', text: 'Совет второй: аниматроники ночью двигаются. Это нормально. Главное — не смотри им в глаза.' },
            { speaker: 'Глеб (по телефону)', text: 'Совет третий: если увидишь фиолетового кролика с гитарой — это Бонни. Он нормик. Почти.' },
            { speaker: 'Глеб (по телефону)', text: 'Тишина в группе сегодня потому что у меня шесть уроков было. Вот так.', memeImage: 'photo_2026-02-18_23-28-43.jpg' },
            { speaker: 'Глеб (по телефону)', text: 'Ладно, удачи. Я уверен, всё будет окей.' },
            { speaker: null, text: 'Внутренний детектор показывает...', memeImage: 'photo_2026-02-18_18-20-30.jpg' },
            { speaker: 'Глеб (по телефону)', text: 'Хотя...' },
            { speaker: 'Глеб (по телефону)', text: '*гудки*' },
        ],
        sound: 'phone_ring',
        nextId: 'first_look',
    },

    first_look: {
        id: 'first_look',
        background: 'office',
        characters: [],
        dialog: [
            { speaker: null, text: 'Ты смотришь на мониторы. Камера 1 — коридор. Тихо.' },
            { speaker: null, text: 'Камера 2 — сцена. Пусто. Только три аниматроника стоят в темноте.' },
            { speaker: null, text: 'Камера 3 — комната вечеринок. Там... кто-то есть?' },
            { speaker: null, text: 'Ты щуришься. Нет, показалось.' },
            { speaker: null, text: 'Вдруг свет на мгновение моргает.' },
        ],
        nextId: 'bonnie_arrives',
    },

    // ═══════════════════════════════════════════════
    // АКТ 2 — ВСТРЕЧА С БОННИ
    // ═══════════════════════════════════════════════

    bonnie_arrives: {
        id: 'bonnie_arrives',
        background: 'office',
        characters: [{ name: 'bonnie', expression: 'neutral', position: 'right' }],
        dialog: [
            { speaker: null, text: 'Из коридора слышен тихий перебор гитарных струн.' },
            { speaker: null, text: 'В дверном проёме появляется Бонни. Он смотрит на тебя. Ты смотришь на него.' },
            { speaker: 'Бонни', text: 'Хэй. Ты новая?' },
            { speaker: null, text: 'Ты кивком.' },
            { speaker: 'Бонни', text: 'Понял. Первая ночь — всегда стрёмно. Потом привыкаешь.' },
            { speaker: 'Бонни', text: 'Я Бонни. Кролик. С гитарой. Да, я знаю.' },
        ],
        nextId: 'bonnie_chat',
    },

    bonnie_chat: {
        id: 'bonnie_chat',
        background: 'office',
        characters: [{ name: 'bonnie', expression: 'happy', position: 'right' }],
        dialog: [
            { speaker: 'Бонни', text: 'Глеб просил передать привет. И что камеры сегодня опять лагают.' },
            { speaker: null, text: 'Ты смотришь на монитор. Картинка в коридоре размытая, как фото 2008 года на кнопочный телефон.' },
            { speaker: 'Бонни', text: '*смотрит в монитор* Ахуенное качество.' },
            { speaker: 'Бонни', text: 'Шакал ебучий.', memeImage: 'photo_2026-02-18_23-21-15.jpg' },
            { speaker: 'Бонни', text: 'Ну ладно. В Brawl Stars хоть, пока тихо?' },
        ],
        choices: [
            { text: '🎮 "Давай одну катку"', nextId: 'brawl_break' },
            { text: '📷 "Лучше проверим камеры"', nextId: 'check_cameras' },
        ],
    },

    brawl_break: {
        id: 'brawl_break',
        background: 'office',
        characters: [{ name: 'bonnie', expression: 'happy', position: 'right' }],
        dialog: [
            { speaker: 'Бонни', text: 'О, это я люблю.' },
            { speaker: null, text: 'Вы оба достаёте телефоны. Бонни пытается удержать свой кривыми роботизированными лапами.' },
            { speaker: null, text: 'Через минуту он уже сидит вот так.', memeImage: 'photo_2026-01-31_10-09-29.jpg' },
            { speaker: 'Бонни', text: 'Встречайте нового бойца.', memeImage: 'photo_2026-02-19_17-52-30.jpg' },
            { speaker: 'Бонни', text: 'Это я себя так называю.' },
            { speaker: null, text: 'Проходит минут двадцать. Где-то в глубине пиццерии что-то падает.' },
        ],
        nextId: 'lights_flicker',
    },

    check_cameras: {
        id: 'check_cameras',
        background: 'office',
        characters: [{ name: 'bonnie', expression: 'neutral', position: 'right' }],
        dialog: [
            { speaker: 'Бонни', text: 'Ответственная. Глеб говорил.' },
            { speaker: null, text: 'Ты переключаешь камеры. Коридор — пусто. Сцена — пусто. Комната вечеринок — стоп.' },
            { speaker: null, text: 'На камере 3 что-то движется в темноте. Медленно. В сторону коридора.' },
            { speaker: 'Бонни', text: 'А. Это Фокси.' },
            { speaker: 'Бонни', text: 'Не беспокойся. Наверное.' },
        ],
        nextId: 'lights_flicker',
    },

    // ═══════════════════════════════════════════════
    // АКТ 3 — ИНЦИДЕНТ С ФОКСИ
    // ═══════════════════════════════════════════════

    lights_flicker: {
        id: 'lights_flicker',
        background: 'office',
        characters: [{ name: 'bonnie', expression: 'surprised', position: 'right' }],
        dialog: [
            { speaker: null, text: 'Свет моргает. Раз. Два. Три.' },
            { speaker: null, text: 'В коридоре слышен топот.' },
            { speaker: null, text: 'Быстрый. Приближающийся.' },
            { speaker: null, text: 'Ты смотришь в монитор на тёмный силуэт в конце коридора.' },
            { speaker: null, text: 'Мысль: «Разъебу ли я это в теннис?»', memeImage: 'photo_2026-02-18_23-27-28.jpg' },
            { speaker: 'Бонни', text: 'О нет.' },
            { speaker: 'Бонни', text: 'ЭТО ФОКСИ.' },
        ],
        effect: 'shake',
        choices: [
            { text: '🚪 Закрыть дверь!', nextId: 'door_closed' },
            { text: '👁️ Посмотреть в коридор', nextId: 'door_open' },
        ],
    },

    door_closed: {
        id: 'door_closed',
        background: 'office',
        characters: [{ name: 'bonnie', expression: 'relieved', position: 'right' }],
        dialog: [
            { speaker: null, text: 'Ты со всей силы жмёшь на кнопку. Металлическая дверь с лязгом захлопывается.' },
            { speaker: null, text: 'БАМ. ЧТО-ТО ВРЕЗАЕТСЯ В ДВЕРЬ СНАРУЖИ.' },
            { speaker: 'Фокси (за дверью)', text: '...ладно.' },
            { speaker: 'Фокси (за дверью)', text: 'Ладно. Понял.' },
            { speaker: 'Фокси (за дверью)', text: 'Я просто хотел зарядку попросить. У меня айфон сел.' },
            { speaker: 'Бонни', text: 'Да уйди ты нахуй, Фокси.', memeImage: 'photo_2026-02-23_23-25-20.jpg' },
            { speaker: 'Фокси (за дверью)', text: 'Будь ты проклят, Перри утконос!', memeImage: 'photo_2026-02-18_23-26-57.jpg' },
            { speaker: 'Фокси (за дверью)', text: '*удаляющийся топот*' },
        ],
        nextId: 'after_foxy',
    },

    door_open: {
        id: 'door_open',
        background: 'hallway',
        characters: [{ name: 'foxy', expression: 'jumpscare', position: 'hallway_far' }],
        dialog: [
            { speaker: null, text: 'Ты осторожно выглядываешь в коридор.' },
        ],
        effect: 'flash',
        sound: 'jumpscare',
        nextId: 'door_open_aftermath',
    },

    door_open_aftermath: {
        id: 'door_open_aftermath',
        background: 'office',
        characters: [
            { name: 'foxy', expression: 'embarrassed', position: 'left' },
            { name: 'bonnie', expression: 'facepalm', position: 'right' },
        ],
        dialog: [
            { speaker: 'Фокси', text: 'ААААААААА—' },
            { speaker: 'Фокси', text: '...привет.' },
            { speaker: null, text: 'Фокси стоит в твоём офисе. На нём повязка. В руке крюк. И он выглядит виноватым.' },
            { speaker: 'Фокси', text: 'Ахуенное качество у этой двери если что. Я потряс — она и открылась.', memeImage: 'photo_2026-02-18_23-21-15.jpg' },
            { speaker: 'Бонни', text: '*вздыхает*' },
            { speaker: 'Фокси', text: 'Слушай, зарядку дашь? Айфон сел совсем.' },
        ],
        nextId: 'after_foxy',
    },

    after_foxy: {
        id: 'after_foxy',
        background: 'office',
        characters: [{ name: 'bonnie', expression: 'neutral', position: 'right' }],
        dialog: [
            { speaker: null, text: 'Ситуация стабилизировалась. Относительно.' },
            { speaker: 'Бонни', text: 'Слушай, пока Фокси заряжается... можем сходить на сцену.' },
            { speaker: 'Бонни', text: 'Там Фредди с Чикой. Надо сказать — Чика сегодня вообще-то особенная.' },
            { speaker: null, text: 'Ты замечаешь странный огонёк в глазах Бонни. Он, кажется, знает что-то, чего не говорит.' },
        ],
        choices: [
            { text: '🎤 Пойти на сцену', nextId: 'stage_scene' },
            { text: '🔦 Остаться в офисе и подождать', nextId: 'stay_office' },
        ],
    },

    // ═══════════════════════════════════════════════
    // АКТ 4 — КУЛЬМИНАЦИЯ
    // ═══════════════════════════════════════════════

    stay_office: {
        id: 'stay_office',
        background: 'office',
        characters: [],
        dialog: [
            { speaker: null, text: 'Ты решаешь остаться. Тихо. Мониторы мерцают.' },
            { speaker: null, text: 'Потом слышишь из коридора характерный звук. Чьи-то шаги. Медленные. Ритмичные.' },
            { speaker: null, text: 'И голос, напевающий что-то на манер официальной мелодии пиццерии.' },
            { speaker: '???', text: 'Тра-та-та-та-та~' },
            { speaker: null, text: 'В дверях появляется Чика.' },
        ],
        nextId: 'chika_reveal',
    },

    stage_scene: {
        id: 'stage_scene',
        background: 'stage',
        characters: [
            { name: 'freddy', expression: 'neutral', position: 'stage_left' },
            { name: 'chika', expression: 'excited', position: 'stage_right' },
        ],
        dialog: [
            { speaker: null, text: 'Сцена тёмная, только прожектор светит на пустой микрофонной стойке.' },
            { speaker: 'Фредди', text: 'А, новый охранник.' },
            { speaker: 'Фредди', text: 'Мы тут готовили небольшое мероприятие на завтра. Особый повод.' },
            { speaker: null, text: 'Ты смотришь на Чику. Она машет тебе. Что-то в ней странно знакомое.' },
            { speaker: 'Чика', text: 'Привет! Узнала?' },
        ],
        nextId: 'chika_reveal',
    },

    chika_reveal: {
        id: 'chika_reveal',
        background: 'office',
        characters: [{ name: 'chika', expression: 'happy', position: 'center_shifted' }],
        dialog: [
            { speaker: 'Чика', text: 'Ну как, не узнала?' },
            { speaker: null, text: 'Чика достаёт откуда-то мятую фотку. Протягивает тебе.' },
            { speaker: null, text: 'На фото — три аниматроника. И три лица. Твоё. Машино. И... Глеба.', memeImage: 'photo_2026-02-24_20-59-44.jpg' },
            { speaker: 'Чика', text: 'Это я, короче. Привет. Phone Guy — тоже я.' },
            { speaker: 'Чика', text: 'Хотел поздравить лично. Ну... в виде курицы. Прости.' },
            { speaker: null, text: 'Ты смотришь на Чику (то есть Глеба). Потом на фотку. Потом снова на Чику.' },
        ],
        choices: [
            { text: '🤦 "Ты серьёзно?"', nextId: 'ending_chaos' },
            { text: '❤️ "Это мило, спасибо"', nextId: 'ending_heartwarming' },
            { text: '🔥 "Хочу в беседу, позви всех"', nextId: 'ending_party' },
        ],
    },

    // ═══════════════════════════════════════════════
    // АКТ 5 — КОНЦОВКИ
    // ═══════════════════════════════════════════════

    ending_chaos: {
        id: 'ending_chaos',
        background: 'stage',
        characters: [
            { name: 'freddy', expression: 'happy', position: 'stage_left' },
            { name: 'bonnie', expression: 'happy', position: 'center' },
            { name: 'chika', expression: 'happy', position: 'stage_right' },
        ],
        dialog: [
            { speaker: 'Чика', text: 'Серьёзно. Очень.' },
            { speaker: 'Фредди', text: 'Я ему сказал, что это плохая идея.' },
            { speaker: 'Бонни', text: 'Я сказал, что это лучшая идея.' },
            { speaker: null, text: 'В зал, шатаясь, заходит Фокси с заряженным айфоном и открытым Бравлом.' },
            { speaker: 'Фокси', text: 'Ладно, разбирайтесь сами. Я в рейтинговом.' },
            { speaker: null, text: 'Где-то во вселенной рушатся законы физики. Но в пиццерии — тепло.' },
            { speaker: 'Все аниматроники', text: '🌸 С 8-м марта, Полина! 🌸' },
            { speaker: null, text: 'Глеб где-то там, в костюме Чики, улыбается.' },
            { speaker: null, text: 'Конец 🐤' },
        ],
        isEnding: true,
    },

    ending_heartwarming: {
        id: 'ending_heartwarming',
        background: 'stage',
        characters: [
            { name: 'freddy', expression: 'happy', position: 'stage_left' },
            { name: 'bonnie', expression: 'happy', position: 'center' },
            { name: 'chika', expression: 'moved', position: 'stage_right' },
        ],
        dialog: [
            { speaker: 'Чика', text: '...Правда?' },
            { speaker: null, text: 'Ты кивок.' },
            { speaker: 'Чика', text: 'Ну вот. С 8 марта, papagev.' },
            { speaker: 'Чика', text: 'Ты крутая. Это объективно.' },
            { speaker: 'Бонни', text: 'Подтверждаю.' },
            { speaker: 'Фредди', text: 'И я.' },
            { speaker: null, text: 'Фокси в коридоре что-то бурчит, но незлобно.' },
            { speaker: 'Фокси (за стеной)', text: 'И я тоже. Но тихо. Потому что рейтинговый.' },
            { speaker: null, text: '🌸 С 8-м марта! 🌸' },
            { speaker: null, text: 'Конец 🐤' },
        ],
        isEnding: true,
    },

    ending_party: {
        id: 'ending_party',
        background: 'party_room',
        characters: [
            { name: 'freddy', expression: 'happy', position: 'party_1' },
            { name: 'bonnie', expression: 'excited', position: 'party_2' },
            { name: 'chika', expression: 'excited', position: 'party_3' },
            { name: 'foxy', expression: 'happy', position: 'party_4' },
        ],
        dialog: [
            { speaker: 'Чика', text: 'О, ей идея понравилась.' },
            { speaker: null, text: 'Они все собираются в комнате вечеринок. Конфетти. Пицца. Торт с надписью "С ПРАЗДНИКОМ".' },
            { speaker: 'Фредди', text: 'Встречайте нового бойца...', memeImage: 'photo_2026-02-19_17-52-30.jpg' },
            { speaker: 'Фредди', text: '...Полину. У неё сегодня выходной от охраны.' },
            { speaker: 'Бонни', text: 'Давай ещё катку в Бравле, пока торт режут?' },
            { speaker: 'Фокси', text: 'У меня 40% осталось. Успею.' },
            { speaker: null, text: 'Это лучший корпоратив в твоей жизни.' },
            { speaker: 'Все', text: '🌸 С 8-м марта, Полина! 🌸' },
            { speaker: null, text: 'Конец 🐤' },
        ],
        isEnding: true,
    },
};
