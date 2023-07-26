const submenuItems = document.querySelectorAll('.has-submenu > a');
submenuItems.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const submenu = item.nextElementSibling;
    submenu.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const nombreProducto = button.dataset.product;
      const precioProducto = parseFloat(button.dataset.price);

      let productosEnCarrito = localStorage.getItem('productosEnCarrito');
      if (!productosEnCarrito) {
        productosEnCarrito = [];
      } else {
        productosEnCarrito = JSON.parse(productosEnCarrito);
      }

      productosEnCarrito.push({ nombre: nombreProducto, precio: precioProducto });
      localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));

      alert('Producto agregado al carrito.');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.querySelector('.cart-items');
  const totalPriceElement = document.getElementById('total-price');

  // Simulación de productos agregados al carrito
  const cartItems = [
    {
      id: 1,
      name: '16" Nova - RTX 4070',
      price: 1999,
      image: 'images/notebook1.jpg'
    },
    {
      id: 2,
      name: '17" Avon - RTX 4080/4090',
      price: 2864,
      image: 'images/notebook2.jpg'
    },
    // Agrega más productos aquí...
  ];

  function updateCartTotal(cartItems) {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
  }

  function renderCartItem(item) {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');
    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}" height="50">
      <p>${item.name}</p>
      <p>$${item.price.toFixed(2)}</p>
    `;
    return itemElement;
  }

  function updateCart(cartItems) {
    cartItemsContainer.innerHTML = '';
    cartItems.forEach((item) => {
      const itemElement = renderCartItem(item);
      cartItemsContainer.appendChild(itemElement);
    });
    updateCartTotal(cartItems);
  }

  updateCart(cartItems);
});