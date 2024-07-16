let arrayCuentas = [
  {
    cbu: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 5100,
    titularCuenta: "pepito",
    estadoDeCuenta: "al dia",
  },
  {
    cbu: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 300,
    titularCuenta: "maria",
    estadoDeCuenta: "con deuda",
  },
  {
    cbu: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 2200,
    titularCuenta: "juancito",
    estadoDeCuenta: "al dia",
  },
  {
    cbu: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 500,
    titularCuenta: "carmen",
    estadoDeCuenta: "al dia",
  },
  {
    cbu: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 1200,
    titularCuenta: "Jack",
    estadoDeCuenta: "con deuda",
  },
];

// ANCHOR ---> Debemos crear un objeto llamado banco
// en el cual debemos guardar en una propiedad "clientes" el array
// de cuentas

// ANCHOR ---> agregar un metodo al banco para consultar un cliente en base al cbu

// ANCHOR ---> agregar un metodo al banco para poder realizar depositos
// para ello debemos solicitar en cualquier deposito un cbu y una cantidad

// ANCHOR ---> agregar un metodo la banco para poder realizar extracciones
// para ellos debemos solicitar en cualquier extraccion un cbu y una cantidad

// ANCHOR --> el banco nos píde una nueva feature para poder filtrar todos los usuarios
// que tengan deuda

//NOTAS:
//Las funciones son generales y los métodos pertenecen a un objeto específico

let banco = {
  clientes: arrayCuentas,
  consultarCliente: function (cbu) {
    let clienteEncontrado = this.clientes.find(
      (cliente) => cliente.cbu === cbu
    );
    if (clienteEncontrado !== undefined) {
      return clienteEncontrado;
    } else {
      return "El número de cliente no existe";
    }
  },
  deposito: function (cbu, cantidad) {
    let cliente = this.consultarCliente(cbu);
    if (typeof cliente === "object") {
      cliente.saldoEnPesos += cantidad;
      console.log(
        `Deposito realizado con exito. El nuevo saldo es ${cliente.saldoEnPesos}`
      );
    } else {
      console.log(cliente);
    }
  },
  extraccion: function (cbu, cantidad) {
    let cliente = this.consultarCliente(cbu);
    if (typeof cliente === "object") {
      if (cliente.saldoEnPesos >= cantidad) {
        cliente.saldoEnPesos -= cantidad;
        console.log(
          `extraccion realizada, saldo final es ${cliente.saldoEnPesos}`
        );
      } else {
        console.log("no tiene saldo");
      }
    } else {
      console.log(cliente);
    }
  },
  filtrarCuentasConDeuda: function () {
    let clientesDeudores = this.clientes.filter(
      (
        cliente // siempre devuelve un nuevo arrary con los elementos que cumplan
      ) => cliente.estadoDeCuenta === "con deuda"
    );
    return clientesDeudores;
  },
};

console.log(banco.clientes);
let cbuAconsultar = Number(prompt("ingrese el cbu a consultar"));
console.log(banco.consultarCliente(cbuAconsultar));
// console.log(banco.consultarCliente(123654));
// let clienteX = banco.consultarCliente(1183971869);
// console.log(clienteX);

banco.deposito(9582019689, 1000);

banco.extraccion(1183971869, 300);
console.log(banco.clientes);

let clientesConDeudaPendiente = banco.filtrarCuentasConDeuda();
console.log(clientesConDeudaPendiente);
