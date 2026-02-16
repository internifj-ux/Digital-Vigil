const form = document.getElementById('candleForm');
const candleWall = document.getElementById('candleWall');
const candleCountDisplay = document.getElementById('candleCount');

// Load saved candles when page opens
let candles = JSON.parse(localStorage.getItem('candles')) || [];

function renderCandles() {
  candleWall.innerHTML = "";
  candles.forEach(candleData => {
    const candle = document.createElement('div');
    candle.classList.add('candle');

    candle.innerHTML = `
      <img src="images/candle.gif" class="candle-img">
      <h3>${candleData.name}</h3>
      <p>${candleData.message}</p>
    `;

    candleWall.appendChild(candle);
  });

  candleCountDisplay.textContent = candles.length;
}

// Initial render
renderCandles();

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('nameInput').value;
  const message = document.getElementById('messageInput').value || "In memory";

  const newCandle = {
    name: name,
    message: message
  };

  candles.push(newCandle);

  // Save to localStorage
  localStorage.setItem('candles', JSON.stringify(candles));

  renderCandles();

  form.reset();
});
