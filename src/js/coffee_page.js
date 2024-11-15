const sirops_table = document.getElementById('sirops_table')
const sirops_table_promotion = document.getElementById('sirops_table_promotion')
const sirops_back = document.getElementById('sirops_back')
const sirops = document.getElementById('sirops')

if (windowInnerWidth <= 370){
    sirops_table.style.left = `${(windowInnerWidth - 220)/2}px`
    sirops_table.style.top = `${25+280}px`
    sirops_table_promotion.style.left = `${(windowInnerWidth - 125)/2}px`
    sirops_table_promotion.style.top = `${20}px`
    sirops_back.style.height = `${670}px`
    sirops.style.height = `${670}px`
}
if (windowInnerWidth <= 700 && windowInnerWidth >= 370){
    sirops_table.style.left = `${(windowInnerWidth - (prcnt_windowInnerWidth*95.8))/2}px`
    sirops_table_promotion.style.left= `${240+((windowInnerWidth - (prcnt_windowInnerWidth*95.8))/2)}px`
}
if(windowInnerWidth > 700){
    sirops_table.style.left = `${half_windowInnerWidth - 225}px`
}
