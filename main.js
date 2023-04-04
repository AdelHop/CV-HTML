console.log("Hello word");
const showBtn = document.getElementById("show-btn");
const hideBtn = document.getElementById("hide-btn");
const experiencesSection = document.getElementById("experiences");

const showBtn = document.getElementById("show-btn");
const experiencesSection = document.getElementById("experiences");

showBtn.addEventListener("click", function () {
  experiencesSection.style.display = "block";
});

hideBtn.addEventListener("click", function () {
  experiencesSection.classList.add("hidden");
  showBtn.classList.remove("hidden");
  hideBtn.classList.add("hidden");
});
