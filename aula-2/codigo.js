//Importacion de clases

import {cliente} from './Cliente.js';
import {cuentaCorriente} from './CuentaCorriente.js';

/*------------------------------------------------*/
//Datos clientes

const cliente1 = new cliente('Leonardo', '42152134');
const cliente2 = new cliente('Maria', '42152132');
console.log(cliente1);
console.log(cliente2);

/*------------------------------------------------*/
//Datos cuentas

const cuentaDeLeonardo = new cuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = cliente; //Esto deberia mostrar los datos del cliente. pero por un error en el json no lo puedo terminar.

const cuentaDeMaria = new cuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = cliente2;

/*------------------------------------------------*/
//Ver saldo Leonardo

let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es de ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(1000);
console.log(`El saldo actual (cuenta Leonardo) ${saldo}`);

/*------------------------------------------------*/
//Transferencia

cuentaDeLeonardo.transferirParaCuenta(100,cuentaDeMaria);

const saldoMaria = cuentaDeMaria.verSaldo();
console.log(`El saldo actual (Cuenta maria) ${saldoMaria}`);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual (cuenta Leonardo) ${saldoLeonardo}`);