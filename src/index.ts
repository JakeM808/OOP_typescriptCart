import { v4 as uuidv4 } from 'uuid';

class Item {
    #id;
    #name;
    #price;
    #description;

    constructor(name: string, price: number, description: string) {
        this.#id = uuidv4();
        this.#name = name;
        this.#price = price;
        this.#description = description;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        this.#price = newPrice;
    }

    get description() {
        return this.#description;
    }

    set description(newDescription) {
        this.#description = newDescription;
    }
}

class User {
    #id;
    #name;
    #age;
    #cart;

    constructor(name: string, age: number) {
        this.#id = uuidv4();
        this.#name = name;
        this.#age = age;
        this.#cart = [];
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }

    get age() {
        return this.#age;
    }

    set age(newAge) {
        this.#age = newAge;
    }

    get cart() {
        return this.#cart;
    }

    addToCart(item: Item) {
        this.#cart.push(item);
    }

    removeFromCart(item: { id: any }) {
        this.#cart = this.#cart.filter((i: { id: any; }) => i.id !== item.id);
    }

    removeQuantityFromCart(item: { id: any; }, qty: number) {
        let i = 0;
        while (i < qty) {
            const itemIndex = this.#cart.findIndex((i: { id: any; }) => i.id === item.id);
            if (itemIndex !== -1) {
                this.#cart.splice(itemIndex, 1);
            }
            i++;
        }
    }

    cartTotal() {
        return this.#cart.reduce((total: number, item: { price: number; }) => total + item.price, 0);
    }

    printCart() {
        console.log("Cart:");
        this.#cart.forEach(item => {
          console.log(`${item.name}`);
    })
}}

class Shop {
    #items: Item[];

    constructor() {
        this.#items = [];

        // Create three items and add them to the list of items in the shop
        const item1 = new Item("Apple", 1.00, "Delicious fruit.");
        const item2 = new Item("Orange", 1.50, "Juicy and delicious.");
        const item3 = new Item("Banana", 0.75, "Hmmm");

        this.#items.push(item1);
        this.#items.push(item2);
        this.#items.push(item3);
    }

    get items() {
        return this.#items;
    }

    addItem(item: Item) {
        this.#items.push(item);
    }

    removeItem(item: Item) {
        this.#items = this.#items.filter(i => i.id !== item.id);
    }
}


// Create a Shop
const shop = new Shop();

// Create a User
const user = new User("John", 30);

// Add items from the shop to the user's cart
user.addToCart(shop.items[0]); // Add apple to the cart
user.addToCart(shop.items[1]); // Add orange to the cart
user.addToCart(shop.items[2]); // Add banana to the cart

// Print the cart
user.printCart();
user.cartTotal();

// Remove an item from the cart
user.removeFromCart(shop.items[1]); // Remove orange from the cart

// Remove a quantity from an item in the cart
user.removeQuantityFromCart(shop.items[0], 1); // Remove 1 apples from the cart

console.log('---------------------------------------------------------------')

// Print the cart again
user.printCart();