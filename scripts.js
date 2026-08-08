
/*
Variavel:
    caixinha para guardar informações serão utilizadas

palavrinhas mágicas para crir as variáveis:
    VAR - NÃO É MAIS UTILIZADO
    let - permite alterar o valor
    const - constant
*/

/*
FUNÇÕES:
    É um trecho de código que, só é executado,
    quando chamado (quando nós quisermos).

    Objetivo: quando clicar no botão, mostrar o formulario e a mascara
    1 - qual botão clicar?
    2 - qual formulário?
    3 - qual mascara?
    4- O que é mostrar?
     - trazer o formulário da esquerda para a direita;
     - centralizar o formulario na tela;
     - Exibir a mascara.

*/
const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");


function mostrarform() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

function esconderform(){
    formulario.style.left = "-340px"
    formulario.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}
