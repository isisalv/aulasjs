
function aprovado(nota_prova, nota_recuperacao) {
    if (nota_prova >= 6){
        return true;
    }
    if ((nota_prova+nota_recuperacao)/2 >= 6){
        return true;
    }
    return false;
}

function clique() {
    let n1 = $('#n1').val();
    let n2 = $('#n2').val();

    if (aprovado(n1,n2)) {
        alert("Foi aprovado!");
    }
    else {
        alert("Foi reprovado...");
    }
}

// <button type="button" onclick="clique()">Clica aqui</button>