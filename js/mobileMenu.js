const button = document.getElementById("hamburger");
const openIcon = '<img src="img/icon_hamburger.png">';
const closeIcon = '<img class="mobile_icon-close" src="img/icon_close.png">';
const navigation = document.getElementById("navigation");

button.addEventListener("click", () => {
  if (button.innerHTML === closeIcon) {
    // opened menu
    button.innerHTML = openIcon;
    navigation.style.transform = "translateX(100%)";
    navigation.style.width = "0%";
    navigation.style.opacity = "0";
  } else {
    // closed menu
    button.innerHTML = closeIcon;
    navigation.style.transform = "translateX(0%)";
    navigation.style.width = "100%";
    navigation.style.opacity = "1";
  }
});
