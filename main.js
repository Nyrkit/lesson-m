
// console.log(document.querySelector('.title') )

let firstNumber = document.getElementById('first_number')
let secondNumber = document.getElementById('second_number')
let btnPlus = document.querySelector('#btn_plus')
let btnMinus = document.querySelector('#btn_minus')
let btnMnosh = document.querySelector('#btn_mnosh')
let btnDil = document.querySelector('#btn_dil')
let result = document.querySelector('.goga2')

btnPlus.onclick = function (){
    let sum = firstNumber.value*1 + secondNumber.value*1
    result.textContent = sum
}
btnMinus.onclick = function (){
    let sum = firstNumber.value*1 - secondNumber.value*1
    result.textContent = sum
}
btnMnosh.onclick = function (){
    let sum = firstNumber.value*1 * secondNumber.value*1
    result.textContent = sum
}
btnDil.onclick = function (){
    if (secondNumber !=0) {
        let sum = firstNumber.value*1 / secondNumber.value*1
        result.textContent = sum
    } else{
        result.textContent = ('Деление на 0 невозможно')
    }
}