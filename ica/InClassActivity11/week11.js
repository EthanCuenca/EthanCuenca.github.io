// console.log("making sure this is linked");

// const x = 1;
// const y = 2;

// if (x===y)
// {
//     console.log("success");
// }

// else
// {
//     console.log("fail");
// }

// const btn = document.querySelector("button");
// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// document.addEventListener("DOMContentLoaded", () => {
//     canvas.width = document.documentElement.clientWidth;
//     canvas.height = document.documentElement.clientHeight;
// });

// console.log(canvas.width);
// console.log(canvas.height);
// function random(number)
// {
//     return Math.floor(Math.random() + number);
// }

// function draw()
// {
//     console.log("test");

//     ctx.clearRect(0,0,canvas.width,canvas.height);

//     for (let i = 0; i<100; i++)
//     {
//         ctx.beginPath();
//         ctx.fillStyle = "rgba(255,0,0,0.5)";

//         ctx.arc(random(canvas.width), random(canvas.height), random(50), 0, 2*Math.PI);

//         ctx.fill();
//     }
    

// }

// btn.addEventListener("click", draw);

// commenting my code since it was placing canvas in a weid spot
// placing code from the looping excercise here to try it out

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

// let us alos use this to get a random color to chnage things within the loop
function random(number) 
{
    return Math.floor(Math.random() * number);
}

// similar to the first random but we do not want to round down for this one so we are not using Math.floor
function randomAlpah(number)
{
    return Math.random() * number;
}

// this function will randomly pick if we make a rectangle or a circle
function picker(number)
{
    if(number == 0)
    {
        console.log("i am arc");
        ctx.arc(random(canvas.width), random(canvas.height), random(50), 0, 2 * Math.PI,);
    }

    if(number == 1)
    {
        console.log("i am rect");
        ctx.rect(random(canvas.width), random(canvas.height), random(50), random(50));
    }
}

function draw() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    for (let i = 0; i < 100; i++) 
    {
      ctx.beginPath();
      //   this is how we will get random colors
      let r = random(255);
      let g = random(255);
      let b = random(255);
    
      //   we need to create a new function for a since we want to make sure it is between 0 and 1 
      let a = randomAlpah(1)
    
      // since we want to change the color this is where we will put our variables rgba in here this was the in class example
      // ctx.fillStyle = "rgba(255,0,0,0.5)";

      // my try
      ctx.fillStyle = "rgba("+r+","+g+","+b+","+a+")";
      // ctx.arc(random(canvas.width), random(canvas.height), random(50), 0, 2 * Math.PI,);
      picker(random(2));
      ctx.fill();
    }
}

btn.addEventListener("click", draw);


