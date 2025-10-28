const founderQuotes = [
  "Every great thing starts with late nights and wild ideas"
  "Innovation is born from obsession"
  "Code your vision into reality"
  "Minimal design, maximum purpose"
  "The only constant in the tech industry is change"
  "Your job is to build your replacements"
  "Tech is the useful servant but dangerous master"
  "AI is just a tool, not a need"
  "Simplicity is the ultimate sophistication"
  "A fool with a tool is still a fool"
];

function showFounderMessage() {
    const randomQuote = 
founderQuotes[Math.floor(Maths.random()*founderQuotes.length)]

document.getElementById("founder-message").textContent = '"${randomQuote}"';
}


window.onload = showFounderMessage;
