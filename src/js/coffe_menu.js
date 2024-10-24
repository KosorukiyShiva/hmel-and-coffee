const coffe_menu = document.getElementById('coffe_menu')

const coffe_menu_head = document.getElementById('coffe_menu_head')

const coffe_menu_sqr = document.getElementById('coffe_menu_sqr')
const coffe_menu_sqr_line = document.getElementById('coffe_menu_sqr_line')
const coffe_menu_sqr_left = document.getElementById('coffe_menu_sqr_left')
const coffe_menu_sqr_right = document.getElementById('coffe_menu_sqr_right')

const coffe_menu_sqr_text_1 = document.getElementById('coffe_menu_sqr_text_1')
const coffe_menu_sqr_text_2 = document.getElementById('coffe_menu_sqr_text_2')
const coffe_menu_sqr_text_3 = document.getElementById('coffe_menu_sqr_text_3')
const coffe_menu_sqr_text_4 = document.getElementById('coffe_menu_sqr_text_4')
const coffe_menu_sqr_text_5 = document.getElementById('coffe_menu_sqr_text_5')
const coffe_menu_sqr_text_6 = document.getElementById('coffe_menu_sqr_text_6')
const coffe_menu_sqr_text_7 = document.getElementById('coffe_menu_sqr_text_7')
const coffe_menu_sqr_text_8 = document.getElementById('coffe_menu_sqr_text_8')

const coffe_menu_sqr_sirops = document.getElementById('coffe_menu_sqr_sirops')

coffe_menu.style.width = `${prcnt_windowInnerWidth*95.8}px`
// coffe_menu.style.height = `${prcnt_windowInnerHeight*31.9}px`
coffe_menu_head.style.left = `${(prcnt_windowInnerWidth*95.8) / 2 - 88.5}px`
coffe_menu_sqr.style.width = `${prcnt_windowInnerWidth*95.8 - 8}px`
// coffe_menu_sqr.style.height = `${prcnt_windowInnerHeight * 31.9 -49}px`
coffe_menu_sqr_line.style.left = `${(prcnt_windowInnerWidth*95.8 - 8)/2}px`
coffe_menu_sqr_sirops.style.left = `${half_windowInnerWidth-130}px`

if(windowInnerWidth>500){
    coffe_menu_sqr_left.style.width = `${225}px`
    coffe_menu_sqr_right.style.width = `${225}px`
    coffe_menu_sqr_text_1.textContent = 'ДОППИО...........................................................'
    coffe_menu_sqr_text_2.textContent = 'АМЕРИКАНО...................................................'
    coffe_menu_sqr_text_3.textContent = 'ФЛЭТ УАЙТ...........................................'
    coffe_menu_sqr_text_4.textContent = 'КАПУЧИНО.......................................'
    coffe_menu_sqr_text_5.textContent = 'ЛАТТЕ......................................................'
    coffe_menu_sqr_text_6.textContent = 'РАФ............................................................'
    coffe_menu_sqr_text_7.textContent = 'КАКАО..............................................................'
    coffe_menu_sqr_text_8.textContent = 'ЧАЙ.............................................................'
    if(windowInnerWidth > 800){
        coffe_menu_sqr_left.style.width = `${300}px`
        coffe_menu_sqr_right.style.width = `${300}px`
        coffe_menu_sqr_text_1.textContent = 'ДОППИО...........................................................'
        coffe_menu_sqr_text_2.textContent = 'АМЕРИКАНО...................................................'
        coffe_menu_sqr_text_3.textContent = 'ФЛЭТ УАЙТ...........................................'
        coffe_menu_sqr_text_4.textContent = 'КАПУЧИНО.......................................'
        coffe_menu_sqr_text_5.textContent = 'ЛАТТЕ......................................................'
        coffe_menu_sqr_text_6.textContent = 'РАФ............................................................'
        coffe_menu_sqr_text_7.textContent = 'КАКАО..............................................................'
        coffe_menu_sqr_text_8.textContent = 'ЧАЙ.............................................................'
        if(windowInnerWidth > 900){
            coffe_menu_sqr_left.style.width = `${400}px`
            coffe_menu_sqr_right.style.width = `${400}px`
            coffe_menu_sqr_text_1.textContent = 'ДОППИО........................................................................................'
            coffe_menu_sqr_text_2.textContent = 'АМЕРИКАНО.............................................................................'
            coffe_menu_sqr_text_3.textContent = 'ФЛЭТ УАЙТ........................................................................'
            coffe_menu_sqr_text_4.textContent = 'КАПУЧИНО....................................................................'
            coffe_menu_sqr_text_5.textContent = 'ЛАТТЕ...................................................................................'
            coffe_menu_sqr_text_6.textContent = 'РАФ.........................................................................................'
            coffe_menu_sqr_text_7.textContent = 'КАКАО...........................................................................................'
            coffe_menu_sqr_text_8.textContent = 'ЧАЙ..........................................................................................'
        }
    }
}
if(windowInnerWidth<400){
    coffe_menu_sqr_left.style.width = `${150}px`
    coffe_menu_sqr_right.style.width = `${150}px`
    coffe_menu_sqr_text_1.style.fontSize = `${13}px`
    coffe_menu_sqr_text_2.style.fontSize = `${13}px`
    coffe_menu_sqr_text_3.style.fontSize = `${13}px`
    coffe_menu_sqr_text_4.style.fontSize = `${13}px`
    coffe_menu_sqr_text_5.style.fontSize = `${13}px`
    coffe_menu_sqr_text_6.style.fontSize = `${13}px`
    coffe_menu_sqr_text_7.style.fontSize = `${13}px`
    coffe_menu_sqr_text_8.style.fontSize = `${13}px`
    coffe_menu_sqr_text_1.textContent = 'ДОППИО....................'
    coffe_menu_sqr_text_2.textContent = 'АМЕРИКАНО............'
    coffe_menu_sqr_text_3.textContent = 'ФЛЭТ УАЙТ............'
    coffe_menu_sqr_text_4.textContent = 'КАПУЧИНО............'
    coffe_menu_sqr_text_5.textContent = 'ЛАТТЕ....................'
    coffe_menu_sqr_text_6.textContent = 'РАФ..........................'
    coffe_menu_sqr_text_7.textContent = 'КАКАО........................'
    coffe_menu_sqr_text_8.textContent = 'ЧАЙ...........................'
}