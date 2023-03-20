//Calculadora de IMC
        // función que realiza los calculos
        function calcularIMC () {
            const weight = document.getElementById("weight").value;
            console.log(weight)
            const height = document.getElementById("height").value / 100;
            const age = document.getElementById("age").value;
            const sex = document.getElementById("sex").value;
            
            if (weight && height && age) {
              const imc = weight / (height ** 2);
              
              let category;
              if (sex === "hombre") {
                if (imc < 20) {
                  category = "Bajo peso";
                } else if (imc < 25) {
                  category = "Peso normal";
                } else if (imc < 30) {
                  category = "Sobrepeso";
                } else if (imc < 40) {
                  category = "Obesidad";
                } else {
                  category = "Obesidad extrema";
                }
              } else if (sex === "mujer") {
                if (imc < 19) {
                  category = "Bajo peso";
                } else if (imc < 24) {
                  category = "Peso normal";
                } else if (imc < 29) {
                  category = "Sobrepeso";
                } else if (imc < 39) {
                  category = "Obesidad";
                } else {
                  category = "Obesidad extrema";
                }
              }
              const resultElement = document.getElementById("resultado")
            resultElement.innerHTML=`Tu imc es ${imc.toFixed(2)}`  
            }
        }
        
        //Calcular calorias
        function calcular() {
          var peso = document.getElementById("peso").value;
          var altura = document.getElementById("altura").value;
          var edad = document.getElementById("edad").value;
          var sexo = document.getElementById("genero").value;
          var actividad = document.getElementById("activity").value;
        
          var calorias = 0;
        
          if (sexo == "hombre") {
            calorias = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad);
          } else if (sexo == "mujer") {
            calorias = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
          }
        
          calorias *= actividad;
        
          document.getElementById("calorias").innerHTML = Math.round(calorias);
        }

     

// Porcentaje de grasa corporal

function calcularGrasa() {

  var genValor = document.getElementById('generos').value;
  var pesaje = parseFloat(document.getElementById('pesos').value);
  var alto = parseFloat(document.getElementById('alturas').value);
  var edades = parseFloat(document.getElementById('edades').value);
  var porcentajeGrasa = 0;
  if (genValor == 'femenino') {
    porcentajeGrasa = (1.39 * pesaje / alto / alto ) + (0.16 * edades )-(10.34 * 0)-9; 
    console.log(porcentajeGrasa)
  } else if (genValor == 'masculino') {
    porcentajeGrasa = (1.39 * 89.3 / alto / alto ) + (0.16 * edades )-(10.34 * 1 ) - 9;
  }
  document.getElementById('resultados').innerHTML = 'El porcentaje de grasa corporal es: ' + porcentajeGrasa.toFixed(1) + '%';
}


      