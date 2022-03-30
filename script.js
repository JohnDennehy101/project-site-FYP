let navBarIcon = document.getElementById("nav-icon");
let toggleMenu = false;
let navigationBar = document.querySelector(".nav-links");

navBarIcon.addEventListener("click", () => {
  if (!toggleMenu) {
    navigationBar.classList.remove("nav-links");
    navigationBar.classList.add("nav-links-mobile");
    let navigationBarDisplayed = document.querySelector(".nav-links-mobile");
    toggleMenu = true;
    navigationBarDisplayed.addEventListener("click", () => {
      toggleMenu = false;
      navigationBar.classList.remove("nav-links-mobile");
      navigationBar.classList.add("nav-links");
    });
  } else {
    navigationBar.classList.remove("nav-links-mobile");
    navigationBar.classList.add("nav-links");
    toggleMenu = false;
  }
});
