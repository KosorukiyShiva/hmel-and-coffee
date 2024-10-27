const coffe_menu_sqr_sirops_text = document.getElementById('coffe_menu_sqr_sirops_text')
const beer_menu_sqr_snack = document.getElementById('beer_menu_sqr_snack')
let open_state = false

function beer_table(){
    if(open_state === false){
        open_state = !open_state
        console.log(open_state)
        beer_menu.style.height = `${1005}px`
        beer_menu_sqr.style.height = `${950}px`
        beer_menu_sqr_button.style.top = `${870}px`
        beer_menu_sqr_snack.style.height = `${395}px`
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




// <ul>
//                                     <li>
                                        
//                                     </li>
//                                 </ul>
//                                 ● Арахис................................100
//                                 ● Арахис в оболочке..............150
//                                 ● Гренки...……………...….…....150
//                                 ● Вобла...………………...……....100
//                                 ● Фисташки...……………...…....100