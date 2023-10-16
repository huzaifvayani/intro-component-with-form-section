const btn = document.querySelector(".btn");
let form = document.querySelector(".form");
// first input variables
let input1 = document.querySelector(".input-1");
let error = document.querySelector(".error");
// second input variables
const butn = document.querySelector(".butn");
let input2 = document.querySelector(".input-2");
let error1 = document.querySelector(".error-1");
// third input variables
const bitn = document.querySelector(".bitn");
let input3 = document.querySelector(".input-3");
let error2 = document.querySelector(".error-2");
// fourth input variables
const bttn =document.querySelector(".bttn");
let input4 = document.querySelector(".input-4");
let error3 = document.querySelector(".error-3");
btn.addEventListener("click", function(){
    if(input1.value === ""){
        input1.style.border = "2px solid #dc625f";
        input1.style.backgroundImage ="url('images/icon-error.svg')";
        input1.style.backgroundRepeat = "no-repeat";
        input1.style.backgroundPosition = "92% 50%";
        input1.style.marginBottom = "0";
        error.textContent = "First name cannot be empty";
        error.style.marginTop = "5px";
        form.style.height = "440px";
    } else if(input1.value !== ""){
        input1.style.border = "1px solid #e5e5e5";
        error.textContent = "";
        input1.style.backgroundImage ="none";
        input1.style.marginBottom = "20px";
    }
});
butn.addEventListener("click", function(){
    if(input2.value === ""){
        input2.style.border = "2px solid #dc625f";
        input2.style.backgroundImage ="url('images/icon-error.svg')";
        input2.style.backgroundRepeat = "no-repeat";
        input2.style.backgroundPosition = "92% 50%";
        input2.style.marginBottom = "0";
        error1.textContent = "Last name cannot be empty";
        error1.style.marginTop = "5px";
        form.style.height = "460px";
    } else if(input2.value !== ""){
        input2.style.border = "1px solid #e5e5e5";
        error1.textContent = "";
        input2.style.backgroundImage ="none";
        input2.style.marginBottom = "20px";
        form.style.height = "440px";
    }
});
bitn.addEventListener("click", function(){
    if(input3.value.indexOf("@") == -1){
        input3.style.border = "2px solid #dc625f";
        input3.style.backgroundImage ="url('images/icon-error.svg')";
        input3.style.backgroundRepeat = "no-repeat";
        input3.style.backgroundPosition = "92% 50%";
        input3.style.marginBottom = "0";
        error2.textContent = "Looks likes this is not an email";
        error2.style.marginTop = "5px";
        form.style.height = "480px";
    } else if(input3.value.indexOf("@")){
        input3.style.border = "1px solid #e5e5e5";
        error2.textContent = "";
        input3.style.backgroundImage ="none";
        input3.style.marginBottom = "20px";
        form.style.height = "440px";
    }
});
bttn.addEventListener("click", function(){
    if(input4.value.indexOf("#") == -1){
        input4.style.border = "2px solid #dc625f";
        input4.style.backgroundImage ="url('images/icon-error.svg')";
        input4.style.backgroundRepeat = "no-repeat";
        input4.style.backgroundPosition = "92% 50%";
        input4.style.marginBottom = "0";
        error3.textContent = "Looks likes this is not an email";
        error3.style.marginTop = "5px";
        form.style.height = "500px";
    } else if(input3.value.indexOf("#")){
        input4.style.border = "1px solid #e5e5e5";
        error3.textContent = "";
        input4.style.backgroundImage ="none";
        input4.style.marginBottom = "20px";
        form.style.height = "440px";
    }
});