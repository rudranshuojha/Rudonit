window.onload = function () {
  const quotes = [
    "Building thoughts into reality.",
    "Code that speaks louder than words.",
    "Innovation starts with curiosity.",
    "Minimal design, maximal purpose."
  ];

  const quoteBox = document.getElementById("founder-quote");
  if (quoteBox) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteBox.textContent = quotes[randomIndex];
  } else {
    console.error("Founder quote element not found!");
  }
};
