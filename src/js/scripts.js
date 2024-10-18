const windowInnerWidth = window.innerWidth
const _box_menu = document.getElementById('box_menu')
console.log(windowInnerWidth)

function render(val) {
    _box_menu.style.width = Number(windowInnerWidth)
}

render(windowInnerWidth)