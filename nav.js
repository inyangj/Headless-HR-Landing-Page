const menuToggle = document.getElementById('menuToggle');
const menuContainer = document.getElementById('menuContainer');
const closeMenu = document.getElementById('closeMenu');

const toggleMenu = () => {
      menuContainer.classList.toggle("hidden");
    }


menuContainer.classList.add('hidden');

menuToggle.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);