//Importacion de clases

import {cliente} from './Cliente.js';
import {cuentaCorriente} from './CuentaCorriente.js';

/*------------------------------------------------*/

const cliente = new cliente();
cliente.nombreCliente = 'Leonardo';
cliente.dniCliente = '42152134';

const cliente2 = new cliente();
cliente2.nombreCliente = 'Maria';
cliente2.dniCliente = '42152132';

/*------------------------------------------------*/

const cuentaDeLeonardo = new cuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = cliente; //Esto deberia mostrar los datos del cliente. pero por un error en el json no lo puedo terminar.

const cuentaDeMaria = new cuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = cliente2;

/*------------------------------------------------*/

let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es de ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(1000);
console.log(`El saldo actual (cuenta Leonardo) ${saldo}`);

saldo = cuentaDeLeonardo.retirarDeCuenta(500);
console.log(`El saldo actual es de ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(1500);
console.log(`El saldo actual es de ${saldo}`);

/*------------------------------------------------*/

saldo = cuentaDeMaria.depositoEnCuenta(1000);
console.log(`El saldo actual (cuenta Maria) ${saldo}`);

cuentaDeLeonardo.transferirParaCuenta(100, cuentaDeMaria);
