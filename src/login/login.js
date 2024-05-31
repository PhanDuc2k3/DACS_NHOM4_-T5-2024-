// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const tabNam = document.getElementById('tab-nam');
    const tabNu = document.getElementById('tab-nu');

    tabNam.addEventListener('click', () => {
        tabNam.classList.add('selected');
        tabNu.classList.remove('selected');
    });

    tabNu.addEventListener('click', () => {
        tabNu.classList.add('selected');
        tabNam.classList.remove('selected');
    });

    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

    dropdownItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const dropdownMenu = item.querySelector('.dropdown-menu');
            dropdownMenu.style.display = 'block';
        });

        item.addEventListener('mouseleave', () => {
            const dropdownMenu = item.querySelector('.dropdown-menu');
            dropdownMenu.style.display = 'none';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const dropdown = this.querySelector('.dropdown-menu');
            if (dropdown) {
                dropdown.style.display = 'block';
                setTimeout(() => {
                    dropdown.style.opacity = '1';
                    dropdown.style.transform = 'translateY(0)';
                }, 0);
            }
        });

        item.addEventListener('mouseleave', function() {
            const dropdown = this.querySelector('.dropdown-menu');
            if (dropdown) {
                dropdown.style.opacity = '0';
                dropdown.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    dropdown.style.display = 'none';
                }, 3000); // Thời gian delay tương ứng với thời gian transition trong CSS
            }
        });
    });
});
