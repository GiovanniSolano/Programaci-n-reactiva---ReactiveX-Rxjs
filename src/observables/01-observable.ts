import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {

    next: value => console.log('Siguiente [next]', value),
    error: error => console.warn('Error [obs]', error),
    complete: () => console.info('Completado')
    
    

}

// const obs$ = Observable.create();
const obs$ = new Observable<string>(subs => {

    subs.next('Hola');
    subs.next('Perro');
    subs.next('Giovanni');

    // Error

    // const a = undefined;
    // a.nombre = 'Giovanni';

    subs.complete();

});

// obs$.subscribe(observer);

// obs$.subscribe()

// obs$.subscribe(
//     valor => console.log('next:', valor),
//     error => console.warn('error', error),
//     () => console.info('Completado')
    
// );
