// HEADER меню підкреслення активної секції
const sections = document.querySelectorAll('main section');
const menuLinks = document.querySelectorAll('.menu-link');

// Функція оновлення активного пункту меню
function updateActiveLink() {
  let index = 0;
  sections.forEach((section, i) => {
    if (window.scrollY + 50 >= section.offsetTop) {
      index = i;
    }
  });

  menuLinks.forEach((link) => link.classList.remove('current'));
  menuLinks[index].classList.add('current');
}

const sideMenu = document.getElementById("sideMenu");
// Функція відкриття та ресайзу бокового меню
function openMenu() {
  let menuWidth = window.innerWidth < 768 ? "200px" : "330px";
  sideMenu.style.width = menuWidth;
  updateActiveLink();
}

// Функція закриття бокового меню
function closeMenu() {
  sideMenu.style.width = "0";
}

const sideMenuLinks = document.querySelectorAll('#sideMenu .menu-link');
sideMenuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

window.addEventListener('resize', function() {
  const currentWidth = window.getComputedStyle(sideMenu).width;
  if (currentWidth !== "0px") {
    openMenu();
  }
});

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);



// Зникання HEADER при скролі
let lastScrollPosition = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }

  lastScrollPosition = currentScrollPosition;
});
