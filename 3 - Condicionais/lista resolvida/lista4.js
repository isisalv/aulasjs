/**
 * Recebe um mês e informa quantos dias ele tem
 * @param {*} mes número inteiro de 1 a 12
 */
function qtde_dias_mes(mes) {
    let meses30 = [4,6,9,11];
    if (mes == 2) {
        alert(`O mês 2 pode ter 28 ou 29 dias, se for ano bissexto`);
    }
    else if (meses30.includes(mes)) {
        alert(`O mês ${mes} tem 30 dias`);
    }
    else {
        alert(`O mês ${mes} tem 31 dias`);
    }
}