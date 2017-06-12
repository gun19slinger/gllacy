function Input(options) {
    this.elems = options.elems;

    this.isFullInput();

    document.addEventListener('change', this.inputOnInput.bind(this));

}
Input.prototype.isFullInput = function () {
    for (var i = 0; i < this.elems.length; i++) {
        if (this.elems[i].value !== '') {
            this.elems[i].classList.add('input--full');
        }
    }
};
Input.prototype.inputOnInput = function (e) {
    if (!e.target.classList.contains('input')) {
        return;
    }

    if (e.target.value !== '') {
        e.target.classList.add('input--full');
    } else {
        e.target.classList.remove('input--full');
    }
};

var input = new Input({
    elems: document.querySelectorAll('.input')
});
