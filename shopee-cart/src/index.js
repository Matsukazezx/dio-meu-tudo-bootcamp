import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];

console.log("🛒 Bem-vindo ao seu carrinho Shopee!");

// Criando itens
const item1 = await createItem("Hot Wheels Ferrari", 20.99, 4);
const item2 = await createItem("Hot Wheels Lamborghini", 39.99, 4);

// Adicionando itens
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// Removendo item aos poucos
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

// Exibindo carrinho
await cartService.displayCart(myCart);

// Calculando total
await cartService.calculateTotal(myCart);
