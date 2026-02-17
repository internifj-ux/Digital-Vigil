// Get elements
const form = document.getElementById('candleForm');
const candleWall = document.getElementById('candleWall');
const candleCountDisplay = document.getElementById('candleCount');

// Load candles from localStorage OR empty array
let candles = JSON.parse(localStorage.getItem('candles')) || [];

// Function to render candles
function renderCandles() {
  candleWall.innerHTML = "";
  candles.forEach(candleData => {
    const candle = document.createElement('div');
    candle.classList.add('candle');

    candle.innerHTML = `
      <img src="images/candle.gif" class="candle-img" alt="Candle">
      <h3>${candleData.name}</h3>
      <p>${candleData.message}</p>
    `;

    candleWall.appendChild(candle);
  });

  // Update counter
  candleCountDisplay.textContent = candles.length;
}

// Initial render
renderCandles();

// Only ONE event listener for the form
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const message = document.getElementById('messageInput').value.trim() || "In memory";

  const newCandle = { name, message };

  candles.push(newCandle);

  // Save to localStorage
  localStorage.setItem('candles', JSON.stringify(candles));

  // Re-render wall and counter
  renderCandles();

  form.reset();
});

