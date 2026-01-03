// Glatko skrolovanje (Smooth Scroll) za sve linkove u navigaciji
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Odbijamo visinu navbar-a
                behavior: 'smooth'
            });
        }
    });
});

// Promjena senke na navigaciji kada korisnik krene skrolovati
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        navbar.style.height = '70px'; // Malo se smanji radi boljeg pregleda
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        navbar.style.height = '80px';
    }
    navbar.style.transition = 'all 0.3s ease';
});
