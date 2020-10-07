
/**
 * asyncScheduler: Sirve para crear setTimeout, setInterval pero utilizando una suscripción
 * Suscription: Producto de un suscribe
 */

import { asyncScheduler } from "rxjs";

const saludar = () => {
    console.log('Hola mundo');
}
const saludar2 = (nombre) => {
    console.log(`Hola ${nombre}`);
}

// asyncScheduler.schedule( saludar, 2000 );
// asyncScheduler.schedule( saludar2, 2000, 'Giovanni' );


const subs = asyncScheduler.schedule(function(state) {

    console.log('State', state);
    this.schedule(state + 1, 1000);
    

}, 3000, 0);


// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
