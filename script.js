document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "Food is symbolic of love when words are inadequate.",
        "One cannot think well, love well, sleep well, if one has not dined well.",
        "Good food is the foundation of genuine happiness.",
        "You don't need a silver fork to eat good food.",
        "Food is our common ground, a universal experience."
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = randomQuote;
});