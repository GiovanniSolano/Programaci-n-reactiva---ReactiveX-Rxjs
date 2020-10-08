import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';
/**
 * sampleTime: permite obtener el último valor emitido en un intervalo de tiempo
 */

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
    sampleTime(2000),
    map(({x, y}) => ({x, y}))
)
.subscribe(console.log);