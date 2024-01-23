// EJERCICIO 6. Crea una función llamada incrementAge que tome como parámetro la edad y devuelta la edad incrementada en 5.

let edad = 45; 

function incrementAge(años){
    return años+5;
}

console.log(incrementAge(edad));

// EJERCICIO 7. Crea una función llamada evaluateNumber que tome como parámetro y devuelva un mensaje que indique si el número es positivo, negativo o cero.

const number = 0;

function evaluateNumber(numerito){
    if(numerito==0){
        return ' es cero';
    } else if (numerito>0){
        return ' es positivo';
    } else {
        return ' es negativo';
    }
}

console.log(number, evaluateNumber(number));

// EJERCICIO 8.	Crea una función llamada printNumbers que utilice un ciclo para imprimir los números del 1 al 20.

function printNumbers(){
    for(let i=1; i<=20; i++){
        console.log(i);
    }
}

printNumbers();

// EJERCICIO 9. Crea una función llamada generateGreeting que tome como parámetro un nombre y devuelva un saludo personalizado.

const nombre = 'Ruth Sarahi';

function generateGreeting(name){
    return '¡Hola '+name+'! ¿Cómo estás?';
}

generateGreeting(nombre);

// EJERCICIO 10. Crea un objeto con las características de lo que decidas. Por ejemplo, un perro tiene raza, edad, peso, tamaño, etc.

// La verdad no me acuerdo XD