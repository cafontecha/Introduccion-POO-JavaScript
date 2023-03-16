import {Cliente} from './Cliente.js';
import {cuentaCorriente} from './CuentaCorriente.js';


const cliente1 = new Cliente();
cliente1.nombreCliente = 'Camilo';
cliente1.iDCliente = '123456';

const cuentaCorriente1 = new cuentaCorriente(); 
cuentaCorriente1.numCuenta = '12346';
cuentaCorriente1.sucursal = "Bogota";
cuentaCorriente1.cliente = cliente1;


let saldo = cuentaCorriente1.consultaSaldo();
saldo = cuentaCorriente1.depositoCuenta(600);


const clienteAndres = new Cliente();
clienteAndres.nombreCliente = 'Camilo';
clienteAndres.iDCliente = '123456';

const cuentaAndres = new cuentaCorriente(); 
cuentaAndres.numCuenta = '12346';
cuentaAndres.sucursal = "Bogota";
cuentaAndres.cliente = clienteAndres;


cuentaCorriente1.transferencia(50,cuentaAndres);

console.log(`saldo cuentaCorriente1 = ${saldo}`);

const saldoAndres = cuentaAndres.consultaSaldo();
console.log(`Saldo Cuenta de ${clienteAndres.nombreCliente} = ${saldoAndres}`);


