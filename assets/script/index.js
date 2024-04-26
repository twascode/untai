// dropdown
const bahasa = document.querySelector('#bahasa');
const en = document.querySelector('#en');
const id = document.querySelector('#ind');

en.addEventListener('click', () => {
  bahasa.innerHTML = 'english';
  en.classList.add('hidden');
  id.classList.remove('hidden');
});

id.addEventListener('click', () => {
  bahasa.innerHTML = 'indonesia';
  id.classList.add('hidden');
  en.classList.remove('hidden');
});

