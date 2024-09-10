document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const header = document.getElementById('mainHeader');
    const defaultLogo = document.getElementById('defaultLogo');
    const secondLogo = document.getElementById('secondLogo');
    const navLinks = document.querySelectorAll('#navLinks .nav-link');
    const getStartedBtn = document.getElementById('getStartedBtn');
    const topBtnColor = document.getElementById('topBtnColor');
    const submitBtn = document.querySelector('button[type="submit"]');

    // Input fields in the contact form
    const formFields = [
        document.getElementById('full-name'),
        document.getElementById('company'),
        document.getElementById('email'),
        document.getElementById('phone'),
        document.getElementById('message')
    ];

    // Add event listeners to input fields for form validation
    formFields.forEach(field => {
        field.addEventListener('input', validateForm);
    });

    function validateForm() {
        const allFieldsFilled = formFields.every(field => field.value.trim() !== '');

        if (allFieldsFilled) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('bg-[#B3CCFF]');
            submitBtn.classList.add('bg-blue-500'); // Enable submit button and change color
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.remove('bg-blue-500');
            submitBtn.classList.add('bg-[#B3CCFF]'); // Disable submit button and reset color
        }
    }

    // Prevent form submission for custom actions
    if (submitBtn) {
        submitBtn.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Form submission prevented');
        });
    }

    // Burger menu open functionality
    if (burger) {
        burger.addEventListener('click', function () {
            mobileMenu.classList.remove('hidden');
            burger.classList.add('hidden');
            closeMenu.classList.remove('hidden');
            defaultLogo.classList.add('hidden');
            secondLogo.classList.remove('hidden');
            topBtnColor.style.backgroundColor = '#f7f7f7';

            if (getStartedBtn) {
                getStartedBtn.classList.add('bg-[#2F45FF]', 'text-white');
                getStartedBtn.classList.remove('bg-white', 'text-[#2F45FF]');
            }

            header.classList.add('header-with-bottom-border');
            header.style.borderBottom = '1px solid #E4E4E5';
        });
    }

    // Burger menu close functionality
    if (closeMenu) {
        closeMenu.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
            closeMenu.classList.add('hidden');
            burger.classList.remove('hidden');
            defaultLogo.classList.remove('hidden');
            secondLogo.classList.add('hidden');
            topBtnColor.style.backgroundColor = '#2F45FF';
            header.classList.remove('header-with-bottom-border');
            header.style.borderBottom = 'none';
            revertHeaderStyles();
        });
    }

    // Close mobile menu when clicking on links
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            closeMenu.classList.add('hidden');
            burger.classList.remove('hidden');
            secondLogo.classList.add('hidden');
            defaultLogo.classList.remove('hidden');

            if (getStartedBtn) {
                getStartedBtn.classList.add('bg-white', 'text-[#2F45FF]');
                getStartedBtn.classList.remove('bg-[#2F45FF]', 'text-white');
            }

            revertHeaderStyles();
        });
    });

    // Change header styles when scrolling
    function applyWhiteHeaderStyles() {
        header.classList.add('bg-white', 'text-black', 'header-with-bottom-border');
        defaultLogo.classList.add('hidden');
        secondLogo.classList.remove('hidden');
        navLinks.forEach(link => {
            link.classList.add('text-black');
            link.classList.remove('text-white');
        });
        if (getStartedBtn) {
            getStartedBtn.classList.add('bg-[#2F45FF]', 'text-white');
            getStartedBtn.classList.remove('bg-white', 'text-[#2F45FF]');
        }
    }

    function revertHeaderStyles() {
        if (window.scrollY === 0) {
            header.classList.remove('bg-white', 'text-black', 'header-with-bottom-border');
            header.style.borderBottom = 'none';
            defaultLogo.classList.remove('hidden');
            secondLogo.classList.add('hidden');
            navLinks.forEach(link => {
                link.classList.add('text-white');
                link.classList.remove('text-black');
            });
            if (getStartedBtn) {
                getStartedBtn.classList.add('bg-white', 'text-[#2F45FF]');
                getStartedBtn.classList.remove('bg-[#2F45FF]', 'text-white');
            }
        }
    }

    // Handle header changes on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            applyWhiteHeaderStyles();
        } else {
            revertHeaderStyles();
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle hash in URL for smooth scrolling
    if (window.location.hash) {
        const hash = window.location.hash;
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
  
});


// Popup modal functions for team members
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('hidden');  // Show modal
    document.body.classList.add('overflow-hidden'); // Disable background scroll
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hidden');  // Hide modal
    document.body.classList.remove('overflow-hidden'); // Enable background scroll
}
