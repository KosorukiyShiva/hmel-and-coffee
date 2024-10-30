const coffe_menu_sqr_sirops_text = document.getElementById('coffe_menu_sqr_sirops_text')
const beer_menu_sqr_snack = document.getElementById('beer_menu_sqr_snack')
const beer_menu_sqr_snack_sqr_craft = document.getElementById('beer_menu_sqr_snack_sqr_craft')
const beer_menu_sqr_snack_head = document.getElementById('beer_menu_sqr_snack_head')
const beer_menu_sqr_snack_parent = document.getElementById('beer_menu_sqr_snack_parent')
const beer_menu_sqr_snack_child_1 = document.getElementById('beer_menu_sqr_snack_child_1')
const beer_menu_sqr_snack_child_2 = document.getElementById('beer_menu_sqr_snack_child_2')

const beer_menu_sqr_snack_sqr_craft_points_chesse_sub = document.getElementById('beer_menu_sqr_snack_sqr_craft_points_chesse_sub')

const beer_menu_sqr_snack_sqr_craft_points_chesse_sub_1 = document.getElementById('beer_menu_sqr_snack_sqr_craft_points_chesse_sub_1')
const beer_menu_sqr_snack_sqr_craft_points_chesse_sub_2 = document.getElementById('beer_menu_sqr_snack_sqr_craft_points_chesse_sub_2')
const beer_menu_sqr_snack_sqr_craft_points_chesse_sub_3 = document.getElementById('beer_menu_sqr_snack_sqr_craft_points_chesse_sub_3')

const beer_menu_sqr_snack_sqr_factory_points_1 = document.getElementById('beer_menu_sqr_snack_sqr_factory_points_1')
const beer_menu_sqr_snack_sqr_factory_points_2 = document.getElementById('beer_menu_sqr_snack_sqr_factory_points_2')
const beer_menu_sqr_snack_sqr_factory_points_3 = document.getElementById('beer_menu_sqr_snack_sqr_factory_points_3')
const beer_menu_sqr_snack_sqr_factory_points_4 = document.getElementById('beer_menu_sqr_snack_sqr_factory_points_4')
const beer_menu_sqr_snack_sqr_factory_points_5 = document.getElementById('beer_menu_sqr_snack_sqr_factory_points_5')

const beer_menu_sqr_snack_sqr_craft_points_1 =document.getElementById('beer_menu_sqr_snack_sqr_craft_points_1')
const beer_menu_sqr_snack_sqr_craft_points_2 =document.getElementById('beer_menu_sqr_snack_sqr_craft_points_2')
const beer_menu_sqr_snack_sqr_craft_points_3 =document.getElementById('beer_menu_sqr_snack_sqr_craft_points_3')

const beer_menu_sqr_snack_sqr_factory_points_text_1 = document.getElementById('beer_menu_sqr_snack_sqr_factory_points_text_1')
const beer_menu_sqr_snack_sqr_factory_points_text_2 = document.getElementById('beer_menu_sqr_snack_sqr_factory_points_text_2')
const beer_menu_sqr_snack_sqr_factory_points_text_3 = document.getElementById('beer_menu_sqr_snack_sqr_factory_points_text_3')
const beer_menu_sqr_snack_sqr_factory_points_text_4 = document.getElementById('beer_menu_sqr_snack_sqr_factory_points_text_4')
const beer_menu_sqr_snack_sqr_factory_points_text_5 = document.getElementById('beer_menu_sqr_snack_sqr_factory_points_text_5')

let open_state = false

const beer_cards = document.getElementById('beer_cards')

beer_menu.style.height = `${510}px`
beer_menu_sqr.style.height = `${454}px`
beer_menu_sqr_button.style.top = `${374}px`
beer_menu_sqr_snack.style.height = `${0}px`

beer_cards.style.width = `${windowInnerWidth}px`
if(windowInnerWidth < 360){
    beer_cards.style.gridTemplateColumns = `190px`
    beer_cards.style.justifyContent = `center`
}
if((windowInnerWidth >=360) && (windowInnerWidth < 530)){
    beer_cards.style.gridTemplateColumns = `190px 190px`
}
if((windowInnerWidth >= 530) && (windowInnerWidth < 700)){
    beer_cards.style.gridTemplateColumns = `190px 190px 190px`
}
if((windowInnerWidth >= 700) && (windowInnerWidth < 870)){
    beer_cards.style.gridTemplateColumns = `190px 190px 190px 190px`
}
if((windowInnerWidth >= 870) && (windowInnerWidth < 1040)){
    beer_cards.style.gridTemplateColumns = `190px 190px 190px 190px 190px`
}

function beer_table(){
    if(open_state === false){
        open_state = !open_state
        console.log(open_state)
        if(windowInnerWidth <= 400){
            beer_menu.style.height = `${925}px`
            beer_menu_sqr.style.height = `${870}px`

            beer_menu_sqr_snack.style.left = `${adapt_coeff}px`
            beer_menu_sqr_snack.style.width = `${prcnt_windowInnerWidth * 88.3}px`
            beer_menu_sqr_snack.style.height = `${420}px`
            
            beer_menu_sqr_snack_head.style.left = `${((prcnt_windowInnerWidth * 88.3) - 165)/2}px`
            
            beer_menu_sqr_snack_parent.style.left = `${((prcnt_windowInnerWidth * 88.3) - 320)/2}px`
            beer_menu_sqr_snack_parent.style.width = `${320}px`
            
            beer_menu_sqr_snack_child_1.style.width = `${320}px`
            beer_menu_sqr_snack_child_2.style.width = `${320}px`
            
            beer_menu_sqr_snack_sqr_factory_points_1.style.width = `${320}px`
            beer_menu_sqr_snack_sqr_factory_points_2.style.width = `${320}px`
            beer_menu_sqr_snack_sqr_factory_points_3.style.width = `${320}px`
            beer_menu_sqr_snack_sqr_factory_points_4.style.width = `${320}px`
            beer_menu_sqr_snack_sqr_factory_points_5.style.width = `${320}px`
            
            beer_menu_sqr_snack_sqr_factory_points_text_1.textContent = `● Арахис...................................`
            beer_menu_sqr_snack_sqr_factory_points_text_2.textContent = `● Арахис в оболочке............`
            beer_menu_sqr_snack_sqr_factory_points_text_3.textContent = `● Гренки.........................................`
            beer_menu_sqr_snack_sqr_factory_points_text_4.textContent = `● Вобла.......................................`
            beer_menu_sqr_snack_sqr_factory_points_text_5.textContent = `● Фисташки.................................`
            
            beer_menu_sqr_snack_sqr_craft_points_chesse_sub.style.width = `${250}px`
            
            beer_menu_sqr_snack_sqr_craft_points_1.style.width = `${320}px`
            beer_menu_sqr_snack_sqr_craft_points_2.style.width = `${320}px`
            beer_menu_sqr_snack_sqr_craft_points_3.style.width = `${320}px`
            
            beer_menu_sqr_snack_sqr_craft_points_chesse_sub_1.textContent = 'чечил................................'
            beer_menu_sqr_snack_sqr_craft_points_chesse_sub_2.textContent = 'шарики.............................'
            beer_menu_sqr_snack_sqr_craft_points_chesse_sub_3.textContent = 'бочонок.............................'
            beer_menu_sqr_button.style.top = `${790}px`
            coffe_menu_sqr_sirops_text.textContent = '↑свернуть↑'
            return
        }
        if((windowInnerWidth < 820) && (windowInnerWidth > 400)){
            beer_menu.style.height = `${925}px`
            beer_menu_sqr.style.height = `${870}px`

            beer_menu_sqr_snack.style.left = `${adapt_coeff}px`
            beer_menu_sqr_snack.style.width = `${prcnt_windowInnerWidth * 88.3}px`
            beer_menu_sqr_snack.style.height = `${420}px`
            
            beer_menu_sqr_snack_head.style.left = `${((prcnt_windowInnerWidth * 88.3) - 165)/2}px`

            beer_menu_sqr_snack_parent.style.left = `${((prcnt_windowInnerWidth * 88.3) - 365)/2}px`
            beer_menu_sqr_snack_parent.style.width = `${365}px`

            beer_menu_sqr_snack_child_1.style.width = `${365}px`
            beer_menu_sqr_snack_child_2.style.width = `${365}px`
            
            beer_menu_sqr_snack_sqr_factory_points_1.style.width = `${365}px`
            beer_menu_sqr_snack_sqr_factory_points_2.style.width = `${365}px`
            beer_menu_sqr_snack_sqr_factory_points_3.style.width = `${365}px`
            beer_menu_sqr_snack_sqr_factory_points_4.style.width = `${365}px`
            beer_menu_sqr_snack_sqr_factory_points_5.style.width = `${365}px`

            beer_menu_sqr_snack_sqr_craft_points_chesse_sub.style.width = `${290}px`

            beer_menu_sqr_snack_sqr_craft_points_1.style.width = `${360}px`
            beer_menu_sqr_snack_sqr_craft_points_2.style.width = `${360}px`
            beer_menu_sqr_snack_sqr_craft_points_3.style.width = `${360}px`

            beer_menu_sqr_button.style.top = `${790}px`
            coffe_menu_sqr_sirops_text.textContent = '↑свернуть↑'
            return
        }
        if(windowInnerWidth >= 820){
            beer_menu.style.height = `${775}px`
            beer_menu_sqr.style.height = `${720}px`

            beer_menu_sqr_snack.style.left = `${adapt_coeff}px`
            beer_menu_sqr_snack.style.height = `${275}px`
            beer_menu_sqr_snack.style.width = `${prcnt_windowInnerWidth * 88.3}px`

            beer_menu_sqr_snack_head.style.left = `${((prcnt_windowInnerWidth * 88.3) - 165)/2}px`

            beer_menu_sqr_snack_parent.style.width = `${prcnt_windowInnerWidth * 88.3}px`

            beer_menu_sqr_snack_child_2.style.top = `${0}px`
           
            beer_menu_sqr_button.style.top = `${640}px`
            
            coffe_menu_sqr_sirops_text.textContent = '↑свернуть↑'
            return
        }
    }
    if (open_state === true) {
        open_state = !open_state
        console.log(open_state)
        beer_menu.style.height = `${510}px`
        beer_menu_sqr.style.height = `${454}px`
        beer_menu_sqr_button.style.top = `${374}px`
        beer_menu_sqr_snack.style.height = `${0}px`
        coffe_menu_sqr_sirops_text.textContent = '↓к пиву↓'
        return
    }
}

