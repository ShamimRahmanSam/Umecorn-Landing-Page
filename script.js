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
    
    // Form fields in the contact form
    const formFields = [
        document.getElementById('full-name'),
        document.getElementById('company'),
        document.getElementById('email'),
        document.getElementById('phone'),
        document.getElementById('message')
    ];

    // Form validation
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
            mobileMenu.classList.add('translate-y-0'); // Slide down menu
            burger.classList.add('hidden');
            closeMenu.classList.remove('hidden');
            defaultLogo.classList.add('hidden');
            secondLogo.classList.remove('hidden');
            topBtnColor.style.backgroundColor = '#f7f7f7';

            if (getStartedBtn) {
                getStartedBtn.classList.add('bg-[#2F45FF]', 'text-white');
                getStartedBtn.classList.remove('bg-white', 'text-[#2F45FF]');
            }

            header.classList.add('border-b', 'border-gray-300', 'header-with-bottom-border');
            header.style.borderBottom = '1px solid #E4E4E5'; // Ensure border for small devices when burger is opened
        });
    }

    // Burger menu close functionality
    if (closeMenu) {
        closeMenu.addEventListener('click', function () {
            mobileMenu.classList.remove('translate-y-0');
            mobileMenu.classList.add('hidden', 'translate-y-[-100vh]'); // Slide up menu
            closeMenu.classList.add('hidden');
            burger.classList.remove('hidden');

            // Ensure the second logo is shown when not on the home section
            if (window.location.hash !== '#home' && window.scrollY === 0) {
                secondLogo.classList.remove('hidden');
                defaultLogo.classList.add('hidden');
            }

            topBtnColor.style.backgroundColor = '#2F45FF';
            header.classList.remove('border-b', 'border-gray-300', 'header-with-bottom-border');
            header.style.borderBottom = 'none'; // Remove border after closing burger menu
            revertHeaderStyles(); // Call to revert styles when the menu is closed
        });
    }



    // Close mobile menu when clicking on links (with the second logo shown for non-home sections)
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-y-0');
            mobileMenu.classList.add('hidden', 'translate-y-[-100vh]'); // Slide up
            closeMenu.classList.add('hidden');
            burger.classList.remove('hidden');
            
            // Ensure the second logo is shown when not on the home section
            const targetHash = link.getAttribute('href');
            if (targetHash !== '#home') {
                secondLogo.classList.remove('hidden');
                defaultLogo.classList.add('hidden');
            }

            topBtnColor.style.backgroundColor = '#2F45FF';

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

    // Revert header styles based on screen size and scroll
    function revertHeaderStyles() {
        const isAtTop = window.scrollY === 0;

        if (isAtTop) {
            header.classList.remove('bg-white', 'text-black', 'header-with-bottom-border');
            header.style.borderBottom = 'none'; // Remove header border in all cases when at the top
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