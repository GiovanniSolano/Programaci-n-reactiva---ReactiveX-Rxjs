import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {

    next: value => console.log('next', value),
    error: error => console.warn('Error', error),
    complete: () => console.info('Completado')

};


const interval$ = new Observable<number>(subscriber => {

    // Crear un contador 

    let i = 0;

    const intervalo = setInterval(() => {
        i++;
        subscriber.next(i);
        console.log(i);
        
        
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);


    return () => {
        clearInterval(intervalo);
        console.log('Intervalo destruido');
        
    }

});


const subscription1 = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

subscription1.add(subscription2).add(subscription3);

setTimeout(() => {
    
    subscription1.unsubscribe();

    console.log('Completado timeout');
    

}, 6000);