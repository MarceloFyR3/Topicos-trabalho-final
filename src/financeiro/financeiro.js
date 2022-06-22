$(document).ready(function () {
    //Check Aluno localstorage
    let alunosString = localStorage.getItem('alunos');

    if (alunosString) {
        alunos = JSON.parse(alunosString);
    }
});

function carregarTableData() {

    const table = document.getElementById("tableBody");

    let totalRegistro = table.children.length;

    if (totalRegistro == 0) {
        alunos.filter(f => f.turma != null).forEach(aluno => {
            let row = table.insertRow();

            let id = row.insertCell(0);
            id.innerHTML = aluno.id;

            let nome = row.insertCell(1);
            nome.innerHTML = aluno.nome;

            let turma = row.insertCell(2);
            turma.innerHTML = aluno.turma.nome;

            let curricular = row.insertCell(3);
            if (aluno.turma.disciplinas.filter(x => x.tipo == "Curricular"))
                curricular.innerHTML = aluno.turma.disciplinas.filter(d => d.tipo == "Curricular").map(x => x.nome).join(", ");
            else
                curricular.innerHTML = "-";

            let extra = row.insertCell(4);
            let tt = aluno.turma.disciplinas.filter(d => d.tipo == "Extra").map(x => x.nome).join(", ")
            extra.innerHTML = tt === "" ? "-" : tt;

            let valor = row.insertCell(5);

            let valorTotal = 0
            aluno.turma.disciplinas.map((s) => {
                valorTotal = valorTotal + parseFloat(s.valor)
            })
            valor.innerHTML = "R$ " + valorTotal + ".00";

            let btn = row.insertCell(6);
            btn.innerHTML = "<button type=\"button\" onclick='carregarBoletoAluno(" + aluno.id + ")' class=\"btn btn-secondary\">Imprimir</button>";
        });
    }
}

function carregarBoletoAluno(id) {
    let item = alunos.find(f => f.id == id);

    let msg = "Nome: " + item.Nome + "\n";
    msg = msg + "Turma: " + item.turma.nome + "\n";
    msg = msg + "\n-----------------------------\n";

    item.turma.disciplinas.forEach(disciplina => {
        let tipo = "Curricular";
        if (disciplina.tipo === "Extra")
            tipo = "Extra-Curricular"
        msg = msg + "Disciplina " + tipo + "(" + disciplina.cargaHoraria + "): " + disciplina.nome + ", Valor: R$ " + disciplina.valor + "\n";
    });

    let valorTotal = 0
    item.turma.disciplinas.map((s) => {
        valorTotal = valorTotal + parseFloat(s.valor)
    });
    msg = msg + "-----------------------------\n";
    msg = msg + "Valor Total: " + "R$ " + valorTotal + ".00";

    alert(msg);
}

