let oval = document.getElementById('oval');
oval.addEventListener('mouseover', () => {
    oval.style.animation = 'rotation 6s infinite linear';
});
oval.addEventListener('mouseout', () => {
    oval.style.animation = 'none';
});
let navigator = document.getElementById('navigator');
navigator.addEventListener('mouseover', () => {
    navigator.style.animation = 'bounce 2s infinite';
});
navigator.addEventListener('mouseout', () => {
    navigator.style.animation = 'none';
});
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation');
            return;
        }
        entry.target.classList.remove('animation');
    });
});
observer.observe(document.querySelector('.app2'));