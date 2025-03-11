/*
Podemos obtener un número aleatorio usando el método Math.random(). Esto nos devuelve un número distinto entre 0 y 1 cada vez que lo utilizamos.

Para que nos de un número aleatorio hasta cierto número X, tenemos que multiplicarlo por dicho número X, Math.random() * 10 nos da un número aleatorio entre 0 y 10 (contando decimales)
Para que nos devuelva números enteros, tenemos que usar Math.round(Math.random()) (Math.round() redondea todo número que se le pasa entre paréntesis)
Combinando ambos, p.ej.: Math.round(Math.random() * 10) nos da un número aleatorio entre 0 y 10
Si queremos que el número empiece a contar a partir de 1, tenemos que usar Math.ceil(Math.random() * 10)
Si queremos que empiece a contar desde un cierto número, tenes que sumarle dicho número, por ejemplo p.ej.: Math.round(Math.random() * 10) + 100 nos da un número entero entre 100 y 110
Para usar un número aleatorio, tenemos que asignarlo a una variable

const random = Math.round(Math.random() * 10) + 100;

EJERCICIO:
Crear un programa que muestre una secuencia de 5 nombres de colores en orden aleatorio.
Los colores posibles son 4: rojo, verde, azul y amarillo. Pedir luego ingresar 5 colores uno por uno, y mostrar al finalizar si acertó la secuencia.
// Ejemplo
Simón dice: rojo, rojo, azul, verde, amarillo.

Ingrese el primer color: rojo
Ingrese el primer color: rojo
Ingrese el primer color: azul
Ingrese el primer color: verde
Ingrese el primer color: amarillo

Felicitaciones! Has ganado!

*/