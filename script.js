const menuBTN = document.querySelector('#menu-btn');
const mainNav = document.querySelector('#sidebar')

function openSidebar() {
    mainNav.classList.add('open');
    menuBTN.setAttribute('aria-expanded', 'true');
    mainNav.setAttribute('aria-hidden', 'false');
  }

function closeSidebar() {
    mainNav.classList.remove('open');
    menuBTN.setAttribute('aria-expanded', 'true');
    mainNav.setAttribute('aria-hidden','false')
}

function toggleSidebar() {
    if (mainNav.classList.contains('open')) {
        closeSidebar();
    } else {
        openSidebar();
    }
}

menuBTN.addEventListener('click', toggleSidebar)