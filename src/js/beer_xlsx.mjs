// var XLSX = require("xlsx");
// import * as XLSX from './node_modules/xlsx';

// /* load 'fs' for readFile and writeFile support */
// import * as fs from './node_modules/fs';
// XLSX.set_fs(fs);
import * as XLSX from 'https://unpkg.com/xlsx/xlsx.mjs';

// http://192.168.1.23:5500/src/data/table.xlsx
const url = "http://192.168.1.23:5500/src/data/table.xlsx";
const workbook = XLSX.read(await (await fetch(url)).arrayBuffer());
const worksheet = workbook.Sheets[workbook.SheetNames[1]];

var ref = worksheet['!ref']
var quantity_of_position = ref.split("J")
// console.log(quantity_of_position[1])
sessionStorage.clear();
sessionStorage.setItem("quantity_of_position_out", quantity_of_position[1])

var data_xlsx= []    

let data_columnA_xlsx = [];
let data_columnB_xlsx = [];
let data_columnC_xlsx = [];
let data_columnD_xlsx = [];
let data_columnE_xlsx = [];
let data_columnF_xlsx = [];
let data_columnG_xlsx = [];
let data_columnH_xlsx = [];
let data_columnI_xlsx = [];
let data_columnJ_xlsx = [];

for (let i = 1; i <= quantity_of_position[1]; ++i) {
    data_columnA_xlsx[i-1] = worksheet['A' + i].v + ';';
    data_columnB_xlsx[i-1] = worksheet['B' + i].v + ';'; 
    data_columnC_xlsx[i-1] = worksheet['C' + i].v + ';';
    data_columnD_xlsx[i-1] = worksheet['D' + i].v + ';';
    data_columnE_xlsx[i-1] = worksheet['E' + i].v + ';';
    data_columnF_xlsx[i-1] = worksheet['F' + i].v + ';';
    data_columnG_xlsx[i-1] = worksheet['G' + i].v + ';';
    data_columnH_xlsx[i-1] = worksheet['H' + i].v + ';';
    data_columnI_xlsx[i-1] = worksheet['I' + i].v + ';';
    data_columnJ_xlsx[i-1] = worksheet['J' + i].v + ';';
    // data_xlsx.push(data_row_xlsx)
    // console.log(data_row_xlsx)
} 
sessionStorage.setItem("data_columnA_xlsx_out", data_columnA_xlsx);
sessionStorage.setItem("data_columnB_xlsx_out", data_columnB_xlsx);
sessionStorage.setItem("data_columnC_xlsx_out", data_columnC_xlsx);
sessionStorage.setItem("data_columnD_xlsx_out", data_columnD_xlsx);
sessionStorage.setItem("data_columnE_xlsx_out", data_columnE_xlsx);
sessionStorage.setItem("data_columnF_xlsx_out", data_columnF_xlsx);
sessionStorage.setItem("data_columnG_xlsx_out", data_columnG_xlsx);
sessionStorage.setItem("data_columnH_xlsx_out", data_columnH_xlsx);
sessionStorage.setItem("data_columnI_xlsx_out", data_columnI_xlsx);
sessionStorage.setItem("data_columnJ_xlsx_out", data_columnJ_xlsx);

console.log('1')

// console.log(data_xlsx)
// sessionStorage.setItem("data_xlsx_out", data_xlsx[0])
// sessionStorage.setItem("data_xlsx_out", data_xlsx[1])
// console.log(ref)

// for (let cell in worksheet) {
//     // console.log('4')
//     const value = worksheet[cell].v;
//     // console.log('5')
//     console.log(value)
//     // console.log('6')
//     // if(value){
        
//     }

    // console.log('1')
// var  workbook = XLSX.read("/src/data/table.xlsx");
// console.log('2')
// let worksheet = workbook.Sheets[workbook.SheetNames[1]];
// console.log('3')
// var ref = worksheet['!ref']

// console.log(ref)
// // for(let i = Number(0); )

// // for (let i = 0; i < array.length; i++) {
// //     const element = array[i];
    
// // }
// // const value = worksheet['A11'].v;
// // console.log(value)
// for (let cell in worksheet) {
//     console.log('4')
//     const value = worksheet[cell].v;
//     console.log('5')
//     console.log(value)
//     console.log('6')
//     // if(value){
        
//     }
// }