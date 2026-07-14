const{formatearPrecio, calcularDescuento} = require("./utilidades").default;
const Producto = require("./producto");

class Carrito{
    constructor(usuario, items){
        this.usuario = usuario;
        this.items=[];
    }

    agregar(producto, cantidad){
        if (hayStock(cantidad)){
            this.items.push({producto, cantidad})
            return "Item agregado correctamente";
        } else {
            return "Producto sin stock";
        }
    }

    subtotal(){
        for (const item of this.items) {
            let suma = item * cantidad
        }
    }
}