
function aprovado(nota_prova, nota_recuperacao) {
    if (nota_prova >= 6){
        return true;
    }
    if ((nota_prova+nota_recuperacao)/2 >= 6){
        return true;
    }
    return false;
}