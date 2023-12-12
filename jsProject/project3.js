var phoneNumber = "";
var availableDigits = [];

function getRandomDigits() 
{
    availableDigits = [];

    while (availableDigits.length < 3) 
    {
      var randomDigit = Math.floor(Math.random() * 10);

      if (!availableDigits.includes(randomDigit)) 
      {
        availableDigits.push(randomDigit);
      }
    }
    updateInputDisplay();
}

function createButton(digit) 
{
  var button = document.createElement('div');
  button.className = 'digitButton';
  button.textContent = digit;

  button.addEventListener('click', function() {
    handleButtonClick(digit, button);
  });

  return button;
}

function handleButtonClick(digit, button) 
{
  phoneNumber += digit;
  updateEnteredDigits();
  button.classList.add('clicked');
  rerollDigits();
}

function updateEnteredDigits() 
{
  var enteredDigits = document.getElementById('enteredDigits');
  enteredDigits.textContent = "Entered Digits: " + phoneNumber;
}

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

function rerollDigits() 
{
  getRandomDigits();
  console.log("Phone Number to Check:", phoneNumber);
}

function clearDigits() 
{
  phoneNumber = "";
  updateEnteredDigits();
  resetClickedState();
}

function resetClickedState() 
{
  var digitButtons = document.querySelectorAll('.digitButton');
  digitButtons.forEach(function(button) {
    button.classList.remove('clicked');
  });
}

function submitPhoneNumber() 
{
  if (phoneNumber.length === 10) 
  {
    alert('Phone number entered successfully: ' + phoneNumber);
    // You can add further validation logic if needed
  } 
  
  else 
  {
    alert('Oops! Try again with a valid 10-digit phone number.');
  }
  
  rerollDigits();
  resetClickedState();
}

// Initial setup
getRandomDigits();