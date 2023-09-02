function soma() {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);

    let soma = a + b;

    alert(`A soma de ${a} e ${b} é ${soma}`);
}

function hello() {
    let nome = document.getElementById('nome').value;
    alert(`Olá, ${nome}!`);
}

/**
 * Variáveis NÃO são constantes.
 * Elas podem mudar de valor dinamicamente durante a execução.
 * O símbolo de '=' significa atribuir valor e não igualdade.
 * Constantes são declaradas com const. 
 * 
 * A forma moderna de declarar variáveis é let. 
 * O var é um pouco antigo e pode causar alguns problemas.
 */