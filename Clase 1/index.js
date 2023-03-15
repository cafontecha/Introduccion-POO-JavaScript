class Cliente{
    nombreCliente;
    iDCliente;
}
class cuentaCorriente {
    numCuenta;
    saldoCuenta;
    sucursal;
    
    constructor(){
        this.numCuenta = '';
        this.saldoCuenta = 0;
        this.sucursal = '';
    }

    depositoCuenta(valor){
        this.saldoCuenta+=valor;
    }

    retiroCuenta(valor){
        const nuevoSaldo = this.saldoCuenta - valor;
        if (nuevoSaldo<=0){
            console.log(`No cuentas con el saldo a retirar, tu saldo es de ${this.saldoCuenta}`);
        }else{
            console.log(`retiro exitoso, tu nuevo saldo es de ${nuevoSaldo}`);
            this.saldoCuenta = nuevoSaldo;
        } 
    }
}


const cliente1 = new Cliente();
cliente1.nombreCliente = 'Camilo';
cliente1.iDCliente = '123456';

const cuentaCorriente1 = new cuentaCorriente(); 
cuentaCorriente1.numCuenta = '12346';
cuentaCorriente1.saldoCuenta = 1000;
cuentaCorriente1.sucursal = "Bogota";

const cliente2 = new Cliente();
cliente2.nombreCliente = 'Andres';
cliente2.iDCliente = '567890';

const cuentaCorriente2 = new cuentaCorriente();
cuentaCorriente2.numCuenta = '567890';
cuentaCorriente2.saldoCuenta = 8000;
cuentaCorriente2.sucursal = "Centro Comercial";

const cliente3 = new Cliente();
cliente3.nombreCliente = 'Juan';
cliente3.iDCliente = '987654';

const cuentaCorriente3 = new cuentaCorriente();
cuentaCorriente3.numCuenta = '987654';
cuentaCorriente3.saldoCuenta = 5600;
cuentaCorriente3. sucursal = "Plaza Central";


console.log(cliente1);
console.log(cuentaCorriente1);


console.log(cuentaCorriente1);



cuentaCorriente1.retiroCuenta(500);
console.log(cuentaCorriente1);