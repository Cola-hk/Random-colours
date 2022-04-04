const btn = document.getElementById("button");
const colour = document.getElementById("hex");

btn.addEventListener("click",() => {
    randomColour = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColour)
    colour.textContent = "#"+randomColour;
    document.body.style.backgroundColor = "#"+randomColour;
});
