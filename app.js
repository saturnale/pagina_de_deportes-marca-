window.addEventListener('scroll', function() {
    const openDropdown = document.querySelector('.dropdown-menu.show');
    if (openDropdown) {
        const toggleButton = openDropdown.previousElementSibling;
        const dropdownInstance = bootstrap.Dropdown.getInstance(toggleButton);
        if (dropdownInstance) {
            dropdownInstance.hide();
        }
    }
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNavbar');
    const topContainer = document.getElementById('topContainer');
    const downContainer = document.getElementById('downContainer');
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-collapsed');
        navbar.style.backgroundColor = "#ffffff";
        topContainer.classList.add('topContainer-collapsed');
        downContainer.classList.add('downContainer-collapsed');
    } else {
        navbar.classList.remove('navbar-collapsed');
        navbar.style.backgroundColor = "#e10000";
        topContainer.classList.remove('topContainer-collapsed');
        downContainer.classList.remove('downContainer-collapsed');
    }
});