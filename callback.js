var devuelvoUsuario=function(){
    return 'camilo'
}

var devuelvoSaludo = function(){
    return 'hola'
}

var saludar = function(cb1 , cb2 ){
    return cb1() + ' ' + cb2()
}

var resultado = saludar(devuelvoSaludo, devuelvoUsuario)

// console.log (resultado)


var devuelveFrase = function(comida){
    return 'hoy quiero comer '+ comida
}
var hablar = function(comida , cb){
    return cb(comida);
}
var frasefinal= hablar('hambuergesa ', devuelveFrase)
console.log(frasefinal)