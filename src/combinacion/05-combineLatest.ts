import { combineLatest, fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

/**
 *  combineLatest: función que permite mandar observables como argumentos
 * combinarlos, emitir los valores de todos los obs internos simultaneamente
 * regresa un nuevo obs, todos deben emitir por lo menos un valor
*/


const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.placeholder = '*****';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

// Helper
const getInputStream = (elem: HTMLElement) => {
    return fromEvent<KeyboardEvent>(elem, 'keyup')
            .pipe(
                pluck<KeyboardEvent, string>('target', 'value')
            );
} 

combineLatest(
    getInputStream(input1),
    getInputStream(input2)
).subscribe(console.log);