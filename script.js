
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
