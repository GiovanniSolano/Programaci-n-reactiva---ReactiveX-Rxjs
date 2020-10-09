import { ajax } from 'rxjs/ajax';


const url = `http://httpbin.org/delay/1`;

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC124'
});

obs$.subscribe(data => console.log('data:', data));