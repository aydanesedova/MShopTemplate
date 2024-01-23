function getProducts() {
    cartProducts.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.map((item, index) => {
        let box = document.createElement("div")
        box.className = "box"
        box.innerHTML = `
    <img src="${item.image}" alt="">
    <h2>${item.title}</h2>
    <h2>${item.count} piece</h2>
   <button onclick="removeItem(${index})"><i class="fa-solid fa-trash"></i> Remove from cart</button>

    `
        cartProducts.appendChild(box)
    })
}
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cart))
    getProducts()

}
getProducts()