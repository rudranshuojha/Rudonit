document.addEventListener("DOMContentLoaded", function () {
  const quotes = [
    "Building thoughts into reality.",
    "Code that speaks louder than words.",
    "Innovation starts with curiosity.",
    "Minimal design, maximal purpose."
  ];

  const quoteBox = document.getElementById("founder-quote");
  if (quoteBox) {
    quoteBox.innerText = quotes[Math.floor(Math.random() * quotes.length)];
  }
});
