// var XLSX = require("xlsx");
// import * as XLSX from './node_modules/xlsx';

// /* load 'fs' for readFile and writeFile support */
// import * as fs from './node_modules/fs';
// XLSX.set_fs(fs);
import * as XLSX from 'https://unpkg.com/xlsx/xlsx.mjs';


const url = "http://127.0.0.1:5500/src/data/table.xlsx";
const workbook = XLSX.read(await (await fetch(url)).arrayBuffer());
const worksheet = workbook.Sheets[workbook.SheetNames[1]];

var ref = worksheet['!ref']

console.log(ref)

for (let cell in worksheet) {
    // console.log('4')
    const value = worksheet[cell].v;
    // console.log('5')
    console.log(value)
    // console.log('6')
    // if(value){
        
    }

    // console.log('1')
// var  workbook = XLSX.read("/src/data/table.xlsx");
// console.log('2')
// let worksheet = workbook.Sheets[workbook.SheetNames[1]];
// console.log('3')
// var ref = worksheet['!ref']

// console.log(ref)
// // for(let i = Number(0); )
// // var quantity_of_position = ref.split("I")
// // console.log(_ref[1])
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