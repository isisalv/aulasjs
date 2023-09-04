/**
 * Informa se é um triângulo válido
 * @param {*} a1 ângulo 1
 * @param {*} a2 ângulo 2
 * @param {*} a3 ângulo 3
 */
function triangulo_valido(a1,a2,a3) {
    if(a1 + a2 + a3 == 180) {
        alert("É um triângulo válido");
    }
    else {
        alert("Não é um triângulo válido");
    }
}