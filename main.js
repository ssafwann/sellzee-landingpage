const hamburgerBtn = document.querySelector(".header__hamburger");
const navBar = document.querySelector(".primary-navigation");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("is-active");
  const nav = document.querySelector(".primary-navigation");
  const body = document.querySelector("body");

  if (nav.style.visibility === "hidden" || !nav.style.visibility) {
    enableNavigation("100vh");
    nav.classList.add("is-enabled");
    body.classList.add("menu-open");
  } else {
    hideNavigation();
    nav.classList.remove("is-enabled");
    body.classList.remove("menu-open");
  }
});

window.addEventListener("resize", () => {
  const nav = document.querySelector(".primary-navigation");
  // ! may need to change innerwidth
  if (window.innerWidth >= "992") {
    enableNavigation("fit-content");
    nav.classList.remove("is-enabled");
    hamburgerBtn.classList.remove("is-active");

    // in case menu was open set body to allow scroll
    const body = document.querySelector("body");
    body.classList.remove("menu-open");
  } else {
    if (nav.classList.length !== 2) {
      hideNavigation();
    }
  }
});

const hideNavigation = () => {
  const nav = document.querySelector(".primary-navigation");
  nav.style.height = "0";
  nav.style.opacity = "0";
  nav.style.visibility = "hidden";
};

const enableNavigation = (height) => {
  const nav = document.querySelector(".primary-navigation");
  nav.style.height = height;
  nav.style.opacity = "1";
  nav.style.visibility = "visible";
};
