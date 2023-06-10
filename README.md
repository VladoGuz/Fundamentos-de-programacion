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
