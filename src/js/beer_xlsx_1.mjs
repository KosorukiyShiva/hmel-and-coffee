import * as XLSX from 'https://unpkg.com/xlsx/xlsx.mjs';


const url = "http://127.0.0.1:5500/src/data/table.xlsx";
const workbook_tab = XLSX.read(await (await fetch(url)).arrayBuffer());
const worksheet_tab = workbook_tab.Sheets[workbook_tab.SheetNames[0]];

var ref_tab = worksheet_tab['!ref'];
// console.log(ref_tab);
var quantity_of_position_tab = ref_tab.split("H");

let data_columnA_buffer_tab = []
let data_columnA_tab = []
let data_columnB_tab = []
let data_columnC_tab = []
let data_columnD_tab = []
let data_columnE_tab = []
let data_columnF_tab = []
let data_columnG_tab = []
let data_columnH_tab = []

var counter_of_positions = [0,0,0,0,0,0,0,0] // переменная для отслеживания повторов кранов в таблице
var state_of_acquiring = true
var data_xlsx_tab = []
// console.log(typeof(worksheet_tab['A3'].v))
// console.log(typeof(worksheet_tab['A1']))
for (let i = 1; i <= Number(quantity_of_position_tab[1]); i++) {
    if(typeof(worksheet_tab['A' + i]) =='undefined'){
        data_columnA_buffer_tab[i-1] = 0
    }
    if(typeof(worksheet_tab['A' + i]) =='object'){
        if(typeof(worksheet_tab['A' + i].v) == 'number'){
            data_columnA_buffer_tab[i-1] = worksheet_tab['A' + i].v;
            counter_of_positions[worksheet_tab['A' + i].v-1] += 1;
            if(counter_of_positions[worksheet_tab['A' + i].v - 1] > 1){
                console.log('invalid table style or data');
                state_of_acquiring = false;
                break;
            }
        }
        else{
            data_columnA_buffer_tab[i-1] = 0
        }
    }
}
// console.log(counter_of_positions)
// console.log(data_columnA_buffer_tab)

if( state_of_acquiring === true){
    for (let i = 1; i <= 8; i++) {
        let index_of_pos = data_columnA_buffer_tab.indexOf(i)
        // console.log(index_of_pos)
        // data_columnA_tab[i] = worksheet_tab['A' + (index_of_pos + 1)].v + ';';
        data_columnB_tab[i - 1] = worksheet_tab['B' + (index_of_pos + 1)].v + ';';
        data_columnC_tab[i - 1] = worksheet_tab['C' + (index_of_pos + 1)].v + ';';
        data_columnD_tab[i - 1] = worksheet_tab['D' + (index_of_pos + 1)].v + ';';
        data_columnE_tab[i - 1] = worksheet_tab['E' + (index_of_pos + 1)].v + ';';
        data_columnF_tab[i - 1] = worksheet_tab['F' + (index_of_pos + 1)].v + ';';
        data_columnG_tab[i - 1] = worksheet_tab['G' + (index_of_pos + 1)].v + ';';
        data_columnH_tab[i - 1] = worksheet_tab['H' + (index_of_pos + 1)].v + ';';
    }
}
sessionStorage.setItem("data_columnB_tab_out", data_columnB_tab)
sessionStorage.setItem("data_columnC_tab_out", data_columnC_tab)
sessionStorage.setItem("data_columnD_tab_out", data_columnD_tab)
sessionStorage.setItem("data_columnE_tab_out", data_columnE_tab)
sessionStorage.setItem("data_columnF_tab_out", data_columnF_tab)
sessionStorage.setItem("data_columnG_tab_out", data_columnG_tab)
sessionStorage.setItem("data_columnH_tab_out", data_columnH_tab)

// console.log(data_columnA_tab)
// console.log(data_columnB_tab)
// console.log(data_columnC_tab)
// console.log(data_columnD_tab)
// console.log(data_columnE_tab)
// console.log(data_columnF_tab)
// console.log(data_columnG_tab)
// console.log(data_columnH_tab)

// for(let i = 1; i <=quantity_of_position_tab[1]; i++){
//     data_columnA_tab[i-1] = worksheet_tab['A' + i];
//     if(typeof(worksheet_tab['A' + i]) == 'undefined'){
//         counter_of_positions[ worksheet_tab['A' + i] - 1] = 0;
//     }
//     if( worksheet_tab['A' + i] <9){
//         counter_of_positions[ worksheet_tab['A' + i] - 1]++;
//     }
//     else if(counter_of_positions[ worksheet_tab['A' + i] - 1] > 1){
//         console.log('error in format of table')
//         state_of_aquaring = false
//         // return
//     }
//     // else{
//     //     console.log('error in format of table')
//     //     state_of_aquaring = false
//     //     // return 
//     // }
//     state_of_aquaring = true
// }
// // console.log
// if(state_of_aquaring === true){
//     // counter_of_positions теперь будет хранит в себе индексы строк необходимых кранов
//     for (let i = 0; i < 8; i++) {
//         counter_of_positions[i] = counter_of_positions.indexOf(i+1)
//     }
//     console.log(counter_of_positions)
// }

