import { fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';
/**
 * auditTime: emite el último valor que ha sido emitido por el observable en un intervalo de tiempo
 */

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
    map(({x}) => x),
    tap(val => console.log('Valor', val)),
    auditTime(5000)
)
.subscribe(console.log);