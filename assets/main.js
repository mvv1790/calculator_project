const buttons = Array.from(document.querySelectorAll('button'))

let display = document.getElementById('display');

document.getElementsByClassName("button").addEventListener("click", function() {
    alert('click')
})


function add(x,y) {
    return x+y
}

function substract(x,y) {
    return x-y
}

function divide (x,y) {
    if(y === 0) {
        return "Error"
    } else {
        return x/y
    }
}

function multiply(x,y) {
    return x*y
}

function del(){
    calculator.displayValue = calculator.displayValue.slice(0, -1)
}
