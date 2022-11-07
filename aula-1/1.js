class cliente {
    nombreCliente;
    dniCliente;
}

class cuentaCorriente{
    numeroCuenta;
    saldoCuenta;
}

const cliente1 = new cliente();

cliente1.nombreCliente = 'Matias';
cliente1.dniCliente = '42765234';

const cuentaCorriente1 = new cuentaCorriente();

cuentaCorriente1.numeroCuenta = '12345';
cuentaCorriente1.saldoCuenta = 5000;

const cliente2 = new cliente();

cliente2.nombreCliente = 'Rober';
cliente2.dniCliente = '42679209';

const cuentaCorriente2 = new cuentaCorriente();

cuentaCorriente2.numeroCuenta = '67890';
cuentaCorriente2.saldoCuenta = 50000;

console.log(cliente1);
console.log(cuentaCorriente1);
console.log(cliente2);
console.log(cuentaCorriente2);