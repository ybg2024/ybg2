// nav JS
function displayNav() {
    const button = document.querySelector("button");
    const links = document.getElementById("links");
    button.classList.toggle("active");
    links.classList.toggle("active");
}

// miffy JS
function miffyText(){
    const miffytext = document.getElementById("miffy-text");
    miffytext.classList.toggle("active");
}