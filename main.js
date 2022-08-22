const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.backdrop');
const cart = document.querySelector('.cart');
const cartItems = document.querySelector('.cart-items-box');
const numOfAddedItems = document.querySelector('.itemCount');
const addToCartBtn = document.getElementById('add-to-cart');
const numOfItems = document.getElementById('itemNum');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
// IMAGES
const hero = document.getElementById('hero');
const prevArrow = document.getElementById('prev');
const nextArrow = document.getElementById('next');
const thumbnails = document.querySelectorAll('.thumbnail');

let ovrlyHero;
let operand;
let itemNo = 0;
let idx = 0;

let images = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
];


thumbnails.forEach((thumb, idx) => {
    thumb.addEventListener('click', () => thumbHandler(thumb, idx, thumbnails, 'active'));
});


function thumbHandler(thumb, idx, thumbs, classAttr) {
    removeActives(thumbs, classAttr);

    if(ovrlyHero) {
        ovrlyHero.src = images[idx];
    }

    thumb.parentElement.classList.add(classAttr);
    hero.src = images[idx];
}

function removeActives(thumbs, classAttr) {
    thumbs.forEach(thumb => {
        thumb.parentElement.classList.remove(classAttr);
    });
}

function changeHeroImg(cmd) {
    if(cmd === 'next') {
        idx++;
    } else if (cmd === 'prev') {
        idx--;
    }

    if(idx > images.length - 1) {
        idx = 0;
    }

    if(idx < 0) {
        idx = images.length - 1;
    }

    hero.src = images[idx];

    if(ovrlyHero) {
        ovrlyHero.src = images[idx];
    }
}

function toggleMenu(command) {
    if (command === 'open') {
        sidebar.classList.add('open');
        backdrop.classList.add('open');
    } else if (command === 'close') {
        sidebar.classList.remove('open');
        backdrop.classList.remove('open');
    }
};

function displayCartItems() {
    cartItems.classList.toggle('open');
    
    if(cartItems.classList.contains('open')) {
        cart.classList.add('active');
    } else {
        cart.classList.remove('active');
    }
};

function addItemsToCart() {
    if (itemNo === 0) return;

    numOfAddedItems.innerText = itemNo;
    numOfAddedItems.classList.add('active');
    cart.classList.add('active');

    operand = itemNo;
    itemNo = 0;
    updateItem();
    updateCartItems();
};

function updateItem(operator) {
    operator === 'increment' ? ++itemNo :
    operator === 'decrement' ? --itemNo :
    operator;

    if (itemNo < 0) {
        itemNo = 0;
    }

    if (itemNo > 5) {
        itemNo = 5;
    }

    numOfItems.innerText = itemNo;
};

function updateCartItems() {
    const container = cartItems.querySelector('.item-box');
    const title = document.getElementById('title').innerText;
    let fee = document.getElementById('fee').innerText;
    fee = +fee.split('$')[1]; 
    const num = +operand;
    
    if (num < 1) { 
        container.innerHTML = `<p>Your cart is empty.</p>`;
        return; 
    }
    container.innerHTML = `
      <div class="basket-filled">
        <img src="./images/image-product-1-thumbnail.jpg" alt="thumb" class="bask-thumb">
        <div class="text-box">
          <p>
            ${title} <br />
            $${fee} x ${num} <span>$${fee * num}</span>
          </p>
        </div>
        <img src="./images/icon-delete.svg" alt="icon-delete" class="delete">
      </div>
      <button class="btn">Checkout</button>
    `;

    const del = document.querySelector('.delete');
    del.addEventListener('click', () => {
        container.innerHTML = `<p>Your cart is empty.</p>`;
        numOfAddedItems.innerText = itemNo;
        numOfAddedItems.classList.remove('active');
        operand = itemNo;
    });
};

function overlayControls(container) {
    const hero = document.querySelector('.overlay-img');
    const ovrlyPrv = document.querySelector('.prev-arr');
    const ovrlyNxt = document.querySelector('.next-arr');
    const ovrlyThumbs = document.querySelectorAll('.thumb');
    const closeIcon = document.querySelector('.close');

    ovrlyHero = hero;
    
    ovrlyThumbs.forEach((thumb, idx) => {
        thumb.addEventListener('click', () => thumbHandler(thumb, idx, ovrlyThumbs, 'overlay-act'));
    });

    closeIcon.addEventListener('click', () => {
        container.remove();
    });
    
    ovrlyNxt.addEventListener('click', () => {
        changeHeroImg('next');
        const elem = ovrlyThumbs[idx];
        const mainThumb = thumbnails[idx];
        thumbHandler(elem, idx, ovrlyThumbs, 'overlay-act');
        thumbHandler(mainThumb, idx, thumbnails, 'active');
    });

    ovrlyPrv.addEventListener('click', () => {
        changeHeroImg('prev');
        const elem = ovrlyThumbs[idx];
        const mainThumb = thumbnails[idx];
        thumbHandler(elem, idx, ovrlyThumbs, 'overlay-act');
        thumbHandler(mainThumb, idx, thumbnails, 'active');
    });
}


/* Event Handlers */
addToCartBtn.addEventListener('click', addItemsToCart);

cart.addEventListener('click', displayCartItems);

openMenu.addEventListener('click', () => toggleMenu('open'));

closeMenu.addEventListener('click', () => toggleMenu('close'));

minusBtn.addEventListener('click', () => updateItem('decrement'));

plusBtn.addEventListener('click', () => updateItem('increment'));

nextArrow.addEventListener('click', () => changeHeroImg('next'));

prevArrow.addEventListener('click', () => changeHeroImg('prev'));


hero.addEventListener('click', () => {
    if (window.innerWidth < 945) {
        return;
    }

    const body = document.querySelector('body');
    const fullScreen = document.createElement('div');
    fullScreen.className = 'cover';
    fullScreen.innerHTML = `
      <div class="sub-cover">
        <img src="./images/icon-close.svg" alt="close" class="close">
        <div class="cont-img">
          <div class="overlay-img-box">
            <img src="./images/image-product-1.jpg" class="overlay-img">
          </div>
          <div class="arrs-cont">
            <span class="prev-arr arr">
              <img src="./images/icon-previous.svg" alt="icon-previous">
            </span>
            <span class="next-arr arr">
              <img src="./images/icon-next.svg" alt="icon-next">
            </span>
          </div>
        </div>
        <ul class="overlay-thumbs">
          <li class="overlay-act"><img src="./images/image-product-1-thumbnail.jpg" class="thumb" alt="thumbnail"></li>
          <li><img src="./images/image-product-2-thumbnail.jpg" class="thumb" alt="thumbnail"></li>
          <li><img src="./images/image-product-3-thumbnail.jpg" class="thumb" alt="thumbnail"></li>
          <li><img src="./images/image-product-4-thumbnail.jpg" class="thumb" alt="thumbnail"></li>
        </ul>
      </div>
    `;

    fullScreen.addEventListener('click', (e) => {
        if(e.target === fullScreen) {
            fullScreen.remove();
        }
    });

    body.appendChild(fullScreen);

    overlayControls(fullScreen);
})