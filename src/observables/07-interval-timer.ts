/**
 * Interval: Crear observables que trabajan con intervalos de tiempo
 * Timer: Emite el valor en un intervalo de tiempo
 */

import { interval, timer } from "rxjs";

const observer = {
    next: value => console.log('next:', value),
    complete: () => console.log('Completo')
};

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(1000);
//  const timer$ = timer(2000);
const timer$ = timer(hoyEn5);

console.log('Inicio');

//  interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');