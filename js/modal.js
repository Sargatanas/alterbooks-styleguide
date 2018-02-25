document.body.onload = modal();

function modal() {
    let modal_buttons = document.getElementsByClassName("modal-button");
    Array.prototype.forEach.call(modal_buttons, function (m) {
        m.addEventListener('click', openModal);
    });

    let modal_close = document.getElementsByClassName('modal-content-close');
    Array.prototype.forEach.call(modal_close, function (m) {
        m.addEventListener('click', closeModal);
    });

    let modal_close_buttons = document.getElementsByClassName('modal-close-button');
    Array.prototype.forEach.call(modal_close_buttons, function (m) {
        m.addEventListener('click', closeModal);
    });
}

function openModal(e) {
    let modal_id = this.getAttribute('data-modal-id');

    let modals = document.getElementsByClassName('modal');
    Array.prototype.forEach.call(modals, function (m) {
        if (m.getAttribute('data-modal-id') === modal_id) {
            m.classList.add('modal_open');
        }
    });
}

function closeModal() {
    let modal_id = this.getAttribute('data-modal-id');

    let modals = document.getElementsByClassName('modal');
    Array.prototype.forEach.call(modals, function (m) {
        if (m.getAttribute('data-modal-id') === modal_id) {
            m.classList.remove('modal_open');
        }
    });
}