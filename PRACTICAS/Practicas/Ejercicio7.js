//Variable N
let N = 0;
if(N >0 && N <=599 ){
    i=1.16;
    Preciosiniva=N/1.16; 
    impuesto=N-Preciosiniva
             console.log("Precio total"+" "+"$"+Preciosiniva );
                         console.log("IVA:"+" "+"$"+impuesto );
                               console.log("Total:"+" "+"$"+N);
                                 console.log("Descuento N/A" );
                          console.log("Total a pagar:"+"$"+N );
                            }
    if(N >=600 && N <=999 ){
        i=1.16;
        Preciosiniva=N/1.16; 
        impuesto=N-Preciosiniva
        DPorciento=N/100;
        descuento=DPorciento*5
        DescuentoTotal=descuento;
        PF=N-DescuentoTotal
                console.log("Precio total"+" "+"$"+Preciosiniva );
                            console.log("IVA:"+" "+"$"+impuesto );
                                  console.log("Total:"+" "+"$"+N);
          console.log("-5% de descuento:"+" "+"$"+DescuentoTotal);
                        console.log("Total a pagar"+" "+"$"+PF);} 
    if(N >=1000 && N <=1999 ){
        i=1.16;
        Preciosiniva=N/1.16; 
        impuesto=N-Preciosiniva
        DPorciento=N/100;
        descuento=DPorciento*10
        DescuentoTotal=descuento;
        PF=N-DescuentoTotal
                console.log("Precio total"+" "+"$"+Preciosiniva );
                            console.log("IVA:"+" "+"$"+impuesto );
                                  console.log("Total:"+" "+"$"+N);
         console.log("-10% de descuento:"+" "+"$"+DescuentoTotal);
                         console.log("Total a pagar"+" "+"$"+PF);}
if(N >=2000){
i=1.16;
Preciosiniva=N/1.16; 
impuesto=N-Preciosiniva
DPorciento=N/100;
descuento=DPorciento*15
DescuentoTotal=descuento;
PF=N-DescuentoTotal
                console.log("Precio total"+" "+"$"+Preciosiniva );
                            console.log("IVA:"+" "+"$"+impuesto );
                                  console.log("Total:"+" "+"$"+N);
          console.log("-15% de descuento:"+" "+"$"+DescuentoTotal); 
                           console.log("Total a pagar"+" "+"$"+PF);
        }                              
else{
console.log("Total : $0.00");}