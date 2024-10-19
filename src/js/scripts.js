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
__main__.style.width = `${windowInnerWidth}px`
function render(val) {
    _box_menu.style.width = Number(windowInnerWidth)
    line_coffee.style.width=`${58}vw`
    line_beer.style.width=`${62}vw`
    line_poster.style.width=`${66}vw`
    icon_menu_coffee.style.opacity = 0
    icon_menu_beer.style.opacity = 0
    icon_menu_poster.style.opacity = 0
    // lines_box.style.width=`${half_windowInnerWidth + 172}px`
}

render(windowInnerWidth)

window.addEventListener('scroll', function () {
    const _prcnt_coffee_line = (half_windowInnerWidth + 86)/250
    const _prcnt_beer_line = (half_windowInnerWidth + 129)/250
    const _prcnt_poster_line = (half_windowInnerWidth + 172)/250
    // console.log(_prcnt_beer_line)    
    const scrollPosition = window.scrollY
    console.log(scrollPosition);
    if(scrollPosition === 0 || scrollPosition<=250){
        // line_coffee.style.width =`${(half_windowInnerWidth + 86)-(_prcnt_coffee_line*scrollPosition)}px`
        // line_beer.style.width =`${(half_windowInnerWidth + 129)-(_prcnt_beer_line*scrollPosition)}px`
        // line_poster.style.width =`${(half_windowInnerWidth + 172)-(_prcnt_poster_line*scrollPosition)}px`
        line_coffee.style.width =`${58 -(0.6*scrollPosition)}vw`
        line_beer.style.width =`${62 -(0.6*scrollPosition)}vw`
        line_poster.style.width =`${66-(0.6*scrollPosition)}vw`
        // coffee_text_pos.style.marginLeft =`${(_prcnt_coffee_line*scrollPosition*2)}%`
        // beer_text_pos.style.marginLeft =`${(_prcnt_coffee_line*scrollPosition*2)}%`
        // poster_text_pos.style.marginLeft =`${(_prcnt_coffee_line*scrollPosition*2)}%`
        // if(scrollPosition>170){
        //     poster_text_pos.textContent = 'АФИШ'
        //     if(scrollPosition>180){
        //         poster_text_pos.textContent = 'АФИ'
        //         beer_text_pos.textContent = 'ПИВ'
        //         coffee_text_pos.textContent = 'КОФ'
        //         if(scrollPosition>190){
        //             poster_text_pos.textContent = 'АФ'
        //             beer_text_pos.textContent = 'ПИ'
        //             coffee_text_pos.textContent = 'КО'
        //             if(scrollPosition>200){
        //                 poster_text_pos.textContent = 'А'
        //                 beer_text_pos.textContent = 'П'
        //                 coffee_text_pos.textContent = 'К'
        //                 line_poster.style.width =`${(0)}px`
        //                 line_beer.style.width =`${(0)}px`
        //                 line_coffee.style.width =`${(0)}px`
        //                 if(scrollPosition>205){
        //                     poster_text_pos.textContent = ''
        //                     beer_text_pos.textContent = ''
        //                     coffee_text_pos.textContent = ''
        //                 }
        //                 else{
        //                     poster_text_pos.textContent = 'А'
        //                     beer_text_pos.textContent = 'П'
        //                     coffee_text_pos.textContent = 'К'
        //                 }
        //             }
        //             else{
        //                 poster_text_pos.textContent = 'АФ'
        //                 beer_text_pos.textContent = 'ПИ'
        //                 coffee_text_pos.textContent = 'КО'
        //             }
        //         }
        //         else{
        //             poster_text_pos.textContent = 'АФИ'
        //             beer_text_pos.textContent = 'ПИВ'
        //             coffee_text_pos.textContent = 'КОФ'
        //         }
        //     }
        //     else{
        //         poster_text_pos.textContent = 'АФИШ'
        //         beer_text_pos.textContent = 'ПИВО'
        //         coffee_text_pos.textContent = 'КОФЕ'
        //     }
        // }else{
        //     poster_text_pos.textContent = 'АФИША'
        //     beer_text_pos.textContent = 'ПИВО'
        //     coffee_text_pos.textContent = 'КОФЕ'
        // }

    }

  });


