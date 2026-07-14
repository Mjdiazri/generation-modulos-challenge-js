const NuevoCarrito = require("./nuevoCarrito");
const Producto = require("./producto");
const Usuario = require("./usuario");
const {esEmailValido} = require("./utilidades");


const nuevoUsuario = new Usuario("Angely Ballesteros", "aballesteros@gmail.com", true);
console.log(`\n\nEl email es valido? ${esEmailValido(nuevoUsuario.email)} \n\n`)

const producto1 = new Producto("Leche", 23500, "lacteos", 2);
const producto2 = new Producto("Arroz", 2100, "granos", 1);

const nuevoCarro = new NuevoCarrito(nuevoUsuario);
console.log(nuevoCarro.agregar(producto1, 2))
console.log(nuevoCarro.agregar(producto2, 3))



