/* eslint-disable no-trailing-spaces */
const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');
const container = document.querySelector('.productsCards');
const pname = document.querySelector('#pname');
const pimage = document.querySelector('#pimage');
const pdescription = document.querySelector('#pdescription');
const pPrice = document.querySelector('#pPrice');
const options = document.querySelector('#brands-options');
const submit = document.querySelector('.payButton');
const products = [
  {
    id: 1,
    title: 'Air Force',
    price: 119,
    colors: [
      {
        code: 'black',
        img: './img/air.png',
      },
      {
        code: 'darkblue',
        img: './img/air2.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Air Jordan',
    price: 149,
    colors: [
      {
        code: 'lightgray',
        img: './img/jordan.png',
      },
      {
        code: 'green',
        img: './img/jordan2.png',
      },
    ],
  },
  {
    id: 3,
    title: 'Blazer',
    price: 109,
    colors: [
      {
        code: 'lightgray',
        img: './img/blazer.png',
      },
      {
        code: 'green',
        img: './img/blazer2.png',
      },
    ],
  },
  {
    id: 4,
    title: 'Crater',
    price: 129,
    colors: [
      {
        code: 'black',
        img: './img/crater.png',
      },
      {
        code: 'lightgray',
        img: './img/crater2.png',
      },
    ],
  },
  {
    id: 5,
    title: 'Hippie',
    price: 99,
    colors: [
      {
        code: 'gray',
        img: './img/hippie.png',
      },
      {
        code: 'black',
        img: './img/hippie2.png',
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = '$' + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener('click', () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener('click', () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = 'white';
      size.style.color = 'black';
    });
    size.style.backgroundColor = 'black';
    size.style.color = 'white';
  });
});

const productButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener('click', () => {
  payment.style.display = 'flex';
});

close.addEventListener('click', () => {
  payment.style.display = 'none';
});
const brands = {
  1: 'Gucci',
  2: 'Versace',
  3: 'CHANEL',
};
function createOptions(array) {
  array.forEach((element) => {
    const option = document.createElement('option');
    option.value = element.id;
    option.textContent = element.brand_name;
    options.appendChild(option);
  });
}

function createCard(ele) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  container.appendChild(wrapper);
  const pimageContainer = document.createElement('div');
  pimageContainer.classList.add('product-img');
  wrapper.appendChild(pimageContainer);
  const pimg = document.createElement('img');
  pimg.style.width = '327';
  pimg.style.height = '420';
  pimg.src = ele.img;
  pimageContainer.appendChild(pimg);
  const product_info = document.createElement('div');
  product_info.classList.add('product-info');
  wrapper.appendChild(product_info);
  const ptext = document.createElement('div');
  ptext.classList.add('product-text');
  product_info.appendChild(ptext);
  const productName = document.createElement('h1');
  productName.textContent = ele.product_name;
  ptext.appendChild(productName);
  const pDescription = document.createElement('p');
  pDescription.textContent = ele.product_description;
  ptext.appendChild(pDescription);
  const ppriceContainer = document.createElement('div');
  product_info.appendChild(ppriceContainer);
  const dollar = document.createElement('p');
  const priceValue = document.createElement('span');
  // dollar.appendChild(priceValue);
  dollar.textContent = `${ele.price}$`;
  dollar.classList.add('description');
  ppriceContainer.appendChild(dollar);
  const btn = document.createElement('button');
  btn.textContent = 'DELETE';
  btn.classList.add('btn');
  btn.addEventListener('click', () => {
    wrapper.remove();
    fetch('/remove', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ele),
    });
  });
  ppriceContainer.appendChild(dollar);
  ppriceContainer.appendChild(btn);
  // ppriceContainer.style.classList('product-price-btn');
}
function addproduct(e) {
  e.preventDefault();
  if (!(pname.value && pimage.value && pdescription.value && pPrice.value && options.value)) {
    return;
  }
  const pInfo = {
    name: pname.value,
    image: pimage.value,
    description: pdescription.value,
    price: pPrice.value,
    brandid: options.value,
  };
  fetch('/brands', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pInfo),
  })
    .then((response) => response.json())
    .then((data) => {
      const obj = { ...data.data, brand_name: brands[options.value]}
      createCard(obj);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

fetch('/brands')
  .then((data) => data.json())
  .then((result) => { 
    createOptions(result)})
  .catch(() => console.log('error'));
submit.addEventListener('click', addproduct);

fetch('/products').then((data) => data.json()).then((res) => createProducts(res));

function createProducts(arr) {
  arr.forEach((e) => createCard(e));
}