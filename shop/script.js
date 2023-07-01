const produtc = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 }
};

let allProducts, menProducts, womenProducts, jwellerys, electronics;
let colorArr = ["Red", "Blue", "Green", "Black", "White"];
let sizeArr = ["S", "M", "L", "XL"];
const category=['men','women','jwellery','electronics'];
let filter_Color=[];


const getAllProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    allProducts = await response.json();
    addColorSize(allProducts);
    menProducts = allProducts.filter(
      item => item.category === `men's clothing`
    );
    womenProducts = allProducts.filter(
      item => item.category === `women's clothing`
    );
    jwellerys = allProducts.filter(item => item.category === `jewelery`);
    electronics = allProducts.filter(item => item.category === `electronics`);
    console.log(allProducts);
    filter_Color?allProducts=allProducts.filter(item=>item.color===filter_Color):null;
    filterProduct();
    
  } catch (e) {
    console.log(e);
  }
};

const filterColor=(color)=>{
  filter_Color=filter_Color.push(color);
}

function filterProduct(type){
  switch (type) {
    case "men":
      document.getElementById("products").innerHTML =
        constructProductHTML(menProducts,"Men","Men's clothing");
      
      break;
    case "women":
      document.getElementById("products").innerHTML =
        constructProductHTML(womenProducts,"Women","Women's clothing");
      break;
    case "jewellery":
      document.getElementById("products").innerHTML =
        constructProductHTML(jwellerys,"Jewellery","Jewellery");
      break;
    case "electronics":
      document.getElementById("products").innerHTML =
        constructProductHTML(electronics,"Electronics","Electronics");
      break;
    default:
      document.getElementById("products").innerHTML = constructProductHTML(menProducts,"Men","Men's clothing")+
        constructProductHTML(womenProducts,"Women","Women's clothing")+
        constructProductHTML(jwellerys,"Jewellery","Jewellery")+
        constructProductHTML(electronics,"Electronics","Electronics");
  }
  const callToActionBtns = document.querySelectorAll(".filter");

  callToActionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    callToActionBtns.forEach(f => f.classList.remove('active'));
    e.target.classList.toggle("active");
  });
  console.log(callToActionBtns);
});
  
}
const addColorSize = allProducts => {
  for (let i = 0; i < allProducts.length; i++) {
    allProducts[i].color =
      colorArr[Math.floor(Math.random() * colorArr.length)];
    allProducts[i].size = sizeArr[Math.floor(Math.random() * sizeArr.length)];
  }
};
getAllProducts();

const constructProductHTML = (item,category,title) => {
  const itemHTML =
    `<section id=${category}><title>${title}</title><div class="items">` +
    item.map(
      item =>
        `<div class="item">
  <img src=${item.image} alt="Item" style="max-height:400px; min-height:400px;"/>
  <div class="info">
    <div class="row">
      <div class="price">$${item.price}</div>
      <div class="sized">${item.size}</div>
    </div>
    <div class="colors">
      Colors:
      <div class="row">
        <div class="circle" style="background-color: ${item.color}"></div>
      </div>
    </div>
    <div class="row">Rating:${item.rating.rate}</div>
  </div>
  <button id="addBtn">Add to Cart</button>
</div>`
    ) +
    "</div> </section>";
  return itemHTML;
};
