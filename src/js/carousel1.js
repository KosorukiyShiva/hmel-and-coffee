/*в файле getter
const windowInnerWidth = window.innerWidth
const windowInnerHeight = window.innerHeight
*/
/*в файле scripts
const prcnt_windowInnerHeight = Number(windowInnerHeight)/100
 */
const carousel_block1 = document.getElementById('carousel_block1')

const slides_img_01 = document.getElementById("slides_img_01")
const slides_img_11 = document.getElementById("slides_img_11")
const slides_img_21 = document.getElementById("slides_img_21")
const slides_img_31 = document.getElementById("slides_img_31")
const slides_img_41 = document.getElementById("slides_img_41")
const slides_img_51 = document.getElementById("slides_img_51")
const slides_img_61 = document.getElementById("slides_img_61")
const slides_img_71 = document.getElementById("slides_img_71")
const slides_img_81 = document.getElementById("slides_img_81")
const slides_img_91 = document.getElementById("slides_img_91")

const slides_carousel1 = document.getElementById('slides_carousel1')

carousel_block1.style.width = `${windowInnerWidth}px`
carousel_block1.style.height = `${prcnt_windowInnerHeight*43}px`
slides_carousel1.style.width = `${prcnt_windowInnerWidth*69}px`
slides_carousel1.style.height = `${prcnt_windowInnerHeight*43+10}px`

slides_img_01.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_01.style.height = `${prcnt_windowInnerHeight*43}px`
slides_img_11.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_11.style.height = `${prcnt_windowInnerHeight*43}px`
slides_img_21.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_21.style.height = `${prcnt_windowInnerHeight*43}px`
slides_img_31.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_31.style.height = `${prcnt_windowInnerHeight*43}px`
slides_img_41.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_41.style.height = `${prcnt_windowInnerHeight*43}px`
slides_img_51.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_51.style.height = `${prcnt_windowInnerHeight*43}px`
slides_img_61.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_61.style.height = `${prcnt_windowInnerHeight*43}px`
slides_img_71.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_71.style.height = `${prcnt_windowInnerHeight*43}px`
slides_img_81.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_81.style.height = `${prcnt_windowInnerHeight*43}px`
slides_img_91.style.flexBasis = `${prcnt_windowInnerWidth*62}px`
slides_img_91.style.height = `${prcnt_windowInnerHeight*43}px`