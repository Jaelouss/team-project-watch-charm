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
