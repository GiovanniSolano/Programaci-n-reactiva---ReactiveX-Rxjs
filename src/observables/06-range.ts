/**
 * range: Crea un observable que emite una secuencia de números con base en un rango
 * sincronos pero pueden ser asincronos
 */

import { asyncScheduler, of, range } from "rxjs";

//  const src$ = range(1, 5);
 const src$ = range(1, 5, asyncScheduler);

 console.log('Inicio');

 src$.subscribe(console.log);
 console.log('Fin');

