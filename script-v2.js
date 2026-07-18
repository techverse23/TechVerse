// 🔍 AI Tools Search

const searchInput = document.getElementById("searchInput");

if (searchInput) {

  searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const cards = document.querySelectorAll(".tool-card");


    cards.forEach(function (card) {

      const text = card.innerText.toLowerCase();


      if (text.includes(value)) {

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

  });

}



// ⬆ Back To Top Button

const topBtn = document.getElementById("topBtn");


if (topBtn) {

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

}



// 🌙 Dark Mode

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
// 🛠 Tools Page Search

const toolSearch = document.getElementById("toolSearch");

if (toolSearch) {

  toolSearch.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    let cards = document.querySelectorAll(".tool-card");


    cards.forEach(function(card){

      let text = card.innerText.toLowerCase();


      if(text.includes(value)){

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });


  });

}

