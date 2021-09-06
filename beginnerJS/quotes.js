const quotes = [
    { quote : "Don't dwell on the past." },
    { quote : "Follow your heart." },
    { quote : "Don't beat yourself up." },
    { quote : "When they go low, we go high" },
    { quote : "He can do, she can do, why not me?" },
    { quote : "if not now, then when?" },
    { quote : "Love what you do." },
    { quote : "Time waits for no one." },
    { quote : "Don't waste your youth." },
    { quote : "Life is all about timing." }
]

const quote = document.querySelector("#quote span");
const todaysQuote = quotes[Math.floor(Math.random()  * quotes.length)];

quote.innerText = todaysQuote.quote;