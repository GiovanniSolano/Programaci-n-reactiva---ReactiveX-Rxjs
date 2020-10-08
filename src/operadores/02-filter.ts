/**
 * filter: filtra la información y regresa nueva data con base en una condición
 */

import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';




// range(1,10).pipe(
//     filter( value => value % 2 === 1)
// ).subscribe(console.log);


range(20,30).pipe(
    filter( (value, i) => {
        console.log('index', i);
        return value % 2 === 1
    })
);
// ).subscribe(console.log);


interface Personaje {
    tipo: string;
    nombre: string
};


const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
];

from(personajes).pipe(
    filter(personaje => personaje.tipo === 'heroe')
).subscribe(console.log);


const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(map(event => event.code), // recibe keyboardevent, emite string
    filter(key => key === 'Enter'));
keyUp$.subscribe(console.log);