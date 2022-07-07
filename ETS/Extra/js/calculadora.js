
function sumaNumeros() {
	//Acceder a los elementos de mi documento
	var num1 		= document.getElementById("numero1").value; //String
	var num2 		= document.getElementById("numero2").value;	//String
	var resultado 	= document.getElementById("resultado");
	
	//Proceso
	var suma = parseInt(num1) + parseInt(num2); //Suma

	//Mostrar
	resultado.innerHTML="Resultado: " + suma;
}

function restaNumeros() {
	var resta = document.getElementById("numero1").value - document.getElementById("numero2").value;
	document.getElementById("resultado").innerHTML ="Resultado: " + resta;
}

function multiplicaNumeros() {
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var resultado = document.getElementById("resultado");
    var multiplicacion = num1 * num2;
    resultado.innerHTML = "Resultado: " + multiplicacion;
}

function divideNumeros() {
   var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var resultado = document.getElementById("resultado");
    var division = num1 / num2;
    resultado.innerHTML = "Resultado: " + division;
}