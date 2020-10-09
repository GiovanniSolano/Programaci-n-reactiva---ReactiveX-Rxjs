import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, pluck } from 'rxjs/operators';


const url = `https://api.github.com/users?per_page=5`;

// Manejo de errores en fetch
const manejaErrores = (response: Response) => {
    if (!response.ok ) {
        throw new Error(response.statusText);
    }
    return response;

}


const atrapaError = (err: AjaxError) => {
        console.warn('Error en: ', err.message);
        return of([]);
}

const fetchPromesa = fetch(url);

// fetchPromesa.then(resp => resp.json())
//             .then(console.log)
//             .catch(err => console.warn('error', err));


// **********Peticiones con fetch***********

// fetchPromesa.then(manejaErrores)
//             .then(resp => resp.json())
//             .then(console.log)
//             .catch(err => console.warn('error', err));


// ********Petición usando ajax de Rxjs*************

ajax(url)
.pipe(pluck('response'),
catchError(atrapaError)
)
.subscribe(users => console.log('Usuarios', users));