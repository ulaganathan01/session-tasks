const result = document.querySelector(".display input");
function calculate(event){
    const callValue = event.target.textContent;
    if(callValue == "="){
        result.value = eval(result.value);
    }else if(callValue){
        result.value += callValue;
    }
    
    
}
function clrVal(){
    result.value = "";
}
function key(event){
    event.preventDefault();
    const key = event.key;
    console.log(key);
    if(key == "1" || key == "2" || key == "3" || key == "4" || key == "5" || key == "6" || key == "7" || key == "8" || key == "9" || key == "0" || key == "+" || key == "-" || key == "*" || key == "/" || key == "%" || key == "."){
        result.value += key;
    }
}