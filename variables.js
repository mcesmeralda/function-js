
  const prompt = require("prompt-sync")({ sigint: true });


  // agrega caminos
  let edad = parseInt(prompt("Por favor ingrese su edad:"));

  if (edad >= 0) {
    if (edad === 21) {
      console.log("¡Bienvenido al bar y felicidades por llegar a la mayoría de edad!");
    }
    
    if (edad % 2 !== 0) {
      console.log("¿Sabías que tu edad es impar?");
    }
  
    if (edad < 18) {
      console.log("No puede pasar al bar.");
    } else if (edad < 21) {
      console.log("Puede pasar al bar, pero no puede tomar alcohol.");
    } else {
      console.log("Puede pasar al bar y tomar alcohol.");
    }
  } else {
    console.log("Error, ingreso no válido. Por favor ingrese un número válido.");
  }

//  totalAPagar

function totalAPagar(vehiculo, litrosConsumidos) {
    let precioPorLitro;
  
    switch (vehiculo) {
      case "coche":
        precioPorLitro = 86;
        break;
      case "moto":
        precioPorLitro = 70;
        break;
      case "autobús":
        precioPorLitro = 55;
        break;
      default:
         Error("Vehículo no válido");
    }
  
    let total = precioPorLitro * litrosConsumidos;
  
    if (litrosConsumidos <= 25) {
      total += 50;
    } else {
      total += 25;
    }
  
    return total;
  }
  console.log(totalAPagar("coche", 1));
  console.log(totalAPagar("moto", 26));
  
// numero secreto
function verificarNumeroSecreto(numero) {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  
    if (numero === numeroSecreto) {
      return "¡Felicidades! Adivinaste el número secreto.";
    } else {
      return `No adivinaste el número secreto! Tu número: ${numero}, Número secreto!: ${numeroSecreto} ¡Sigue intentándolo!`;
    }
  }
  
  let numeroIngresado = prompt('ingrese un numero: ');
  console.log(verificarNumeroSecreto(numeroIngresado));
  



// function paracaidas
function abrirParacaidas(velocidad, altura) {
    if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
      return "¡Abrir paracaídas!";
    } else {
      return "No abrir paracaídas aún";
    }
  }
  
  const velocidadIngresada = parseFloat(prompt("Ingrese la velocidad en km/h:"));
  const alturaIngresada = parseFloat(prompt("Ingrese la altura en metros:"));
  
  const mensaje = abrirParacaidas(velocidadIngresada, alturaIngresada);
  console.log(mensaje);
  
  
//   diccionario

function strinUno(palabra){
    let traduccion;
  
    switch (palabra) {
        case "casa":
          traduccion = "house";
          break;
        case "perro":
          traduccion = "dog";
          break;
        case "pelota":
          traduccion = "ball";
          break;
        case "arbol":
          traduccion = "tree";
          break;
        case "genio":
          traduccion = "genius";
          break;
          default:
            traduccion = palabradesconocida;
            break;
      
      }
    
      return traduccion;
    }


const palabraIngresada = prompt("Ingrese una palabra en español:");
const palabradesconocida = prompt("la palabra ingresada es incorrecta.");
const traduccion = strinUno(palabraIngresada, palabradesconocida);
console.log("Traducción:", traduccion);
    
// valoracion de peliculas

function pelicula(){
    let calificacion;
    const valoracion = prompt('ingresa una valoracion:');
    switch (valoracion) {
        case "Muy Mala":
          calificacion = "Calificaste la película como Muy Mala. Lo lamentamos mucho.";
          break;
        case "Mala":
          calificacion =  "Calificaste la película como Mala. Lo lamentamos.";
          break;
        case "Mediocre":
          calificacion = "Calificaste la película como Mediocre. Esperamos tus comentarios para mejorar.";
          break;
        case "Buena":
          calificacion = "Calificaste la película como Buena. Seguiremos mejorando.";
          break;
        case "Muy Buena":
          calificacion = "Calificaste la película como Muy Buena. Nos alegra mucho." ;
          break;
          default:
             calificacion = "Ingresaste un valor inválido.";
            break;
      
      }
    
       
    console.log(calificacion);
    console.log("¡Gracias por tu visita!");
}
    
    pelicula()