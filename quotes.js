const founderQuotes = [
  "Keep building. Even when no one’s watching.",
  "Vision means seeing it before others do.",
  "Consistency beats intensity.",
  "Create what you wish existed.",
  "Work quietly. Let your results speak."
];

function showFounderMessage() {
  const randomQuote = founderQuotes[Math.floor(Math.random() * founderQuotes.length)];
  document.getElementById("founder-message").textContent = `"${randomQuote}"`;
}

window.onload = showFounderMessage;
