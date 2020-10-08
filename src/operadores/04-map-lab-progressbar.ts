import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis purus lacus. Integer hendrerit mi leo, et eleifend arcu egestas eu. Nunc sit amet leo viverra, euismod arcu vel, condimentum mauris. Vestibulum elementum metus a nisl malesuada pharetra. Vivamus ultricies est eu nisl fringilla, nec laoreet lorem euismod. Sed tincidunt neque id varius sodales. Aliquam at tincidunt magna. Nam convallis metus id mauris ullamcorper consequat. Praesent volutpat blandit justo, sit amet tincidunt magna placerat eu. Suspendisse sem neque, porta a nisl sit amet, porttitor lacinia ante. Aliquam non viverra enim, nec feugiat diam.
<br/><br/>
Ut aliquet enim vitae est lobortis scelerisque. Etiam metus nisi, sagittis ultricies vulputate quis, tempus eu urna. Sed ac convallis odio. Phasellus sit amet molestie urna, nec euismod turpis. Phasellus vitae diam euismod, sagittis quam a, porta ipsum. Ut non sem eros. Mauris id enim sit amet nulla rhoncus ultricies sit amet sit amet ante.
<br/><br/>
Nulla ut porta nisi, eu tempor quam. Aliquam nunc libero, venenatis in sapien interdum, semper ultrices felis. Nunc ut eros urna. Proin nec ante vulputate, rutrum odio a, sagittis metus. Mauris nibh massa, porta ac posuere ac, mollis luctus lectus. Morbi varius pretium neque, eu varius felis convallis non. Nulla risus orci, sagittis at commodo posuere, ultrices in dui. Duis mattis quam nisi, et cursus velit semper sit amet. Sed vestibulum consequat est non rutrum. Vivamus sed felis tempor, vestibulum metus non, malesuada nisl. Phasellus vulputate erat ac pretium pulvinar. Nullam venenatis augue scelerisque, faucibus augue at, lobortis ligula.
<br/><br/>
Donec elit elit, ullamcorper nec felis sit amet, tincidunt consectetur elit. Sed in erat eget eros feugiat auctor. Suspendisse at enim egestas, iaculis risus laoreet, molestie purus. Vestibulum facilisis iaculis lacus at tempus. Aenean fermentum, ante at ultricies semper, purus tortor sollicitudin dui, et egestas tortor libero at est. Nunc at facilisis lorem. Quisque condimentum convallis accumsan. Morbi ut rutrum nunc. Integer porttitor nunc diam, non convallis purus rhoncus nec. Curabitur et velit tellus. Etiam commodo, felis non viverra elementum, dui purus ornare metus, eu malesuada tellus arcu a diam. Donec ac quam a est mollis lobortis eu pharetra lectus.
<br/><br/>
Maecenas semper est vel risus mollis, at auctor velit interdum. Pellentesque congue lobortis lectus, a consequat augue venenatis sit amet. Curabitur vulputate, augue nec vulputate facilisis, leo justo commodo felis, vitae luctus mi massa sit amet odio. Aenean non mauris turpis. Nam in elit eleifend, mattis turpis eget, fermentum nulla. Ut at nulla eu nunc vulputate vestibulum. Phasellus enim dui, tempus et interdum at, convallis ac magna. Aliquam erat volutpat. Phasellus sit amet sollicitudin arcu.
<br/><br/>
Ut aliquet enim vitae est lobortis scelerisque. Etiam metus nisi, sagittis ultricies vulputate quis, tempus eu urna. Sed ac convallis odio. Phasellus sit amet molestie urna, nec euismod turpis. Phasellus vitae diam euismod, sagittis quam a, porta ipsum. Ut non sem eros. Mauris id enim sit amet nulla rhoncus ultricies sit amet sit amet ante.
<br/><br/>
Nulla ut porta nisi, eu tempor quam. Aliquam nunc libero, venenatis in sapien interdum, semper ultrices felis. Nunc ut eros urna. Proin nec ante vulputate, rutrum odio a, sagittis metus. Mauris nibh massa, porta ac posuere ac, mollis luctus lectus. Morbi varius pretium neque, eu varius felis convallis non. Nulla risus orci, sagittis at commodo posuere, ultrices in dui. Duis mattis quam nisi, et cursus velit semper sit amet. Sed vestibulum consequat est non rutrum. Vivamus sed felis tempor, vestibulum metus non, malesuada nisl. Phasellus vulputate erat ac pretium pulvinar. Nullam venenatis augue scelerisque, faucibus augue at, lobortis ligula.
<br/><br/>
Donec elit elit, ullamcorper nec felis sit amet, tincidunt consectetur elit. Sed in erat eget eros feugiat auctor. Suspendisse at enim egestas, iaculis risus laoreet, molestie purus. Vestibulum facilisis iaculis lacus at tempus. Aenean fermentum, ante at ultricies semper, purus tortor sollicitudin dui, et egestas tortor libero at est. Nunc at facilisis lorem. Quisque condimentum convallis accumsan. Morbi ut rutrum nunc. Integer porttitor nunc diam, non convallis purus rhoncus nec. Curabitur et velit tellus. Etiam commodo, felis non viverra elementum, dui purus ornare metus, eu malesuada tellus arcu a diam. Donec ac quam a est mollis lobortis eu pharetra lectus.
<br/><br/>
Maecenas semper est vel risus mollis, at auctor velit interdum. Pellentesque congue lobortis lectus, a consequat augue venenatis sit amet. Curabitur vulputate, augue nec vulputate facilisis, leo justo commodo felis, vitae luctus mi massa sit amet odio. Aenean non mauris turpis. Nam in elit eleifend, mattis turpis eget, fermentum nulla. Ut at nulla eu nunc vulputate vestibulum. Phasellus enim dui, tempus et interdum at, convallis ac magna. Aliquam erat volutpat. Phasellus sit amet sollicitudin arcu.

`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// Función que haga el calculo
const calcularPorcentajeScroll = (event) => {


    const {

        scrollTop,
        scrollHeight,
        clientHeight

    } = event.target.documentElement;
    
    return (scrollTop / (scrollHeight - clientHeight)) * 100;


}


// Streams

const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(

    // map(event => calcularPorcentajeScroll(event) )
    map(calcularPorcentajeScroll ),
    tap(console.log)

);

progress$.subscribe(procentaje => {
    progressBar.style.width = `${procentaje}%`;
});


