//import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas'
import { buscarHeroe, buscarHeroeAsync } from './js/promesas'
// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);


// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//     .then(console.log)
//     .catch(console.warn)

//buscarHeroe('capi').then(heroe => console.log(heroe)); lo mismo console.log
buscarHeroe('capi')
    .then(console.log)
    .catch(console.warn);


buscarHeroeAsync('iron')
    .then(console.log)
    .catch(console.warn);
