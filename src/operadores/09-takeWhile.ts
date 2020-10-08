import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
/**
 * takeWhile: permite recibir valores mientras el valor se cumpla
 * _inclusive_ emitir incluso el valor que hizo que el observable terminara
 */


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(map(({x, y}) => ({x, y})),
        // takeWhile(({y}) => y <= 150))
        takeWhile(({y}) => y <= 150, true))
.subscribe({
    next: val => console.log(val),
    complete: () => console.log('Complete')
});


