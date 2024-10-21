/*в файле getter
const windowInnerWidth = window.innerWidth
const windowInnerHeight = window.innerHeight
*/
/*в файле scripts
const prcnt_windowInnerHeight = Number(windowInnerHeight)/100
 */
const carousel_block = document.getElementById('carousel_block')

const slides_img_0 = document.getElementById("slides_img_0")
const slides_img_1 = document.getElementById("slides_img_1")
const slides_img_2 = document.getElementById("slides_img_2")
const slides_img_3 = document.getElementById("slides_img_3")
const slides_img_4 = document.getElementById("slides_img_4")
const slides_img_5 = document.getElementById("slides_img_5")
const slides_img_6 = document.getElementById("slides_img_6")
const slides_img_7 = document.getElementById("slides_img_7")
const slides_img_8 = document.getElementById("slides_img_8")
const slides_img_9 = document.getElementById("slides_img_9")

const slides_carousel = document.getElementById('slides_carousel')

carousel_block.style.width = `${windowInnerWidth}px`
slides_carousel.style.width = `${prcnt_windowInnerWidth*69}px`

slides_img_0.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_0.style.height = `${prcnt_windowInnerHeight*43}px`
slides_img_1.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_1.style.height = `${prcnt_windowInnerHeight*43}px`
slides_img_2.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_2.style.height = `${prcnt_windowInnerHeight*43}px`
slides_img_3.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_3.style.height = `${prcnt_windowInnerHeight*43}px`
slides_img_4.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_4.style.height = `${prcnt_windowInnerHeight*43}px`
slides_img_5.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_5.style.height = `${prcnt_windowInnerHeight*43}px`
slides_img_6.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_6.style.height = `${prcnt_windowInnerHeight*43}px`
slides_img_7.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_7.style.height = `${prcnt_windowInnerHeight*43}px`
slides_img_8.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_8.style.height = `${prcnt_windowInnerHeight*43}px`
slides_img_9.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_9.style.height = `${prcnt_windowInnerHeight*43}px`