const options = document.querySelector('.brands-options');
const submit = document.querySelector('.btn');
const pname = document.querySelector('.pname');
const pimage = document.querySelector('.pimage');
const pdescription = document.querySelector('.pdescription');
const pPrice = document.querySelector('.pPrice');
const countiner = document.querySelector('.countiner');
const showForm=document.querySelector('.showForm');
const form=document.querySelector('.form');

showForm.addEventListener('click',()=>{
  form.style.display='flex';
})


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
    form.style.display='none'

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
  product.setAttribute('class','product')
  const info = document.createElement('div');
  info.setAttribute('class','info')
  product.appendChild(info)
  const imgproduct = document.createElement('img');
  imgproduct.src = ele.img;
  const name = document.createElement('h3');
  name.textContent ='Name : ' + ele.product_name;
  const price = document.createElement('h4');
  const brand = document.createElement('h4');
  price.textContent ='Price : '+ ele.price;
  brand.textContent = 'Brands : '+ ele.brand_name;
  const desc = document.createElement('p');
  desc.textContent = ele.product_description;
  countiner.appendChild(product);
  product.appendChild(imgproduct);
  const removeBtn=document.createElement('button')
  removeBtn.textContent='Remove'
  removeBtn.addEventListener('click',()=>{
    product.remove()
    fetch('/remove' ,{
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ele),
    })
  })
  info.appendChild(name);
  info.appendChild(price);
  info.appendChild(brand);
  info.appendChild(desc);
  info.appendChild(removeBtn)

}
main=document.querySelector('main')
main.addEventListener('click',()=>{
  form.style.display='none'
})
