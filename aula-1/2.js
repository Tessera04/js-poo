/*Definicion de clases*/

class cliente {
    nombreCliente;
    dniCliente;
};

class cuentaCorriente{
    numero;
    #saldo; //Si ponemos un # la variable pasa a ser privada solo para la clase. Si intentamos llamarla afuera de la class nos va a dar error. 
    agencia;

    constructor(){
        this.#saldo = 0;
        this.numero = '';
        this.agencia = '';
    };

    depositoEnCuenta(valor){
        if(valor > 0);
            this.#saldo += valor;
        return this.#saldo;
    };

    retirarDeCuenta(valor){
        if(valor <= this.#saldo);
            this.#saldo -= valor;
        return this.#saldo;
    };

    verSaldo(){
        return this.#saldo;
    };
    
};

/*-----------------------------------------*/

cuentaDeLeonardo = new cuentaCorriente();

let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es de ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(1000);
console.log(`El saldo actual es de ${saldo}`);

saldo = cuentaDeLeonardo.retirarDeCuenta(500);
console.log(`El saldo actual es de ${saldo}`);
