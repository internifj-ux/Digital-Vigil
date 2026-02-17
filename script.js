// Get elements
const form = document.getElementById('candleForm');
const candleWall = document.getElementById('candleWall');
const candleCountDisplay = document.getElementById('candleCount');

// Load candles from localStorage
let candles = JSON.parse(localStorage.getItem('candles')) || [];

// Render candles
function renderCandles() {
  candleWall.innerHTML = "";

  candles.forEach(candleData => {
    const candle = document.createElement('div');
    candle.classList.add('candle');

    candle.innerHTML = `
      <img src="images/candle.gif" class="candle-img" alt="Candle">
      <p>${candleData.message}</p>
    `;

    candleWall.appendChild(candle);
  });

  candleCountDisplay.textContent = candles.length;
}

// Initial load
renderCandles();

// Submit event
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value.trim();

  if (message === "") return; // prevent empty

  const newCandle = { message };

  candles.push(newCandle);

  localStorage.setItem('candles', JSON.stringify(candles));

  renderCandles();

  form.reset();
});
