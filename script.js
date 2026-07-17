
const searchInput = document.getElementById("searchInput");

const tools = document.querySelectorAll(".tool-card");

searchInput.addEventListener("keyup", function(){

let value = searchInput.value.toLowerCase();

tools.forEach(function(tool){

let text = tool.innerText.toLowerCase();

if(text.includes(value)){

tool.style.display="block";

}

else{

tool.style.display="none";

}

});

});
const categoryButtons = document.querySelectorAll(".category-buttons button");

const toolCards = document.querySelectorAll(".tool-card");


categoryButtons.forEach(button => {

button.addEventListener("click", () => {

let category = button.innerText.toLowerCase();


toolCards.forEach(card => {

let text = card.innerText.toLowerCase();


if(category === "all" || text.includes(category)){

card.style.display = "block";

}

else{

card.style.display = "none";

}

});


});

});
