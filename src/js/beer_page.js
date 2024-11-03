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

// console.log(quantity_of_position_outter)
beer_cards.style.width = `${windowInnerWidth}px`
if(windowInnerWidth < 360){
    beer_cards.style.height = `${quantity_of_position_outter*540}px`
    beer_cards.style.gridTemplateColumns = `190px`
    beer_cards.style.justifyContent = `center`
}
if((windowInnerWidth >=360) && (windowInnerWidth < 530)){
    quantity_of_position_outter_ /= 2
    quantity_of_position_outter_ = Math.ceil(quantity_of_position_outter_) 
    beer_cards.style.height = `${quantity_of_position_outter_*540}px`
    beer_cards.style.gridTemplateColumns = `190px 190px`
}
if((windowInnerWidth >= 530) && (windowInnerWidth < 700)){
    quantity_of_position_outter_ /= 3
    quantity_of_position_outter_ = Math.ceil(quantity_of_position_outter_) 
    beer_cards.style.height = `${quantity_of_position_outter_*540}px`
    beer_cards.style.gridTemplateColumns = `190px 190px 190px`
}
if((windowInnerWidth >= 700) && (windowInnerWidth < 870)){
    quantity_of_position_outter_ /= 4
    quantity_of_position_outter_ = Math.ceil(quantity_of_position_outter_) 
    beer_cards.style.height = `${quantity_of_position_outter_*540}px`
    beer_cards.style.gridTemplateColumns = `190px 190px 190px 190px`
}
if((windowInnerWidth >= 870) && (windowInnerWidth < 1040)){
    quantity_of_position_outter_ /= 5
    quantity_of_position_outter_ = Math.ceil(quantity_of_position_outter_) 
    beer_cards.style.height = `${quantity_of_position_outter_*540}px`
    beer_cards.style.gridTemplateColumns = `190px 190px 190px 190px 190px`
}



// beer_cards.insertAdjacentHTML('beforeend',card_template(data_xlsx_ , index))
build_card(data_xlsx_, quantity_of_position_outter)    



