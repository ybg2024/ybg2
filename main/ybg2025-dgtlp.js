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

// input JS
let goodoutput = document.getElementById("good-output");
let badoutput = document.getElementById("bad-output");

function checkPw(){
    let input = String(document.getElementById("input").value.toLowerCase());
    if (input === "yes") {
        goodoutput.style.display = "block";
        goodoutput.style.visibility = "visible";
        badoutput.style.display = "none";
        badoutput.style.visibility = "hidden";
    } else {
        goodoutput.style.display = "none";
        goodoutput.style.visibility = "hidden";
        badoutput.style.display = "block";
        badoutput.style.visibility = "visible";
    }
}