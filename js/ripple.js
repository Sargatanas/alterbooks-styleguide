let buttons = document.getElementsByClassName('button');

Array.prototype.forEach.call(buttons, function (b) {
    if ((b.tagName === 'BUTTON') && (b.dataset.type !== "simple")) {
        if (b.dataset.default !== 'true') {
            b.addEventListener('mousedown', createRipple);
            // b.addEventListener('mouseup', deleteRipple);
        }
    } else {
        b.classList.add('button_active');
    }
});

function createRipple(e) {
    let circle = document.createElement('div');
    this.appendChild(circle);

    let d = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = d + 'px';

    circle.style.left = e.pageX - this.offsetLeft - d / 2 + 'px';
    circle.style.top = e.pageY - this.offsetTop - d / 2 + 'px';

    let date = new Date();
    date = String(date.getTime());
    circle.setAttribute('id', String(date));

    setTimeout(function () {
        let element = document.getElementById(date);
        element.parentNode.removeChild(element);
    }, 1000);


    circle.classList.add('ripple');
    if(this.dataset.color === 'light') {
        circle.classList.add('ripple_light');
    }
}

function deleteRipple(e) {
    let text = Array.prototype.slice.call(this.getElementsByTagName('span'));
    let circles = Array.prototype.slice.call(this.getElementsByTagName('div'));

    while (this.lastChild) {
        this.removeChild(this.lastChild);
    }
    this.innerHTML = '<span>' + text[0].outerHTML + '</span>';
}