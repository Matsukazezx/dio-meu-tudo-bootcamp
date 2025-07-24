// Adiciona item ao carrinho (soma se já existe)
async function addItem(cart, newItem) {
  const index = cart.findIndex((item) => item.name === newItem.name);

  if (index !== -1) {
    cart[index].quantity += newItem.quantity;
  } else {
    cart.push(newItem);
  }
}

// Mostra todos os itens do carrinho
async function displayCart(cart) {
  console.log("\n🛍️  Itens no carrinho:");
  if (cart.length === 0) {
    console.log("Carrinho vazio.");
    return;
  }

  cart.forEach((item, i) => {
    console.log(
      `${i + 1}. ${item.name} - R$ ${item.price.toFixed(2)} | ${
        item.quantity
      }x | Subtotal = R$ ${item.subtotal().toFixed(2)}`
    );
  });
}

// Calcula total do carrinho
async function calculateTotal(cart) {
  const total = cart.reduce((sum, item) => sum + item.subtotal(), 0);
  console.log(`\n🧾 Total: R$ ${total.toFixed(2)}`);
}

// Remove um item (diminui quantidade ou remove)
async function removeItem(cart, item) {
  const index = cart.findIndex((i) => i.name === item.name);

  if (index === -1) {
    console.log("⚠️ Item não encontrado.");
    return;
  }

  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }
}

// Remove todos os itens com o nome
async function deleteItem(cart, name) {
  const index = cart.findIndex((item) => item.name === name);
  if (index !== -1) {
    cart.splice(index, 1);
    console.log(`🗑️ Item "${name}" removido do carrinho.`);
  } else {
    console.log("⚠️ Item não encontrado.");
  }
}

export { addItem, displayCart, calculateTotal, removeItem, deleteItem };
