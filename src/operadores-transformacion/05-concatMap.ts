import { interval, fromEvent } from 'rxjs';
import { concatMap, switchMap, take } from 'rxjs/operators';
/**
 * concatMap: concatenar observables resultantes que pueden fluir a través de ese operador
 * el proximo no se ejecuta hasta que el anterior se completa
 */

 const interval$ = interval(500).pipe(take(3));
 const click$ = fromEvent(document, 'click');

 click$
 .pipe(
     concatMap(() => interval$)
 )
 .subscribe(console.log);