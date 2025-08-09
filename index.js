function consumoKilovatios() {
    return 200;
}

function tarifaBaseKilovatios() {
  return 1000; 
}


const cargoFijo = function() {
  return 500; 
}

const iva = function() {
  return 0.1; 
}


let calcularSubtotal = () => {
  let consumo = consumoKilovatios(); 
  let tarifa = tarifaBaseKilovatios(); 
  return consumo * tarifa;
}

let calcularIva = () => {
  let subtotal = calcularSubtotal(); 
  let porcentajeIva = iva();
  return subtotal * porcentajeIva;
}

let calcularTotalPagar = () => {
  let subtotal = calcularSubtotal(); 
  let valorIva = calcularIva();
  let valorCargoFijo = cargoFijo();
  return subtotal + valorIva + valorCargoFijo;
}



