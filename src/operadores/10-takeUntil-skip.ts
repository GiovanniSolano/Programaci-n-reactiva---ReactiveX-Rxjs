import { interval, fromEvent } from 'rxjs';
import { skip, takeUntil, tap } from 'rxjs/operators';
/**
 * takeUntil: recibe como argumento otro observable, cuando se emite el valor o evento deseado
 * inmediatamente la salida se completa
 * 
 * skip: Omitir x cantidad de emisiones iniciales
 */


const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);



const counter$ = interval(1000);
// const clickBtn$ = fromEvent(boton, 'click');

// Al segundo click
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('Tap antes de skip')),
    skip(1),
    tap(() => console.log('Tap después de skip'))

);

counter$
.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log(val),
    complete: () => console.log('Completo')
});