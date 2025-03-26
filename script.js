const trolButton = document.getElementById('trolButton');
const loadingMessage = document.getElementById('loadingMessage');
const confettiContainer = document.getElementById('confetti-container');
const trolImage = document.getElementById('trolImage');

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']; // Updated image references
const timerDisplay = document.getElementById('timer');
let timeLeft = 10;

function updateTimer() {
    timerDisplay.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
        handleClick();
        timeLeft = 10;
    }
}

function handleClick() {
    loadingMessage.style.display = 'block';
    trolImage.style.display = 'none';
    confettiContainer.innerHTML = ''; // Clear previous confetti
    timeLeft = 10;
    timerDisplay.textContent = timeLeft;

    showConfetti();

    setTimeout(() => {
        loadingMessage.style.display = 'none';
        showRandomImage();
    }, 100);
}

trolButton.addEventListener('click', handleClick);

setInterval(updateTimer, 1000);

function showConfetti() {
    confettiContainer.innerHTML = ''; // Clear existing confetti
    const confettiCount = 100; // Reduced from 200 to improve performance
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];

    // Use requestAnimationFrame for better performance
    function createConfetti(i) {
        if (i >= confettiCount) return;
        
        requestAnimationFrame(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.top = `${Math.random() * 100}%`;
            confetti.style.transform = `scale(${Math.random()}) rotate(${Math.random() * 360}deg)`;
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            confettiContainer.appendChild(confetti);
            
            createConfetti(i + 1);
        });
    }
    
    createConfetti(0);
}

function showRandomImage() {
    if (images.length === 0) {
        alert('Lütfen resimleri "pictures" klasörüne yükleyin.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * images.length);
    trolImage.src = 'pictures/' + images[randomIndex];
    trolImage.style.display = 'block';
}
