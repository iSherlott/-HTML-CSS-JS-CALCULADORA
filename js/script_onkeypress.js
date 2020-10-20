function keyPress() {
  let tecla = window.event.keyCode;
  //alert("a tecla pressionada foi " + tecla);

  if (tecla == 44) {
    ponto();
  } else if (tecla == 48) {
    editar_visor(0);
  } else if (tecla == 49) {
    editar_visor(1);
  } else if (tecla == 50) {
    editar_visor(2);
  } else if (tecla == 51) {
    editar_visor(3);
  } else if (tecla == 52) {
    editar_visor(4);
  } else if (tecla == 53) {
    editar_visor(5);
  } else if (tecla == 54) {
    editar_visor(6);
  } else if (tecla == 55) {
    editar_visor(7);
  } else if (tecla == 56) {
    editar_visor(8);
  } else if (tecla == 57) {
    editar_visor(9);
  } else if (tecla == 13) {
    igual();
  } else if (tecla == 43) {
    calc("+");
  } else if (tecla == 45) {
    calc("-");
  } else if (tecla == 42) {
    calc("*");
  } else if (tecla == 47) {
    calc("/");
  }
}
