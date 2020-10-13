/**
 * startWith: Hacer una emisión antes que el observable empiece a emitir un valor sincrono
 * endWith: Hacer una emisión al final (antes que se cumpla)
*/

import { of } from "rxjs";
import { endWith, startWith } from "rxjs/operators";


const numeros$ = of(1,2,3).pipe(
    startWith('a','b','c'),
    endWith('x','y','z')
);
numeros$.subscribe(console.log);
