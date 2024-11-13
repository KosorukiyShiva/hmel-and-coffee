// const poster_block_scroller_sqr_block_0_text = document.getElementById('poster_block_scroller_sqr_block_0_text')
// const poster_block_scroller_sqr_block_1_text = document.getElementById('poster_block_scroller_sqr_block_1_text')
// const poster_block_scroller_sqr_block_2_text = document.getElementById('poster_block_scroller_sqr_block_2_text')
// const poster_block_scroller_sqr_block_3_text = document.getElementById('poster_block_scroller_sqr_block_3_text')
// const poster_block_scroller_sqr_block_4_text = document.getElementById('poster_block_scroller_sqr_block_4_text')
// const poster_block_scroller_sqr_block_5_text = document.getElementById('poster_block_scroller_sqr_block_5_text')
// const poster_block_scroller_sqr_block_6_text = document.getElementById('poster_block_scroller_sqr_block_6_text')
// const poster_block_scroller_sqr_block_7_text = document.getElementById('poster_block_scroller_sqr_block_7_text')
// const poster_block_scroller_sqr_block_8_text = document.getElementById('poster_block_scroller_sqr_block_8_text')
// const poster_block_scroller_sqr_block_9_text = document.getElementById('poster_block_scroller_sqr_block_9_text')
// const poster_block_scroller_sqr_block_10_text = document.getElementById('poster_block_scroller_sqr_block_10_text')
// const poster_block_scroller_sqr_block_11_text = document.getElementById('poster_block_scroller_sqr_block_11_text')
// const poster_block_scroller_sqr_block_12_text = document.getElementById('poster_block_scroller_sqr_block_12_text')
// const poster_block_scroller_sqr_block_13_text = document.getElementById('poster_block_scroller_sqr_block_13_text')
// const poster_block_scroller_sqr_block_14_text = document.getElementById('poster_block_scroller_sqr_block_14_text')
// const poster_block_scroller_sqr_block_15_text = document.getElementById('poster_block_scroller_sqr_block_15_text')
// const poster_block_scroller_sqr_block_16_text = document.getElementById('poster_block_scroller_sqr_block_16_text')
// const poster_block_scroller_sqr_block_17_text = document.getElementById('poster_block_scroller_sqr_block_17_text')
// const poster_block_scroller_sqr_block_18_text = document.getElementById('poster_block_scroller_sqr_block_18_text')
// const poster_block_scroller_sqr_block_19_text = document.getElementById('poster_block_scroller_sqr_block_19_text')

var data_column_A_year_poster_outter = sessionStorage.getItem("data_column_A_year_poster_out")
var data_column_A_month_poster_outter = sessionStorage.getItem("data_column_A_month_poster_out")
var data_column_A_day_poster_outter = sessionStorage.getItem("data_column_A_day_poster_out")
var data_column_B_poster_outter = sessionStorage.getItem("data_column_B_poster_out")
var quantity_of_poster_events_outter = sessionStorage.getItem("quantity_of_poster_events_out")

data_column_A_year_poster_outter = data_column_A_year_poster_outter.split('/,')
data_column_A_month_poster_outter = data_column_A_month_poster_outter.split('/,')
data_column_A_day_poster_outter = data_column_A_day_poster_outter.split('/,')
data_column_B_poster_outter = data_column_B_poster_outter.split('/,')

data_column_A_year_poster_outter[quantity_of_poster_events_outter - 1] = data_column_A_year_poster_outter[quantity_of_poster_events_outter - 1].substring(0, data_column_A_year_poster_outter[quantity_of_poster_events_outter - 1].length - 1)
data_column_A_month_poster_outter[quantity_of_poster_events_outter - 1] = data_column_A_month_poster_outter[quantity_of_poster_events_outter - 1].substring(0, data_column_A_month_poster_outter[quantity_of_poster_events_outter - 1].length - 1)
data_column_A_day_poster_outter[quantity_of_poster_events_outter - 1] = data_column_A_day_poster_outter[quantity_of_poster_events_outter - 1].substring(0, data_column_A_day_poster_outter[quantity_of_poster_events_outter - 1].length - 1)
data_column_B_poster_outter[quantity_of_poster_events_outter - 1] = data_column_B_poster_outter[quantity_of_poster_events_outter - 1].substring(0,data_column_B_poster_outter[quantity_of_poster_events_outter-1].length - 1)

var data_xlsx_poster = [data_column_A_year_poster_outter, data_column_A_month_poster_outter, data_column_A_day_poster_outter, data_column_B_poster_outter]
console.log(data_column_A_year_poster_outter)
console.log(data_column_A_month_poster_outter)
console.log(data_column_A_day_poster_outter)
console.log(data_column_B_poster_outter)

var const_array=[poster_block_scroller_sqr_block_0_text, poster_block_scroller_sqr_block_1_text, poster_block_scroller_sqr_block_2_text, poster_block_scroller_sqr_block_3_text, poster_block_scroller_sqr_block_4_text, poster_block_scroller_sqr_block_5_text, poster_block_scroller_sqr_block_6_text, poster_block_scroller_sqr_block_7_text, poster_block_scroller_sqr_block_8_text, poster_block_scroller_sqr_block_9_text, poster_block_scroller_sqr_block_10_text, poster_block_scroller_sqr_block_11_text, poster_block_scroller_sqr_block_12_text, poster_block_scroller_sqr_block_13_text, poster_block_scroller_sqr_block_14_text, poster_block_scroller_sqr_block_15_text, poster_block_scroller_sqr_block_16_text, poster_block_scroller_sqr_block_17_text, poster_block_scroller_sqr_block_18_text, poster_block_scroller_sqr_block_19_text]

console.log(poster_data_template(data_xlsx_poster, 0))

console.log(poster_data_template(data_xlsx_poster, 1))
function build_data_poster (data_xlsx_poster, index){
    var index_ = 0
    for(let i = 0; i < quantity_of_poster_events_outter; i++){
        var const_array_ = const_array[i]
        console.log(i)
        const_array_.insertAdjacentHTML('afterbegin', poster_data_template(data_xlsx_poster, i))
        index++
        if(index_ === index){
            break
        }
    }
}
function poster_data_template(data_xlsx_poster, i){
    return `
    <p>${data_xlsx_poster[3][i] + ' ' + data_xlsx_poster[2][i] + '.' + data_xlsx_poster[1][i] + '.' + data_xlsx_poster[0][i] } </p>
    `
}