/**
 * Recebe um ano e informa se ele é bissexto ou não
 * @param {*} ano número inteiro do ano
 */
function bissexto(ano) {
    ano = parseInt(ano);
    if(ano % 4 == 0) {
        alert(`O ano ${ano} é bissexto`);
    }
    else {
        alert(`O ano ${ano} não é bissexto`);
    }
}