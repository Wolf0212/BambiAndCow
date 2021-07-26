let button = document.getElementById('dropdown-btn');
let dropdown = document.querySelector('.dropdown-content');
button.addEventListener('mouseenter', () => {
    dropdown.classList.add('active');
});

dropdown.addEventListener('mouseleave', () => {
    dropdown.classList.remove('active');
})