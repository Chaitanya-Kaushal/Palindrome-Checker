const input = document.querySelector("input");
const result = document.querySelector("h2");
const button = document.querySelector("button");

button.addEventListener("click",()=>{
    result.style.display="block"
    let inputVal= input.value;
    result.textContent=palindrome(inputVal)


})

const palindrome = str =>{
    if (typeof str == "number"){
        str=str.toString();
    }
    strArry = str.split("");
    revArr = strArry.reverse();
   revStr= revArr.join("");
    if(revStr==str){
        return "It is a palindrome"
    }
    else{
        return "it is not a palindrome"
    }

}

