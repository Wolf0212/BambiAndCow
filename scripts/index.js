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
            document.querySelector('.slide').classList.add('animation');
            return;
        }
        document.querySelector('.slide').classList.remove('animation');
    });
});
observer.observe(document.querySelector('.app2'));
function slide(direction) {
    if(direction == 'right') {
        document.querySelector('.slide').style.marginLeft = '-50%';
        document.getElementById('slide_2').style.opacity = '1';
    }
    else {
        document.querySelector('.slide').style.marginLeft = '0%';
        document.getElementById('slide_2').style.opacity = '0';
    }
}