const mobileMenu = document.getElementById('mobile-menu-section');

document.getElementById('menu-open-btn').addEventListener('click', function() {
    mobileMenu.classList.remove('hidden');
})

document.getElementById('menu-close-btn').addEventListener('click', function() {
   mobileMenu.classList.add('hidden');
})