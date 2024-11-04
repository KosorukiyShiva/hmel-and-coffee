var quantity_of_position_outter = sessionStorage.getItem("quantity_of_position_out");
var quantity_of_position_outter = Number(quantity_of_position_outter)
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

var quantity_of_position_outter_ = quantity_of_position_outter

function build_card(data_xlsx_, i){
    // console.log(i)
    if((typeof(i)==="number")&&(typeof(data_xlsx_)==="object")){
        for (let index = 0; index < i; index++) {
            // console.log(index + 'a')
            beer_cards.insertAdjacentHTML('beforeend',card_template(data_xlsx_ , index))
            // console.log(index + 'c')
        }
    }
    else{
        // console.log("wrong type of data")
        return
    }

}
function card_template(data_xlsx_ , index) {
    // console.log(data_xlsx_[index])
    // console.log(index + 'b')
    return `
    <div class="beer_cards_card">
                <div class="beer_cards_card_image_box">
                    <img src="${data_xlsx_[9][index]}" alt="${data_xlsx_[9][index]}" class="beer_cards_card_img ${data_xlsx_[0][index] =='+' ? 'beer_card_available' : 'beer_card_unavailable'}" ></img>
                    <img src="/src/img/png/product/unavalible.png" alt="/src/img/png/product/unavalible.png" class="beer_cards_card_unavalible_img ${data_xlsx_[0][index] =='+' ? 'beer_cards_card_available' : 'beer_cards_card_unavailable'}" ></img>
                </div>
                <div class="beer_cards_card_text">
                    <div>-----------------</div>
                    <p class="beer_cards_card_text_table_point">название:${data_xlsx_[1][index]}</p>
                    <p class="beer_cards_card_text_table_point">пивоварня:${data_xlsx_[2][index]}</p>
                    <p class="beer_cards_card_text_table_point">крепость:${data_xlsx_[3][index]}</p>
                    <p class="beer_cards_card_text_table_point">объем:${data_xlsx_[4][index]}л</p>
                    <p class="beer_cards_card_text_table_point">тип:${data_xlsx_[5][index]}</p>
                    <p class="beer_cards_card_text_table_point">IBU:${data_xlsx_[6][index]}</p>
                    <p class="beer_cards_card_text_table_point">плотность:${data_xlsx_[7][index]}</p>
                    <p class="beer_cards_card_text_table_point beer_cards_card_text_table_point_price">стоимость:${data_xlsx_[8][index]} руб</p>
                    <div class="beer_cards_card_text_btm_line">-----------------</div>
                    <div class="beer_cards_card_text_btm">хмель&кофе</div>                    
                </div>
        </div>
    `
}
console.log('4')