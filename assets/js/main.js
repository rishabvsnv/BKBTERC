// =========================================
// AOS ANIMATION
// =========================================

AOS.init({

  duration: 1000,
  once: true,
  offset: 100

});

// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

  if (window.scrollY > 50) {

    navbar.classList.add('shadow');
    navbar.style.padding = '12px 0';

  } else {

    navbar.classList.remove('shadow');
    navbar.style.padding = '18px 0';

  }

});

// =========================================
// ACTIVE NAVIGATION LINK
// =========================================

const currentLocation = location.href;
const menuItem = document.querySelectorAll('.nav-link');

menuItem.forEach(link => {

  if (link.href === currentLocation) {

    link.classList.add('active');

  }

});

// =========================================
// SMOOTH SCROLL
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {

      target.scrollIntoView({

        behavior: 'smooth'

      });

    }

  });

});

// =========================================
// COUNTER ANIMATION
// =========================================

const counters = document.querySelectorAll('.counter-section h2');

const speed = 200;

counters.forEach(counter => {

  const animate = () => {

    const value = +counter.innerText.replace(/\D/g, '');
    const data = +counter.getAttribute('data-count') || value;

    const time = data / speed;

    if (value < data) {

      counter.innerText = Math.ceil(value + time) + '+';

      setTimeout(animate, 20);

    } else {

      counter.innerText = data + '+';

    }

  };

  animate();

});

// =========================================
// BACK TO TOP BUTTON
// =========================================

const backToTop = document.createElement('button');

backToTop.innerHTML = '<i class="bi bi-arrow-up"></i>';

backToTop.className = 'btn btn-primary back-to-top';

document.body.appendChild(backToTop);

backToTop.style.position = 'fixed';
backToTop.style.bottom = '90px';
backToTop.style.right = '20px';
backToTop.style.width = '50px';
backToTop.style.height = '50px';
backToTop.style.borderRadius = '50%';
backToTop.style.display = 'none';
backToTop.style.zIndex = '999';

window.addEventListener('scroll', () => {

  if (window.scrollY > 300) {

    backToTop.style.display = 'block';

  } else {

    backToTop.style.display = 'none';

  }

});

backToTop.addEventListener('click', () => {

  window.scrollTo({

    top: 0,
    behavior: 'smooth'

  });

});

// =========================================
// PRELOADER
// =========================================

window.addEventListener('load', () => {

  const preloader = document.querySelector('.preloader');

  if (preloader) {

    preloader.style.opacity = '0';

    setTimeout(() => {

      preloader.style.display = 'none';

    }, 500);

  }

});

// =========================================
// FORM VALIDATION
// =========================================

const forms = document.querySelectorAll('form');

forms.forEach(form => {

  form.addEventListener('submit', function (e) {

    e.preventDefault();

    const inputs = form.querySelectorAll('input, textarea');

    let valid = true;

    inputs.forEach(input => {

      if (input.hasAttribute('required') && input.value.trim() === '') {

        input.style.borderColor = 'red';

        valid = false;

      } else {

        input.style.borderColor = '#d1d5db';

      }

    });

    if (valid) {

      alert('Form submitted successfully!');

      form.reset();

    }

  });

});

// =========================================
// IMAGE HOVER EFFECT
// =========================================

const galleryImages = document.querySelectorAll('.gallery-card img');

galleryImages.forEach(image => {

  image.addEventListener('mouseenter', () => {

    image.style.transform = 'scale(1.08)';

  });

  image.addEventListener('mouseleave', () => {

    image.style.transform = 'scale(1)';

  });

});

// =========================================
// VIDEO BUTTON CLICK
// =========================================

const videoBtn = document.querySelector('.video-btn');

if (videoBtn) {

  videoBtn.addEventListener('click', function (e) {

    e.preventDefault();

    alert('Add your YouTube or campus video link here.');

  });

}

// =========================================
// CONSOLE MESSAGE
// =========================================

console.log('BKBTERC Website Loaded Successfully');