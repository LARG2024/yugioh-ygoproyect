//Variable N

let N=6;
switch(true){
    case (N >=5 && N <=10)               :
        console.log("5% de descuento");
        break;
        case (N >=11 && N <=20)               :
        console.log("10% de descuento");
        break;case (N >20)               :
        console.log("15% de descuento");
        break;
        default:
            console.log("Articulos insuficientes para alcanzar algun descuento")
            break;}