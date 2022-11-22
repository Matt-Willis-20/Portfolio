/* --------  NAVBAR HAMBURGER MENU ----------*/

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

/* --------------- DARK MODE STYLING --------------- */

const toggleSwitch = document.querySelector(
  '.theme-slider input[type="checkbox"]'
);

/* Function to change theme */
function switchTheme(e) {
  /* Once checkbox is checked default theme change to dark */
  if (e.target.checked) {
    document.documentElement.setAttribute("theme", "dark");
    localStorage.setItem("data-theme", "dark");
  } else {

  /* While page in dark mode and checkbox is checked then theme back to change light*/
    document.documentElement.setAttribute("theme", "light");
    localStorage.setItem("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

if (localStorage.getItem("data-theme")) {
  document.documentElement.setAttribute(
    "theme",
    localStorage.getItem("data-theme")
  );
  if (localStorage.getItem("data-theme") == "dark") {
    toggleSwitch.checked = true;
  }
}

/*-------- add/remove dark-mode element on scroll ------------*/

const darkModeBar = document.querySelector(".dark-mode");
let scrollPos = 0;

function hideDarkModeBar() {
  let windowY = window.scrollY; // .scrollY position is how far in pixels we are from top of page
  if (windowY < scrollPos) {
    //scrolling up
    darkModeBar.classList.add("is-visible");
    darkModeBar.classList.remove("is-hidden");
  } else {
    // scrolling down
    darkModeBar.classList.add("is-hidden");
    darkModeBar.classList.remove("is-visible");
  }
  scrollPos = windowY;
}

// to prevent throttling and not fire off multiple events with every single move
// we add a debounce function which will make it wait 10ms before firing

function debounce(func, wait = 15, immediate = true) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.addEventListener("scroll", debounce(hideDarkModeBar));


/* --------  Fade in from bottom on project cards ---------*/

// target the elements we want to fade in (we have multiple elements
// so use querySelectorALL)
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

function elementOutofView(el) {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
}

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.1)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

//initialize throttleTimer as false
let throttleTimer = false;

const throttle = (callback, time) => {
  //don't run the function while throttle timer is true
  if (throttleTimer) return;

  //first set throttle timer to true so the function doesn't run
  throttleTimer = true;

  setTimeout(() => {
    //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed
    callback();
    throttleTimer = false;
  }, time);
};

window.addEventListener("scroll", () => {
  throttle(handleScrollAnimation, 250);
});

/* --------- FILTER PROJECTS BY TECH ---------- */

const divs = document.querySelectorAll(".filterDiv");
const filterButtons = document.querySelectorAll(".filter-button");
const filterNumber = document.querySelector(".filtered-number");

filterNumber.innerHTML = divs.length;

function filterSelection(e) {
  let targetBtn = e.target.textContent.toLowerCase();
  targetBtn === "all"
    ? divs.forEach((div) => {
        div.classList.contains("hide") ? div.classList.remove("hide") : null;
      })
    : divs.forEach((div) => {
        div.classList.contains(targetBtn)
          ? div.classList.remove("hide")
          : div.classList.add("hide");
      });

  let hiddenDivs = document.querySelectorAll(".hide");
  NumberOfHiddenDivs = hiddenDivs.length;
  let visibleDivs = divs.length - NumberOfHiddenDivs;
  filterNumber.innerHTML = visibleDivs;
}

function changeColor(e) {
  filterButtons.forEach((filterButton) => {
    filterButton.classList.remove("active-filter");
  });
  e.target.classList.add("active-filter");
}

filterButtons.forEach((filterButton) =>
  filterButton.addEventListener("click", filterSelection)
);
filterButtons.forEach((filterButton) =>
  filterButton.addEventListener("click", changeColor)
);


// footer date ----------------------------------------

const date = document.getElementById("date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
