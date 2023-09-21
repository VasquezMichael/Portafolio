function handleImageHover(mainImg, hoverImg) {
  mainImg.addEventListener("mouseover", () => {
    mainImg.style.opacity = "0";
    hoverImg.style.opacity = "1";
  });

  mainImg.addEventListener("mouseout", () => {
    mainImg.style.opacity = "1";
    hoverImg.style.opacity = "0";
  });
}

export const imageController = (elementsMain, elementsHover) => {
  elementsMain.forEach((mainImg, index) => {
    const hoverImg = elementsHover[index];
    handleImageHover(mainImg, hoverImg);
  });
};
