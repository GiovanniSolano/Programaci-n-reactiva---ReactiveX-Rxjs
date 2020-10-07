import { of } from 'rxjs';


// of =  es una función que permite crear observables con base en un 
//  listado de elementos

// Valores separados por coma
// const obs$ = of(1,2,3,4,5,6);
const obs$ = of<number>(1,2,3,4,5,6);

console.log('Inicio de observable');

obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('Terminado')
    );
console.log('Fin de observable');



