const windowInnerWidth = window.innerWidth
const windowInnerHeight = window.innerHeight
const __main__ = document.getElementById('__main__')
const _box_menu =  document.getElementById('box_menu')
const line_coffee = document.getElementById('box_menu_text_coffee_line')
const line_beer = document.getElementById('box_menu_text_beer_line')
const line_poster = document.getElementById('box_menu_text_poster_line')
const coffee_text_pos = document.getElementById('box_menu_text_coffee')
const beer_text_pos = document.getElementById('box_menu_text_beer')
const poster_text_pos = document.getElementById('box_menu_text_poster')
const icon_text_coffee = document.getElementById('box_menu_text_icons_coffee_icon')
const icon_text_hmel = document.getElementById('box_menu_text_icons_hmel_icon')
const icon_text_poster = document.getElementById('box_menu_text_icons_afisha_icon')
const icon_menu_coffee = document.getElementById('box_menu_column_right_coffee_icon')
const icon_menu_beer = document.getElementById('box_menu_column_right_hmel_icon')
const icon_menu_poster = document.getElementById('box_menu_column_left_afisha_icon')
const half_windowInnerWidth = windowInnerWidth/2
const prcnt_windowInnerHeight = Number(windowInnerHeight)/100
// __main__.style.width = `${windowInnerWidth}px`
function render(val) {
    _box_menu.style.width = Number(windowInnerWidth)
    line_coffee.style.width=`${(half_windowInnerWidth + 86)}px`
    line_beer.style.width=`${(half_windowInnerWidth + 129)}px`
    line_poster.style.width=`${(half_windowInnerWidth + 172)}px`
    icon_menu_coffee.style.opacity = 0
    icon_menu_beer.style.opacity = 0
    icon_menu_poster.style.opacity = 0
    // lines_box.style.width=`${half_windowInnerWidth + 172}px`
}

// render(windowInnerWidth)

window.addEventListener('scroll', function () {
    const coef_coffee_line = (half_windowInnerWidth + 86)/(prcnt_windowInnerHeight*26.8) 
    const coef_beer_line = (half_windowInnerWidth + 129)/(prcnt_windowInnerHeight*26.8)
    const coef_poster_line = (half_windowInnerWidth + 172)/(prcnt_windowInnerHeight*26.8)
    // console.log(_prcnt_beer_line)    
    const scrollPosition = window.scrollY
    console.log(scrollPosition);
    console.log(prcnt_windowInnerHeight)
    console.log(prcnt_windowInnerHeight*26.8)
    if(scrollPosition >=0 && scrollPosition<=prcnt_windowInnerHeight*26.8){
        line_coffee.style.width =`${(half_windowInnerWidth + 86)-(coef_coffee_line*scrollPosition)}px`
        line_beer.style.width =`${(half_windowInnerWidth + 129)-(coef_beer_line*scrollPosition)}px`
        line_poster.style.width =`${(half_windowInnerWidth + 172)-(coef_poster_line*scrollPosition)}px`
    }
  });


