let result = document.querySelector("#res")
let add = document.querySelector("#btn-one")
let minus = document.querySelector("#btn-two")
let timer = document.querySelector("#timer")
let num = 0;

add.addEventListener("click", function(){
    let newnum = ++num;
    result.textContent = newnum;
    console.log(newnum);
    
})
minus.addEventListener("click", function(){
    let newnum = --num;
    result.textContent = newnum;
    console.log(newnum);
    
})

let count = 10;
let counter = setInterval(function (){
    count--;
    timer.textContent = count;
    if(count ===0){
        clearInterval(counter);
        alert("Time up!")
        
    }
}, 1000)