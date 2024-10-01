"use strict"

const boton = document.getElementById("button");
const resultado = document.getElementById("resultado");
let texto = `Estoy mostrando el resultado del ${resultado.getAttribute("name")}`;

boton.addEventListener("click", () => {
    show_result(resultado, texto);
});