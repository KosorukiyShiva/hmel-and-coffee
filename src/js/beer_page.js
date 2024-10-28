const coffe_menu_sqr_sirops_text = document.getElementById('coffe_menu_sqr_sirops_text')
const beer_menu_sqr_snack = document.getElementById('beer_menu_sqr_snack')
let open_state = false

beer_menu.style.height = `${510}px`
beer_menu_sqr.style.height = `${454}px`
beer_menu_sqr_button.style.top = `${374}px`
beer_menu_sqr_snack.style.height = `${0}px`

function beer_table(){
    if(open_state === false){
        open_state = !open_state
        console.log(open_state)
        beer_menu.style.height = `${925}px`
        beer_menu_sqr.style.height = `${870}px`
        beer_menu_sqr_button.style.top = `${790}px`
        beer_menu_sqr_snack.style.height = `${420}px`
        coffe_menu_sqr_sirops_text.textContent = '↑свернуть↑'
        return
    }
    if (open_state === true) {
        open_state = !open_state
        console.log(open_state)
        beer_menu.style.height = `${510}px`
        beer_menu_sqr.style.height = `${454}px`
        beer_menu_sqr_button.style.top = `${374}px`
        beer_menu_sqr_snack.style.height = `${0}px`
        coffe_menu_sqr_sirops_text.textContent = '↓к пиву↓'
        return
    }
}