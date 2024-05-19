let result = document.querySelector("#res")
let add = document.querySelector("#btn-one")
let minus = document.querySelector("#btn-two")
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