
function verifica_voto(idade) {
    if (idade > 15 && idade < 18 || idade > 70) {
        return "voto opcional";
    }
    else if (idade < 16) {
        return "não pode votar";
    }
    else {
        return "voto obrigatório";
    }
}