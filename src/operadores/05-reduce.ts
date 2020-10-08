import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';
/**
 * reduce: aplicar una función acumuladora a las emisiones emitidas por el observable 
 */

 // Reduce en JS

 const numbers = [1,2,3,4,5];
 const totalReducer = (acumulador: number, valorActual: number) => {

    return acumulador + valorActual;

 }

 const total = numbers.reduce(totalReducer, 5);
 console.log('Total arr', total);

 interval(500)
 .pipe(take(6),
 tap(console.log),
 reduce(totalReducer))
 .subscribe({
     next: val => console.log('next:', val),
     complete: () => console.log('Completo')
 });
 