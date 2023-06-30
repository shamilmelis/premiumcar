const openMenu = document.querySelector('.burger-menu-button');
openMenu.addEventListener('click', function () {
    let container = document.getElementById('container-header');
    if (container.className == 'container-header') {
        container.className = 'container-headerActive';
    } else {
        container.className = 'container-header';
    }
})