/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
var aumento;
var resultado;

sueldo = parseInt(document.getElementById("sueldo").value);

aumento = sueldo * 10;

resultado = aumento / 100;
//Muestro el resultado en la caja de abajo (nuevo sueldo)
(document.getElementById("resultado").value) = resultado;



alert("el nuevo sueldo es " + resultado);
	
    // para sacar el 10%: multiplico el sueldo por el 10 % y lo divido por 100, da rel nuevo sueldo
}
