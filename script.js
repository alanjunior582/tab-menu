const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");

const tabs = ["home", "services", "about us", "contact us", "Login"];

const handleTagChange = (event) => {
    const clickTabId = event.target.id;
    const clickLiTag = document.getElementById(clickTabId);
    const clickLiTagWidth = clickLiTag.offsetWidth;
    const clickLiTagol = clickLiTag.offsetLeft;
    sliderTag.style.width = clickLiTagWidth + "px";
    sliderTag.style.transform = `translateX(${clickLiTagol}px)`;
};
for (let i = 0; i < tabs.length; i++) {
    const liTag = document.createElement("li");
    liTag.append(tabs[i].toUpperCase());
    liTag.id = i;
    liTag.addEventListener("click", handleTagChange);
    ulTag.append(liTag);
    if (i === 0) {
        sliderTag.style.width = liTag.offsetWidth + "px";
    }
};