
export class cuentaCorriente {
    numCuenta;
    #saldoCuenta;
    sucursal;
    #cliente;

    set cliente(valor){
        this.#cliente = valor;
    }

    get cliente(){
        return this.#cliente;
    }

    constructor(){
        this.numCuenta = '';
        this.#saldoCuenta = 0;
        this.sucursal = '';
        this.#cliente = null;
    }

    depositoCuenta(valor){
        if (valor > 0 ){
            this.#saldoCuenta+=valor;
            console.log(`Tu nuevo saldo es ${this.#saldoCuenta}`);
        }
        else{
            console.log(`debes depositar una cantidad mayor a ${valor}`);
        }

        return this.#saldoCuenta;
    }

    retiroCuenta(valor){
        if (this.#saldoCuenta<=valor){
            console.log(`No cuentas con el saldo a retirar, tu saldo es de ${this.#saldoCuenta}`);
        }else{
            this.#saldoCuenta -= valor;
            console.log(`retiro exitoso, tu nuevo saldo es de ${this.#saldoCuenta}`);
        } 
        return this.#saldoCuenta;
    }

    consultaSaldo(){
        return this.#saldoCuenta;
    }

    transferencia(valor, cuentaDestino){
        this.retiroCuenta(valor);
        cuentaDestino.depositoCuenta(valor);
    }
}
