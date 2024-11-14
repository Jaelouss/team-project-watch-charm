// HEADER меню підкреслення активної секції
const sections = document.querySelectorAll('main section');
const menuLinks = document.querySelectorAll('.menu-link');

function updateActiveLink() {
  let index = sections.length;
  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  menuLinks.forEach((link) => link.classList.remove('current'));
  menuLinks[index].classList.add('current');
}


function openMenu() {
  document.getElementById("sideMenu").style.width = "250px";
  updateActiveLink();
}

function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);


// CATALOG button show more
const toggleBtn = document.getElementById("toggle-btn");
const hiddenItems = document.querySelectorAll(".product-item.hidden");

toggleBtn.addEventListener("click", function() {
  const isHidden = hiddenItems[0].style.display === "none" || hiddenItems[0].style.display === "";

  hiddenItems.forEach(item => {
    item.style.display = isHidden ? "block" : "none";
  });

  toggleBtn.textContent = isHidden ? "Show less" : "Show more";
});

hiddenItems.forEach(item => {
  item.style.display = "none";
});


