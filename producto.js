class Producto{
    constructor(nombre, precio, categoria, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock
    }

    hayStock(cantidad){
        return ((cantidad <= this.stock ? true : false));
        
    }

    ficha(){
        return `Producto: ${this.nombre} \nPrecio: ${this.precio} \nCategoria: ${this.categoria}, Stock: ${this.stock}`
    }
}

module.exports = Producto;