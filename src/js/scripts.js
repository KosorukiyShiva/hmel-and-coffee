const windowInnerWidth = window.innerWidth
const _box_menu =  document.getElementById('box_menu')
const line_coffee = document.getElementById('box_menu_text_coffee_line')
const line_beer = document.getElementById('box_menu_text_beer_line')
const line_poster = document.getElementById('box_menu_text_poster_line')
const lines_box = document.getElementById('box_menu_text_lines')
const half_windowInnerWidth = windowInnerWidth/2

function render(val) {
    _box_menu.style.width = Number(windowInnerWidth)
    line_coffee.style.width=`${half_windowInnerWidth + 86}px`
    line_beer.style.width=`${half_windowInnerWidth + 129}px`
    line_poster.style.width=`${half_windowInnerWidth + 172}px`
    lines_box.style.width=`${half_windowInnerWidth + 172}px`
}

render(windowInnerWidth)
