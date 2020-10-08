/**
 * distinctUntilChanged: emite valores siempre y cuando la emisión no sea la misma
 */

import { from, of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

numeros$
.pipe(distinctUntilChanged()) // ===
.subscribe(console.log);

interface Personaje {
    nombre: string
};

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'x'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Megaman'
    },
];

from(personajes)
.pipe(distinctUntilChanged((ant, act) => ant.nombre === act.nombre))
.subscribe(console.log);