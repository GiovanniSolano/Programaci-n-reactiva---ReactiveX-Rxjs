import { fromEvent } from 'rxjs';
import { first, take, tap, map } from 'rxjs/operators';
/**
 * first: toma el primero valor y completa todo, puede tener unacondición
*/

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
    tap<MouseEvent>( () => console.log('Tap')),
    // map(event => ({clientY: event.clientY, clientX: event.clientX}))
    map(({clientX, clientY}) => ({clientY, clientX})),
    first(event => event.clientY >= 150)
)
.subscribe({
    next: val => console.log(val),
    complete: () => console.log('Completo')
});