const numero = 8;
const texto = "texto";
const booleano = true;
const indefindo = undefined;
const nulo = null;
const noesunnumero = NaN;
const simbolo = Symbol;

const arreglo = [1, 2, 3];
const objetos = {nombre: "Sebalacasa", nota: 777};

console.log(arreglo);
console.log(objetos);

let sum;

for (let index = 0; index < arreglo.length; index++) {
    const element = arreglo[index];
    sum = element + sum;
    console.log(element, sum)
    console.log("El elemento es:", element + "la suma a este punto es: " + sum)
}

if (true) {
    console.log("Esto es verdadero");
}else{
    console.log("Esto es falso")
}

if (false) {
    console.log("Esto es verdadero");
}else{
    console.log("Esto es falso")
}

//el false, 0, "", null, undefined, NaN

arreglo.forEach(function(arreglo){
    console.log(arreglo)
})

arreglo.forEach(()=>{})

function Mifuncion(parametro) {
    console.log("mi funcion " + parametro);
}

Mifuncion(7);

Mifuncion("hola esto es un parametro");
(parametro) => {
    console.log("hola" + parametro);
};
