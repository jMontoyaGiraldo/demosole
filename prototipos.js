Array.prototype.mayoresque3=function(){
    var arreglomodi=[]
    for(var i=0 ; i< this.length; i++){
        if(this[i] > 3){ arreglomodi.push(false)}
        else{arreglomodi.push(this[i])}
    }
return arreglomodi
}
var lista =[1,2,3,4,5,6,7]
 var otralista= lista.mayoresque3()
//   console.log(otralista)

class latinoamerica{
    constructor(){
        this.paises=[];
    }
}
latinoamerica.prototype.agregarpais= function(pais){
    this.paises.push(pais)
}
var continene= new latinoamerica();
continene.agregarpais('mexico')
// console.log(continene.paises)