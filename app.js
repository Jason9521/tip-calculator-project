
let bill = document.getElementById("bill")
let count = document.getElementById("count")

let select = document.getElementById("select")

let five = document.getElementById("five")
let ten = document.getElementById("ten")
let fiftheen = document.getElementById("fiftheen")
let twentyFive = document.getElementById("twenty-five")
let fifty = document.getElementById("fifty")
let custom = document.getElementById("custom")

let tipPercentage = 0

let tip = (bill * tipPercentage) / count
let total = bill + (bill * tipPercentage) / count

five.addEventListener("click", function() {
    five.style.backgroundColor = "#26c2ae";
    
    ten.style.backgroundColor = "#00474b";
    fiftheen.style.backgroundColor = "#00474b";
    twentyFive.style.backgroundColor = "#00474b";
    fifty.style.backgroundColor = "#00474b";

    tipPercentage = 0.05;
    
})

ten.addEventListener("click", function() {
    ten.style.backgroundColor = "#26c2ae"

    five.style.backgroundColor = "#00474b";
    fiftheen.style.backgroundColor = "#00474b";
    twentyFive.style.backgroundColor = "#00474b";
    fifty.style.backgroundColor = "#00474b";

    tipPercentage = 0.1
})

fiftheen.addEventListener("click", function() {
    fiftheen.style.backgroundColor = "#26c2ae"

    five.style.backgroundColor = "#00474b";
    ten.style.backgroundColor = "#00474b";
    twentyFive.style.backgroundColor = "#00474b";
    fifty.style.backgroundColor = "#00474b";

    tipPercentage = 0.15
})

twentyFive.addEventListener("click", function() {
    twentyFive.style.backgroundColor = "#26c2ae"

    five.style.backgroundColor = "#00474b";
    ten.style.backgroundColor = "#00474b";
    fiftheen.style.backgroundColor = "#00474b";
    fifty.style.backgroundColor = "#00474b";

    tipPercentage = 0.25
})

fifty.addEventListener("click", function() {
    fifty.style.backgroundColor = "#26c2ae"

    five.style.backgroundColor = "#00474b";
    ten.style.backgroundColor = "#00474b";
    fiftheen.style.backgroundColor = "#00474b";
    twentyFive.style.backgroundColor = "#00474b";
    

    tipPercentage = 0.5
})

custom.addEventListener("click", function() {
    // select.getElementsByTagName("span").style.backgroundColor = "#00474b"
    // five.style.backgroundColor = "#26c2ae"
    tipPercentage = custom / 10
})

// function main() {
//    five.style.backgroundColor = "#00474b"
//    ten.style.backgroundColor = "#00474b"
//    fiftheen.style.backgroundColor = "#00474b"
//    twentyFive.style.backgroundColor = "#00474b"
//    fifty.style.backgroundColor = "#00474b"
// }

// main()