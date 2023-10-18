const menuIcon = document.getElementById('menuIcon');
        const menu = document.querySelector('.menu');

        menuIcon.addEventListener('click', () => {
            menu.classList.toggle('show-menu');
        });