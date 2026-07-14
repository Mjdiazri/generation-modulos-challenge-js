function formatearPrecio(precio){
      return precio.toLocaleString('es-CO');
}

function esEmailValido(email){
    return ((email)=> email.includes('@') && email.includes('.') ? true : false)(email);
}

function calcularDescuento(precio, porcentaje){
    return precio-(precio*porcentaje);
}

export default{formatearPrecio, esEmailValido, calcularDescuento}