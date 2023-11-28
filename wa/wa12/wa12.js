// look for an element with this id value
const quoteBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const authBtn = document.querySelector('#js-author-button').addEventListener('click', displayAuthor)

// const quote = document.querySelector('#js-quote-text');
let author = "";

// adding a variable endpoint for the API link this is an access point to the repository of different questions

async function getQuote()
{
    try
    {
        const response = await fetch('https://api.quotable.io/random');

        if(!response.ok)
        {
            throw Error(response.statusText);
        }

        const json = await response.json();

        // console.log(json);
        author = "";
        displayQuote(json.content);
        author = json.author
        // author.textContent = json.author;

        
    }

    catch(err)
    {
        console.log(err);
        alert('Failed to get new quote')
    }
}

function displayQuote(content)
{
    const quote = document.querySelector('#js-quote-text'); 

    quote.textContent = content;

    const authorTxt = document.querySelector('#js-quote-author');

    authorTxt.textContent = author;
}

function displayAuthor()
{
    const authorTxt = document.querySelector('#js-quote-author');
    authorTxt.textContent = author;

}

getQuote();