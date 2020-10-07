import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {

    next: value => console.log('next', value),
    error: error => console.warn('Error', error),
    complete: () => console.info('Completado')

};
