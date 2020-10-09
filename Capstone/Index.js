function Scroll() {
    var text = document.querySelector('.text');
    var position = text.getBoundingClientRect().top;
    var screen = window.innerHeight / 1.4;
    if (position < screen) {
        text.classList.add('newtext');
    }
}
window.addEventListener('scroll', Scroll);