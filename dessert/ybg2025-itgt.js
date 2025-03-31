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

// cookie JS
document.addEventListener("DOMContentLoaded", function () {
    const cookieDiv = document.getElementById("cookie");
    const fortuneDiv = document.getElementById("fortune");
    const fortuneText = document.getElementById("fortune-text");
    const fortunes = [
        "[a moment i love: seeing big dipper with you]",
        "[a moment i love: facetiming at 3am]",
        "[a moment i love: taking film pictures together]",
        "[a moment i love: watching nineteen to twenty on zoom together]",
        "[a moment i love: saying i love you]",
        "[a moment i love: every single day with you]",
        "[a moment i love: going to our sushi spot]",
        "[a moment i love: late nite watching nba]",
        "[a moment i love: goofy sunglasses at target]",
        "[something i love about you: everything]",
        "[something i love about you: your silly smiles]",
        "[something i love about you: how you always procrastinate]",
        "[something i love about you: the way your nostrils flare]",
        "[something i love about you: the way you say your hair is brown]",
        "[something i love about you: how you always wear cardigans]",
        "[a fortune for you: love is in the little moments]",
        "[a fortune for you: a journey of a thousand miles begins with a single step]",
        "[a fortune for you: the best time to plant a tree was 20 years ago. the second best time is now]",
        "[a fortune for you: there's never enough time to do all the nothing you want]",
        "[a fortune for you: weekends don't count unless you spend them doing something completely pointless]",
        "[i super love you]",
        "[i miss you]",
        "[i adore you]",
        "[secret message: sleep well sweet dreams i love you beep]",
    ];

    let isOpen = false;

    cookieDiv.addEventListener("click", function () {
        const broke = document.getElementById("broke");
        const notbroke = document.getElementById("notbroke");
        const message = document.getElementById("instructions");

        if (!isOpen) {
            broke.style.display = "block";
            notbroke.style.display = "none";
            message.textContent = "(try another one?)";

            fortuneText.textContent = fortunes[Math.floor(Math.random() * fortunes.length)];
            fortuneText.style.color = "#004dc9";
        } else {
            broke.style.display = "none";
            notbroke.style.display = "block";
            message.textContent = "(click me!)";

            fortuneText.textContent = "[the message is empty]";
            fortuneText.style.color = "black";
        }

        isOpen = !isOpen;
    });
});