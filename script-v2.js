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
