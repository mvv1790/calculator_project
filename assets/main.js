

let display = document.getElementById('display')

let buttons = document.querySelector('button')
buttons.addEventListener('click', e => {
    console.log('click')
})

function showDisplay(){
    display.innerText = " "
    alert("hello")
    console.log('clanck')
}

showDisplay()
