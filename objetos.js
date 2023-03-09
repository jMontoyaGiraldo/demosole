var deportes = {
  conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
};
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };

// ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
//console.log(persona.nombre);
//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);
//BORRAR
delete autos.marcas;
//console.log(autos);

//funciones 
var funciones={ hola: function(){console.log('hola mi papa, dale sin miedo que vamos para adelante')}}
//funciones.hola()

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
//console.log (atuendos.manos)
atuendos['tronco']=['buso','camisa']
//console.log (atuendos)

var comida={}
var diferenciaDEFunciones= function(punto, corchete){
    comida[punto]=['fruta','prote']
    comida[corchete]=['carne', 'manzana']
};
 diferenciaDEFunciones('rico', 'delicioso')
 //console.log(comida)
  var libro= {autor: 'borges' , genero : 'policial', año : 1998}
  var tienpropiedad =libro.hasOwnProperty('autor');
  console.log (tienpropiedad)
var objetos =Object.keys(libro)
//console.log(objetos)
var mundo ={continentes : 7 , paises :  195 , oceanos:  5};
for(var prop in mundo){
    //console.log('esta es la propiedad ' + prop)
   // console.log('este es el valor ' +mundo[prop])
}
//THIS
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: () => {
       console.log('Mi perro es un  ' + this.raza);
    },
 };
 //mascota.info(this.raza)
