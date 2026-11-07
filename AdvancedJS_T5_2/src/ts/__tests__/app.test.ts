const { Product, Cart } = require('./../app')
import type {IProduct, ICart} from './../../interface/IApp'

let banana: IProduct;
let apple: IProduct;
let orange: IProduct;
let cart: typeof Cart;

beforeEach(() => {
    apple = new Product(1, 'apple', 10);
    orange = new Product(2, 'orange', 15);
    banana = new Product(3, 'banana', 8);
    cart = new Cart(1, []);
})

test('addProduct adds items to cart', () => {
    cart.addProduct(apple, 2);
    cart.addProduct(banana, 3);

    expect(cart['content']).toHaveLength(2);
    expect(cart['content'][0]).toEqual({ product: apple, quantity: 2 })
    expect(cart['content'][1]).toEqual({product: banana, quantity: 3})
})

test('delete product', () =>{
    cart.addProduct(apple, 2);
    cart.addProduct(banana, 3);
    cart.deleteProduct(banana);

    expect(cart['content']).toHaveLength(1);
    expect(cart['content'][0]).toEqual({ product: apple, quantity: 2 })
})

test('delete product by ID', () => {
    cart.addProduct(apple, 2);
    cart.addProduct(banana, 3);
    cart.deleteProductById(3)

    expect(cart['content']).toHaveLength(1);
    expect(cart['content'][0]).toEqual({ product: apple, quantity: 2 })
})

test('get total price', () => {
    cart.addProduct(apple, 2);
    cart.addProduct(banana, 3);

    expect(cart.getTotalPrice()).toBe(44);
})

test('get discount', () => {
    expect(cart.getDiscount(100, 5)).toBe(5);
})

test('show cart', () => {
    cart.addProduct(apple, 2);
    cart.addProduct(banana, 3);

    expect(cart.showCart()).toEqual([{ product: apple, quantity: 2 }, { product: banana, quantity: 3 }]);
})

test('find product', () => {
    cart.addProduct(apple, 2);
    cart.addProduct(banana, 3);

    expect(cart.findProduct(banana)).toEqual({ product: banana, quantity: 3 });
})

test('add to same products', () =>{
    cart.addProduct(apple, 2);
    cart.addProduct(apple, 3);

    expect(cart['content']).toHaveLength(1);
    expect(cart['content'][0]).toEqual({ product: apple, quantity: 5 });
})

test('deleteProduct does nothing if product not found', () => {
    cart.addProduct(apple, 2);

    cart.deleteProduct(banana);

    expect(cart['content']).toHaveLength(1);
});

test('deleteProductById does nothing if product not found', () => {
    cart.addProduct(apple, 2);

    cart.deleteProductById(3);

    expect(cart['content']).toHaveLength(1);
});