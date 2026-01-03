// Glatko skrolovanje
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Promjena boje navigacije pri skrolovanju
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        nav.style.background = '#ffffff';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});
