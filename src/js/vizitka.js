const vizitka =document.getElementById('vizitka')
const vizitka_sqr =document.getElementById('vizitka_sqr')
const vizitka_sqr_by =document.getElementById('vizitka_sqr_by')
const vizitka_sqr_by_name =document.getElementById('vizitka_sqr_by_name')
const vizitka_sqr_contact =document.getElementById('vizitka_sqr_contact')
const vizitka_sqr_contact_info =document.getElementById('vizitka_sqr_contact_info')

vizitka_sqr.style.width = `${prcnt_windowInnerWidth * 95.8-8}px`
vizitka_sqr.style.left = `${(windowInnerWidth -(prcnt_windowInnerWidth * 95.8))/2}px`
vizitka_sqr_by.style.left = `${(prcnt_windowInnerWidth * 95.8-8 - 174)/2}px`
vizitka_sqr_by_name.style.left = `${(prcnt_windowInnerWidth * 95.8-8 - 120)/2}px`
vizitka_sqr_contact.style.left = `${(prcnt_windowInnerWidth * 95.8-8 - 100)/2}px`
vizitka_sqr_contact_info.style.left = `${(prcnt_windowInnerWidth * 95.8-8 - 350)/2}px`