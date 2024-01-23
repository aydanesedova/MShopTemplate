let nameInp = document.getElementById("nameInp")
let titleInp = document.getElementById("titleInp")
let priceInp = document.getElementById("priceInp")
let myForm = document.getElementById("myForm")
let addBtn = document.getElementById("addBtn")


myForm.addEventListener("submit", function (event) {
    event.preventDefault()
    axios.post("https://655c83b725b76d9884fd6e9b.mockapi.io/products", {
        name: nameInp.value,
        title: titleInp.value,
        price: priceInp.value,
    })
        .then((res) => {
            console.log(res.data);
            myForm.reset()
            renderProducts()
        })
})



let addProducts = document.getElementById("addProducts")
const renderProducts = () => {
    addProducts.innerHTML = ``
    axios.get(`https://655c83b725b76d9884fd6e9b.mockapi.io/products`)
        .then((res) => {
            db = res.data
            db.map((item) => {
                let addProduct = document.createElement("tr")
                addProduct.className = "addProduct"
                addProduct.innerHTML = `
                <td><h2>Id:${item.id}</h2></td>
                <td><img src="${item.image}" alt=""></td>  
                <td><h2>Title:${item.title}</h2></td>      
                <button onclick="deleteFromAdd(${item.id})"><i class="fa-solid fa-trash"></i> Delete</button>
            `
                addProducts.appendChild(addProduct)
            })
        })
}

function deleteFromAdd(id) {
    axios.delete(`https://655c83b725b76d9884fd6e9b.mockapi.io/products/${id}`)
        .then((res) => {
            renderProducts()
            console.log(deleteFromAdd);
        })
}

window.onload = () => {
    renderProducts()
}


let sortAzBtn = document.getElementById("sortAzBtn")
let sortDefBtn = document.getElementById("sortDefBtn")
let sortZaBtn = document.getElementById("sortZaBtn")

sortAzBtn.addEventListener("click", sortAZ)
function sortAZ() {
    addProducts.innerHTML = ``
    axios.get("https://655c83b725b76d9884fd6e9b.mockapi.io/products")
        .then((res) => {
            db = res.data
            let sortAz = db.sort((a, b) => a.title.localeCompare(b.title))
            sortAz.map((item) => {
                let addProduct = document.createElement("tr")
                addProduct.className = "addProduct"
                addProduct.innerHTML = `
        <h2>Id:${item.id}</h2>
        <img src="${item.image}" alt="">
        <h2>Title:${item.title}</h2>
        <button onclick="deleteFromAdd(${item.id})"><i class="fa-solid fa-trash"></i> Delete</button>
        `
                addProducts.appendChild(addProduct)
            })
        })
}


sortZaBtn.addEventListener("click", sortZA)
function sortZA() {
    addProducts.innerHTML = ``
    axios.get("https://655c83b725b76d9884fd6e9b.mockapi.io/products")
        .then((res) => {
            db = res.data
            let sortZa = db.sort((a, b) => b.title.localeCompare(a.title))
            sortZa.map((item) => {
                let addProduct = document.createElement("tr")
                addProduct.className = "addProduct"
                addProduct.innerHTML = `
        <h2>Id:${item.id}</h2>
        <img src="${item.image}" alt="">
        <h2>Title:${item.title}</h2>
        <button onclick="deleteFromAdd(${item.id})"><i class="fa-solid fa-trash"></i> Delete</button>
        `
                addProducts.appendChild(addProduct)
            })
        })
}

sortDefBtn.addEventListener("click", renderProducts)


let btn = document.getElementById("btn")
let inp = document.getElementById("inp")

btn.addEventListener("click", findByName)
function findByName() {
    addProducts.innerHTML = ``
    axios.get("https://655c83b725b76d9884fd6e9b.mockapi.io/products")
        .then((res) => {
            db = res.data
            let filteredData = db.filter(item => item.title.toLowerCase().startsWith(inp.value.toLowerCase()))
            let sortData = [...filteredData].sort((a, b) => b.title.localeCompare(a.title))
            sortData.map((item) => {
                let addProduct = document.createElement("tr")
                addProduct.className = "addProduct"
                addProduct.innerHTML = `
<h2>Id:${item.id}</h2>
<img src="${item.image}" alt="">
<h2>Title:${item.title}</h2>
<button onclick="deleteFromAdd(${item.id})"><i class="fa-solid fa-trash"></i> Delete</button>
`
                addProducts.appendChild(addProduct)
                console.log(findByName);
                inp.value = ``
            })
        })
}






