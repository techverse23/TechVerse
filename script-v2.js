const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".tool-card");

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();

      if (text.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      themeToggle.innerHTML = "🌙 Dark Mode";
    } else {
      themeToggle.innerHTML = "☀️ Light Mode";
    }
  });
}
