function about(){
    window.alert("Made by: Jarome Sta.Cruz");
}
function Sum(){
    let n1,n2,sum;
    n1=parseFloat(document.getElementById("num1").value)
    n2=parseFloat(document.getElementById("num2").value)
    sum=n1+n2;
    window.alert(sum);
}
function Sub(){
    let n1,n2,sum;
    n1=parseFloat(document.getElementById("num1").value)
    n2=parseFloat(document.getElementById("num2").value)
    sum=n1-n2;
    window.alert(sum);
}
function Mul(){
    let n1,n2,sum;
    n1=parseFloat(document.getElementById("num1").value)
    n2=parseFloat(document.getElementById("num2").value)
    sum=n1*n2;
    window.alert(sum);
}
function Div(){
    let n1,n2,sum;
    n1=parseFloat(document.getElementById("num1").value)
    n2=parseFloat(document.getElementById("num2").value)
    sum=n1/n2;
    window.alert(sum);
}
let btnClear = document.querySelector('button');
let inputs = document.querySelectorAll('input');

btnClear.addEventListener('click' , () => {
    inputs.forEach(input => input.value = '');
});