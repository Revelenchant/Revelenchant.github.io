"use strict"

/*let first = document.querySelector('.page');


let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
    first.classList.toggle('light-theme');
    first.classList.toggle('dark-theme');
};
*/

const headers = document.querySelectorAll("[data-name='spoiler-title']");
headers.forEach(function(item) {
    item.addEventListener("click", headerClick);
    item.addEventListener("touchstart", headerTouchstart);
});
function headerClick() {
    this.nextElementSibling.classList.toggle("spoiler-body");
}
function headerTouchstart() {
    this.nextElementSibling.classList.toggle("spoiler-body");
}