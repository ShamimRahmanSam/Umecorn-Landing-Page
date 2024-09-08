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

    // Toggle mobile menu
    if (burger) {
        burger.addEventListener('click', function () {
            mobileMenu.classList.remove('hidden');
            burger.classList.add('hidden');
            closeMenu.classList.remove('hidden');
            defaultLogo.classList.add('hidden');
            secondLogo.classList.remove('hidden');
            topBtnColor.style.backgroundColor = '#f7f7f7'; 

            if (getStartedBtn) {
                getStartedBtn.classList.add('bg-blue-600', 'text-white');
                getStartedBtn.classList.remove('bg-white', 'text-[#2F45FF]');
            }

            // Add border when menu is opened
            header.classList.add('header-with-bottom-border');
            header.style.borderBottom = '1px solid #E4E4E5'; // Add border
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
            closeMenu.classList.add('hidden');
            burger.classList.remove('hidden');
            secondLogo.classList.add('hidden');
            defaultLogo.classList.remove('hidden'); // Ensure default logo is shown immediately
            topBtnColor.style.backgroundColor = '#2F45FF';
            
            // Remove border when menu is closed
            header.classList.remove('header-with-bottom-border');
            header.style.borderBottom = 'none'; // Remove border

            // Revert header styles when closing the mobile menu
            revertHeaderStyles();
        });
    }

    // Hide mobile menu on link click
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            closeMenu.classList.add('hidden');
            burger.classList.remove('hidden');
            secondLogo.classList.add('hidden');
            defaultLogo.classList.remove('hidden'); // Ensure default logo is shown immediately

            if (getStartedBtn) {
                getStartedBtn.classList.add('bg-white', 'text-[#2F45FF]');
                getStartedBtn.classList.remove('bg-blue-600', 'text-white');
            }

            // Ensure logo visibility matches the current scroll state
            revertHeaderStyles();
        });
    });

    // Function to apply white header styles on scroll
    function applyWhiteHeaderStyles() {
        header.classList.add('bg-white', 'text-black', 'header-with-bottom-border');
        defaultLogo.classList.add('hidden');
        secondLogo.classList.remove('hidden');
        navLinks.forEach(link => {
            link.classList.add('text-black');
            link.classList.remove('text-white');
        });
        if (getStartedBtn) {
            getStartedBtn.classList.add('bg-blue-600', 'text-white');
            getStartedBtn.classList.remove('bg-white', 'text-[#2F45FF]');
        }
    }

    // Function to revert header styles when scrolled back to top
    function revertHeaderStyles() {
        if (window.scrollY === 0) {
            header.classList.remove('bg-white', 'text-black', 'header-with-bottom-border');
            header.style.borderBottom = 'none'; // Remove border if at the top
            defaultLogo.classList.remove('hidden');
            secondLogo.classList.add('hidden');
            navLinks.forEach(link => {
                link.classList.add('text-white');
                link.classList.remove('text-black');
            });
            if (getStartedBtn) {
                getStartedBtn.classList.add('bg-white', 'text-[#2F45FF]');
                getStartedBtn.classList.remove('bg-blue-600', 'text-white');
            }
        }
    }

    // Header background and logo change on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            applyWhiteHeaderStyles();
        } else {
            revertHeaderStyles();
        }
    });

    // Smooth scroll for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default jump behavior
            const targetId = this.getAttribute('href').substring(1); // Get section ID
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Smooth scroll to the section
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth' // Enable smooth scroll
                });
            }
        });
    });
});
