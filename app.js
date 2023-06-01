function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomBackgroundColor() {
  let color = getRandomColor();
  document.body.style.backgroundColor = color;
  document.getElementById("color").textContent =
    "The current color is: " + color;
}


setRandomBackgroundColor();


document
  .getElementById("clickBtn")
  .addEventListener("click", setRandomBackgroundColor);

document
  .getElementById("comeOnBtn")
  .addEventListener("mouseover", setRandomBackgroundColor);
