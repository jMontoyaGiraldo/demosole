suma=0

for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma);

 suma= -2

 while(suma < 3) {
    suma = suma + 1;
        console.log(suma);
    };

    let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// en primera instancia result es vacio por lo que result + i es 1 por la sentencia
//este se sumara una y otra vez en fila para llegar a a 12345

i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i == 3)
      continue;
   n += i;}
