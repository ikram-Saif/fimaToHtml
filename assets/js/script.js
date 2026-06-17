
    const dropdownBtn = document.querySelector('.dropdown');
    const arrow = dropdownBtn.querySelector('.arrow');

    dropdownBtn.addEventListener('click', function () {
        if (arrow.classList.contains('fa-chevron-up')) {
            arrow.classList.remove('fa-chevron-up');
            arrow.classList.add('fa-chevron-down');
        } else {
            arrow.classList.remove('fa-chevron-down');
            arrow.classList.add('fa-chevron-up');
        }
    });

document.querySelectorAll('.dropdown-submenu > a').forEach(item => {

    item.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const submenu = this.parentElement;

        // close other submenus
        document.querySelectorAll('.dropdown-submenu')
            .forEach(el => {
                if (el !== submenu) {
                    el.classList.remove('show');
                }
            });

        submenu.classList.toggle('show');
    });

});

// close submenu when main dropdown closes
document.querySelectorAll('.dropdown').forEach(dropdown => {

    dropdown.addEventListener('hidden.bs.dropdown', () => {

        document.querySelectorAll('.dropdown-submenu')
            .forEach(el => el.classList.remove('show'));

    });

});
