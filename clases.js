function Auto(marca , color , puertas , llantas){
    this.marca= marca;
this.color=color;
this.puertas = puertas;
this.llantas = llantas ;

this.informacion = function(){
    console.log (' este auto es un ' + this.marca + ' de color ' + this.color)
}
}
var miauto = new Auto('bmw' , 'rojo' , 4 , 'outdoor')

// miauto.informacion ()

// console.log (miauto)
// console.log (miauto.marca)
 class Auto{
    constructor(marca , color , puertas , llantas){
        this.marca= marca;
        this.color=color;
        this.puertas = puertas;
        this.llantas = llantas ;
    }
    informacion(){
        console.log('este es un auto '+ this.marca)
    }
 } var otroauto= new Auto ('bmw' , 'rojo' , 4 , 'outdoor')
// otroauto.informacion()

//  console.log(otroauto)
//  console.log(otroauto.marca)

class football{
    constructor(jugador){
        this.jugador=jugador
}
obtenernombre(){
    console.log(this.jugador)
}
}
var argentina = new football('mesi')
var brasil = new football('pele')

// brasil.obtenernombre ();
// argentina.obtenernombre();