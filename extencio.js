class persona{
    constructor(nombre , edad){
        this.nombre= nombre
        this.edad = edad
    }
    saludar(){
        console.log('hola, mi nombre es '+ this.nombre)
    }
}

class programador extends persona{
    constructor(nombre , edad , añosDeExperiencia){
        super(nombre,edad);
        this.añosDeExperiencia=añosDeExperiencia
    }
    codear(){
        console.log( 'yo soy '+ this.nombre + 'codeo desde '+ this.añosDeExperiencia)
    }
}


var martin= new persona('martin')
var programadorr = new programador( 'martin ' , 36 , 4)
martin.saludar();
programadorr.codear();

