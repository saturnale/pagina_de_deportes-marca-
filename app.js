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
        topContainer.classList.add('topContainer-collapsed');
        downContainer.classList.add('downContainer-collapsed');
    } else {
        navbar.classList.remove('navbar-collapsed');
        topContainer.classList.remove('topContainer-collapsed');
        downContainer.classList.remove('downContainer-collapsed');
    }
});

document.querySelectorAll('.navbar .nav-item.dropdown').forEach(function(dropdown) {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    let timeout;

    dropdown.addEventListener('mouseenter', function() {
        clearTimeout(timeout);
        const instance = bootstrap.Dropdown.getOrCreateInstance(toggle);
        instance.show();
    });

    dropdown.addEventListener('mouseleave', function() {
        timeout = setTimeout(function() {
            const instance = bootstrap.Dropdown.getOrCreateInstance(toggle);
            instance.hide();
        }, 150);
    });
});

function updateNavbarHeight() {
    const navbar = document.getElementById('mainNavbar');
    const height = navbar.getBoundingClientRect().bottom;
    document.documentElement.style.setProperty('--navbar-height', height + 'px');
}

window.addEventListener('scroll', updateNavbarHeight);
window.addEventListener('resize', updateNavbarHeight);
updateNavbarHeight();

document.querySelectorAll('#langToggle + .dropdown-menu .dropdown-item').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const flag = this.getAttribute('data-flag');
        const text = this.getAttribute('data-text');
        document.getElementById('selectedLangFlag').src = flag;
        document.getElementById('selectedLangFlag').alt = text;
        document.getElementById('selectedLangText').textContent = text;
    });
});