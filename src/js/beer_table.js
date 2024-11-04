const beer_menu_sqr_lines = document.getElementById('beer_menu_sqr_lines')

const beer_menu_sqr_lines_horisontal_0 = document.getElementById('beer_menu_sqr_lines_horisontal_0')
const beer_menu_sqr_lines_horisontal_1 = document.getElementById('beer_menu_sqr_lines_horisontal_1')
const beer_menu_sqr_lines_horisontal_2 = document.getElementById('beer_menu_sqr_lines_horisontal_2')
const beer_menu_sqr_lines_horisontal_3 = document.getElementById('beer_menu_sqr_lines_horisontal_3')
const beer_menu_sqr_lines_horisontal_4 = document.getElementById('beer_menu_sqr_lines_horisontal_4')
const beer_menu_sqr_lines_horisontal_5 = document.getElementById('beer_menu_sqr_lines_horisontal_5')
const beer_menu_sqr_lines_horisontal_6 = document.getElementById('beer_menu_sqr_lines_horisontal_6')
const beer_menu_sqr_lines_horisontal_7 = document.getElementById('beer_menu_sqr_lines_horisontal_7')
const beer_menu_sqr_lines_horisontal_8 = document.getElementById('beer_menu_sqr_lines_horisontal_8')

const beer_menu_sqr_lines_vertical_1 = document.getElementById('beer_menu_sqr_lines_vertical_1')
const beer_menu_sqr_lines_vertical_2 = document.getElementById('beer_menu_sqr_lines_vertical_2')
const beer_menu_sqr_lines_vertical_3 = document.getElementById('beer_menu_sqr_lines_vertical_3')
const beer_menu_sqr_lines_vertical_4 = document.getElementById('beer_menu_sqr_lines_vertical_4')
const beer_menu_sqr_lines_vertical_5 = document.getElementById('beer_menu_sqr_lines_vertical_5')
const beer_menu_sqr_lines_vertical_6 = document.getElementById('beer_menu_sqr_lines_vertical_6')

const beer_menu_sqr_number_column = document.getElementById('beer_menu_sqr_number_column')
const beer_menu_sqr_name_column = document.getElementById('beer_menu_sqr_name_column')
const beer_menu_sqr_brewery_column = document.getElementById('beer_menu_sqr_brewery_column')
const beer_menu_sqr_style_column = document.getElementById('beer_menu_sqr_style_column')
const beer_menu_abv_style_column = document.getElementById('beer_menu_abv_style_column')
const beer_menu_ibu_style_column = document.getElementById('beer_menu_ibu_style_column')
const beer_menu_sqr_0305_column = document.getElementById('beer_menu_sqr_0305_column')

const beer_menu = document.getElementById('beer_menu')
const beer_menu_head = document.getElementById('beer_menu_head')
const beer_menu_sqr = document.getElementById('beer_menu_sqr')
const beer_menu_sqr_button = document.getElementById('beer_menu_sqr_button')

const adapt_coeff = Number(((prcnt_windowInnerWidth * 95.8-8) - prcnt_windowInnerWidth * 88.3)/2)

beer_menu_sqr_lines_horisontal_0.style.width = `${prcnt_windowInnerWidth * 88.3}px`
beer_menu_sqr_lines_horisontal_1.style.width = `${prcnt_windowInnerWidth * 88.3}px`
beer_menu_sqr_lines_horisontal_2.style.width = `${prcnt_windowInnerWidth * 88.3}px`
beer_menu_sqr_lines_horisontal_3.style.width = `${prcnt_windowInnerWidth * 88.3}px`
beer_menu_sqr_lines_horisontal_4.style.width = `${prcnt_windowInnerWidth * 88.3}px`
beer_menu_sqr_lines_horisontal_5.style.width = `${prcnt_windowInnerWidth * 88.3}px`
beer_menu_sqr_lines_horisontal_6.style.width = `${prcnt_windowInnerWidth * 88.3}px`
beer_menu_sqr_lines_horisontal_7.style.width = `${prcnt_windowInnerWidth * 88.3}px`
beer_menu_sqr_lines_horisontal_8.style.width = `${prcnt_windowInnerWidth * 88.3}px`

beer_menu_sqr_lines.style.left = `${adapt_coeff}px`

beer_menu.style.width = `${prcnt_windowInnerWidth * 95.8}px`
beer_menu_head.style.left = `${(prcnt_windowInnerWidth * 95.8 - 177) / 2}px`
beer_menu_sqr.style.width = `${prcnt_windowInnerWidth * 95.8-8}px`
beer_menu_sqr_button.style.left = `${(prcnt_windowInnerWidth * 95.8 - 8 - 346)/2}px`
function table_style(windowInnerWidth){
    if (windowInnerWidth >= 500) {
    
        beer_menu_sqr_name_column.style.width = `${prcnt_windowInnerWidth*20}px`
        beer_menu_sqr_brewery_column.style.width = `${prcnt_windowInnerWidth*18}px`
        beer_menu_sqr_style_column.style.width = `${prcnt_windowInnerWidth*18}px`
        beer_menu_abv_style_column.style.width = `${prcnt_windowInnerWidth*10}px`
        beer_menu_ibu_style_column.style.width = `${prcnt_windowInnerWidth*10}px`
        beer_menu_sqr_number_column.style.left = `${adapt_coeff}px`
        beer_menu_sqr_name_column.style.left = `${38 + adapt_coeff}px`
        beer_menu_sqr_brewery_column.style.left = `${38 + adapt_coeff + (prcnt_windowInnerWidth*20) + 4}px`
        beer_menu_sqr_style_column.style.left = `${38 + adapt_coeff + (prcnt_windowInnerWidth*20) + 4 + (prcnt_windowInnerWidth*18) + 4}px`
        beer_menu_abv_style_column.style.left = `${38 + adapt_coeff + (prcnt_windowInnerWidth*20) + 4 + (prcnt_windowInnerWidth*18) + 4 + (prcnt_windowInnerWidth*18) + 4}px`
        beer_menu_ibu_style_column.style.left = `${38 + adapt_coeff + (prcnt_windowInnerWidth*20) + 4 + (prcnt_windowInnerWidth*18) + 4 + (prcnt_windowInnerWidth*18) + 4 + (prcnt_windowInnerWidth*10) + 4}px`
        beer_menu_sqr_0305_column.style.left =  `${38 + adapt_coeff + (prcnt_windowInnerWidth*20) + 4 + (prcnt_windowInnerWidth*18) + 4 + (prcnt_windowInnerWidth*18) + 4 + (prcnt_windowInnerWidth*10) + 4 + (prcnt_windowInnerWidth*10) - 5}px`
        beer_menu_sqr_lines_vertical_2.style.left = `${26 + prcnt_windowInnerWidth*20}px`
        beer_menu_sqr_lines_vertical_3.style.left = `${26 + prcnt_windowInnerWidth*20 + (prcnt_windowInnerWidth*18)}px`
        beer_menu_sqr_lines_vertical_4.style.left =  `${26 + prcnt_windowInnerWidth*20 + (prcnt_windowInnerWidth*18) + (prcnt_windowInnerWidth*18) + 6}px`
        beer_menu_sqr_lines_vertical_5.style.left =  `${26 + prcnt_windowInnerWidth*20 + (prcnt_windowInnerWidth*18) + (prcnt_windowInnerWidth*18) + (prcnt_windowInnerWidth*10) + 6}px`
        beer_menu_sqr_lines_vertical_6.style.left =  `${26 + prcnt_windowInnerWidth*20 + (prcnt_windowInnerWidth*18) + (prcnt_windowInnerWidth*18) + (prcnt_windowInnerWidth*10) + 6 + (prcnt_windowInnerWidth*10)}px`
        if(innerWidth > 800){
            beer_menu_sqr_name_column.style.fontSize = `${15}px`
            beer_menu_sqr_brewery_column.style.fontSize = `${15}px`
            beer_menu_sqr_style_column.style.fontSize = `${15}px`
            beer_menu_abv_style_column.style.fontSize = `${15}px`
            beer_menu_ibu_style_column.style.fontSize = `${15}px`
            // beer_menu_sqr_0305_column.style.fontSize = `${15}px`
        }
    }
    if (windowInnerWidth < 500) {
        beer_menu_abv_style_column.style.opacity = 0
        beer_menu_ibu_style_column.style.opacity = 0

        beer_menu_sqr_lines_vertical_5.style.left = `${0}px`
        beer_menu_sqr_lines_vertical_6.style.left = `${0}px`
        beer_menu_abv_style_column.style.left = `${0}px`
        beer_menu_ibu_style_column.style.left = `${0}px`
        beer_menu_sqr_lines_vertical_5.style.opacity = 0
        beer_menu_sqr_lines_vertical_6.style.opacity = 0

        beer_menu_sqr_name_column.style.width = `${prcnt_windowInnerWidth*24.2}px`
        beer_menu_sqr_brewery_column.style.width = `${prcnt_windowInnerWidth*21.8}px`
        beer_menu_sqr_style_column.style.width = `${prcnt_windowInnerWidth*21.8}px`
    
        beer_menu_sqr_name_column.style.left = `${38}px`
        beer_menu_sqr_brewery_column.style.left = `${38 + (prcnt_windowInnerWidth * 24.2) + 8}px`
        beer_menu_sqr_style_column.style.left = `${38 + (prcnt_windowInnerWidth * 24.2) + 8 + (prcnt_windowInnerWidth*21.8) + 8}px`
        beer_menu_sqr_0305_column.style.left =  `${38 + (prcnt_windowInnerWidth * 24.2) + 8 + (prcnt_windowInnerWidth*21.8) + 8 + (prcnt_windowInnerWidth*21.8) }px`
        beer_menu_sqr_lines_vertical_2.style.left = `${prcnt_windowInnerWidth * 29.6}px`
        beer_menu_sqr_lines_vertical_3.style.left = `${prcnt_windowInnerWidth * 53.4}px`
        beer_menu_sqr_lines_vertical_4.style.left =  `${prcnt_windowInnerWidth * 76.4}px`
    }
}

console.log('8')