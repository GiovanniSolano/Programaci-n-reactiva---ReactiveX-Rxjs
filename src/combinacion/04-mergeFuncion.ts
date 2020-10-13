import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';
/**
 * merge - funcion : recibe uno o más observables, sus resultado será el
 * producto de ambos observables simultaneamente, se completa cuando todos terminan
*/

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge
(keyup$.pipe(pluck('type'))
    , click$.pipe(pluck('type')))
.subscribe(console.log);

