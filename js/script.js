const tela = document.getElementById("valor_no_visor");
var memoria = 0;
var n1 = "";
var n2 = "";
var isFistNumber = true;
var isNumber = false;
var operador;
operacao = {
  "+": function (x, y) {
    return x + y;
  },
  "-": function (x, y) {
    return x - y;
  },
  "*": function (x, y) {
    return x * y;
  },
  "/": function (x, y) {
    return x / y;
  },
};

function editar_visor(valor) {
  if (isNumber) {
    tela.innerHTML = "";
    isNumber = false;
  }
  if (tela.innerHTML.length < 12) {
    tela.innerHTML += valor;
  }
}

function apagar() {
  tela.innerHTML = "";
  n1 = "";
  n2 = "";
  opc = "";
}

function ponto() {
  if (tela.innerHTML.length > 0) {
    if (!tela.innerHTML.includes(".")) {
      tela.innerHTML += ".";
    }
  } else {
    tela.innerHTML = "0.";
  }
}

function calc(opc) {
  if (tela.innerHTML >= -99999999999 && tela.innerHTML <= 99999999999) {
    if (isFistNumber) {
      n1 = parseFloat(tela.innerHTML);
      operador = opc;
      isFistNumber = false;
      isNumber = true;
    } else {
      n2 = parseFloat(tela.innerHTML);
      let telaFinal = operacao[operador](n1, n2);
      if (telaFinal > 99999999999) {
        tela.innerHTML = "Error";
      } else {
        tela.innerHTML = telaFinal;
      }
      n1 = parseFloat(tela.innerHTML);
      isNumber = true;
    }
  }
}

function igual() {
  if (tela.innerHTML >= -99999999999 && tela.innerHTML <= 99999999999) {
    n2 = parseFloat(tela.innerHTML);
    let telaFinal = operacao[operador](n1, n2);
    if (telaFinal > 99999999999) {
      tela.innerHTML = "Error";
    } else {
      tela.innerHTML = telaFinal;
    }
    isFistNumber = true;
    isNumber = false;
  }
}

function m() {
  if (memoria == parseFloat(tela.innerHTML)) {
    memoria = 0;
  } else if (memoria != 0) {
    tela.innerHTML = parseFloat(memoria);
  }
}

function mMais() {
  memoria += parseFloat(tela.innerHTML);
}

function mMenos() {
  memoria -= parseFloat(tela.innerHTML);
}
