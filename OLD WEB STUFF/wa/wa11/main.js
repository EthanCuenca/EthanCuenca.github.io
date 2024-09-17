const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const files = ["images/pic1.png","images/pic2.png","images/pic3.png","images/pic4.png","images/pic5.png"]

/* Declaring the alternative text for each image file */
const fileDisc = ['Play Station Logo', 'Xbox Logo', 'Super Mario Logo', 'Doom Logo', 'Mortal Kombat Logo'];

/* Looping through images */
function thumbNail()
{
    for(i = 0; i < 5; i++)
    {
        const newImage = document.createElement('img');
        newImage.setAttribute('src', files[i]);
        newImage.setAttribute('alt', fileDisc[i]);
        thumbBar.appendChild(newImage);
    }
}

thumbNail();

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', (e) => 
{
    if (e.target.className == 'dark') 
    {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
  
   else 
   {
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});

// create an event listener to chnage the main image
/* click thumbnail --> main img */
thumbBar.addEventListener('click', (e) => 
{
    if(e.target && e.target.nodeName == "IMG") 
    {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    }
}); 