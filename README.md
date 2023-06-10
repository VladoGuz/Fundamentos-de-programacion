# Fundamentos-de-programacion


```
const obj = {
    nombre: "Vladimir",
    edad: 21,
    ciudad: "Oaxaca"
};
/* no accede a ningun valor del atributo
porque espera una variable con esos nombres y no estan declaradas */
const propiedad1 = obj[nombre];
const propiedad2 = obj[edad];
const propiedad3 = obj[ciudad];
//Ahora si puede acceder porque recibe un string y no una variable
const propiedadNombre = obj["nombre"];
```

## JSON: JavaScript Object Notation

JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero y fácil de leer y escribir. Se basa en la sintaxis de objetos de JavaScript, pero se puede utilizar en diferentes lenguajes de programación. A continuación, se explorará qué es JSON, su estructura, su uso y ejemplos prácticos.

### ¿Qué es JSON?

JSON es un formato de texto que permite representar datos estructurados de manera organizada y legible tanto para los humanos como para las máquinas. A diferencia de otros formatos, como XML, JSON se destaca por su simplicidad y flexibilidad.

### Estructura de JSON

Los datos en JSON están organizados en una estructura de pares clave-valor. Cada par clave-valor se separa por dos puntos (`:`), y los pares se separan por comas (`,`). Los datos pueden estar representados como objetos o como matrices. Veamos un ejemplo de cada uno:

1. Objeto JSON:

```json
{
  "nombre": "Juan",
  "edad": 25,
  "ciudad": "Madrid"
}
```

En este ejemplo, el objeto JSON representa información sobre una persona con su nombre, edad y ciudad.

2. Matriz JSON:

```json
[
  "manzana",
  "banana",
  "naranja"
]
```

En este ejemplo, la matriz JSON representa una lista de frutas.

### ¿Para qué se utiliza JSON?

JSON es ampliamente utilizado en aplicaciones web y servicios web para el intercambio de datos. Algunos casos de uso comunes son:

- **Comunicación entre cliente y servidor**: JSON se utiliza para enviar datos desde el servidor al cliente y viceversa. Por ejemplo, al obtener información de un servicio web, los datos se pueden recibir en formato JSON.

- **Almacenamiento y transferencia de datos**: JSON se utiliza para almacenar datos estructurados en archivos o bases de datos. Además, se puede utilizar para transmitir datos entre diferentes sistemas.

- **API (Application Programming Interface)**: JSON es un formato comúnmente utilizado para definir y representar el contenido de una API. Permite enviar y recibir datos de forma fácil y eficiente.

### Ejemplo práctico

Supongamos que tenemos una aplicación de gestión de tareas y queremos almacenar una lista de tareas en formato JSON. Podríamos representar cada tarea como un objeto JSON con propiedades como el título, la descripción y el estado. Aquí hay un ejemplo:

```json
[
  {
    "titulo": "Completar informe",
    "descripcion": "Finalizar el informe mensual para la reunión de la junta directiva",
    "estado": "pendiente"
  },
  {
    "titulo": "Reunión con el equipo",
    "descripcion": "Organizar una reunión para discutir los próximos proyectos",
    "estado": "en progreso"
  },
  {
    "titulo": "Enviar facturas",
    "descripcion": "Enviar las facturas a los clientes pendientes de pago",
    "estado": "completado"
  }
]
```

En este ejemplo, tenemos una matriz JSON que contiene tres objetos, cada uno representando una tarea con su título, descripción y estado.

### Conclusión

JSON es un formato versátil y ampliamente utilizado para el intercambio de datos en aplicaciones web y servicios web. Su estructura sencilla y legible lo convierte en una opción popular para representar datos estructurados. A través de pares clave-valor, JSON permite transmitir y almacenar información de manera eficiente.
