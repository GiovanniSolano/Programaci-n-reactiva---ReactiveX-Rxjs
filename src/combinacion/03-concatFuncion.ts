import { concat, interval, of } from 'rxjs';
import { take } from 'rxjs/operators';
/**
 * función concat: recibe observable como argumentos (iterable, arreglo)
 * crea un nuevo observable, termina el primero, empieza el otro, etc 
*/


const interval$ = interval(1000);

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    of(1)
).subscribe(console.log);