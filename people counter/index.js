//document.getElementById("count-el").innerHTML= 5 

let count = 0

let countEl = document.getElementById("count-el")
function increase(){
    count += 1
    countEl.textContent = count
}

let saveEl = document.getElementById("save-el")
function save(){
    saveEl.textContent += count + " - "
    countEl.textContent = 0
    count -= count
}
let errorEl = document.getElementById("error-el")
function reset(){
    saveEl.textContent = "Previous Entries:"
}

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


let ansEl = document.getElementById("ans-el")

function add(){
    let result = num1 + num2
    ansEl.textContent = "SUM:" + result
}
function sub(){
    let result = num1 - num2
    ansEl.textContent = "SUM:" + result
}
function mul(){
    let result = num1 * num2
    ansEl.textContent = "SUM:" + result
}
function div(){
    let result = num1 / num2
    ansEl.textContent = "SUM:" + result
}
