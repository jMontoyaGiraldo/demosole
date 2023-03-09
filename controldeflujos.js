
function viajar(destino) {
    if(destino === 'Brasil') {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else {
             console.log('Nos perdimos');''
    }
  };
  viajar('gullana');

function comprarUnaMoto(dinero){
    if(dinero >= 20000000){
        console.log('continental650');
    } else if (dinero < 20000000){
        console.log('otra moto que no sea la continental');
    }else if (dinero === 0)
        console.log(' ni para la gaseosa');
    };
comprarUnaMoto(30000000)