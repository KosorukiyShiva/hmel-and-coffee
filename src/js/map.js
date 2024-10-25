const map = document.getElementById('map')
const map_sqr = document.getElementById('map_sqr')
const map_sqr_head_text = document.getElementById('map_sqr_head_text')
const map_sqr_map = document.getElementById('map_sqr_map')
const map_sqr_text_adress = document.getElementById('map_sqr_text_adress')
const map_sqr_phone_icon = document.getElementById('map_sqr_phone_icon')
const map_sqr_phone_num = document.getElementById('map_sqr_phone_num')

map.style.width = `${windowInnerWidth}px`
map_sqr.style.width = `${prcnt_windowInnerWidth * 95.8-8}px`
map_sqr.style.left = `${(windowInnerWidth -(prcnt_windowInnerWidth * 95.8))/2}px`

map_sqr_head_text.style.left = `${(prcnt_windowInnerWidth * 95.8-8 - 306)/2}px`
map_sqr_map.style.left = `${(prcnt_windowInnerWidth * 95.8-8 - 306)/2}px`
map_sqr_text_adress.style.left = `${(prcnt_windowInnerWidth * 95.8 -8 - 306)/2}px`
map_sqr_phone_icon.style.left = `${(prcnt_windowInnerWidth * 95.8 -8 - 306)/2}px`
map_sqr_phone_num.style.left = `${(prcnt_windowInnerWidth * 95.8 - 8 - 306 + 85)/2}px`
