const menuIcon = document.getElementById('menuIcon');

menuIcon.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    const blackScreen = document.getElementById('blackScreen');
    if (menuIcon.ariaExpanded === 'false') {
        menuIcon.ariaExpanded = true;
        menuIcon.src = 'assets/images/icon-menu-close.svg';
        menuIcon.width = '32';
        menu.classList.replace('translate-x-full', 'translate-x-0');
        blackScreen.classList.remove('hidden');
    } else {
        menuIcon.ariaExpanded = false;
        menuIcon.src = 'assets/images/icon-menu.svg';
        menuIcon.width = '40';
        menu.classList.replace('translate-x-0', 'translate-x-full');
        blackScreen.classList.add('hidden');
    }
})
