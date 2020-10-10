import { interval, fromEvent } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
/**
 * exhaustMap: sólo mantiene una suscripcion activa antes de poder añadir otra
 *  
*/


 const interval$ = interval(500).pipe(take(3));
 const click$ = fromEvent(document, 'click');

 click$
 .pipe(
     exhaustMap(() => interval$)
 )
 .subscribe(console.log);