let titleElmt = document.querySelector('#title')
let descriptionElmt = document.querySelector('#description')
let categoryElmt = document.querySelector('#category')
let brandElmt = document.querySelector('#brand')
let priceElmt = document.querySelector('#price')
let quantityElmt = document.querySelector('#quantity')
let cartLengthElmt = document.getElementById('cartLength')

const renderProductsElmt = document.querySelector('#renderProducts')

// Save Products
function saveToLocal(p) {
    localStorage.setItem('B81', JSON.stringify(p))
}

// Get Products
function getFromLocal() {
    return JSON.parse(localStorage.getItem('B81')) || []
}

// Save Cart
function saveCartToLocal(c) {
    localStorage.setItem('Cart81', JSON.stringify(c))
}

// Get Cart
function getCartFromLocal() {
    return JSON.parse(localStorage.getItem('Cart81')) || []
}

// Render Products
function renderProducts() {
    let products = getFromLocal()

    renderProductsElmt.innerHTML = products.map((prod) => `
        <div class='col-12 col-md-6 col-lg-4 mt-3'>
            <div class="card p-3">
                <h4>${prod.title}</h4>
                <p>${prod.description}</p>
                <h6>Category: ${prod.category}</h6>
                <h6>Brand: ${prod.brand}</h6>
                <h5>Price: ₹${prod.price}</h5>
                <button class="btn btn-primary" onclick="addToCart(${prod.id})">
                    Add To Cart
                </button>
            </div>
        </div>
    `).join('')
}

// Add New Product
function AddNewProduct() {

    let newProduct = {
        id: Date.now(),
        title: titleElmt.value,
        description: descriptionElmt.value,
        category: categoryElmt.value,
        brand: brandElmt.value,
        price: Number(priceElmt.value),
        quantity: Number(quantityElmt.value)
    }

    let products = getFromLocal()
    products.push(newProduct)

    saveToLocal(products)
    renderProducts()

    // Clear form
    titleElmt.value = ''
    descriptionElmt.value = ''
    categoryElmt.value = ''
    brandElmt.value = ''
    priceElmt.value = ''
    quantityElmt.value = ''

    alert("Product Added ✅")
}

// Add to Cart
function addToCart(id) {

    let cart = getCartFromLocal()
    let products = getFromLocal()

    let product = products.find(p => p.id == id)

    if (!product) {
        alert('Product not found ❌')
        return
    }

    // Check if already in cart
    let existing = cart.find(item => item.id == id)

    if (existing) {
        existing.quantity += 1
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1
        })
    }

    saveCartToLocal(cart)

    cartLengthElmt.textContent = cart.length
}

// On Load
window.addEventListener('DOMContentLoaded', () => {

    if (!localStorage.getItem('B81')) {
        saveToLocal([])
    }

    if (!localStorage.getItem('Cart81')) {
        saveCartToLocal([])
    }

    renderProducts()

    let cart = getCartFromLocal()
    cartLengthElmt.textContent = cart.length
})