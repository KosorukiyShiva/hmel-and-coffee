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

 render(windowInnerWidth)

window.addEventListener('scroll', function () {
    //трекеры
    // console.log(prcnt_windowInnerHeight)
    // console.log(prcnt_windowInnerHeight*scrollPosition)
    // console.log(_prcnt_beer_line)
    console.log(scrollPosition);
    console.log(scrollPosition/windowInnerHeight *100)

    //коэффициенты для линий
    const coef_coffee_line = (half_windowInnerWidth + 86)/(prcnt_windowInnerHeight*26.8) 
    const coef_beer_line = (half_windowInnerWidth + 129)/(prcnt_windowInnerHeight*26.8)
    const coef_poster_line = (half_windowInnerWidth + 172)/(prcnt_windowInnerHeight*26.8)

    //коэффициенты для текста
    const coef_coffee_text = (half_windowInnerWidth + 86 )/(prcnt_windowInnerHeight*26.8)
    const coef_beer_text = (half_windowInnerWidth - 129)
    const coef_poster_text = (half_windowInnerWidth - 172)
    
    const scrollPosition = window.scrollY
     
    //сворачивание линий 
    if(scrollPosition >=0 && scrollPosition<=prcnt_windowInnerHeight*26.8){ 
        line_coffee.style.width =`${(half_windowInnerWidth + 86)-(coef_coffee_line*scrollPosition)}px`
        line_beer.style.width =`${(half_windowInnerWidth + 129)-(coef_beer_line*scrollPosition)}px`
        line_poster.style.width =`${(half_windowInnerWidth + 172)-(coef_poster_line*scrollPosition)}px`
    
    //сдвиг текста при крокрутке
        if((scrollPosition/windowInnerHeight *800)<93){
            coffee_text_pos.style.paddingLeft = `${(scrollPosition/windowInnerHeight *800)}vw`
            coffee_text_pos.style.opacity = 100
            beer_text_pos.style.paddingLeft = `${(scrollPosition/windowInnerHeight *800)}vw`
            beer_text_pos.style.opacity = 100
            poster_text_pos.style.paddingLeft = `${(scrollPosition/windowInnerHeight *800)}vw`
            poster_text_pos.style.opacity = 100
        }else if((scrollPosition/windowInnerHeight *800)>=93){
            coffee_text_pos.style.paddingLeft = `${0}vw`
            coffee_text_pos.style.opacity = 0
            beer_text_pos.style.paddingLeft = `${0}vw`
            beer_text_pos.style.opacity = 0
            poster_text_pos.style.paddingLeft = `${0}vw`
            poster_text_pos.style.opacity = 0
        }

    // сворачивание текста
        if(scrollPosition>prcnt_windowInnerHeight*6){
            poster_text_pos.textContent = 'АФИШ'
            coffee_text_pos.textContent = 'КОФЕ'
            beer_text_pos.textContent = 'ПИВО'
            if(scrollPosition>prcnt_windowInnerHeight*8){
                coffee_text_pos.textContent = 'КОФ'
                beer_text_pos.textContent = 'ПИВ'
                poster_text_pos.textContent = 'АФИ'
                if(scrollPosition>prcnt_windowInnerHeight*9){
                    coffee_text_pos.textContent = 'КО'
                    beer_text_pos.textContent = 'ПИ'
                    poster_text_pos.textContent = 'АФ'
                    if(scrollPosition>prcnt_windowInnerHeight*10.5){
                        coffee_text_pos.textContent = 'К'
                        beer_text_pos.textContent = 'П'
                        poster_text_pos.textContent = 'А'
                    }
                    else{
                        coffee_text_pos.textContent = 'КО'
                        beer_text_pos.textContent = 'ПИ'
                        poster_text_pos.textContent = 'АФ'
                    }
                }
                else{
                    coffee_text_pos.textContent = 'КОФ'
                    beer_text_pos.textContent = 'ПИВ'
                    poster_text_pos.textContent = 'АФИ'
                }
            }
            else{
                poster_text_pos.textContent = 'АФИШ'
                coffee_text_pos.textContent = 'КОФЕ'
                beer_text_pos.textContent = 'ПИВО'
            }
        }
        else{
            poster_text_pos.textContent = 'АФИША'
            coffee_text_pos.textContent = 'КОФЕ'
            beer_text_pos.textContent = 'ПИВО'
        }
        
    }
    //полное сворачивание линий под текстом меню при достижении опред положения
    if(scrollPosition>prcnt_windowInnerHeight*26.8){
        line_coffee.style.width =`${0}px`
        line_beer.style.width =`${0}px`
        line_poster.style.width =`${0}px`
    }
  }
);


