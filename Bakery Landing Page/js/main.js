const switcherli = document.querySelectorAll('.productsFilteration li');
const allProducts = document.querySelectorAll('.our__products .all')

switcherli.forEach((li) => {
    li.addEventListener("click", (e) => {
        // Remove Active Class From All li And add It To Current Target
        switcherli.forEach((li) => li.classList.remove("active"));
        e.currentTarget.classList.add("active");

        // Remove All Products And Show Products That Match Li Content
        allProducts.forEach((product) => (product.style.display = "none"));
        document.querySelectorAll(e.currentTarget.dataset.prod).forEach((product) => {
            product.style.display = "block";
        });
    });

});


// Show upBtn 
let upBtn = document.querySelector('.upBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 600) {
        upBtn.classList.add('show');
    } else {
        upBtn.classList.remove('show');
    }
});

// Scroll To Top Page
upBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dark Mode
let lightModeBtn = document.querySelector('.sunIcon');
let darkModeBtn = document.querySelector('.moonIcon');

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark__theme');
        document.body.classList.remove('light__theme');
        lightModeBtn.style.display = 'block';
        darkModeBtn.style.display = 'none';
    } else {
        document.body.classList.add('light__theme');
        document.body.classList.remove('dark__theme');
        lightModeBtn.style.display = 'none';
        darkModeBtn.style.display = 'block';
    }
}

darkModeBtn.addEventListener('click', () => {
    localStorage.setItem('theme', 'dark');
    applyTheme('dark');
});

lightModeBtn.addEventListener('click', () => {
    localStorage.setItem('theme', 'light');
    applyTheme('light');
});

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// End DarkMode


// ScrollReveal Library
const scrollreveal = ScrollReveal({
    origin: 'top',
    distance: "15px",
    duration: 1200,
    delay: 200,
    easing: "ease-in-out",
    reset: true
})

scrollreveal.reveal('.banner__items .banner__card', { viewFactor: 0.4});
//scrollreveal.reveal('.all', { viewFactor: 0.5});
scrollreveal.reveal('.delivery__item',{viewFactor: 0.6,interval: 200});
scrollreveal.reveal('.new__products .card', { viewFactor: 0.6,interval:200});
scrollreveal.reveal('.testimonials', { viewFactor: 0.5 })
scrollreveal.reveal('.about__chef', { viewFactor: 0.4 })
scrollreveal.reveal('.teams .card', { viewFactor: 0.5,interval:200})
scrollreveal.reveal('.contact__content', { viewFactor: 0.5,interval:200 })
scrollreveal.reveal('.footer', { viewFactor: 0.4 })