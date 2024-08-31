document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const header = document.getElementById('mainHeader');

    // Burger menu toggle functionality
    if (burger) {
        burger.addEventListener('click', function () {
            if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
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

    // Header background change on scroll
    window.addEventListener('scroll', function() {
        if (header) {
            if (window.scrollY > 0) {
                header.classList.add('bg-blue-900/90', 'backdrop-blur-sm', 'shadow-md');
            } else {
                header.classList.remove('bg-blue-900/90', 'backdrop-blur-sm', 'shadow-md');
            }
        }
    });
});

// Toggle information visibility by id
function toggleInfo(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle('hidden');
    }
}
