document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    window.addEventListener('scroll', function() {
        document.querySelector('header').classList.toggle('sticky', window.scrollY > 100);
        
        document.querySelectorAll('.parallax').forEach(el => {
            const speed = el.getAttribute('data-speed');
            el.style.backgroundPosition = `center ${window.pageYOffset * speed}px`;
        });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            const isVisible = el.offsetTop < (window.scrollY + window.innerHeight);
            el.classList.toggle('visible', isVisible);
        });
    });

    const floatingButton = document.querySelector('.floating-button');
    if (floatingButton) {
        floatingButton.addEventListener('click', () => alert('Floating button clicked!'));
    }

    const sideMenuButton = document.querySelector('.side-menu-toggle');
    const sideMenu = document.querySelector('.side-menu');
    const closeSideMenuButton = document.querySelector('.close-btn');
    
    if (sideMenuButton) {
        sideMenuButton.addEventListener('click', () => sideMenu.style.right = '0');
        closeSideMenuButton.addEventListener('click', () => sideMenu.style.right = '-250px');
    }

    const scrollToTopButton = document.querySelector('.scroll-to-top');
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    const modalButton = document.querySelector('#openModal');
    const modal = document.querySelector('#myModal');
    const closeModalButton = document.querySelector('.close');
    
    if (modalButton && modal) {
        modalButton.addEventListener('click', () => modal.style.display = 'block');
        closeModalButton.addEventListener('click', () => modal.style.display = 'none');
        window.addEventListener('click', (event) => {
            if (event.target === modal) modal.style.display = 'none';
        });
    }

    const countdownElement = document.querySelector('#countdown');
    if (countdownElement) {
        let countdown = 60;
        const interval = setInterval(function() {
            countdownElement.textContent = `Time left: ${countdown} seconds`;
            if (--countdown < 0) {
                clearInterval(interval);
                countdownElement.textContent = "Time's up!";
            }
        }, 1000);
    }

    document.querySelectorAll('h1, h2, p, a').forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transition = 'color 0.1s ease, transform 0.3s ease';
            element.style.color = '#FF5722';
            element.style.transform = 'scale(1.1)';
        });
        element.addEventListener('mouseleave', () => {
            element.style.color = '';
            element.style.transform = 'scale(1)';
        });
    });

    const body = document.querySelector('body');
    body.addEventListener('mouseenter', () => {
        body.style.transition = 'background 1s ease-in-out';
        body.style.background = 'linear-gradient(135deg, #03A9F4, #8BC34A)';
    });

    body.addEventListener('mouseleave', () => {
        body.style.background = 'linear-gradient(135deg, #FF8A00, #FFD200)';
    });
});
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", e => {
        document.querySelectorAll("nav ul li a").forEach(item => item.classList.remove("active"));
        e.target.classList.add("active");
    });
});

window.addEventListener("load", () => {
    document.querySelectorAll(".office-image").forEach(img => {
        img.style.opacity = 0;
        img.style.transition = "opacity 2s ease, transform 1s ease";
        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transform = "scale(1.05)";
        }, 300);
    });
});

document.querySelector(".office-image").addEventListener("mousemove", e => {
    const img = e.target;
    const rect = img.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    img.style.transform = `rotateX(${y * 20}deg) rotateY(${x * 20}deg) scale(1.1)`;
});

document.querySelector(".office-image").addEventListener("mouseleave", e => {
    e.target.style.transform = "scale(1)";
});
