document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    console.log(navLinks.length);
    navLinks.forEach(navLink => navLink.addEventListener('click', function () {
        navLinks.forEach(navLink => {
            navLink.classList.remove('active')
        });
        this.classList.add('active');

    }))
});
