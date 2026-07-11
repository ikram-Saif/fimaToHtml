document.addEventListener('DOMContentLoaded', function () {

  // ── Flatpickr ──
  const dateEl = document.getElementById('date');
  if (dateEl) {
    flatpickr("#date", {
      dateFormat: "d/m/Y",
      minDate: "today",
      disableMobile: true
    });
  }

  // ── Delivery checkbox toggle ──
  const deliveryCheck = document.getElementById('deliveryCheck');
  if (deliveryCheck) {
    deliveryCheck.addEventListener('change', function () {
      const fields = document.getElementById('deliveryFields');
      if (this.checked) {
        fields.classList.remove('show');
      } else {
        fields.classList.add('show');
      }
    });
  }

  // ── Submenu toggle (mobile click / desktop hover) ──
  document.querySelectorAll('.dropdown-submenu .submenu-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      if (window.innerWidth < 768) {
        e.preventDefault();
        this.closest('.dropdown-submenu').classList.toggle('show');
      }
    });
  });

  document.querySelectorAll('.dropdown-submenu').forEach(function (submenu) {
    submenu.addEventListener('mouseenter', function () {
      if (window.innerWidth >= 768) this.classList.add('show');
    });
    submenu.addEventListener('mouseleave', function () {
      if (window.innerWidth >= 768) this.classList.remove('show');
    });
  });

  // ── Dropdown arrow toggle ──
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const arrow = dropdown.querySelector('.arrow');
    if (arrow) {
      dropdown.addEventListener('click', function () {
        if (arrow.classList.contains('fa-chevron-up')) {
          arrow.classList.replace('fa-chevron-up', 'fa-chevron-down');
        } else {
          arrow.classList.replace('fa-chevron-down', 'fa-chevron-up');
        }
      });
    }
  });

  // ── Submenu click (close others) ──
  document.querySelectorAll('.dropdown-submenu > a').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const submenu = this.parentElement;
      document.querySelectorAll('.dropdown-submenu').forEach(el => {
        if (el !== submenu) el.classList.remove('show');
      });
      submenu.classList.toggle('show');
    });
  });

  // ── Close submenu when main dropdown closes ──
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('hidden.bs.dropdown', () => {
      document.querySelectorAll('.dropdown-submenu').forEach(el => el.classList.remove('show'));
    });
  });

  // ── Show more / show less ──
  document.querySelectorAll(".show-more").forEach(btn => {
    btn.addEventListener("click", () => {
      const list = btn.nextElementSibling;
      list.classList.toggle("d-none");
      btn.textContent = list.classList.contains("d-none") ? "Show More" : "Show Less";
    });
  });

  // ── Quantity plus/minus ──
  const plusBtn = document.querySelector(".plus");
  const minusBtn = document.querySelector(".minus");
  const number = document.getElementById("number");

  if (plusBtn && minusBtn && number) {
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
  }

});
document.addEventListener('DOMContentLoaded', function () {
    const offcanvasEl = document.getElementById('offcanvasExample');
    const modals = document.querySelectorAll('.modal');
    const toasts = document.querySelectorAll('.toast');

    if (offcanvasEl) {
        modals.forEach(function (modalEl) {
            modalEl.addEventListener('show.bs.modal', function () {
                const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl);
                if (offcanvasInstance) {
                    offcanvasInstance.hide();
                }
            });
        });

        toasts.forEach(function (toastEl) {
            toastEl.addEventListener('show.bs.toast', function () {
                const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl);
                if (offcanvasInstance) {
                    offcanvasInstance.hide();
                }

                modals.forEach(function (modalEl) {
                    const modalInstance = bootstrap.Modal.getInstance(modalEl);
                    if (modalInstance) {
                        modalInstance.hide();
                    }
                });
            });
        });
    }
});

const acceptToastTrigger = document.getElementById('acceptToastBtn')
const acceptToastEl = document.getElementById('acceptToast')

if (acceptToastTrigger && acceptToastEl) {
  const acceptToastBootstrap = bootstrap.Toast.getOrCreateInstance(acceptToastEl)
  acceptToastTrigger.addEventListener('click', () => {
    acceptToastBootstrap.show()
  })
}

const rejectToastTrigger = document.getElementById('rejectToastBtn')
const rejectToastEl = document.getElementById('rejectToast')

if (rejectToastTrigger && rejectToastEl) {
  const rejectToastBootstrap = bootstrap.Toast.getOrCreateInstance(rejectToastEl)
  rejectToastTrigger.addEventListener('click', () => {
    rejectToastBootstrap.show()
  })
}

