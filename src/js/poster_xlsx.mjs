
import * as XLSX from 'https://unpkg.com/xlsx/xlsx.mjs';


const url = "/src/data/table.xlsx";
const workbook_poster = XLSX.read(await (await fetch(url)).arrayBuffer());
const worksheet_poster = workbook_poster.Sheets[workbook_poster.SheetNames[2]];


var ref_poster = worksheet_poster['!ref']
var actual_date = new Date()
var actual_year = String(actual_date.getFullYear())
actual_year = Number(actual_year.slice(2,4))
console.log(actual_year)

var actual_month = Number(actual_date.getMonth())
var actual_day = Number(actual_date.getDate())

var quantity_of_poster_events = 0
var data_column_A_poster_buffer = [] 
var data_column_A_year_poster = []
var data_column_A_month_poster = []
var data_column_A_day_poster = []
var data_column_B_poster = []
// console.log(actual_date)
// console.log(actual_year)
// console.log(actual_month)
// console.log(actual_day)


// console.log(data_column_A_poster_buffer)
var quantity_of_position_poster = ref_poster.split('B')
console.log(Number(quantity_of_position_poster[1]))
console.log(worksheet_poster['A3'].w)
for (let i = 1; i <= Number(quantity_of_position_poster[1]); i++) {
    data_column_A_poster_buffer[i - 1] = worksheet_poster['A' + i].w;
    data_column_A_poster_buffer[i - 1] = data_column_A_poster_buffer[i-1].split('/')
    // console.log(data_column_A_poster_buffer[i-1][0])
    // console.log(data_column_A_poster_buffer[i-1][1])
    // console.log(data_column_A_poster_buffer[i-1][2])
}
// console.log(data_column_A_poster_buffer)
for (let i = 1; i <= quantity_of_position_poster[1]; i++) {
    if(actual_year === Number(data_column_A_poster_buffer[i-1][2])){
        if(actual_month <= Number(data_column_A_poster_buffer[i-1][0])){
            if(actual_day <= Number(data_column_A_poster_buffer[i-1][1])){
                data_column_A_year_poster.push(data_column_A_poster_buffer[i-1][2] + '/')
                data_column_A_month_poster.push(data_column_A_poster_buffer[i-1][0] + '/')
                data_column_A_day_poster.push(data_column_A_poster_buffer[i-1][1] + '/')
                data_column_B_poster.push(worksheet_poster['B' + i].v + '/')
                quantity_of_poster_events++
            }
        }
    }
    else if(actual_year < Number(data_column_A_poster_buffer[i-1][2])){
        data_column_A_year_poster.push(data_column_A_poster_buffer[i-1][2] + '/')
        data_column_A_month_poster.push(data_column_A_poster_buffer[i-1][0] + '/')
        data_column_A_day_poster.push(data_column_A_poster_buffer[i-1][1] + '/')
        data_column_B_poster.push(worksheet_poster['B' + i].v + '/')
        quantity_of_poster_events++
    }
}
sessionStorage.setItem("data_column_A_year_poster_out", data_column_A_year_poster)
sessionStorage.setItem("data_column_A_month_poster_out", data_column_A_month_poster)
sessionStorage.setItem("data_column_A_day_poster_out", data_column_A_day_poster)
sessionStorage.setItem("data_column_B_poster_out", data_column_B_poster)
sessionStorage.setItem("quantity_of_poster_events_out", quantity_of_poster_events)
console.log(data_column_A_year_poster)
console.log(data_column_A_month_poster)
console.log(data_column_A_day_poster)
console.log(data_column_B_poster)