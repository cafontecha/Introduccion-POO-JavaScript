class Cliente{
    nombreCliente;
    iDCliente;
}
class cuentaCorriente {
    numCuenta;
    #saldoCuenta;
    sucursal;
    
    constructor(){
        this.numCuenta = '';
        this.#saldoCuenta = 0;
        this.sucursal = '';
    }

    depositoCuenta(valor){
        if (valor > 0 ){
            this.#saldoCuenta+=valor;
            console.log(`Tu nuevo saldo es ${this.#saldoCuenta}`);
        }
        else{
            console.log(`debes depositar una cantidad mayor a ${valor}`);
        }
    }

    retiroCuenta(valor){
        if (this.#saldoCuenta<=valor){
            console.log(`No cuentas con el saldo a retirar, tu saldo es de ${this.#saldoCuenta}`);
        }else{
            this.#saldoCuenta -= valor;
            console.log(`retiro exitoso, tu nuevo saldo es de ${this.#saldoCuenta}`);
        } 
    }
}


const cliente1 = new Cliente();
cliente1.nombreCliente = 'Camilo';
cliente1.iDCliente = '123456';

const cuentaCorriente1 = new cuentaCorriente(); 
cuentaCorriente1.numCuenta = '12346';
//Al poner el atributo privado, no se pueden hacer operaciones 
//fuera del instanciamiento de la clase y metodos
//cuentaCorriente1.#saldoCuenta = 1000;
cuentaCorriente1.sucursal = "Bogota";


console.log(cuentaCorriente1);



cuentaCorriente1.retiroCuenta(500);
console.log(cuentaCorriente1);