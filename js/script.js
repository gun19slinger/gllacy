var link = document.querySelector('.feedback');
var overlay = document.querySelector('.modal-overlay');
var popup = document.querySelector('.modal-content');
var close = popup.querySelector('.modal-content-close');

link.addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.add('modal-content-show');
    overlay.classList.add('modal-overlay-show');
});


close.addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.remove('modal-content-show');
    overlay.classList.remove('modal-overlay-show');
});

window.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
        if (popup.classList.contains('modal-content-show')) {
            popup.classList.remove('modal-content-show');
            overlay.classList.remove('modal-overlay-show');
        }
    }
});