const options = document.querySelector('.brands-options');
const submit = document.querySelector('.btn');
const pname = document.querySelector('.pname');
const pimage = document.querySelector('.pimage');
const pdescription = document.querySelector('.pdescription');
const pPrice = document.querySelector('.pPrice');
const countiner = document.querySelector('.countiner');

function createOptions(array) {
  array.forEach((element) => {
    const option = document.createElement('option');
    option.value = element.id;
    option.textContent = element.brand_name;
    options.appendChild(option);
  });
}
const brands={
  1: 'Nike',
  2: 'Gucci',
  3:  'Versace',
  4:  'CHANEL',
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

function createCard(ele) {
  const product = document.createElement('div');
  const imgproduct = document.createElement('img');
  imgproduct.src = ele.img;
  const name = document.createElement('h3');
  name.textContent = ele.product_name;
  const price = document.createElement('h4');
  const brand = document.createElement('h4');
  price.textContent = ele.price;
  brand.textContent = ele.brand_name;
  const desc = document.createElement('p');
  desc.textContent = ele.product_description;
  countiner.appendChild(product);
  product.appendChild(imgproduct);
  product.appendChild(name);
  product.appendChild(price);
  product.appendChild(brand);
  product.appendChild(desc);
}
