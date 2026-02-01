# Задание 5.2 "Новые типы"
![CI](https://github.com/itsOleggio/AdvancedJS_T5_2/actions/workflows/ci.yml/badge.svg)

## Описание 

Программа для работы с корзиной. Все поля типизированы, добавлены соответствующие интерфейсы.
- `ICart` - корзина с ID и списком продуктов в виде объекта
- `IProduct` - продукт с ID, с названием и ценой
- `ICartIte` - продукт с типизацией IProduct и количеством


## Тесты

Используем библиотеку Jest.
Тестом покрыта основная функция программы 
- `getTotalPrice()`
- `getDiscount(totalAmount : number, discount : number)`
- `findProduct(product: IProduct)`
- `addProduct(product: IProduct, quantity: number)`
- `deleteProduct(product: IProduct)`
- `deleteProductById(id: number)`
- `showCart()`

Запуск тестов: `npx test`. 

## Код программы

Программа находится в папке `src`.
Тесты ёт в папке `/src/ts/__tests__/`.

## Запуск программы

Сборка программы: `npm build`
Запуск программы: `npm start`.





