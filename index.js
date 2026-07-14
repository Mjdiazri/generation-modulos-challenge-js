const NuevoCarrito = require("./nuevoCarrito");
const Producto = require("./producto");
const Usuario = require("./usuario");
const {esEmailValido} = require("./utilidades");

//Creacion usuario
console.log("\n---- Creacion Usuario ----")
const nuevoUsuario = new Usuario("Angely Ballesteros", "aballesteros@gmail.com", true);
console.log(`\nEl email es valido? ${esEmailValido(nuevoUsuario.email)} \n\n`)

//Creacion productos
const producto1 = new Producto("pinguina", 3000, "ave", 3);
const producto2 = new Producto("caballo", 10000, "equino", 4);

//Agregar carrito
console.log("\n---- Agregando Productos al Carrito ----\n")
const nuevoCarro = new NuevoCarrito(nuevoUsuario);
console.log(nuevoCarro.agregar(producto1, 2))
console.log(nuevoCarro.agregar(producto2, 3))
console.log(nuevoCarro.agregar(producto2, 1))

//Imprimiendo recibo
nuevoCarro.recibo();
