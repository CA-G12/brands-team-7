const options = document.querySelector('.brands-options');
const submit = document.querySelector('.btn');
const pname = document.querySelector('.pname');
const pimage = document.querySelector('.pimage');
const pdescription = document.querySelector('.pdescription');
const pPrice = document.querySelector('.pPrice');

function createOptions(array) {
  array.forEach((element) => {
    const option = document.createElement('option');
    option.value = element.id;
    option.textContent = element.brand_name;
    options.appendChild(option);
  });
}
function addproduct(e) {
  e.preventDefault();
  if(!(pname.value && pimage.value && pdescription.value && pPrice.value && options.value)){
    return;
  }
  let pInfo = {
    name: pname.value,
    image: pimage.value,
    description: pdescription.value,
    price: pPrice.value,
    brandid: options.value,
  };
  console.log(pInfo);
}

fetch('/brands')
  .then((data) => data.json())
  .then((result) => createOptions(result))
  .catch(() => console.log('error'));
submit.addEventListener('click', addproduct);
