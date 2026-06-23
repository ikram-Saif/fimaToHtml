
    const dropdownBtns = document.querySelectorAll('.dropdown');

dropdownBtns.forEach(dropdownBtn => {
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
document.querySelectorAll(".show-more").forEach(btn => {
    btn.addEventListener("click", () => {

        const list = btn.nextElementSibling;

        list.classList.toggle("d-none");

        btn.textContent =
            list.classList.contains("d-none")
                ? "Show More"
                : "Show Less";
    });
});
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const number = document.getElementById("number");

let quantity = 1;

plusBtn.addEventListener("click", () => {
    quantity++;
    number.textContent = quantity;
});

minusBtn.addEventListener("click", () => {
    if (quantity > 1) {
        quantity--;
        number.textContent = quantity;
    }
});
