// Вибір елементів
const sections = document.querySelectorAll('main section');
const menuLinksDesktop = document.querySelectorAll('.menu-link'); // Для десктопу
const menuLinksMobile = document.querySelectorAll('.menu-link-mob'); // Для мобільного меню
const sideMenu = document.getElementById("sideMenu");
const header = document.querySelector('header');
let lastScrollPosition = 0;

// Додавання обробників подій
document.querySelector('.burger-menu').addEventListener('click', openMenu);
document.querySelector('.close-menu').addEventListener('click', closeMenu);
const sideMenuLinks = document.querySelectorAll('#sideMenu .menu-link-mob');
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

  // Очищення класу current-circle для всіх посилань
  document.querySelectorAll('.menu-link, .menu-link-mob').forEach((link) => link.classList.remove('current-circle'));

  // Додавання класу current-circle до активного пункту
  const activeDesktopLinks = document.querySelectorAll(`.menu-link[href="#${sections[index].id}"]`);
  const activeMobileLinks = document.querySelectorAll(`.menu-link-mob[href="#${sections[index].id}"]`);
  
  activeDesktopLinks.forEach((link) => link.classList.add('current-circle'));
  activeMobileLinks.forEach((link) => link.classList.add('current-circle'));

  // Якщо сторінка на початку, вручну додаємо current-circle на перший пункт меню (Home)
  if (window.scrollY === 0) {
    const firstDesktopLink = document.querySelector('.menu-link');
    const firstMobileLink = document.querySelector('.menu-link-mob');
    
    if (firstDesktopLink) firstDesktopLink.classList.add('current-circle');
    if (firstMobileLink) firstMobileLink.classList.add('current-circle');
  }
}

// Функція відкриття бокового меню
function openMenu() {
  let menuWidth = window.innerWidth < 768 ? "200px" : "330px";
  sideMenu.style.width = menuWidth;

  // Явно активуємо "Home", якщо сторінка на початку
  if (window.scrollY === 0) {
    updateActiveLink();
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

document.getElementById('toggle-btn').addEventListener('click', function() {
  const items = document.querySelectorAll('.catalog-list-item.hidden');
  
  // Перевіряємо ширину екрану
  if (window.innerWidth < 768) {
    let isHidden = false;
    
    // Перевіряємо, чи всі елементи сховані
    items.forEach(item => {
      if (item.style.display === 'none' || item.style.display === '') {
        isHidden = true;
      }
    });

    // Якщо елементи сховані, показуємо їх, інакше - ховаємо
    items.forEach(item => {
      if (isHidden) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    // Змінюємо текст кнопки
    if (isHidden) {
      this.innerText = 'Hide';
    } else {
      this.innerText = 'Show More';
    }
  }
});

// Відслідковуємо зміну розміру екрану
window.addEventListener('resize', function() {
  // Якщо ширина екрану >= 768px, всі сховані елементи повинні бути показані
  if (window.innerWidth >= 768) {
    const items = document.querySelectorAll('.catalog-list-item.hidden');
    items.forEach(item => {
      // Встановлюємо display: block
      item.style.display = 'block';
    });
  }
});
