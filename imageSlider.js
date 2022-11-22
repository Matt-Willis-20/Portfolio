// ----------------  IMAGE SLIDER ---------------------------

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", (e) => {
  // when clicked, get the width of the value of one slide
  const slideWidth = slide.clientWidth;
  // increase scrollLeft property by the slidewidth
  slidesContainer.scrollLeft += slideWidth;
  console.log("clicked");
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
  console.log("clicked");
});