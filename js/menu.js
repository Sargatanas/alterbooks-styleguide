let menu_h = document.getElementsByClassName('menu-h');

breakLine();
window.addEventListener("orientationchange", breakLine, false);
window.addEventListener("resize", breakLine, false);


function breakLine() {
    Array.prototype.forEach.call(menu_h, function (m) {
        let width = m.clientWidth;
        let elements_width = 0;
        for (let i = 0; i < m.childNodes.length; i++) {
            let element = m.childNodes[i];
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

let menu_inner = document.getElementsByClassName('menu-element__href_inner');

Array.prototype.forEach.call(menu_inner, function (m) {
    let inner_content = m;
    for (let i = 0; i < 6; i++) {
        inner_content = inner_content.nextSibling;
    }
    let arrow = m;
    for (let i = 0; i < 4; i++) {
        arrow = arrow.nextSibling;
    }

    let count = 0;
    for (let i = 0; i < inner_content.childNodes.length; i++) {
        let element = inner_content.childNodes[i];
        if (element.nodeType === 1) {
            count++;
        }
    }
    console.log(count);

    let selected = false;
    for (let i = 0; i < inner_content.childNodes.length; i++) {
        let element = inner_content.childNodes[i];
        if (element.nodeType === 1) {
            if (element.childNodes[1].classList.contains('menu-element__href_selected')) {
                selected = true;
            }
        }
    }
    if(selected) {
        m.classList.add('menu-element__href_active');
        inner_content.style.height = String(count * 40 + 20) + 'px';
    } else {
        m.addEventListener('click', function () {
            m.classList.toggle('menu-element__href_active');
            if (m.classList.contains('menu-element__href_active')) {
                inner_content.style.height = String(count * 40 + 20) + 'px';
                arrow.style.transform = 'rotate(180deg)';
            } else {
                inner_content.style.height = '0';
                arrow.style.transform = 'rotate(0deg)';
            }
        });
    }
});
