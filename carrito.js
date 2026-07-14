const{formatearPrecio, calcularDescuento} = require("./utilidades").default;
const Producto = require("./producto");
const Usuario = require("./usuario");

class Carrito{
    constructor(usuario){
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
        for (const product of this.items) {
            let suma;
            return suma += producto.precio * cantidad;
        }
    }

    total(){
        let subt = this.subtotal();
        if (this.usuario.esVIP){
            return calcularDescuento(subt, 0.1)
        }
        return subt;
    }    

    recibo(){
        return `\n\n ******** RECIBO DE COMPRA ******** \n\n${saludo()}, esta fue tu compra: \n ` 
    }
}    

