let shoMoreBtn = document.querySelector(".learn_more_link");
let shoMoreElem = document.querySelector(".learn-more-container");

shoMoreBtn.addEventListener("click", () => {
  if (shoMoreElem.style.display == "none") {
    shoMoreElem.style.display = "block";
  } else {
    shoMoreElem.style.display = "none";
  }
});
