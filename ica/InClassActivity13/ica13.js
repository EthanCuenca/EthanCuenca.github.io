// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) 
{
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() 
{
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// creating our class
class Ball 
{

    constructor(x, y, velX, velY, color, size) 
    {
       this.x = x;
       this.y = y;
       this.velX = velX;
       this.velY = velY;
       this.color = color;
       this.size = size;
    }

    // this is our draw function
    draw() 
    {
       ctx.beginPath();
       ctx.fillStyle = this.color;
       ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
       ctx.fill();
    }

    // updates the canvas
    update() 
    {

        // lots of if statements
        if ((this.x + this.size) >= width) 
        {
            this.velX = -(Math.abs(this.velX));
        }
 
        if ((this.x - this.size) <= 0) 
        {
            this.velX = Math.abs(this.velX);
        }
 
        if ((this.y + this.size) >= height) 
        {
          this.velY = -(Math.abs(this.velY));
        }
 
        if ((this.y - this.size) <= 0) 
        {
          this.velY = Math.abs(this.velY);
        }
 
        this.x += this.velX;
        this.y += this.velY;
    }

    // dunction that will chnage the color of the ball if there is a collision on screen
    collisionDetect() 
    {

        for (const ball of balls) 
        {
            if (!(this === ball)) 
            {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
 
                if (distance < this.size + ball.size) 
                {
                    ball.color = this.color = randomRGB();
                }
            }
        }
    }
 
}
 
// our array of balls
const balls = [];

// while balls array is less then a number in our case 60
while (balls.length < 60) 
{
    const size = random(10,20);
    const ball = new Ball(
       // ball position always drawn at least one ball width
       // away from the edge of the canvas, to avoid drawing errors
       random(0 + size,width - size),
       random(0 + size,height - size),
       random(-7,7),
       random(-7,7),
       randomRGB(),
       size
    );
 
   balls.push(ball);
}
 
// our loop function
function loop() 
{
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0,  width, height);
 
    for (const ball of balls) 
    {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
 
    requestAnimationFrame(loop);
}
 
loop();