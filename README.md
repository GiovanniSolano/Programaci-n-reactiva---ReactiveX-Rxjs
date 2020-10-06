# Programación reactiva - ReactiveX

```
Es una API par programación asíncrona usando observables es la combinación de las mejores ideas, patrón observador patrón iterador, programación funcional
```

*Patrón Observador - patrón de diseño que define una dependecia del tipo uno a muchos entre objetos de manera que cuando uno de los objetos cambia su estado, notifica este cambio a todos los dependientes

*Patrón iterador - el patrón iterador define una interfaz que declara los métodos necesarios para acceder secuencialmente a un grupo de objetos de una colección

*Programación funcional - Es básicamente, crear un conjunto de funciones que tengan un objetivo especifico


* Beneficios

*Evitar el callback hell
*Trabajar de forma simple tareas asincronas y sincronas
*Operadores para reducir el trabajo
*Código más limpio y fácil de leer
*Fácil de implementar	
*Fácil de anexar procedimientos


* Términos que debemos saber

*Observables - Fuente de información, emitir errores, sincronos y asincronos, multiples valores, uno o ninguno

*Subscriber - Estar pendiente de lo que realiza el observable, reciben data y errores

*Operadores - Usados para transformar observables, combinar observables, crear nuevos observables

* Cuándo usar?

*Eventos en la interfaz de usuario	
*Cuando es necesario notificar sobre cambios en un objeto

* Por qué usar extensiones reactivas?

*Todos quieren información en tiempo real


# Proyecto inicial - RXJS (Curso)
https://www.udemy.com/course/rxjs-de-cero-hasta-los-detalles/

* Instalar módulos de node:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Iniciar el proyecto

```
npm start
```
Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto el puerto es 8081, para cambiar ir al package.json y modificar la siguiente instrucción

```
"start": "webpack-dev-server --mode development --open --port=8081"
```