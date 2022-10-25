const displayPreviusValue = document.querySelector('.previusValue')
const displayCurrentValue = document.querySelector('.currentValue')
const buttonNumber = document.querySelectorAll('.number')
const buttonOperator = document.querySelectorAll('.operator')
const borrar = document.querySelector('.borrarAll')
const display = new Display(displayCurrentValue,displayPreviusValue)


buttonNumber.forEach(boton =>{
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML))
})

buttonOperator.forEach(boton =>{
    boton.addEventListener('click',() => display.computar(boton.value))
})

event.preventDefault()