import './style.css'
let state = {

}
function render(){

let headerEl= document.querySelector(".header") 
if(headerEl===null) return
headerEl.textContent=``
let div1El= document.createElement("div")
div1El.className=("header__left")
let h3El= document.createElement("h3")
h3El.className=("hollixton__logo")
h3El.textContent=("HOLLIXTON")
let navEl= document.createElement("nav")

let UlEl= document.createElement("ul")
UlEl.className=("header__item")
let Li1El= document.createElement("li")
Li1El.textContent=("Girls")
let Li2El= document.createElement("li")
Li2El.textContent=("Guys")
let Li3El= document.createElement("li")
Li3El.textContent=("Sale")
UlEl.append(Li1El, Li2El, Li3El)
navEl.append(UlEl)
div1El.append(h3El ,navEl)

let div2El= document.createElement("div")
div2El.className=("header__right")
let ul2El= document.createElement("ul")
ul2El.className=("header__item")
let li21El= document.createElement("li")
let img1El= document.createElement("img")
img1El.src="/src/search.png"
img1El.width=30
img1El.alt="Search icon"
li21El.append(img1El)

let li22El= document.createElement("li")
let img2El= document.createElement("img")
img2El.src="/src/person.png"
img2El.width=30
img2El.alt="Person icon"
li22El.append(img2El)

let li23El= document.createElement("li")
let img3El= document.createElement("img")
img3El.src="/src/bag.png"
img3El.width=30
img3El.alt="Bag icon"
li23El.append(img3El)
ul2El.append(li21El, li22El, li23El)
 div2El.append(ul2El)
 headerEl.append( div1El, div2El)

}

render()