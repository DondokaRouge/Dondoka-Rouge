// Exemplo de dados de produtos
const products = [
    { id: 1, name: 'Baby doll girafinha', description: 'Uma fofura de estampa.', price: 36.00, image: 'https://docs.google.com/uc?id=1gi4ua-mO81ojbgh_C7RZLYsvdsg5Czhe' },
    {id: 2,name: "Baby doll Moo moo",description: "Moo..ito conforto na hora do sono.",price: 36.00,image: "https://docs.google.com/uc?id=1VlP9xQHvOf8K0pEWdCdWnDV6VFvOn_Fx" },
    {id: 3,name: "Baby doll Lilo love",description: "O casal mais fofo da Disney",price: 36.00,image: "https://docs.google.com/uc?id=1-XcqUjatPD0sKtChuW7xJsa1Tcx4NrVc" },
    {id: 4,name: "Baby doll Mickey",description:"O ícone do mundo Disney",price: 36.00,image: "https://docs.google.com/uc?id=1UpYtiPrVlWJAYY82L9q8XoqPE3-TZDMo"},
    {id: 5,name: "Baby doll vermelho",description: "Simplicidade e conforto",price: 30.60,image: "https://docs.google.com/uc?id=1EG5OlYK-G28FHYpVcwKXGC_JkJPkukBl"},
    {id: 6,name: "Baby doll azul marinho",description: "Simplicidade e conforto",price: 30.60,image: "https://docs.google.com/uc?id=1J8E8v3BVMyoBFT-lbB5N_PnIarIl-Vun"},
    {id: 7,name: "Baby doll cinza",description: "Simplicidade e conforto",price: 30.60,image: "https://docs.google.com/uc?id=1NZQ-C7TcnxGpIFu51C87r2jVPA4Vkn3_"},
    {id: 8,name: "Baby doll preto",description: "Simplicidade e conforto",price: 30.60,image: "https://docs.google.com/uc?id=1z0lh8N-ZBZm0ZiFs_8lqFPzE6Wgxlm5g"},
    {id: 9,name: "Baby doll sonhos e corações",description: "Amor e ternura na hora do sono",price: 30.60,image: "https://docs.google.com/uc?id=1CaRnvRe6MCjqM5eaTClH1vLQ1eWy_aR7"},
    {id: 10,name: "Baby doll Netflix",description: "O look perfeito para o fim de semana de séries",price: 33.30,image: "https://docs.google.com/uc?id=1K8guhsgpe5N4jcigMmUZuxUaSP2w2zqe"},

    // Adicione mais produtos conforme necessário
];

// Função para exibir os produtos na página
function displayProducts() {
    const productGrid = document.getElementById('product-grid');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Preço: R$ ${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        productGrid.appendChild(productElement);
    });
}

// Função para adicionar produto ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);

    // Recupera o carrinho do localStorage ou cria um array vazio
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Adiciona o produto ao carrinho
    cart.push(product);

    // Salva o carrinho no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Produto adicionado ao carrinho!');
}

// Exibe os produtos na página ao carregar
window.onload = displayProducts;
