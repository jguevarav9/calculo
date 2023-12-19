// Definimos la función f(x) = -x^2 + 8x - 12
function f(x) {
    return -Math.pow(x, 2) + 8*x - 12;
}

// Calculamos la integral de la función de manera analítica
function integral(a, b) {
    return ((-1/3)*Math.pow(b, 3) + 4*Math.pow(b, 2) - 12*b) - ((-1/3)*Math.pow(a, 3) + 4*Math.pow(a, 2) - 12*a);
}

// Aplicamos la regla del trapecio simple para obtener una aproximación del área bajo la curva
function trapezoidalRule(a, b) {
    return (b-a) * (f(a) + f(b)) / 2;
}

// Calculamos el error porcentual entre el valor verdadero y el valor aproximado
function calculateError(trueValue, approxValue) {
    return Math.abs((trueValue - approxValue) / trueValue) * 100;
}

// Definimos los límites de integración
let a = 3;
let b = 5;

// Calculamos el valor verdadero de la integral
let trueValue = integral(a, b);

// Calculamos el valor aproximado de la integral usando la regla del trapecio
let approxValue = trapezoidalRule(a, b);

// Calculamos el error porcentual
let error = calculateError(trueValue, approxValue);

// Imprimimos los resultados en la consola
console.log("Valor verdadero: " + trueValue);
console.log("Valor aproximado: " + approxValue);
console.log("Error porcentual: " + error + "%");
