// Dummy date for the catalog
const catalog = [
    { id: 1, name: 'Product 1' , price: 20},
    { id: 2, name: 'Product 2' , price: 30},
    { id: 3, name: 'Product 3' , price: 40},
];

// Function to load the catalog
function loadCatalog() {
    const catalogContainer = document.getElementById('content');
    catalogContainer.innerHTML = '<h2>Catalog</h2>';

    catalog.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML ='
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to cart</button>
        ';
        catalogContainer?.appendChild("productCard");
    });
}
// Function to add a product to the cart
function addToCart(productId) {
    // implement cart functionality here
    console.log('Product ${productId} added to cart');
}

// initial load
loadCatalog();