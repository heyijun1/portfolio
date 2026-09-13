// Navigation is visible by default, so the site also works without JavaScript.
document.documentElement.classList.add('js');
document.querySelector('#year').textContent = new Date().getFullYear();

const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');

function closeMenu() {
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}

menu.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    menu.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});

window.matchMedia('(min-width: 700px)').addEventListener('change', closeMenu);
