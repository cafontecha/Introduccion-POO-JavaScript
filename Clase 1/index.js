import {Cliente} from './Cliente.js';
import {cuentaCorriente} from './CuentaCorriente.js';


const cliente1 = new Cliente();
cliente1.nombreCliente = 'Camilo';
cliente1.iDCliente = '123456';

const cuentaCorriente1 = new cuentaCorriente(); 
cuentaCorriente1.numCuenta = '12346';
//Al poner el atributo privado, no se pueden hacer operaciones 
//fuera del instanciamiento de la clase y metodos
//cuentaCorriente1.#saldoCuenta = 1000;
cuentaCorriente1.sucursal = "Bogota";



let saldo = cuentaCorriente1.consultaSaldo();

saldo = cuentaCorriente1.depositoCuenta(600);

saldo = cuentaCorriente1.retiroCuenta(50);

saldo = cuentaCorriente1.retiroCuenta(1000);

console.log(saldo);

