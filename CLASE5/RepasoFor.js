/* 
NOSOTROS DIJIMOS EN FOR que normalmente se plantean las condiciones logias sin incluir le valor.

i < valor (ENUMERACION ASENDENTE)
i > valor (ENUMURACION DESENDENTE)

PERO si queriamos obtener los numeros hasta ese valor, entonces tenemos que

en el caso ASENDENTE i < (valor +1)
en el caso DESENDENTE i > (valor - 1)

CUANDO RECORRO UN ARRAY;

AL DERECHO (ASENDENTE) voy de 0 a array.length, que justo cumple con la relga valor + 1, porque siempre se cumple la relacion de que (CANTIDAD DE ELEMENTOS DE UN ARRAY) = ULTIMA POSICION + 1.

AL REVES (DESENDENTE) voy de array.length - 1 (Porque necesito justo la utlima posicion) hasta 0, pero necesio incluir el 0 por lo que necesito restarle 1, enotnces me queda i > (0-1) ese cero es la primera posicion. 

*/