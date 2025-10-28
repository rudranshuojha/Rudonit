const founderQuotes = [

];

function showFounderMessage() {
    const randomQuote = 
founderQuotes[Math.floor(Maths.random()*founderQuotes.length)]

document.getElementById("founder-message").textContent = '"${randomQuote}"';
}

window.onload = showFounderMessage;