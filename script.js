
function submit() {
    var nome = document.getElementById("name").value;
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;

    if (nome == "")
        alert("Informe Nome");

    if (nota1 == "")
        alert("Informe Nota 1");

    if (nota2 == "")
        alert("Informe Nota 2");

    this.calcularNota(parseInt(nota1), parseInt(nota2),nome)

}

function calcularNota(nota1, nota2, nome) {
    var result = (nota1 + nota2) / 2;

    if(result < 6){
        alert("Reprovado")
    } else {
        alert("Aprovado")
    }

    alert("Aluno: " + nome + " - Média: " + result);
}