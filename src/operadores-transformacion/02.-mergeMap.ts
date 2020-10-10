import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';
/**
 * mergeMap: por cada valor que emita el primer observable se crea el otro
 * independientemente, el principal puede nunca completarse
 * pero la salida del complete inicial se termina cuando todos los
 * observables segundos se completan
*/

const letras$ = of('a','b','c');

letras$
.pipe(
    mergeMap((letra) => interval(1000)
    .pipe(
        map(i => letra + i),
        take(3)
    ))
)
// .subscribe({
//     next: val => console.log('next:', val),
//     complete: () => console.log('Complete')
// });


// Cuanto tiempo se tiene presionado el click presionado
const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$
.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseup$)
    ))
)
.subscribe(console.log);