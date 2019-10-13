¡Hola! ¡Gracias por su interés en contribuir a p5.js! Puede comenzar con algunas formas diferentes de contribuir [aquí](https://p5js.org/community/#contribute). Esta carpeta contiene varios documentos destinados a desarrolladores de p5.js.

# Estructura del directorio del proyecto

- `src /` contiene todo el código fuente de la biblioteca, que está organizado por temas en módulos separados. Esto es en lo que trabajará si está cambiando p5.js.
- `lib /` contiene la versión final de p5.js destinada a que los usuarios carguen en sus bocetos y proyectos, incluidos en formularios comprimidos y no comprimidos. Esta es la salida cuando [Grunt](https://gruntjs.com/) compila los módulos de código fuente en un solo archivo.
- `developer_docs /` contiene varios documentos de Markdown que probablemente sean útiles para los desarrolladores de p5.js, en particular porque explican prácticas y principios.
- `docs /` en realidad no contiene documentos! Más bien, contiene el código utilizado para * generar * el [manual de referencia en línea](https://p5js.org/reference/).
- `tests /` contiene pruebas unitarias que aseguran que la biblioteca continúe funcionando correctamente a medida que se realizan los cambios.
- `task /` contiene scripts que realizan tareas automatizadas relacionadas con la compilación, implementación y lanzamiento de nuevas versiones de p5.js.
- `parches /` podría contener [parches Git](https://git-scm.com/docs/git-format-patch) de vez en cuando, pero en casi todos los casos puede ignorar por completo este directorio.

# Cómo contribuir

Los errores conocidos y las nuevas funciones previstas se rastrean mediante [problemas de GitHub](https://github.com/processing/p5.js/issues). Los problemas [etiquetas](https://github.com/processing/p5.js/blob/master/developer_docs/issue_labels.md) se utilizan para clasificar los problemas en categorías, como los que son [adecuados para principiantes](https: //github.com/processing/p5.js/labels/level%3Abeginner). Si desea comenzar a trabajar en un problema existente, comente sobre el problema que planea trabajar para que otros contribuyentes sepan que se está manejando y puedan ofrecer ayuda. Una vez que haya completado su trabajo en este tema, [envíe una solicitud de extracción (PR)](https://github.com/processing/p5.js/blob/master/developer_docs/preparing_a_pull_request.md) contra el maestro p5.js rama. En el campo de descripción del RP, incluya "resuelve #XXXX" etiquetando el problema que está solucionando. Si el RP resuelve el problema pero no lo resuelve por completo (es decir, el problema debe permanecer abierto después de fusionar el RP), escriba "direcciones #XXXX".

Si descubre un error o tiene una idea para una nueva característica que le gustaría agregar, comience enviando un problema. No envíe simplemente una solicitud de extracción que contenga la corrección o la nueva función sin hacer un problema primero, probablemente no podremos aceptarlo. Una vez que haya recibido algunos comentarios sobre el problema y siga adelante para abordarlo, puede seguir el proceso anterior para contribuir con la solución o característica.

Puede clasificar problemas que pueden incluir la reproducción de informes de errores o solicitar información vital, como números de versión o instrucciones de reproducción. Si desea comenzar a resolver problemas, una forma fácil de comenzar es [suscribirse a p5.js en CodeTriage](https://www.codetriage.com/processing/p5.js). [! [Open Source Helpers](https://www.codetriage.com/processing/p5.js/badges/users.svg)](https://www.codetriage.com/processing/p5.js)

Reconocemos todo tipo de contribuciones. Este proyecto sigue la especificación [all-contributors](https://github.com/kentcdodds/all-contributors). Agregue usted mismo al [readme](https://github.com/processing/p5.js/blob/master/README.md#contributors) siguiendo las [instrucciones aquí](https://github.com/processing/ p5.js / issues / 2309)!

## Acompañamientos

Aparte del código en sí, es posible que deba proporcionar alguna combinación de lo siguiente.

- [documentación en línea](https://github.com/processing/p5.js/blob/master/developer_docs/inline_documentation.md) en forma de comentarios de código, que explican el código tanto a otros desarrolladores como a usuarios. Muchos de estos comentarios deben cumplir con la sintaxis [JSDoc](https://usejsdoc.org) y se publicarán en el sitio web p5.js como parte del [manual de referencia en línea](https://p5js.org/reference/ )
- [pruebas unitarias](https://github.com/processing/p5.js/tree/master/developer_docs#unit-tests), pequeñas piezas de código que están separadas de la biblioteca y se utilizan para verificar su comportamiento
- [puntos de referencia](https://github.com/processing/p5.js/blob/master/developer_docs/benchmarking_p5.md) para probar el rendimiento

## Ejemplos

El sitio p5.js incluye [ejemplos integrados](http://p5js.org/examples/). Puede [agregar más](https://github.com/processing/p5.js-website/wiki/Adding-examples), y hay un problema que enumera algunos [ejemplos deseados](https://github.com /processing/p5.js/issues/1954).

## ES6
p5.js ha migrado recientemente a [ES6](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015). Para ver cómo esta transición podría afectar su contribución, visite [adopción de ES6](https://github.com/processing/p5.js/blob/master/developer_docs/es6-adoption.md).

## Otro Ide
como

Si desea contribuir de otras maneras que no están cubiertas aquí, no dude en escribir a [hello@p5js.org](mailto: hello@p5js.org) y háganos saber lo que está pensando. Además de trabajar en esta base de código, siempre podemos usar la ayuda con cosas como documentación, tutoriales, talleres, materiales educativos, desarrollo de marca y diseño. Póngase en contacto y podemos hablar sobre las formas en que podría participar.

# Gotchas

Las herramientas de desarrollador incluidas con la base de código p5.js son intencionalmente muy estrictas sobre algunas cosas. ¡Ésto es una cosa buena! Hace que todo sea consistente y lo alentará a ser disciplinado. Esto significa que puede intentar cambiar algo solo para que su proyecto sea rechazado por el proyecto, pero no se desanime; incluso los desarrolladores experimentados de p5.js quedan atrapados por esto todo el tiempo. Típicamente el problema estará en una de dos áreas.

## Sintaxis del código

p5.js requiere una sintaxis de código limpia y estilísticamente coherente, que se aplica con [Prettier](https://prettier.io/) y [ESlint](https://eslint.org/). Las reglas se verifican antes de confirmar, pero también puede instalar un [complemento ESlint](https://eslint.org/docs/user-guide/integrations#editors) para que su editor de código resalte los errores tan pronto como los escriba , lo que probablemente lo ayudará a medida que codifica y le ahorrará la molestia de una confirmación Git fallida.

Para detectar errores, ejecute el siguiente comando en su terminal (no escriba el indicador `$`):

`` `
$ npm ejecutar pelusa
`` `

Algunos errores de sintaxis se pueden corregir automáticamente:

`` `
$ npm ejecutar pelusa: arreglar
`` `

Por lo general, es preferible seguir el estilo de proyecto establecido, pero [ocasionalmente](https://github.com/processing/p5.js/search?utf8=%E2%9C%93&q=prettier-ignore&type=) usando una sintaxis alternativa podría Haz que tu código sea más fácil de entender. Para estos casos, Prettier [ofrece una escotilla de escape](https://prettier.io/docs/en/ignore.html), el comentario `// prettier-ignore`, que puede usar para hacer excepciones granulares. Intente evitar usar esto si puede, porque hay buenas razones para la mayoría de las preferencias de estilo impuestas por el revestimiento.

## Pruebas unitarias

Las pruebas unitarias son pequeñas piezas de código que se crean como complementos de la lógica primaria y realizan la validación. Si está desarrollando una nueva característica importante para p5.js, probablemente debería incluir pruebas. No envíe solicitudes de extracción en las que las pruebas no pasen, porque eso significa que algo está roto.

Para ejecutar pruebas unitarias, deberá haber instalado previamente las dependencias del proyecto.

`` `
$ npm ci
`` `

Esto instalará * todas * las dependencias para p5.js; brevemente, las dependencias más importantes específicas de las pruebas unitarias incluyen:

- [Mocha](https://mochajs.org/), un potente marco de prueba que ejecuta archivos de prueba individuales que son específicos de p5.js
- [mocha-chrome](https://github.com/shellscape/mocha-chrome), un complemento de mocha que ejecuta pruebas de mocha con Google Chrome sin cabeza

Una vez que se instalan las dependencias, use Grunt para ejecutar las pruebas unitarias.

`` `
$ gruñido
`` `

A veces es útil ejecutar las pruebas en el navegador en lugar de hacerlo en la línea de comandos. Para hacer esto, primero inicie el servidor [connect](https://github.com/gruntjs/grunt-contrib-connect):

`` `
$ npm run dev
`` `

Con el servidor en ejecución, debería poder abrir `test / test.html` en un navegador.

Una guía completa para las pruebas unitarias está más allá del alcance de la documentación de p5.js, pero la versión corta es que cualquier cambio importante o nuevas características implementadas en el código fuente contenido en el directorio `src /` también deben ir acompañadas de archivos de prueba en el directorio `test /` que puede ser ejecutado por Mocha para verificar un comportamiento consistente en todas las versiones futuras de la biblioteca. Al escribir pruebas unitarias, use la [referencia de Chai.js](http://www.chaijs.com/api/assert/) como guía para redactar sus mensajes de afirmación para que cualquier error detectado por sus pruebas en el futuro sea consistente y consecuentemente más fácil de entender para otros desarrolladores.

# Proceso de desarrollo

1. Instale [node.js](http://nodejs.org/), que también instala automáticamente el administrador de paquetes [npm](https://www.npmjs.org).
2. [Fork](https://help.github.com/articles/fork-a-repo) el [repositorio p5.js](https://github.com/processing/p5.js) en tu propio GitHub cuenta.
3. [Clonar](https://help.github.com/articles/cloning-a-repository/) su nueva bifurcación del repositorio desde GitHub en su computadora local.

   `` `
   $ git clone https://github.com/YOUR_USERNAME/p5.js.git
   `` `

4. Navegue a la carpeta del proyecto e instale todas sus dependencias necesarias con npm.

   `` `
   $ cd p5.js
   $ npm ci
   `` `

5. [Grunt](https://gruntjs.com/) ahora debería estar instalado, y puede usarlo para construir la biblioteca desde el código fuente.

   `` `
   $ npm run gruñido
   `` `

   Si está cambiando continuamente los archivos en la biblioteca, es posible que desee ejecutar `npm run dev` para reconstruir automáticamente la biblioteca para usted cada vez que cambie cualquiera de sus archivos fuente sin tener que escribir primero el comando manualmente.

6. Realice algunos cambios localmente en la base de código y [commit](https: // help.github.com / articles / github-glossary / # commit) con Git.

   `` `
   $ git add -u
   $ git commit -m "SU MENSAJE DE COMPROMISO"
   `` `

7. Ejecute `npm run grunt` nuevamente para asegurarse de que no haya errores de sintaxis, fallas de prueba u otros problemas.

8. [Push](https://help.github.com/articles/github-glossary/#push) tus nuevos cambios en tu fork en GitHub.

   `` `
   $ git push
   `` `

9. Una vez que todo esté listo, envíe sus cambios como una [solicitud de extracción](https://help.github.com/articles/creating-a-pull-request).

Este proceso también está cubierto [en un video de The Coding Train.](Https://youtu.be/Rr3vLyP1Ods): train :: rainbow:

# Documentación de construcción

Los comentarios en línea en p5.js están integrados en el [manual de referencia] orientado al público (https://p5js.org/reference/). También puede ver esto localmente:

`` `
$ npm ejecutar documentos: dev
`` `
# Repositorios

El proyecto general p5.js incluye repositorios distintos de este.

- [p5.js](https://github.com/processing/p5.js): este repositorio contiene el código fuente de la biblioteca p5.js. El [manual de referencia p5.js orientado al usuario](https://p5js.org/reference/) también se genera a partir de los comentarios [JSDoc](http://usejsdoc.org/) incluidos en este código fuente. La mantiene [Lauren McCarthy](https://github.com/lmccart).
- [sitio web](https://github.com/processing/p5.js-website) Este repositorio contiene la mayor parte del código para el [sitio web p5.js](http://p5js.org), con la excepción de El manual de referencia. La mantiene [Lauren McCarthy](https://github.com/lmccart).
- [sonido](https://github.com/processing/p5.js-sound) Este repositorio contiene la biblioteca p5.sound.js. Es mantenido por [Jason Sigal](https://github.com/therewasaguy).
- [editor web](https://github.com/processing/p5.js-web-editor): este repositorio contiene el código fuente del [editor web p5.js](https://editor.p5js.org ) Lo mantiene [Cassie Tarakajian](https://github.com/catarak). Tenga en cuenta que el antiguo [p5.js editor](https://github.com/processing/p5.js-editor) ahora está en desuso.

# Varios

- [Looking Inside p5.js](http://www.luisapereira.net/teaching/looking-inside-p5/) es un recorrido en video de las herramientas y archivos utilizados en el flujo de trabajo de desarrollo de p5.js.
- El p5.js [imagen Docker](https://github.com/toolness/p5.js-docker) puede montarse en [Docker](https://www.docker.com/) y usarse para desarrollar p5 .js sin requerir la instalación manual de requisitos como [Node](https://nodejs.org/) ni afectar de ninguna otra forma al sistema operativo host, aparte de la instalación de Docker.
- El proceso de compilación para la biblioteca p5.js genera un [archivo de datos json](https://p5js.org/reference/data.json) que contiene la API pública de p5.js y puede usarse en herramientas automatizadas, como en cuanto a autocompletar métodos p5.js en un editor. Este archivo está alojado en el sitio web p5.js, pero no se incluye como parte del repositorio.