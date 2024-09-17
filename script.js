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


    if (burger) {
        burger.addEventListener('click', function () {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('translate-y-0');
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
            header.style.borderBottom = '1px solid #E4E4E5';
            document.body.classList.add('overflow-hidden');
        });
    }


    if (closeMenu) {
        closeMenu.addEventListener('click', function () {
            mobileMenu.classList.remove('translate-y-0');
            mobileMenu.classList.add('hidden', 'translate-y-[-100vh]'); 
            closeMenu.classList.add('hidden');
            burger.classList.remove('hidden');

            if (window.location.hash !== '#home' && window.scrollY === 0) {
                secondLogo.classList.remove('hidden');
                defaultLogo.classList.add('hidden');
                topBtnColor.style.backgroundColor = '#2F45FF';
            }
            else{
                topBtnColor.style.backgroundColor = '#f7f7f7';
            }
            
            header.classList.remove('border-b', 'border-gray-300', 'header-with-bottom-border');
            header.style.borderBottom = 'none'; 

            revertHeaderStyles(); 

            document.body.classList.remove('overflow-hidden');
        });
    }

    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-y-0');
            mobileMenu.classList.add('hidden', 'translate-y-[-100vh]'); 
            closeMenu.classList.add('hidden');
            burger.classList.remove('hidden');
            
            const targetHash = link.getAttribute('href');
            if (targetHash !== '#home') {
                secondLogo.classList.remove('hidden');
                defaultLogo.classList.add('hidden');
                topBtnColor.style.backgroundColor = '#2F45FF';
            }

            else{
                topBtnColor.style.backgroundColor = '#f7f7f7';
            }

            if (getStartedBtn) {
                getStartedBtn.classList.add('bg-white', 'text-[#2F45FF]');
                getStartedBtn.classList.remove('bg-[#2F45FF]', 'text-white');
            }

            document.body.classList.remove('overflow-hidden');

            revertHeaderStyles();
        });
    });


  
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
        const isAtTop = window.scrollY === 0;

        if (isAtTop) {
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


    window.addEventListener('scroll', function () {
        console.log('Scroll event triggered');
        if (burger) {
            console.log('Burger element exists');
            if (window.scrollY > 0) {
                applyWhiteHeaderStyles();

                if (window.innerWidth <= 1024) {
                    console.log('Changing burger icon to menu-2.svg');
                    burger.querySelector('img').src = '/assets/menu-2.svg';
                    topBtnColor.style.backgroundColor = '#f7f7f7'; // Change background color when scrolling
                }
            } else {
                revertHeaderStyles();

                if (window.innerWidth <= 1024) {
                    console.log('Reverting burger icon to menu.svg');
                    burger.querySelector('img').src = '/assets/menu.svg';
                    topBtnColor.style.backgroundColor = '#2F45FF'; // Revert to default background color when at the top
                }
            }
        }
    });



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



    if (window.location.hash) {
        const hash = window.location.hash;
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    const formFields = [
        document.getElementById('full-name'),
        document.getElementById('company'),
        document.getElementById('email'),
        document.getElementById('phone'),
        document.getElementById('message')
    ];

    formFields.forEach(field => {
        field.addEventListener('input', validateForm);
    });

    function validateForm() {
        const allFieldsFilled = formFields.every(field => field.value.trim() !== '');

        if (allFieldsFilled) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('bg-[#B3CCFF]');
            submitBtn.classList.add('bg-blue-500'); 
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.remove('bg-blue-500');
            submitBtn.classList.add('bg-[#B3CCFF]'); 
        }
    }
});




function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('hidden'); 
    document.body.classList.add('overflow-hidden');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hidden');  
    document.body.classList.remove('overflow-hidden');
}