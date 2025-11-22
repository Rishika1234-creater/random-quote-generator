const quotes = [
    "Believe you can and you're halfway there.",
    "You are stronger than you think.",
    "Every day is a second chance.",
    "Do something today that your future self will thank you for.",
    "It always seems impossible until it's done.",
    "Stay positive, work hard, make it happen!"
];

const quoteText = document.getElementById("quote");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerText = quotes[randomIndex];
});
