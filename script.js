const search = document.getElementById("search");

search.addEventListener("keyup", function () {

  let value = search.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    let category = card.dataset.category.toLowerCase();

    if (category.includes(value) || value === "") {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});

// Full Screen Preview

function openImage(src) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popup-img").src = src;
}

function closeImage() {
  document.getElementById("popup").style.display = "none";
}

// Category Filter

function filterSelection(category) {

  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    if (category === "all") {
      card.style.display = "block";
    } else {

      if (card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    }

  });

}
