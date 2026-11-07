# Задание 8.2 Создание компонента чата

## Описание 

Компонет меняет чата меняет отображение в зависимости от типа `type` сообщения которое приходит, например, если `type` - `typing` то отображается `печатает...`,  type: 'response' - сообщение ответа и так далее. Вся логика компонента реализована в `/src/components/MessageHistory/MessageHistory.jsx`

## Код программы и структура проекта

Программа находится в папке `src`.

Структура проекта 
```
AdvancedJS_T8_ChatHistory/
├── public/ 
├── data/ 
│   └── messages.ts // данные чата
├── src/
│   ├── components/
│   │   MessageHistory/
│   │       MessageHistory.jsx // Компонент чата
│   ├── model/
│   │   └── chat.model.js // Модель чата
│   ├── App.jsx // компонент приложения
│   ├── App.css // общий стиль для всего приложения
│   |── index.css // корневые стили для проекта 
│   └── main.jsx // главный компонент приложения
├── index.html
├── package.json
└── vite.config.js
```

## Запуск программы

- Сборка программы: `npm run build`
- Запуск программы: `npm run dev`
- Привью программы: `npm run preview`

