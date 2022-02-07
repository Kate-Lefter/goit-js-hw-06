function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const refs = {
    body: document.body,
    spanColorName: document.querySelector('span.color'),
    btnChangeColor: document.querySelector('button.change-color'),
} ;

refs.btnChangeColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.spanColorName.textContent = color;
});