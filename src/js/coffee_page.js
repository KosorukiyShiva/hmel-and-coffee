const sirops_table = document.getElementById('sirops_table')
const sirops_table_promotion = document.getElementById('sirops_table_promotion')

if (windowInnerWidth <= 700){
    sirops_table.style.left = `${(windowInnerWidth - (prcnt_windowInnerWidth*95.8))/2}px`
    sirops_table_promotion.style.left= `${240+((windowInnerWidth - (prcnt_windowInnerWidth*95.8))/2)}px`
}
if(windowInnerWidth > 700){
    sirops_table.style.left = `${half_windowInnerWidth - 225}px`
}
