/**
 * tap: permite disparar efectos secundarios, una acción cuando 
 * sea emitido un nuevo valor en donde esta presente el tap
 */

import { range } from "rxjs";
import { tap, map } from 'rxjs/operators';

 const numeros$ = range(1, 5);
 


 numeros$.pipe(tap(x => {
    console.log('tap', x);
    return 100;
 }),
 map(val => val * 10),
 tap({
     next: valor => console.log('despues', valor),
     complete: () => console.log('Se completo')
 }))
 .subscribe(val => console.log('subs', val));