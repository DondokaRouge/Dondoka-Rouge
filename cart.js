// Função para exibir o carrinho na página
function displayCart() {
    const cartContainer = document.getElementById('cart-container');

    // Recupera o carrinho do localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="cart-item-details">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Preço: R$ ${product.price.toFixed(2)}</p>
                <label for="quantity-${product.id}">Quantidade:</label>
                <input type="number" id="quantity-${product.id}" value="1" min="1" onchange="updateCartItem(${product.id})">
                <button onclick="removeCartItem(${product.id})">Remover do Carrinho</button>
                <p>Total do Item: R$ <span id="total-${product.id}">${product.price.toFixed(2)}</span></p>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });

    const cartTotalElement = document.createElement('div');
    cartTotalElement.classList.add('cart-total');
    cartTotalElement.innerHTML = `
        <h3>Total Geral: R$ <span id="cart-total">0.00</span></h3>
    `;
    cartContainer.appendChild(cartTotalElement);

    updateCartTotal();
}
// Função para exibir o carrinho na página
function displayCart() {
    const cartContainer = document.getElementById('cart-container');

    // Recupera o carrinho do localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Preço: R$ ${product.price.toFixed(2)}</p>
            <label for="quantity-${product.id}">Quantidade:</label>
            <input type="number" id="quantity-${product.id}" value="1" min="1" onchange="updateCartItem(${product.id})">
            <button onclick="removeCartItem(${product.id})">Remover do Carrinho</button>
            <p>Total do Item: R$ <span id="total-${product.id}">${product.price.toFixed(2)}</span></p>
        `;
        cartContainer.appendChild(cartItem);
    });

    const cartTotalElement = document.createElement('div');
    cartTotalElement.classList.add('cart-total');
    cartTotalElement.innerHTML = `
        <h3>Total Geral: R$ <span id="cart-total">0.00</span></h3>
    `;
    cartContainer.appendChild(cartTotalElement);

    updateCartTotal();
}

// Função para atualizar a quantidade de um item no carrinho
function updateCartItem(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const totalSpan = document.getElementById(`total-${productId}`);

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = cart.find(p => p.id === productId);

    const quantity = parseInt(quantityInput.value);
    const total = quantity * product.price;

    totalSpan.innerText = total.toFixed(2);

    // Atualiza o carrinho no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartTotal();
}

// Função para remover um item do carrinho
function removeCartItem(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Filtra o carrinho, removendo o item com o ID correspondente
    const updatedCart = cart.filter(product => product.id !== productId);

    // Atualiza o carrinho no localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Remove o elemento da página
    const cartItem = document.querySelector(`#cart-container [id="total-${productId}"]`).parentElement.parentElement;
    cartItem.parentNode.removeChild(cartItem);

    updateCartTotal();
}

// Função para atualizar o valor total do carrinho
function updateCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTotal = cart.reduce((total, product) => total + (product.price * parseInt(document.getElementById(`quantity-${product.id}`).value)), 0);

    document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
}

// Exibe o carrinho na página ao carregar
window.onload = displayCart;

function generatePDF() {
    const cartContainer = document.getElementById('cart-container');

    // Criq um elemento HTML2PDF com o conteúdo do carrinho
    const pdfElement = cartContainer.cloneNode(true);

    // Remova os botões de ação (como o botão "Gerar PDF")
    const buttons = pdfElement.querySelectorAll('button');
    buttons.forEach(button => button.parentNode.removeChild(button));

    // Criq uma instância HTML2PDF
    const pdfOptions = {
        margin: 10,
        filename: 'carrinho.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Gera o PDF
    html2pdf(pdfElement, pdfOptions);
}

