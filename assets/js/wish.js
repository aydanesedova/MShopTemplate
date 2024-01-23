function getProducts() {
    wishProducts.innerHTML = ``
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    wish.map((item, index) => {
        let wishBox = document.createElement("div")
        wishBox.className = "wishBox"
        wishBox.innerHTML = `
    <img src="${item.image}" alt="">
    <h2>${item.title}</h2>
   <button onclick="removeItem(${index})"><i class="fa-solid fa-trash"></i> Remove from Wish</button>

    `
    wishProducts.appendChild(wishBox)
    console.log(getProducts);
    })
}
function removeItem(index) {
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    wish.splice(index, 1)
    localStorage.setItem("wish", JSON.stringify(wish))
    getProducts()

}
getProducts()