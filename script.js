function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./Assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./Assets/Avatar.png")
    //  sem ele manter a imagem normal
  }
}
