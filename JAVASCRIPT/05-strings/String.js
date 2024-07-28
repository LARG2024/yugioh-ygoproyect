//String(cadena de caracteres)

let srt_1 = "Hola soy un texto con comillas"
let str_2 = 'Hola soy un tecto con comillas simples'
let str_3 = "Comillas\"dentro\" de comillas"
let str_4 = 'Comillas "dentro" de comillas'
let str_5 = "Comillas 'dentro' de comillas"


console.log(srt_1);
console.log(str_2);
console.log(str_3);
console.log(str_4);
console.log(str_5);

//Comillas invertidas `` (backticks)

let str_6 = `Comillas invertidas`
console.log(str_6);

let nombre = "Aaron";
let saludo = `Hola SR. ${nombre} Bienvenido`
console.log(saludo);

//HTML
let plantilla_html =`
<html>
    <h1>Pagina web de ${nombre} </h1>
</html>
`
console.log(plantilla_html);