let container = document.getElementsByClassName('menu-h');

window.onresize = breakLine();
document.body.onload = breakLine();

function breakLine() {
    Array.prototype.forEach.call(container, function (c) {
        let width = c.clientWidth;
        let elements_width = 0;
        for (let i = 0; i < c.childNodes.length; i++) {
            if (c.childNodes[i].nodeType === 1) {
                let current_width = c.childNodes[i].clientWidth;
                elements_width += current_width;
                if (elements_width > width) {
                    c.childNodes[i].classList.add('menu-h__element_wrap');
                    elements_width = current_width;
                }
            }
        }
    });
};
