
// Вибір елементів
const sections = document.querySelectorAll('main section');
const menuLinks = document.querySelectorAll('.menu-link');
const sideMenu = document.getElementById("sideMenu");
const header = document.querySelector('header');
let lastScrollPosition = 0;

// Додавання обробників подій
document.querySelector('.burger-menu').addEventListener('click', openMenu);
document.querySelector('.close-menu').addEventListener('click', closeMenu);
const sideMenuLinks = document.querySelectorAll('#sideMenu .menu-link');
sideMenuLinks.forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('resize', resizeMenu);
window.addEventListener('scroll', handleScroll);
window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// Функція оновлення активного пункту меню
function updateActiveLink() {
  let index = 0;

  // Якщо сторінка знаходиться на самому верху
  if (window.scrollY === 0) {
    index = 0; // Перша секція (Home)
  } else {
    // Обчислення активної секції
    sections.forEach((section, i) => {
      if (window.scrollY + 50 >= section.offsetTop) {
        index = i;
      }
    });
  }

  menuLinks.forEach((link) => link.classList.remove('current'));
  menuLinks[index].classList.add('current');
}

// Функція відкриття бокового меню
function openMenu() {
  let menuWidth = window.innerWidth < 768 ? "200px" : "330px";
  sideMenu.style.width = menuWidth;

  // Явно активуємо "Home", якщо сторінка на початку
  if (window.scrollY === 0) {
    menuLinks.forEach((link) => link.classList.remove('current'));
    menuLinks[0].classList.add('current');
  }
}

// Функція закриття бокового меню
function closeMenu() {
  sideMenu.style.width = "0";
}

// Функція ресайзу бокового меню
function resizeMenu() {
  const currentWidth = window.getComputedStyle(sideMenu).width;
  if (currentWidth !== "0px") {
    openMenu();
  }
}

// Функція приховування хедера при скролі
function handleScroll() {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }

  lastScrollPosition = currentScrollPosition;
}

document.getElementById("toggleButton").addEventListener("click", function() {
    // Знаходимо всі елементи з класом .hidden
    const hiddenItems = document.querySelectorAll(".hidden-item");

    // Перемикаємо видимість елементів
    hiddenItems.forEach(item => {
        item.classList.toggle("hidden");
    });

    // Змінюємо текст кнопки в залежності від стану
    if (this.textContent === "Show more") {
        this.textContent = "Hide";
    } else {
        this.textContent = "Show more";
    }
});
