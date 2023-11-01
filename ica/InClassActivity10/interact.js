// look for soemthing called button
const button = document.getElementById("button");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

// on click run change color
button.addEventListener('click', changeColor);
button2.addEventListener('mouseover', changeSize);
button3.addEventListener('mouseleave', changeFont)


// change color will change the color of the background in the html
function changeColor()
{
    console.log("success");

    button.style.color = "red";
}

function changeSize()
{
    console.log("success");

    button2.style.fontSize = "larger";
}

function changeFont()
{
    console.log("sucess");

    button3.style.fontFamily = 'monospace'

}

