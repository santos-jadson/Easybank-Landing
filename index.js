let hamburger = document.getElementsByClassName('hamburger-menu')[0]
const menu = document.getElementsByClassName('menu-options')[0]

const open = "/images/icon-hamburger.svg"
const close = "/images/icon-close.svg"

hamburger.addEventListener('click', e => {
    if (e.target.attributes[0].value === open){
        menu.classList.add('hamburger')    
        e.target.attributes[0].value = close
    } else {
        e.target.attributes[0].value = open
        menu.classList.remove('hamburger')
    }
})