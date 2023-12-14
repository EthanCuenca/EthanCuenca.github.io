var phoneNumber = "";
var availableDigits = [];

// function that will generate random digits 6 so that we have options
function getRandomDigits() 
{
  availableDigits = [];
  var characters = "0123456789!?*";

  while (availableDigits.length < 6) 
  {
    var randomChar = characters.charAt(Math.floor(Math.random() * characters.length));

    if (!availableDigits.includes(randomChar)) 
    {
      availableDigits.push(randomChar);
    }
  }

  updateInputDisplay();
}

// this creates the digit buttons
function createButton(digit) 
{
  var button = document.createElement('div');
  button.className = 'digitButton';
  button.textContent = digit;
  button.addEventListener('click', function(){handleButtonClick(button);});
  return button;
}

// this will handel the event for when the button is clicked
function handleButtonClick(button) 
{
  if (phoneNumber.length < 10) 
  {
    phoneNumber += button.textContent;
    updateEnteredDigits();
    getRandomDigits(); // Randomize digits after clicking
  }
}

// an update function
function updateEnteredDigits() 
{
  var enteredDigits = document.getElementById('enteredDigits');
  enteredDigits.textContent = "Entered Digits: " + phoneNumber;
}

// updates the display
function updateInputDisplay() 
{
  var inputContainer = document.getElementById('inputContainer');
  inputContainer.innerHTML = '';

  for (var i = 0; i < availableDigits.length; i++) 
  {
    var digitButton = createButton(availableDigits[i]);
    inputContainer.appendChild(digitButton);
  }
}

// reroll digits and for added difficulty it will also remove the last inputed digit
function rerollDigits() 
{
  if (phoneNumber.length > 0) 
  {
    phoneNumber = phoneNumber.slice(0, -1); // Remove the last digit
    updateEnteredDigits();
  }

  getRandomDigits();

  // originally to check but now not needed
  // console.log("Phone Number to Check:", phoneNumber);
}

// simple clear button
function clearDigits() 
{
  phoneNumber = "";
  updateEnteredDigits();
}

// simple submit to check your submission
function submitPhoneNumber() 
{
  // check to see it is a long enough phone number and that it contains no special characters
  if (phoneNumber.length === 10) 
  {
    if (/^[0-9]+$/.test(phoneNumber)) 
    {
      alert('Congratulations! You were able to enter your phone number: ' + phoneNumber);
    } 
    
    else 
    {
      alert('Oops! Phone number cannot contain special characters.');
    }
  }

  // if it is not 10 digits long then this will show
  else 
  {
    alert('Oops! Try again with a valid 10-digit phone number.');
  }
}

// Initial setup
getRandomDigits();