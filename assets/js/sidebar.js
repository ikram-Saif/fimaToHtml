document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const mainContent = document.getElementById('mainContent');
  const toggleBtn = document.getElementById('sidebarToggle');
  const expandBtn = document.getElementById('sidebarExpandBtn');
  const closeBtn = document.getElementById('sidebarCloseBtn');

  const openSidebar = () => {
    sidebar?.classList.add('open');
    document.body.classList.add('sidebar-open');
    mainContent?.classList.add('shifted');
    overlay?.classList.add('active');
    toggleBtn?.setAttribute('aria-expanded', 'true');
    toggleBtn?.classList.add('d-none');   // hide toggle button while sidebar is open
  };

  const closeSidebar = () => {
    sidebar?.classList.remove('open');
    document.body.classList.remove('sidebar-open');
    mainContent?.classList.remove('shifted');
    overlay?.classList.remove('active');
    toggleBtn?.setAttribute('aria-expanded', 'false');
    toggleBtn?.classList.remove('d-none'); // show toggle button again once closed
  };

  const toggleSidebar = () => {
    if (sidebar?.classList.contains('open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function (e) {
      e.preventDefault();
      toggleSidebar();
    });
  }

  if (expandBtn) {
    expandBtn.addEventListener('click', function (e) {
      e.preventDefault();
      openSidebar();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      closeSidebar();
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeSidebar();
    }
  });

  document.querySelectorAll('#sidebar a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth < 992) {
        closeSidebar();
      }
    });
  });
});