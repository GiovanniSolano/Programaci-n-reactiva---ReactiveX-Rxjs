/**
 * distinctUntilKeyChanged: emite valores hasta la propiedad cambie
 */

import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

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
.pipe(distinctUntilKeyChanged('nombre'))
.subscribe(console.log);