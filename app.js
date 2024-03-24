let photos = setInterval(change, 3000);

function change() {
  let topbackground = document.querySelector("section.background-image");
  if (topbackground.style.backgroundImage == 'url("../images/日本櫻花.jpg")') {
    topbackground.style.backgroundImage = 'url("../images/京都古城.jpg")';
  } else if (
    topbackground.style.backgroundImage == 'url("../images/京都古城.jpg")'
  ) {
    topbackground.style.backgroundImage = 'url("../images/大阪街頭.jpg")';
  } else {
    topbackground.style.backgroundImage = 'url("../images/日本櫻花.jpg")';
  }
}
