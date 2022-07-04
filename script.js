const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


/* --------------- DARK MODE STYLING --------------- */

const toggleSwitch =
    document.querySelector('.theme-slider input[type="checkbox"]');
 
/* Function to change theme */
function switchTheme(e) {
 
    /* Once checkbox is checked default theme change to dark */
    if (e.target.checked) {
        document.documentElement.setAttribute('theme', 'dark');
    }
 
    /* While page in dark mode and checkbox is checked then theme back to change light*/
    else {
        document.documentElement.setAttribute('theme', 'light');
    }
}
 
toggleSwitch.addEventListener('change', switchTheme, false);