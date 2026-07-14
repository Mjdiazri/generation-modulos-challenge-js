const {formatearPrecio, calcularDescuento} = require("./utilidades");
const Producto = require("./producto").default;

class NuevoCarrito{
    constructor(usuario){
        this.usuario = usuario;
        this.items = [];
    }

    //Metodos
    agregar(producto, cantidad){
        if(producto.hayStock(cantidad) == true){
            this.items.push({producto, cantidad})
            return `Producto agregado correctamente`;
        }
        return `No hay stock suficiente`;
    }

    
    subtotal(){
        let suma =0;
        for (const item of this.items) {
            suma += item.producto.precio * item.cantidad            
        }
        return suma;
    }

    total(){
        let subtotal = this.subtotal();
        if(this.usuario.esVIP()){
            return calcularDescuento(subtotal, 0.10);
        }
        return subtotal;
    }

    recibo(){
        console.log(`******** RECIBO DE PAGO ******** \n ${this.usuario.saludo()}, este es tu recibo de compra: `)
        let precioDescuento = 0;
        for (let i = 0; i < this.items.length; i ++) {
            if(this.usuario.esVIP()){
                precioDescuento = calcularDescuento(this.items[i].producto.precio, 0.10);
                console.log(`${this.items[i].producto}    ${this.items[i].cantidad}    ${formatearPrecio(precioDescuento)}`)
            }else {
                console.log(`${this.items[i].producto}    ${this.items[i].cantidad}    ${formatearPrecio(this.items[i].producto.precio)}`)
            }       
        }

        console.log(`\nTotal factura:------------ ${this.total()}`)
    }
}

module.exports = NuevoCarrito;