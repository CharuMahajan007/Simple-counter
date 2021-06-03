const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
var number = document.getElementById("number");
var count = 0;

increase.addEventListener("click",()=>{
     count++;
     
     if(count < 0){
         number.style.color = "red";
     }
     else if(count > 0){
         number.style.color = "green";
     }
     else{
         number.style.color = "black";
     }
     number.textContent = count;
})
decrease.addEventListener("click",()=>{
    count--;
    
    if(count < 0){
        number.style.color = "red";
    }
    else if(count > 0){
        number.style.color = "green";
    }
    else{
        number.style.color = "black";
    }
    number.textContent = count;
})
reset.addEventListener("click",()=>{
    count = 0;
    
    number.textContent = count;
    number.style.color = "black";
})