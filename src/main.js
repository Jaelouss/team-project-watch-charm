// HEADER меню підкреслення активної секції
const sections = document.querySelectorAll('main section');
const menuLinks = document.querySelectorAll('.menu-link');

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

// HEADER button закриття і відкриття меню для планшета та мобільного з ресайзом меню
const sideMenu = document.getElementById("sideMenu");

function openMenu() {
  let menuWidth = window.innerWidth < 768 ? "200px" : "330px";
  sideMenu.style.width = menuWidth;
  updateActiveLink();
}

function closeMenu() {
  sideMenu.style.width = "0";
}

window.addEventListener('resize', function() {
  const currentWidth = window.getComputedStyle(sideMenu).width;
  if (currentWidth !== "0px") {
    openMenu();
  }
});

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);
