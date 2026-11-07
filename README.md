# Advanced JS Tasks

Учебные задачи курса Advanced JavaScript: от сборки, тестов и коллекций ES6 до TypeScript и приложений на React с роутингом, CRUD и авторизацией.

Каждая папка — самостоятельный проект со своими зависимостями. Описание задания и детали реализации находятся в README внутри папки, а история изменений задачи доступна через `git log -- <папка>`.

## Задачи

### Тема 3. Инструменты и тестирование

Стек: Webpack, Babel, ESLint, Jest.

| Задача | Папка | Что сделано |
| --- | --- | --- |
| 3.1 | [AdvancedJS_T3_1](AdvancedJS_T3_1) | Настройка сборки и тестов |
| 3.2 | [AdvancedJS_T3_2](AdvancedJS_T3_2) | Статус героя по уровню здоровья |
| 3.3 | [AdvancedJS_T3_3](AdvancedJS_T3_3) | Сортировка героев по здоровью |
| 3.4 | [AdvancedJS_T3_4](AdvancedJS_T3_4) | Тестирование с моками запроса к серверу |

### Тема 4. Коллекции ES6

Стек: JavaScript, Jest.

| Задача | Папка | Что сделано |
| --- | --- | --- |
| 4.1 | [AdvancedJS_T4_1](AdvancedJS_T4_1) | Команда игроков на основе `Set` |
| 4.2 | [AdvancedJS_T4_2](AdvancedJS_T4_2) | Коллекция кодов ошибок с описаниями |
| 4.3 | [AdvancedJS_T4_3](AdvancedJS_T4_3) | Настройки приложения и пользователя на основе `Map` |

### Тема 5. TypeScript

Стек: TypeScript, ts-jest.

| Задача | Папка | Что сделано |
| --- | --- | --- |
| 5.1 | [AdvancedJS_T5_1](AdvancedJS_T5_1) | Классы `Product` и `Film`, наследование |
| 5.2 | [AdvancedJS_T5_2](AdvancedJS_T5_2) | Типизированная корзина товаров |

### Тема 6. Компоненты React

Стек: React, Vite.

| Задача | Папка | Что сделано |
| --- | --- | --- |
| 6.1 | [AdvancedJS_T6_1](AdvancedJS_T6_1) | Функциональный компонент |
| 6.2 | [AdvancedJS_T6_2](AdvancedJS_T6_2) | Классовый компонент |
| 6.3 | [AdvancedJS_T6_3](AdvancedJS_T6_3) | Календарь на функциональном компоненте |

### Тема 7. Состояние компонентов

Стек: React, Vite.

| Задача | Папка | Что сделано |
| --- | --- | --- |
| 7.1 | [AdvancedJS_T7_Portfolio](AdvancedJS_T7_Portfolio) | Портфолио |
| 7.2 | [AdvancedJS_T7_ProductList](AdvancedJS_T7_ProductList) | Каталог товаров |

### Тема 8. React и TypeScript

Стек: React, TypeScript, Vite.

| Задача | Папка | Что сделано |
| --- | --- | --- |
| 8.1 | [AdvancedJS_T8_Recommendations](AdvancedJS_T8_Recommendations) | Витрина магазина с типизацией |
| 8.2 | [AdvancedJS_T8_ChatHistory](AdvancedJS_T8_ChatHistory) | Компонент истории чата |

### Тема 9. Формы и работа с данными

Стек: React, TypeScript, Vite.

| Задача | Папка | Что сделано |
| --- | --- | --- |
| 9.1 | [AdvancedJS_T9_ColorConvertor](AdvancedJS_T9_ColorConvertor) | Конвертер цветов из HEX в RGB |
| 9.2 | [AdvancedJS_T9_TrainingEditor](AdvancedJS_T9_TrainingEditor) | Менеджер тренировок |
| 9.3 | [AdvancedJS_T9_PhotoManager](AdvancedJS_T9_PhotoManager) | Менеджер фотографий |

### Тема 10. Роутинг

Стек: React, React Router, TypeScript, Axios.

| Задача | Папка | Что сделано |
| --- | --- | --- |
| 10.1 | [AdvancedJS_T10_SimpleRoute](AdvancedJS_T10_SimpleRoute) | Простой роутинг |
| 10.2 | [AdvancedJS_T10_RoutingWithCRUD](AdvancedJS_T10_RoutingWithCRUD) | Роутинг и CRUD для постов, свой бэкенд |
| 10.3 | [AdvancedJS_T10_Authentication](AdvancedJS_T10_Authentication) | Приватные маршруты с авторизацией, свой бэкенд |

## Запуск

Зависимости устанавливаются отдельно для каждой задачи:

```bash
cd AdvancedJS_T6_1
npm install
```

| Задачи | Запуск | Тесты |
| --- | --- | --- |
| Тема 3 | `npm start` | `npm test` |
| Тема 4 | только тесты, страницы нет | `npm test` |
| Тема 5 | `npm run dev` | `npm test` |
| Темы 6–10 | `npm run dev` | нет |

В задачах 10.2 и 10.3 бэкенд запускается отдельно: выполните `npm install` и `npm start` в папке `CRUD-backend` или `auth-backend`.
