// Get elements
const form = document.getElementById('candleForm');
const candleWall = document.getElementById('candleWall');
const candleCountDisplay = document.getElementById('candleCount');

// Load candles from localStorage OR empty array
let candles = JSON.parse(localStorage.getItem('candles')) || [];

// Function to render all candles
function renderCandles() {
  candleWall.innerHTML = ""; // clear wall first
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

  // Update counter
  candleCountDisplay.textContent = candles.length;
}

// Initial render when page loads
renderCandles();

// Only one event listener for the form
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('nameInput').value.trim();
  const message = document.getElementById('messageInput').value.trim() || "In memory";

  // Create new candle object
  const newCandle = { name, message };

  // Add to candles array
  candles.push(newCandle);

  // Save updated array to localStorage
  localStorage.setItem('candles', JSON.stringify(candles));

  // Re-render
  renderCandles();

  // Reset form
  form.reset();
});
