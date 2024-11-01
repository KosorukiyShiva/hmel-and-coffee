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

var quantity_of_position_outter = sessionStorage.getItem("quantity_of_position_out");
var quantity_of_position_outter = Number(quantity_of_position_outter)
// console.log(quantity_of_position_outter)
var data_columnA_xlsx_outter = sessionStorage.getItem("data_columnA_xlsx_out")
var data_columnB_xlsx_outter = sessionStorage.getItem("data_columnB_xlsx_out")
var data_columnC_xlsx_outter = sessionStorage.getItem("data_columnC_xlsx_out")
var data_columnD_xlsx_outter = sessionStorage.getItem("data_columnD_xlsx_out")
var data_columnE_xlsx_outter = sessionStorage.getItem("data_columnE_xlsx_out")
var data_columnF_xlsx_outter = sessionStorage.getItem("data_columnF_xlsx_out")
var data_columnG_xlsx_outter = sessionStorage.getItem("data_columnG_xlsx_out")
var data_columnH_xlsx_outter = sessionStorage.getItem("data_columnH_xlsx_out")
var data_columnI_xlsx_outter = sessionStorage.getItem("data_columnI_xlsx_out")
var data_columnJ_xlsx_outter = sessionStorage.getItem("data_columnJ_xlsx_out")

data_columnA_xlsx_outter = data_columnA_xlsx_outter.split(";,")
data_columnB_xlsx_outter = data_columnB_xlsx_outter.split(";,")
data_columnC_xlsx_outter = data_columnC_xlsx_outter.split(";,")
data_columnD_xlsx_outter = data_columnD_xlsx_outter.split(";,")
data_columnE_xlsx_outter = data_columnE_xlsx_outter.split(";,")
data_columnF_xlsx_outter = data_columnF_xlsx_outter.split(";,")
data_columnG_xlsx_outter = data_columnG_xlsx_outter.split(";,")
data_columnH_xlsx_outter = data_columnH_xlsx_outter.split(";,")
data_columnI_xlsx_outter = data_columnI_xlsx_outter.split(";,")
data_columnJ_xlsx_outter = data_columnJ_xlsx_outter.split(";,")

data_columnA_xlsx_outter[quantity_of_position_outter-1] = data_columnA_xlsx_outter[quantity_of_position_outter-1].substring(0, data_columnA_xlsx_outter[quantity_of_position_outter-1].length - 1) 
data_columnB_xlsx_outter[quantity_of_position_outter-1] = data_columnB_xlsx_outter[quantity_of_position_outter-1].substring(0, data_columnB_xlsx_outter[quantity_of_position_outter-1].length - 1) 
data_columnC_xlsx_outter[quantity_of_position_outter-1] = data_columnC_xlsx_outter[quantity_of_position_outter-1].substring(0, data_columnC_xlsx_outter[quantity_of_position_outter-1].length - 1) 
data_columnD_xlsx_outter[quantity_of_position_outter-1] = data_columnD_xlsx_outter[quantity_of_position_outter-1].substring(0, data_columnD_xlsx_outter[quantity_of_position_outter-1].length - 1) 
data_columnE_xlsx_outter[quantity_of_position_outter-1] = data_columnE_xlsx_outter[quantity_of_position_outter-1].substring(0, data_columnE_xlsx_outter[quantity_of_position_outter-1].length - 1) 
data_columnF_xlsx_outter[quantity_of_position_outter-1] = data_columnF_xlsx_outter[quantity_of_position_outter-1].substring(0, data_columnF_xlsx_outter[quantity_of_position_outter-1].length - 1) 
data_columnG_xlsx_outter[quantity_of_position_outter-1] = data_columnG_xlsx_outter[quantity_of_position_outter-1].substring(0, data_columnG_xlsx_outter[quantity_of_position_outter-1].length - 1) 
data_columnH_xlsx_outter[quantity_of_position_outter-1] = data_columnH_xlsx_outter[quantity_of_position_outter-1].substring(0, data_columnH_xlsx_outter[quantity_of_position_outter-1].length - 1) 
data_columnI_xlsx_outter[quantity_of_position_outter-1] = data_columnI_xlsx_outter[quantity_of_position_outter-1].substring(0, data_columnI_xlsx_outter[quantity_of_position_outter-1].length - 1) 
data_columnJ_xlsx_outter[quantity_of_position_outter-1] = data_columnJ_xlsx_outter[quantity_of_position_outter-1].substring(0, data_columnJ_xlsx_outter[quantity_of_position_outter-1].length - 1) 

var data_xlsx_ = [data_columnA_xlsx_outter , data_columnB_xlsx_outter , data_columnC_xlsx_outter , data_columnD_xlsx_outter , data_columnE_xlsx_outter , data_columnF_xlsx_outter , data_columnG_xlsx_outter , data_columnH_xlsx_outter , data_columnI_xlsx_outter , data_columnJ_xlsx_outter]

// console.log(data_xlsx_)
// console.log(String(data_xlsx_[1][1]))
// console.log(data_xlsx_[2])
// console.log(data_xlsx_[3])
// console.log(data_xlsx_[4])
// console.log(data_xlsx_[5][1])
// console.log(data_xlsx_[6])
// console.log(data_xlsx_[7])
// console.log(data_xlsx_[8])
// console.log(data_columnA_xlsx_outter)
// console.log(data_columnB_xlsx_outter)
// console.log(data_columnC_xlsx_outter)
// console.log(data_columnD_xlsx_outter)
// console.log(data_columnE_xlsx_outter)
// console.log(data_columnF_xlsx_outter)
// console.log(data_columnG_xlsx_outter)
// console.log(data_columnH_xlsx_outter)
// console.log(data_columnI_xlsx_outter)
// console.log(data_columnJ_xlsx_outter)

beer_menu.style.height = `${510}px`
beer_menu_sqr.style.height = `${454}px`
beer_menu_sqr_button.style.top = `${374}px`
beer_menu_sqr_snack.style.height = `${0}px`
// console.log("123213")
// console.log(quantity_of_position)

console.log(quantity_of_position_outter)
beer_cards.style.width = `${windowInnerWidth}px`
if(windowInnerWidth < 360){
    beer_cards.style.height = `${quantity_of_position_outter*540}px`
    console.log(quantity_of_position_outter*540)
    beer_cards.style.gridTemplateColumns = `190px`
    beer_cards.style.justifyContent = `center`
}
if((windowInnerWidth >=360) && (windowInnerWidth < 530)){
    quantity_of_position_outter /= 2
    quantity_of_position_outter = Math.ceil(quantity_of_position_outter) 
    // console.log(quantity_of_position_outter)
    beer_cards.style.height = `${quantity_of_position_outter*540}px`
    // console.log(quantity_of_position_outter*540)
    beer_cards.style.gridTemplateColumns = `190px 190px`
}
if((windowInnerWidth >= 530) && (windowInnerWidth < 700)){
    quantity_of_position_outter /= 3
    quantity_of_position_outter = Math.ceil(quantity_of_position_outter) 
    beer_cards.style.height = `${quantity_of_position_outter*540}px`
    // console.log(quantity_of_position_outter*540)
    beer_cards.style.gridTemplateColumns = `190px 190px 190px`
}
if((windowInnerWidth >= 700) && (windowInnerWidth < 870)){
    quantity_of_position_outter /= 4
    quantity_of_position_outter = Math.ceil(quantity_of_position_outter) 
    beer_cards.style.height = `${quantity_of_position_outter*540}px`
    // console.log(quantity_of_position_outter*540)
    beer_cards.style.gridTemplateColumns = `190px 190px 190px 190px`
}
if((windowInnerWidth >= 870) && (windowInnerWidth < 1040)){
    quantity_of_position_outter /= 5
    quantity_of_position_outter = Math.ceil(quantity_of_position_outter) 
    beer_cards.style.height = `${quantity_of_position_outter*540}px`
    // console.log(quantity_of_position_outter*540)
    beer_cards.style.gridTemplateColumns = `190px 190px 190px 190px 190px`
}
function build_card(data_xlsx_, i){
    // console.log(typeof(data_xlsx_))
    // console.log(typeof(i))
    if((typeof(i)==="number")&&(typeof(data_xlsx_)==="object")){
        for (let index = 0; index <= i; index++) {
            beer_cards.insertAdjacentHTML('beforeend',card_template(data_xlsx_ , index))
        }
    }
    else{
        console.log("wrong type of data")
        return
    }

}
function card_template(data_xlsx_ , index) {
    console.log(data_xlsx_[index])
    console.log(index)
    return `
    <div class="beer_cards_card">
        <img src="${data_xlsx_[9][index]}" alt="${data_xlsx_[9][index]}" class="beer_cards_card_img" ></img>
        <div class="beer_cards_card_text">
            <div>-----------------</div>
            <p class="beer_cards_card_text_table_point">название: ${data_xlsx_[1][index]}</p>
            <p class="beer_cards_card_text_table_point">пивоварня: ${data_xlsx_[2][index]}</p>
            <p class="beer_cards_card_text_table_point">крепость: ${data_xlsx_[3][index]}/p>
            <p class="beer_cards_card_text_table_point">объем: ${data_xlsx_[4][index]}</p>
            <p class="beer_cards_card_text_table_point">тип: ${data_xlsx_[5][index]}</p>
            <p class="beer_cards_card_text_table_point">IBU: ${data_xlsx_[6][index]}</p>
            <p class="beer_cards_card_text_table_point">плотность: ${data_xlsx_[7][index]}/p>
            <p class="beer_cards_card_text_table_point">стоимость: ${data_xlsx_[8][index]}руб</p>
            <div class="beer_cards_card_text_btm_line">-----------------</div>
            <div class="beer_cards_card_text_btm">хмель&кофе</div>                    
        </div>
    </div>
    `
}
// console.log(typeof(quantity_of_position_outter))
// console.log(typeof(data_xlsx_outter))
// console.log(data_xlsx_outter)
// beer_cards.insertAdjacentHTML('beforeend',card_template(data_xlsx_ , index))
build_card(data_xlsx_, quantity_of_position_outter)    

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

