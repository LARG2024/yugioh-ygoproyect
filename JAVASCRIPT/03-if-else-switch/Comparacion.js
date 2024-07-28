//Comparacion 

if (5 == 5){
    console.log(" 5 es igual que 5");
}

if (5 === 5){
    console.log(" 5 es igual que 5");
}

let a=5;
console.log(typeof a);
let b = "5";
console.log(typeof b);

if (a == b){
    // Compara si los valores son iguales unicamente
    console.log(" comparacion facil");
}

if (a === b){
    //Compara si los valores y el tipo de variable son iguales
    console.log(" comparacion estricta");
}

//Distinto 

let c = 10;
console.log(typeof c);
let d = "10"; 
console.log(typeof d);

if (c != d){
    console.log("Distinto debil")
}
if (c !== d){
    console.log("Distinto fuerte")
}

//Mayor y menor que 

let max =10;
let min =5;

if (max > min){
    console.log(max+" "+"es mayor que"+" "+min)
}
if (max >= min){
    console.log(max+" "+"es mayor o igual que"+" "+min)
}

if (min < max){
    console.log(min+" "+"es menor que"+" "+max)
}
if (min <= max){
    console.log(min+" "+"es menor o igual que"+" "+max)
}
if (min === max){
    console.log(min+" "+"Valores iguales"+" "+max)
}