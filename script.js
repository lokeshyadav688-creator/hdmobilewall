const search = document.getElementById("search");

search.addEventListener("keyup", function(){

let value = search.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card => {

let text = card.innerText.toLowerCase();

if(text.includes(value)){
card.style.display="block";
}else{
card.style.display="none";
}

});

});
function openImage(src){
document.getElementById("popup").style.display="flex";
document.getElementById("popup-img").src=src;
}

function closeImage(){
document.getElementById("popup").style.display="none";
}
