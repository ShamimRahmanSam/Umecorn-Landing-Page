 // Burger Menu and Toggle Info Functionality
 document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    burger.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    closeMenu.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
    });
});

function toggleInfo(id) {
    const element = document.getElementById(id);
    element.classList.toggle('hidden');
}