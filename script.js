let candleCount = 0;

const form = document.getElementById('candleForm');
const candleWall = document.getElementById('candleWall');
const candleCountDisplay = document.getElementById('candleCount');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('nameInput').value;
  const message = document.getElementById('messageInput').value;

  const candle = document.createElement('div');
  candle.classList.add('candle');

  candle.innerHTML = `
    <img src="images/candle.gif" class="candle-img">
    <h3>${name}</h3>
    <p>${message || 'In memory'}</p>
  `;

  candleWall.appendChild(candle);

  // Increase by 1 ONLY
  candleCount = candleCount + 1;
  candleCountDisplay.textContent = candleCount;

  form.reset();
});
