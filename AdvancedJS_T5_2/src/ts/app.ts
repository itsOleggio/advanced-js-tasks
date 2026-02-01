import { ICart, ICartItem, IProduct } from "./../interface/IApp"

class Cart implements ICart {
    id: number;
    content: ICartItem[];
    constructor(id: number, contern: ICartItem[]) {
        this.id = id;
        this.content = contern;
    }

    getTotalPrice(): number {
        return this.content.reduce((acc, item) => (acc + item.product.price * item.quantity), 0)
    }

    getDiscount(totalAmount : number, discount : number): number{
        return Math.ceil(totalAmount * (discount / 100));
    }

    private findProduct(product: IProduct): ICartItem | undefined {
        return this.content.find(item => product.id === item.product.id)
    }

    addProduct(product: IProduct, quantity: number) : void{
        const existItem = this.findProduct(product);

        if(existItem){
            existItem.quantity += quantity;
        }else{
            this.content.push({product, quantity})
        }
    }

    deleteProduct(product: IProduct){
        const existItem = this.findProduct(product);
        
        if(existItem){
            this.content.splice(this.content.indexOf(existItem), 1);
        }
    }

    deleteProductById(id: number): void {
        const index = this.content.findIndex(item => item.product.id === id);

        if (index !== -1) {
            this.content.splice(index, 1);
        }
    }

    showCart(){
        return this.content;
    }

}

class Product implements IProduct {
    id: number;
    name: string;
    price: number;
    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

module.exports = {Product, Cart}

const apple = new Product(1, 'apple', 10);
const banana = new Product(2, 'banana', 5);
const orange = new Product(3, 'orange', 15);
const cart = new Cart(1, []);

cart.addProduct(apple, 2);
cart.addProduct(banana, 3);
cart.addProduct(orange, 1);
cart.showCart();

console.log("Цена без скидкой: " + cart.getTotalPrice());
console.log("Цена со скидки: " + (cart.getTotalPrice() - cart.getDiscount(cart.getTotalPrice(), 5)));

// cart.deleteProduct(banana);
cart.deleteProductById(3);
cart.showCart();

console.log("Цена без скидкой: " + cart.getTotalPrice());
console.log("Цена со скидкой: " + (cart.getTotalPrice() - cart.getDiscount(cart.getTotalPrice(), 5)));

