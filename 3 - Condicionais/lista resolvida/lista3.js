/**
 * Recebe letra e informa se é vogal ou consoante
 * @param {*} letra uma letra do alfabeto
 */
function tipo_letra(letra){
    let vogais = ['a','e','i','o','u'];
    if(vogais.includes(letra)) {
        alert(`A letra ${letra} é uma vogal`);
    }
    else {
        alert(`A letra ${letra} é uma consoante`);
    }
}