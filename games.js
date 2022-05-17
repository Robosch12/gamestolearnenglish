// Ciclos Condicionales
let simplePast = prompt("¿Qué tanto recordas de Simple Past? Ingrese un verbo y vera su conjugación en pasado. Ingrese -s para salir");

while (simplePast!="s") {
    switch (simplePast) {
        case "live":
            alert ("lived");
            break;
        case "go":
            alert ("went");
            break;
        case "work":
            alert ("worked");
            break;
        case "have":
            alert ("had");
            break;
        case "eat":
            alert ("ate");
            break;
        default:
            alert ("¡Cuidado! Puede que la palabra ingresada este en pasado o que no sea un verbo");
            break;
    }
    simplePast = prompt("¿Qué tanto recordas de Simple Past? Ingrese un verbo y vera su conjugación en pasado. Ingrese -s para salir");
} 





