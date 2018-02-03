let container = document.getElementsByClassName('menu-h');

breakLine();
window.addEventListener("orientationchange", breakLine, false);
window.addEventListener("resize", breakLine, false);


function breakLine() {
    Array.prototype.forEach.call(container, function (c) {
        let width = c.clientWidth;
        let elements_width = 0;
        for (let i = 0; i < c.childNodes.length; i++) {
            let element = c.childNodes[i];
            if (element.nodeType === 1) {
                let current_width = element.clientWidth;
                elements_width += current_width;
                if (elements_width > width) {
                    element.classList.add('menu-h__element_wrap');
                    elements_width = current_width;
                } else {
                    if (element.classList.contains('menu-h__element_wrap')) {
                        element.classList.remove('menu-h__element_wrap');
                    }
                }
            }
        }
    });
}
