function scrollToBuy() {
    document.getElementById('buy').scrollIntoView({ behavior: 'smooth' });
}

function handlePurchase() {
    window.location.href = "https://pay.hotmart.com/E103561214Y?sck=HOTMART_PRODUCT_PAGE&off=pc03kjpb&hotfeature=32&bid=1766900386578";
}

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Cuenta regresiva real hasta el 1 de enero 2026 a las 00:00:00
function startCountdown() {
    const endDate = new Date('2026-01-01T00:00:00-05:00'); // Hora Colombia

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            document.getElementById('countdown').textContent = 'OFERTA TERMINADA';
            document.getElementById('timer').textContent = 'TERMINADA';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const display = `${days}d ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        // Actualizar contador principal
        const mainCountdown = document.getElementById('countdown');
        if (mainCountdown) mainCountdown.textContent = display;

        // Actualizar contador flotante
        const timer = document.getElementById('timer');
        if (timer) timer.textContent = display;
    };

    // Crear contador flotante más grande y bonito
    const countdownElement = document.createElement('div');
    countdownElement.className = 'fixed top-20 right-4 bg-red-600 text-white px-6 py-3 rounded-xl shadow-2xl z-50 animate-pulse font-bold text-lg';
    countdownElement.innerHTML = '<i class="fas fa-fire mr-2"></i>¡OFERTA TERMINA EN! <br><span id="timer">Calculando...</span>';
    document.body.appendChild(countdownElement);

    // Actualizar cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

startCountdown();