"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Item_id, _Item_name, _Item_price, _Item_description, _User_id, _User_name, _User_age, _User_cart, _Shop_items;
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(name, price, description) {
        _Item_id.set(this, void 0);
        _Item_name.set(this, void 0);
        _Item_price.set(this, void 0);
        _Item_description.set(this, void 0);
        __classPrivateFieldSet(this, _Item_id, (0, uuid_1.v4)(), "f");
        __classPrivateFieldSet(this, _Item_name, name, "f");
        __classPrivateFieldSet(this, _Item_price, price, "f");
        __classPrivateFieldSet(this, _Item_description, description, "f");
    }
    get id() {
        return __classPrivateFieldGet(this, _Item_id, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _Item_name, "f");
    }
    set name(newName) {
        __classPrivateFieldSet(this, _Item_name, newName, "f");
    }
    get price() {
        return __classPrivateFieldGet(this, _Item_price, "f");
    }
    set price(newPrice) {
        __classPrivateFieldSet(this, _Item_price, newPrice, "f");
    }
    get description() {
        return __classPrivateFieldGet(this, _Item_description, "f");
    }
    set description(newDescription) {
        __classPrivateFieldSet(this, _Item_description, newDescription, "f");
    }
}
_Item_id = new WeakMap(), _Item_name = new WeakMap(), _Item_price = new WeakMap(), _Item_description = new WeakMap();
class User {
    constructor(name, age) {
        _User_id.set(this, void 0);
        _User_name.set(this, void 0);
        _User_age.set(this, void 0);
        _User_cart.set(this, void 0);
        __classPrivateFieldSet(this, _User_id, (0, uuid_1.v4)(), "f");
        __classPrivateFieldSet(this, _User_name, name, "f");
        __classPrivateFieldSet(this, _User_age, age, "f");
        __classPrivateFieldSet(this, _User_cart, [], "f");
    }
    get id() {
        return __classPrivateFieldGet(this, _User_id, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _User_name, "f");
    }
    set name(newName) {
        __classPrivateFieldSet(this, _User_name, newName, "f");
    }
    get age() {
        return __classPrivateFieldGet(this, _User_age, "f");
    }
    set age(newAge) {
        __classPrivateFieldSet(this, _User_age, newAge, "f");
    }
    get cart() {
        return __classPrivateFieldGet(this, _User_cart, "f");
    }
    addToCart(item) {
        __classPrivateFieldGet(this, _User_cart, "f").push(item);
    }
    removeFromCart(item) {
        __classPrivateFieldSet(this, _User_cart, __classPrivateFieldGet(this, _User_cart, "f").filter((i) => i.id !== item.id), "f");
    }
    removeQuantityFromCart(item, qty) {
        let i = 0;
        while (i < qty) {
            const itemIndex = __classPrivateFieldGet(this, _User_cart, "f").findIndex((i) => i.id === item.id);
            if (itemIndex !== -1) {
                __classPrivateFieldGet(this, _User_cart, "f").splice(itemIndex, 1);
            }
            i++;
        }
    }
    cartTotal() {
        return __classPrivateFieldGet(this, _User_cart, "f").reduce((total, item) => total + item.price, 0);
    }
    printCart() {
        console.log("Cart:");
        __classPrivateFieldGet(this, _User_cart, "f").forEach(item => {
            console.log(`${item.name}`);
        });
    }
}
_User_id = new WeakMap(), _User_name = new WeakMap(), _User_age = new WeakMap(), _User_cart = new WeakMap();
class Shop {
    constructor() {
        _Shop_items.set(this, void 0);
        __classPrivateFieldSet(this, _Shop_items, [], "f");
        // Create three items and add them to the list of items in the shop
        const item1 = new Item("Apple", 1.00, "Delicious fruit.");
        const item2 = new Item("Orange", 1.50, "Juicy and delicious.");
        const item3 = new Item("Banana", 0.75, "Hmmm");
        __classPrivateFieldGet(this, _Shop_items, "f").push(item1);
        __classPrivateFieldGet(this, _Shop_items, "f").push(item2);
        __classPrivateFieldGet(this, _Shop_items, "f").push(item3);
    }
    get items() {
        return __classPrivateFieldGet(this, _Shop_items, "f");
    }
    addItem(item) {
        __classPrivateFieldGet(this, _Shop_items, "f").push(item);
    }
    removeItem(item) {
        __classPrivateFieldSet(this, _Shop_items, __classPrivateFieldGet(this, _Shop_items, "f").filter(i => i.id !== item.id), "f");
    }
}
_Shop_items = new WeakMap();
// Create a Shop
const shop = new Shop();
// Create a User
const user = new User("Alice", 30);
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
console.log('---------------------------------------------------------------');
// Print the cart again
user.printCart();
