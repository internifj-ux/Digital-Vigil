console.log("script loaded");

// Get elements
const form = document.getElementById("candleForm");
const messageInput = document.getElementById("messageInput");
const candleWall = document.getElementById("candleWall");
const candleCount = document.getElementById("candleCount");

// Load saved candles
let candles = JSON.parse(localStorage.getItem("candles")) || [];

// Render candles
function renderCandles() {
  candleWall.innerHTML = "";

  candles.forEach((candle) => {
    const div = document.createElement("div");
    div.className = "candle";

    div.innerHTML = `
      <img src="images/candle.gif" alt="Candle" width="40">
      <p>${candle.message}</p>
    `;

    candleWall.appendChild(div);
  });

  candleCount.textContent = candles.length;
}

// Initial render
renderCandles();

// Submit handler
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const message = messageInput.value.trim();
  if (!message) return;

  candles.push({ message });

  localStorage.setItem("candles", JSON.stringify(candles));

  renderCandles();
  form.reset();
});
