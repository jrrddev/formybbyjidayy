// Set your anniversary/start date here (YYYY-MM-DD format) in Philippine time (GMT+8)
const startDate = new Date('2024-10-01T00:00:00+08:00');

function updateTimeTogether() {
    // Get current time in Philippine timezone (GMT+8)
    const now = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Manila"}));
    const difference = now - startDate;

    // Calculate years and months more accurately
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    
    // Adjust years and months for accurate counting
    if (now.getMonth() < startDate.getMonth() || 
        (now.getMonth() === startDate.getMonth() && now.getDate() < startDate.getDate())) {
        years--;
        months += 12;
    }
    
    // Adjust months if needed
    if (now.getDate() < startDate.getDate()) {
        months--;
    }

    // Calculate remaining time units
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const daysInCurrentMonth = Math.floor((now - new Date(now.getFullYear(), now.getMonth(), startDate.getDate())) / millisecondsInDay);
    const hours = Math.floor((difference % millisecondsInDay) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the display
    document.getElementById('years').textContent = String(years).padStart(2, '0');
    document.getElementById('months').textContent = String(months).padStart(2, '0');
    document.getElementById('days').textContent = String(daysInCurrentMonth).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Add animated hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.innerHTML = '❤️';
    document.querySelector('.floating-hearts').appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Start the counters when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initial update
    updateTimeTogether();
    
    // Update every second
    setInterval(updateTimeTogether, 1000);
    
    // Create hearts periodically
    setInterval(createHeart, 300);
});
