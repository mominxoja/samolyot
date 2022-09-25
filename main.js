const a =3.6
const b =20.1
const c =70
const d =800

const input = document.querySelector("#value")
const parag =document.querySelector(".parag")
input.addEventListener("keyup", function (){
    parag.textContent =input.value/a
})




const input1 = document.querySelector("#value")
const parag1 =document.querySelector(".parag1")
input.addEventListener("keyup", function (){
    parag1.textContent =input.value/b
})




const input2 = document.querySelector("#value")
const parag2 =document.querySelector(".parag2")
input.addEventListener("keyup", function (){
    parag2.textContent =input.value/c
})




const input3 = document.querySelector("#value")
const parag3 =document.querySelector(".parag3")
input.addEventListener("keyup", function (){
    parag3.textContent =input.value/d
})