# Задание 7.1 Портфолио "Состояние компонентов"

## Описание 

Работа с состоянием компонента `Portfolio`(Парфолио), который добавляется в App, и за собой подтягиваем свои дочерние компоненты `ProjectList` и `Toolbar`

## Код программы и структура проекта

Программа находится в папке `src`.

Структура проекта 
```
AdvancedJS_T7_Portfolio/
├── public/ // Сюда положили фото парфолио, но все равно дергали их с облака
├── src/
│   ├── components/
│   │   ├── Portfolio/
│   │   │   ├── ClassPortfolio.jsx // Классовый компонент
│   │   │   └── Portfolio.jsx // Функциональный компонент 
│   │   ├── ProjectList/
│   │   │   └── ProjectList.jsx // Компоненты для вывода списка
│   │   └── Toolbar/ 
│   │       └── Toolbar.jsx // компонент с вспомогательными кнопками 
│   ├── constants/
│   │   └── projects.jsx // консткнты для вывода списков их парфолио
│   ├── App.jsx
│   ├── App.css
│   |── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Запуск программы

Сборка программы: `npm run build`
Запуск программы: `npm run dev`
Привью программы: `npm run preview`
.
