/**
 * Recebe três números e informa o maior deles
 * @param {*} n1 número 1
 * @param {*} n2 número 2
 * @param {*} n3 número 3
 */
function maior_num(n1, n2, n3) {
    if(n1 >= n2 && n1 >= n3) {
        alert("n1 é o maior dos três");
    }
    else if (n2 >= n1 && n2 >= n3) {
        alert("n2 é o maior dos três");
    }
    else {
        alert("n3 é o maior dos três");
    }
}