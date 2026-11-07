# Задание 10.1 Простой роутинг

## Описание 

Реализация простого роутинга для сайта с использованием `react-router-dom`.

## Зависимости 

- `react`
- `react-dom`
- `react-router-dom`

## Код программы и структура проекта

Программа находится в папке `src`.

Структура проекта 
```
AdvancedJS_T10_SimpleRoute/
├── public/ 
├── node_modules/
├── assets/ // скрины
├── src/
│   ├── components/
│   │   └── Navbar/
│   │     ├── Navbar.module.css // стили
│   │     └── Navbar.tsx // навигационное меню
│   ├── pages/
│   │   ├── DriftPage // стили
│   │   │   └── DriftPage.tsx // страница с дрифтом
│   │   ├── ForzaPage/
│   │   │   └── ForzaPage.tsx // страница с форза
│   │   ├── HomePage/
│   │   │   └── HomePage.tsx // главная страница
│   │   ├── TimeAttackPage/
│   │   │   └── TimeAttackPage.tsx // TimeAttackPage страница
│   │   ├── ErrorPage
│   │   │   └── ErrorPage.tsx // страница с ошибкой
│   │   └── index.ts // для экспорта страниц
│   ├── App.jsx // компонент приложения
│   ├── App.css // общий стиль для всего приложения
│   |── index.css // корневые стили для проекта 
│   └── main.jsx // главный компонент приложения
├── index.html
├── .gitignore 
├── package.json
└── vite.config.js
```

## Запуск программы

- Сборка программы: `npm run build`
- Установка зависимостей: `npm install`
- Запуск программы: `npm run dev`
- Привью программы: `npm run preview`

