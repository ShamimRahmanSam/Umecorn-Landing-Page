document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const header = document.getElementById('mainHeader');
    const defaultLogo = document.getElementById('defaultLogo');
    const secondLogo = document.getElementById('secondLogo');
    const navLinks = document.querySelectorAll('#navLinks .nav-link');
    const getStartedBtn = document.getElementById('getStartedBtn');

    // Toggle mobile menu
    if (burger) {
        burger.addEventListener('click', function () {
            if (mobileMenu) {
                mobileMenu.classList.remove('hidden');
            }
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', function () {
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Function to apply white header styles
    function applyWhiteHeaderStyles() {
        header.classList.add('bg-white', 'text-black');
        defaultLogo.classList.add('hidden');
        secondLogo.classList.remove('hidden');
        navLinks.forEach(link => {
            link.classList.add('text-black');
            link.classList.remove('text-white');
        });
        if (getStartedBtn) {
            getStartedBtn.classList.remove('bg-white', 'text-[#2F45FF]');
            getStartedBtn.classList.add('bg-blue-600', 'text-white');
        }document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const header = document.getElementById('mainHeader');
    const defaultLogo = document.getElementById('defaultLogo');
    const secondLogo = document.getElementById('secondLogo');
    const navLinks = document.querySelectorAll('#navLinks .nav-link');
    const getStartedBtn = document.getElementById('getStartedBtn');

    // Toggle mobile menu
    if (burger) {
        burger.addEventListener('click', function () {
            if (mobileMenu) {
                mobileMenu.classList.remove('hidden');
            }
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', function () {
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Function to apply white header styles
    function applyWhiteHeaderStyles() {
        header.classList.add('bg-white', 'text-black');
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

    // Function to revert header styles
    function revertHeaderStyles() {
        if (window.scrollY === 0) {
            header.classList.remove('bg-white', 'text-black');
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
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            applyWhiteHeaderStyles();
        } else {
            revertHeaderStyles();
        }
    });

    // Header background and logo change on hover
    header.addEventListener('mouseover', function() {
        applyWhiteHeaderStyles();
    });

    header.addEventListener('mouseout', function() {
        if (window.scrollY === 0) {
            revertHeaderStyles();
        }
    });
});

    }

    // Function to revert header styles
    function revertHeaderStyles() {
        if (window.scrollY === 0) {
            header.classList.remove('bg-white', 'backdrop-blur-sm', 'shadow-md', 'text-black');
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
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            applyWhiteHeaderStyles();
        } else {
            revertHeaderStyles();
        }
    });

    // Header background and logo change on hover
    header.addEventListener('mouseover', function() {
        applyWhiteHeaderStyles();
    });

    header.addEventListener('mouseout', function() {
        if (window.scrollY === 0) {
            revertHeaderStyles();
        }
    });
});