function navigateBack() { 
     window.history.back();
}

// slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
     showSlides(slideIndex += n);
}

function currentSlide(n) {
     showSlides(slideIndex = n);
}

function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     var dots = document.getElementsByClassName("dot");
     if (n > slides.length) { slideIndex = 1 }
     if (n < 1) { slideIndex = slides.length }
     for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";
}

const products = [

     {
          category: 'Manga', name: 'Vagabond',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut',
          price: 100.12, image: 'https://cdn.myanimelist.net/images/manga/1/259070.jpg'
     },
     {
          category: 'Manga', name: 'Berserk',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut',
          price: 75.99, image: 'https://cdn.myanimelist.net/images/manga/1/157897.jpg'
     },
     {
          category: 'Manga', name: 'Naruto',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut',
          price: 56.99, image: 'https://cdn.myanimelist.net/images/manga/3/249658.jpg'
     }, 
     {
          category: 'Manga', name: 'DeathNote',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut',
          price: 75.99, image: 'https://cdn.myanimelist.net/images/manga/1/258245.jpg'
     },


     {
          category: 'LaptopsandPhones', name: 'Apple Macbook Pro',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut',
          price: 1200.02, image: 'https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_mba_13__ci4jh6tvqvyq_large.png'
     },
     {
          category: 'LaptopsandPhones', name: 'MSI Mercedes', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut, Lorem ipsum dolor,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente utLorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente utLorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut , sit amet consectetur adipisicing elit. Esse commodi sapiente ut, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut,    ',
          price: 1111.00, image: 'https://asset.msi.com/resize/image/global/product/product_1684823630c287cf82ac21e4edb4fb3e83ebc928f2.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png'
     },
     
     {
          category: 'LaptopsandPhones', name: 'iPhone 12', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente utLorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente utLorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente utLorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut',
          price: 799.99, image: 'https://freephonestores.com/wp-content/uploads/2021/07/iphone-12-black-select-2020.png'
     },
     {
          category: 'LaptopsandPhones', name: 'iPhone 6s Plus', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente utLorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente utLorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente utLorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut',
          price: 500.12, image: 'https://i5.walmartimages.com/asr/e27ed7f1-3468-4d9a-9d16-fca297b051fe.8d0f8e45b42313923cffb07d0d87319c.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF'
     },



   
     {
          category: 'Clothes', name: 'Hoddie', description: `Black Hoddie
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut
          `,
          price: 112.00, image: 'https://www.pngall.com/wp-content/uploads/13/Black-Hoodie-PNG-Cutout.png'
     },
     {
          category: 'Clothes', name: 'Jacket', description: `Black Jacket
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut`,
          price: 150.25, image: 'https://shop.beyonce.com/cdn/shop/files/RENEIGH_BOMBER_FRONT.png?v=1701275611'
     },
     {
          category: 'Clothes', name: 'Sweater', description: `Dark Blue Sweater 
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut
          `,
          price: 72.99, image: 'https://images.jackjones.com/12236774/4235077/001/jackjones-plainpullover-blue.png?v=5090d33be3e2f2217a09f459b7654969'
     },
     {
          category: 'Clothes', name: 'T-shirt', description: `white t-shirt
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi sapiente ut
          `,
          price: 12.00, image: 'https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png'
     },
     

];



function renderProducts(category) {
     const productSection = document.getElementById('productSection');
     productSection.innerHTML = '';

     const filteredProducts = category === 'All' ? products : products.filter(product => product.category === category);

     filteredProducts.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.classList.add('product');

          const productImage = document.createElement('img');
          productImage.src = product.image;
          productDiv.appendChild(productImage);

          const productInfo = document.createElement('div');
          productInfo.classList.add('product-info');

          const productName = document.createElement('h2');
          productName.textContent = product.name;
          productInfo.appendChild(productName);

          const productDescription = document.createElement('p');
          productDescription.textContent = product.description;
          productInfo.appendChild(productDescription);

          const addToCartButton = document.createElement('button');
          addToCartButton.textContent = 'Add to Cart';
          addToCartButton.addEventListener('click', () => addToCart(product));
          productInfo.appendChild(addToCartButton);

          productDiv.appendChild(productInfo);

          productSection.appendChild(productDiv);
     });
}

function filterCategory(category) {
     renderProducts(category);
}

renderProducts('All');
var currentProduct;

function showProductDetails(product) {
     const detailsProductName = document.getElementById('detailsProductName');
     const detailsProductDescription = document.getElementById('detailsProductDescription');
     const detailsProductPrice = document.getElementById('detailsProductPrice');

     detailsProductName.textContent = product.name;
     detailsProductDescription.textContent = product.description;
     detailsProductPrice.textContent = `Price: $${product.price.toFixed(2)}`;

     const productDetails = document.getElementById('productDetails');
     productDetails.style.display = 'block';

     currentProduct = product;
}

function closeProductDetails() {
     const productDetails = document.getElementById('productDetails');
     productDetails.style.display = 'none';
}  
  
const cart = [];

function addToCart(product) {
     cart.push(product);
     updateCartCount();
     calculateTotalPrice();
}

function updateCartCount() {
     const cartCount = document.getElementById('cartCount');
     cartCount.textContent = cart.length;
}

function clearCart() {
     cart.length = 0;
     updateCartCount();
     calculateTotalPrice();
}

function calculateTotalPrice() {
     const totalPriceElement = document.getElementById('totalPrice');
     const total = cart.reduce((acc, product) => acc + product.price, 0).toFixed(2);
     totalPriceElement.textContent = `$${total}`;
}

function renderCart() {
     const cartContainer = document.getElementById('cartContainer');
     cartContainer.innerHTML = '';

     const cartCount = document.createElement('div');
     cartCount.id = 'cartCount';
     cartCount.textContent = cart.length;
     cartContainer.appendChild(cartCount);

     const totalPrice = document.createElement('div');
     totalPrice.id = 'totalPrice';
     totalPrice.textContent = '$0.00'; // Initial total price
     cartContainer.appendChild(totalPrice);

  

     const clearCartBtn = document.createElement('button');
     clearCartBtn.id = 'clearCartBtn';
     clearCartBtn.textContent = 'Clear';
     clearCartBtn.addEventListener('click', clearCart);
     cartContainer.appendChild(clearCartBtn);
}


renderCart();
   function calculateTotalPrice() {
          const totalPriceElement = document.getElementById('totalPrice');
          const total = cart.reduce((acc, product) => acc + product.price, 0).toFixed(2);
          totalPriceElement.textContent = `$${total}`;
     }

var backToTopBtn = document.getElementById("backToTopBtn");
window.addEventListener("scroll", function () {
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          backToTopBtn.style.display = "block";
     } else {
          backToTopBtn.style.display = "none";
     }
});

backToTopBtn.addEventListener("click", function () {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
});
