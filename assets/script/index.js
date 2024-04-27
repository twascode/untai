// dropdown
const bahasa = document.querySelector('#bahasa');
const en = document.querySelector('#en');
const id = document.querySelector('#ind');
const about = document.querySelector('#about');
const testimoni = document.querySelector('#testimoni');
const product = document.querySelector('#products');
const contact = document.querySelector('#contact');
const judul_hero = document.querySelector('#judul-hero');
const sub = document.querySelector('#subtitle');


en.addEventListener('click', () => {
  sub.innerHTML = '<p id="subtitle" class="outfit f-24">control what you want to wear<br>be unlimited</p>'
  judul_hero.innerHTML = '<h1 id="judul-hero" class="judul outfit">MAKE YOUR OWN <br> <span style="font-weight: bold; color: #6B4E4E;" id="fashion">FASHION</span></h1>'
  bahasa.innerHTML = 'english';
  about.innerHTML = 'about';
  testimoni.innerHTML = 'testimoni';
  product.innerHTML = 'products';

  contact.innerHTML = 'contact';
  en.classList.add('hidden');
  id.classList.remove('hidden');
});

id.addEventListener('click', () => {
  sub.innerHTML = 'kendalikan apa yang ingin Anda kenakan<br>menjadi tidak terbatas'
  judul_hero.innerHTML = 'BUATLAH <br> <span style="font-weight: bold; color: #6B4E4E;" id="fashion">FASHION</span> <br>MILIKMU SENDIRI';
  bahasa.innerHTML = 'indonesia';
  about.innerHTML = 'tentang';
  testimoni.innerHTML = 'testimoni';
  product.innerHTML = 'produk';

  contact.innerHTML = 'kontak';
  id.classList.add('hidden');
  en.classList.remove('hidden');
});

