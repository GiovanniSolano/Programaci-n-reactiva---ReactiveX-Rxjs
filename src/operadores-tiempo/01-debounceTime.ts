import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';
/**
 * debounceTime: es un operador de limitación de velocidad, ya que retrasa los valores emitidos y elimina en casos de multiples emisiones todas las anteriores solo dejando la ultima.
 * 
 */

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(debounceTime(3000))
// .subscribe(console.log);

//Ejemplo 2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$
.pipe(debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged())
.subscribe(console.log);
