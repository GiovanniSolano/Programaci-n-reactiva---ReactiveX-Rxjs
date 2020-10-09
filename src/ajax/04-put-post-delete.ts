import { ajax } from 'rxjs/ajax';


const url = `https://httpbin.org/delay/1`;

// ajax.put(url, {

//     id: 1,
//     nombre: 'Giovanni'

// }, {
//     'mi-token': 'ABC12'
// }).subscribe(console.log);

ajax({
    url,
    method: 'POST',
    headers: {
        'mi-token': 'ABC124'
    },
    body: {
        id: 1,
        nombre: 'Giovanni'
    }
}).subscribe(console.log);