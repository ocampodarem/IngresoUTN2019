/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var num1;
var num2;
var sumar;
//parseint convirtio el string (texto) en number (numero )
num1 = parseInt(document.getElementById("numeroUno").value);
num2 = parseInt(document.getElementById("numeroDos").value);
suma = num1 + num2; 

alert("la suma es " + suma);

}



