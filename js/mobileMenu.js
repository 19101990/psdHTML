const button = document.getElementById("hamburger");
const openIcon = '<img src="img/icon_hamburger.png">';
const closeIcon = '<img class="mobile_icon-close" src="img/icon_close.png">';
const navigation = document.getElementById("navigation");

// // ul items of submenus
// const submenus = document.getElementsByClassName("submenu");

// // li items of dropdown menus
// const dropdowns = document.getElementsByClassName("dropdown-button");

button.addEventListener("click", function () {
  if (button.innerHTML === closeIcon) {
    // opened menu
    button.innerHTML = openIcon;
    navigation.style.transform = "translateX(100%)";
    navigation.style.opacity = "0";
  } else {
    // closed menu
    button.innerHTML = closeIcon;
    navigation.style.transform = "translateX(0%)";
    navigation.style.opacity = "1";
  }
});

// show submenu
// for (let i = 0; i < dropdowns.length; i++) {
//   dropdowns[i].addEventListener("click", function () {
//     submenus[i].classList.toggle("show-submenu");
//   });
// }
