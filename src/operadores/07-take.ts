/**
 * take: limitar la cantidad de emisiones que el observable puede tener
*/

import { of } from "rxjs";
import { take, tap } from 'rxjs/operators';


const numeros$ = of(1,2,3,4,5);

numeros$
.pipe(
    tap(t => console.log('tap', t)),
    take(3))
.subscribe({
    next: val => console.log(val),
    complete: () => console.log('Complete')
});