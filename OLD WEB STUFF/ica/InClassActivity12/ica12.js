// look for an element with this id value
const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);

const ansBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);

let answer = "";
// adding a variable endpoint for the API link this is an access point to the repository of different questions
const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote()
{
    // console.log("Test");

    // this means try this if it fails it will catch it
    try
    {
        const response = await fetch(endpoint);

        if(!response.ok)
        {
            throw Error(response.statusText);
        }

        const json = await response.json();

        // this tells it to get just the question
        // console.log(json['question']);
        answer = "";
        displayQuote(json['question']);

        answer = json['answer'];
        // console.log(answer);

    }

    // this will run if something goes wrong
    catch(err)
    {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(question)
{
    const questionTxt = document.querySelector('#js-quote-text'); 

    questionTxt.textContent = question;

    const answerTxt = document.querySelector('#js-answer-text');

    answerTxt.textContent = answer;
}

function displayAnswer()
{
    const answerTxt = document.querySelector('#js-answer-text');

    answerTxt.textContent = answer;
}

// this runs the function once when the page loads
getQuote();