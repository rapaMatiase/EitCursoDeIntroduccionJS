/* REGLAS SINTATICAS DE LOS NOMBRES - OBLIGATORIAS 🤬 */

//Si no se cumplen, el codigo no funciona.

/* 

1) Los nombres de variables no aceptan
    - Espacios en blanco. Por ejemplo "nombre de mascota" no es valido,
    pero "nombredemascota" si lo es.
    - Caracteres espaciales, excepto el guion bajo "_". Por ejemplo, "mascota#algo" no es valido, pero "mascota_algo" si lo es.
    - Comenzar con numeros, pero si lo puede contener. Por ejemplo, "12perro" no es valido, pero "perro123", "p1erro", "p1erro2" son validos.
2) No puede exitir dos variables con el mismo nombre en le mismo contexto.
3) El lenguaje Javascript es case sensitive, eso significa que distingue entre minusculas y mayusculas, por lo tanto un "a" y una "A" no son iguales. Esto implica que entornces "arbol" y "Arbol" son dos variables disitnas. El uso de maysuculas no esta prohibido en Javascript pero si cambio el lugar de la maysucula, estoy utilizando variables disitintas, !CUIDADO¡.   
*/



/* BUENAS PRACTICAS - OPTATIVAS*/

//Su incumplimiento hace mas dificil mantener, escalar y comunicar por el codigo. 

/* 
1) Utilizar nomesclatura para el nombre de variables;
    - camalCase : Todas las palabras comienzan con mayuscula excepto la primera.
    - PascalCase : Todas las palabras comienzan con mayuscula.
    - snake_case : Utilizo un guion bajo "_" entre palabras
    - keb-case : Utilizo un guion medio "-" entre palabras.

    Nosotros vamos a utilizar camelCase, porque es el mas utilizado y su sintaxis es aceptado por todos los lenguajes de programacion. 

2) Los nombres de las variables tiene que ser declarativos. Eso significa que el nombre debe permitir entner que valor tengo guardado en la variable. Por ejemplo, si la variable se llama "a", ¿Que representa el valor que tiene guardada la variable? Ni idea, pero si llamara "litrosDeAgua" si tendria una idea. 
*/