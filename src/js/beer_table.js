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

const beer_menu_sqr_name_column = document.getElementById('beer_menu_sqr_name_column')
const beer_menu_sqr_brewery_column = document.getElementById('beer_menu_sqr_brewery_column')
const beer_menu_sqr_style_column = document.getElementById('beer_menu_sqr_style_column')
const beer_menu_abv_style_column = document.getElementById('beer_menu_abv_style_column')
const beer_menu_ibu_style_column = document.getElementById('beer_menu_ibu_style_column')

const beer_menu = document.getElementById('beer_menu')
const beer_menu_head = document.getElementById('beer_menu_head')
const beer_menu_sqr = document.getElementById('beer_menu_sqr')

beer_menu_sqr_lines_horisontal_0.style.width = `${prcnt_windowInnerWidth * 88.3}px`
beer_menu_sqr_lines_horisontal_1.style.width = `${prcnt_windowInnerWidth * 88.3}px`
beer_menu_sqr_lines_horisontal_2.style.width = `${prcnt_windowInnerWidth * 88.3}px`
beer_menu_sqr_lines_horisontal_3.style.width = `${prcnt_windowInnerWidth * 88.3}px`
beer_menu_sqr_lines_horisontal_4.style.width = `${prcnt_windowInnerWidth * 88.3}px`
beer_menu_sqr_lines_horisontal_5.style.width = `${prcnt_windowInnerWidth * 88.3}px`
beer_menu_sqr_lines_horisontal_6.style.width = `${prcnt_windowInnerWidth * 88.3}px`
beer_menu_sqr_lines_horisontal_7.style.width = `${prcnt_windowInnerWidth * 88.3}px`
beer_menu_sqr_lines_horisontal_8.style.width = `${prcnt_windowInnerWidth * 88.3}px`

beer_menu.style.width = `${prcnt_windowInnerWidth * 95.8}px`
beer_menu_head.style.left = `${(prcnt_windowInnerWidth * 95.8 - 177) / 2}px`
beer_menu_sqr.style.width = `${prcnt_windowInnerWidth * 95.8}px`
if (windowInnerWidth > 475) {
    beer_menu_abv_style_column.style.opacity = 1
    beer_menu_ibu_style_column.style.opacity = 1
}
if (windowInnerWidth < 475) {
    beer_menu_abv_style_column.style.left = `${0}px`
    beer_menu_ibu_style_column.style.left = `${0}px`
    beer_menu_abv_style_column.style.opacity = 0
    beer_menu_ibu_style_column.style.opacity = 0
    beer_menu_sqr_name_column.style.width = `${prcnt_windowInnerWidth*24.2}px`
    beer_menu_sqr_brewery_column.style.width = `${prcnt_windowInnerWidth*21.8}px`
    beer_menu_sqr_style_column.style.width = `${prcnt_windowInnerWidth*21.8}px`

    beer_menu_sqr_name_column.style.left = `${28}px`
    beer_menu_sqr_brewery_column.style.left = `${28 + (prcnt_windowInnerWidth * 24.2) + 8}px`
    beer_menu_sqr_style_column.style.left = `${28 + (prcnt_windowInnerWidth * 24.2) + 8 + (prcnt_windowInnerWidth*21.8) + 8}px`
}