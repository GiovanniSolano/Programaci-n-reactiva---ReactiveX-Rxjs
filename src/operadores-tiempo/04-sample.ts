import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';
/**
 * sample: emite el último valor emitido por observable hasta que el otro observable dentro emita un valor
*/


const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

interval$
.pipe(sample(click$))
.subscribe(console.log);