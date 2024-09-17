// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array)
{
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = 'It was 28 fahrenheit outside, and :insertx: wanted to warm up. However :insertx: had errands to do at :inserty:, as :insertx: walked, they started :insertz:. Bob saw the whole thing, but was not surprised — :insertx: was always different from the other neighbors that Bob had :insertx: also weighs 260 pounds, so :insertx: managed to keep warm.';

const insertX = ['Traxs the Racer',
'Gobbler the Cook',
'Sid the Sloth'];

const insertY = [' the park',
'the arcade',
'the ocean'];

const insertZ = ['painting',
'burning to a crisp',
'blowing bubbles'];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() 
{
  // setting new story equal to story text
  let newStory = storyText;

  // our new variables that will equal one random variable from our arrays above
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // this gets and replaces the variables in the story generating a new story
  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  // this was given in the raw text file
  // we will now replace the name bob if the user gives us an input
  if (customName.value !== '') 
  {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  // here we are changing some variables if we have the button UK selected which will change the story 
  if (document.getElementById("uk").checked) 
  {
    const weight = `${Math.round(260*0.0714286)} stone`;
    const temperature =  `${Math.round((28-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('28 fahrenheit', temperature);
    newStory = newStory.replaceAll('260 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}