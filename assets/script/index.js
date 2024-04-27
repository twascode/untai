// dropdown
const bahasa = document.querySelector('#bahasa');
const en = document.querySelector('#en');
const id = document.querySelector('#ind');
const about = document.querySelector('#about');
const testimoni = document.querySelector('#testimoni');
const product = document.querySelector('#products');
const contact = document.querySelector('#contact');



en.addEventListener('click', () => {
  bahasa.innerHTML = 'english';
  about.innerHTML = 'about';
  testimoni.innerHTML = 'testimoni';
  product.innerHTML = 'products';

  contact.innerHTML = 'contact';
  en.classList.add('hidden');
  id.classList.remove('hidden');
});

id.addEventListener('click', () => {
  bahasa.innerHTML = 'indonesia';
  about.innerHTML = 'tentang';
  testimoni.innerHTML = 'testimoni';
  product.innerHTML = 'produk';

  contact.innerHTML = 'kontak';
  id.classList.add('hidden');
  en.classList.remove('hidden');
});

