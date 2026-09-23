window.addEventListener('scroll', function() {
    const openDropdown = document.querySelector('.dropdown-menu.show');
    if (openDropdown) {
        const toggleButton = openDropdown.previousElementSibling; // el <a> o <button> que abre el dropdown
        const dropdownInstance = bootstrap.Dropdown.getInstance(toggleButton);
        if (dropdownInstance) {
            dropdownInstance.hide();
        }
    }
});