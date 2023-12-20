const featuredproducts = document.getElementById('featuredproducts')

function getProducts() {
    let page = 1
    let limit = 3
    let skip = (page-1) * limit

    axios.get(`https://65680f2a9927836bd97406ef.mockapi.io/food/products?page=${page}&limit=${limit}&skip=${skip}`)
    .then(res => {
        products = res.data
        products.map(item => {
            let product = document.createElement('div')
            product.className = "proBox col-sm-3 col-md-3 col-lg-3 col-xl-3"
            product.innerHTML = `
            <img src="${item.image}" alt="">
            <p>"${item.name}"</p>
            <p>"${item.price}"</p>
            <button onclick = "AddtoBasket(${item.id})">Add to Cart</button>
            `
            featuredproducts.appendChild(product)
        })
        page++
    })
}
getProducts();

function AddtoBasket(id){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(products.find(item => item.id == id))
    localStorage.setItem('cart',JSON.stringify(cart))
}