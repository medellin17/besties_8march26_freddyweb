# Project Rules

## Stack
- **Next.js 15** (App Router) + **TypeScript** + **Tailwind CSS** + **Framer Motion**
- Mobile-first. Target: iPhone SE (375px) → Desktop (1440px)
- Pixel-art спрайты: всегда `image-rendering: pixelated`
- Шрифт: **Press Start 2P** (заголовки/UI), **Inter** (body fallback)

## Architecture
- Роутинг: `/` → хаб, `/polina` → версия Полины, `/masha` → версия Маши
- Всё состояние игры — через React `useState`/`useReducer` внутри `VNPlayer`
- Сценарии хранятся в `src/data/` как типизированные объекты
- Компоненты движка в `src/components/engine/`
- Общие UI элементы в `src/components/ui/`

## Контент
- Язык: **русский**
- Тон: комедия абсурда + лёгкий хоррор (для внезапности)
- Повествование от **второго лица** ("Ты входишь в комнату...")
- Подробности: [docs/CHARACTERS.md](docs/CHARACTERS.md) | [docs/STORY_GUIDE.md](docs/STORY_GUIDE.md)

## Assets
- Фоны: `public/assets/bg/`
- Спрайты: `public/assets/sprites/` (нарезка из `Fnaf-pixel.png`)
- Мемы: `memes/` (исходные), копируются в `public/assets/memes/` для Next.js
- Фото: `photos/` (не публикуются)
- Аудио: `public/assets/audio/`

## Не делать
- Не использовать `next/image` для спрайтов (ломает `pixelated`)
- Не добавлять скролл на игровой экран (`overflow: hidden`)
- Не использовать серверные компоненты для игрового UI (`"use client"`)
- Не хардкодить тексты в компоненты — только из `src/data/`
