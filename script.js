// Sample list of quotes with authors
const quotes = [
    {
        text: "The two most powerful warriors are patience and time.",
        author: "Leo Tolstoy"
    },
    {
        text: "I declare after all there is no enjoyment like reading! How much sooner one tires of anything than of a book!",
        author: "Jane Autsten"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "Get your facts first, then you can distort them as you please.",
        author: "Mark Twain"
    },
    {
        text: "The best way to cheer yourself up is to try to cheer somebody else up.",
        author: "Mark Twain"
    },
    {
        text: "It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.",
        author: "Mark Twain"
    },
    {
        text: "Kindness is the language which the deaf can hear and the blind can see.",
        author: "Mark Twain"
    },
    {
        text: "Courage is resistance to fear, mastery of fear, not absence of fear.",
        author: "Mark Twain"
    },
    {
        text: "The longer and more carefully we look at a funny story, the sadder it becomes.",
        author: "Nikolai Gogol"
    },
    {
        text: "When you have eliminated all which is impossible, then whatever remains, however improbable, must be the truth.",
        author: "Higashino Keigo"
    },
    // Add more quotes with authors as needed
];

function getRandomQuote() {
    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Get the quote and author at the random index
    const randomQuote = quotes[randomIndex];

    // Display the quote and author on the webpage
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerHTML = `<h4>"${randomQuote.text}"</h4><p>- ${randomQuote.author}</p>`;
}

function toggleInfo(itemId) {
    const infoDiv = document.getElementById(`${itemId}-info`);
    infoDiv.style.display = (infoDiv.style.display === 'none' || infoDiv.style.display === '') ? 'block' : 'none';
}

// Call getRandomQuote when the page loads
document.addEventListener("DOMContentLoaded", function () { getRandomQuote(); });
