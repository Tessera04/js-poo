class cliente {
    nombreCliente;
    dniCliente;
}

class cuentaCorriente{
    numeroCuenta;
    saldoCuenta;

    depositoEnCuenta(valor){
        this.saldo = this.saldo + valor;
    }
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
cuentaCorriente2.saldoCuenta = 75000;


console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(100);
console.log(cuentaCorriente2.saldo);