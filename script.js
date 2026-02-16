let candleCount = 0;

const form = document.getElementById('candleForm');
const candleWall = document.getElementById('candleWall');
const candleCountDisplay = document.getElementById('candleCount');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('nameInput').value;
  const message = document.getElementById('messageInput').value;

 const candle = document.createElement('div');
candle.classList.add('candle');

// Add candle image, name, and message
candle.innerHTML = `
  <img src="images/candle.gif" alt="Candle" class="candle-img">
  <h3>${name}</h3>
  <p>${message || 'In memory'}</p>
`;

// Add share button
const shareButton = document.createElement('button');
shareButton.textContent = "Share 🌐";
shareButton.style.marginTop = "0.5rem";
shareButton.addEventListener('click', () => {
  const text = `I lit a candle for ${name}, a journalist killed in 2025. #MoreThanANumber`;
  const url = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, '_blank');
});

// Append share button to candle div
candle.appendChild(shareButton);

// Add the candle to the wall
candleWall.appendChild(candle);

// Update counter
candleCount++;
candleCountDisplay.textContent = candleCount;

// Clear form
form.reset();


  candleWall.appendChild(candle);

  candleCount++;
  candleCountDisplay.textContent = candleCount;

  form.reset();
});
