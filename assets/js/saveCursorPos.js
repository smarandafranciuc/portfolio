const pos = { x : 0, y : 1000 };
const scroll = { x : 0, y : 0 };

const saveCursorPosition = function(x, y) {
    pos.x = x;
    pos.y = y;
    updateProperties();
}

const saveScrollPosition = function (x, y) {
    scroll.x = x;
    scroll.y = y;
    updateProperties();
}

const updateProperties = function() {
    document.documentElement.style.setProperty('--x', pos.x + scroll.x);
    document.documentElement.style.setProperty('--y', pos.y + scroll.y);
}

document.addEventListener('mousemove', e => { saveCursorPosition(e.clientX, e.clientY); })
document.addEventListener('scroll', e => { saveScrollPosition(window.scrollX, window.scrollY); })
