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

function Factura() {
  let consumo = consumoKilovatios();
  let tarifa = tarifaBaseKilovatios();
  let subtotal = calcularSubtotal();
  let valorIva = calcularIva();
  let valorCargoFijo = cargoFijo();
  let total = calcularTotalPagar();

  console.log("Factura de Consumo de Energía");
  console.log(`Consumo mensual de Kilovatios: ${consumo} Kws`);
  console.log(`Tarifa básica por Kilovatio: ${tarifa} pesos`);
  console.log(`Subtotal: ${subtotal} pesos`);
  console.log(`Cargo Fijo: ${valorCargoFijo} pesos`);
  console.log(`IVA (10%): ${valorIva} pesos`);
  console.log(`Total a Pagar: ${total} pesos`);
}

Factura();



