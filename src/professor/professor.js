$(document).ready(function () {

    //Check Aluno localstorage
    let alunosString = localStorage.getItem('alunos');

    if (alunosString) {
        alunos = JSON.parse(alunosString);
    }
    carregaDisciplina();
    carregarAlunosLancarNotas();

    console.log(alunos)
});

function carregaDisciplina() {
    var select = document.getElementById("sltDisciplina"),
        option,
        i = 0,
        il = disciplinas.length;

    for (; i < il; i += 1) {
        option = document.createElement('option');
        option.setAttribute('value', disciplinas[i].id);
        option.appendChild(document.createTextNode(disciplinas[i].nome));
        select.appendChild(option);
    }
}

function escolhaDisciplina() {
    let disciplinaId = $("#sltDisciplina").val();
    let arrAlunos = [];

    alunos.forEach((aluno, i) => {
        if (aluno.turma) {
            let exist = aluno.turma.disciplinas.find(x => x.id == disciplinaId);
            if (exist)
                arrAlunos.push(aluno)
        }
    });

    if (arrAlunos.length == 0) {
        alert("NAO EXISTE ALUNO CADASTRADO NESSA MATERIA")
    }
    this.arrayALunosTemp = arrAlunos;
    carregarTableAlunoChamada(arrAlunos);
}

function marcarPresenca(alunoId) {
    let disciplinaId = $("#sltDisciplina").val();
    let alunoNome = '';

    alunos.forEach((aluno, i) => {

        if (aluno.id == alunoId) {
            alunoNome = aluno.nome
            aluno.turma.disciplinas.forEach((disc) => {
                if (disc.id == disciplinaId) {
                    disc.presença = disc.presença + 4;
                }
            });
        }
    });

    alert("Presença " + alunoNome);

    localStorage.setItem("alunos", JSON.stringify(alunos));

    escolhaDisciplina();
}

function marcarFalta(alunoId) {
    let disciplinaId = $("#sltDisciplina").val();
    let alunoNome = '';

    alunos.forEach((aluno, i) => {

        if (aluno.id == alunoId) {
            alunoNome = aluno.nome
            aluno.turma.disciplinas.forEach((disc) => {
                if (disc.id == disciplinaId) {
                    disc.falta = disc.falta + 4;
                }
            });
        }
    });

    alert("Falta " + alunoNome);

    localStorage.setItem("alunos", JSON.stringify(alunos));

    escolhaDisciplina();
}

function escolhaAluno() {
    document.getElementById("dvDias").style.display = "none";

    let alunoId = $("#sltAluno").val();

    if (alunoId == 0) {
        alert("Escolha um Aluno")
    } else {
        document.getElementById("dvDias").style.display = "block";
    }
}

function carregarTableAlunoChamada(alunosTable) {
    $("#tableBodyAlunoChamada").empty();

    let disciplinaId = $("#sltDisciplina").val();
    const table = document.getElementById("tableBodyAlunoChamada");

    let totalRegistro = table.children.length;

    if (totalRegistro == 0) {

        alunosTable.forEach((aluno) => {
            let row = table.insertRow();

            let nome = row.insertCell(0);
            nome.innerHTML = aluno.nome;

            let disciplina = aluno.turma.disciplinas.find(d => d.id == disciplinaId);

            let presenças = row.insertCell(1);
            presenças.innerHTML = disciplina.presença;

            let faltas = row.insertCell(2);
            faltas.innerHTML = disciplina.falta;

            let btn = row.insertCell(3);
            btn.innerHTML = "<button type=\"button\" onclick='marcarPresenca(" + aluno.id + ")' class=\"btn btn-primary\">Presença</button> <button type=\"button\" onclick='marcarFalta(" + aluno.id + ")' class=\"btn btn-danger\">Falta</button>";
        });
    }
}

function fazerChamada() {
    let alunoId = $("#sltAluno").val();
    let disciplinaId = $("#sltDisciplina").val();

    alunos.forEach((aluno, i) => {

        if (aluno.id == alunoId) {
            aluno.turma.disciplinas.forEach((disc) => {
                if (disc.id == disciplinaId) {
                    disc.presença = disc.presença + 4;
                }
            });
        }
    });

    localStorage.setItem("alunos", JSON.stringify(alunos));

}

function carregarAlunosLancarNotas() {

    var select = document.getElementById("sltAlunoLancarNotas"),
        option,
        i = 0,
        il = alunos.length;

    for (; i < il; i += 1) {
        option = document.createElement('option');
        option.setAttribute('value', alunos[i].id);
        option.appendChild(document.createTextNode(alunos[i].nome));
        select.appendChild(option);
    }
}

function escolhaAlunoLancarNotas() {
    document.getElementById("dvMateriaLancarNota").style.display = "none";
    $("#sltDisciplinaLancarNotas").find('option[value]').remove();

    let alunoId = $("#sltAlunoLancarNotas").val();

    //todo: procurar disciplina do aluno para exibir , caso nao tenha exibir alerta de não matriculado

    let aluno = alunos.find(a => a.id == alunoId);

    if (aluno.turma == null) {
        alert("ALUNO NÃO MATRICULADO EM NENHUMA DISCIPLINA");
    } else {
        document.getElementById("dvMateriaLancarNota").style.display = "block";
        let disc = aluno.turma.disciplinas;

        var select = document.getElementById("sltDisciplinaLancarNotas"),
            option,
            i = 0,
            il = disc.length;

        option = document.createElement('option');
        option.setAttribute('value', 0);
        option.appendChild(document.createTextNode('-- Selecione --'));
        select.appendChild(option);

        for (; i < il; i += 1) {
            option = document.createElement('option');
            option.setAttribute('value', disc[i].id);
            option.appendChild(document.createTextNode(disc[i].nome));
            select.appendChild(option);
        }
    }
}

function enviarMensagemPais() {
    const InputAluno = document.getElementById("InputAluno").value;
    const InputResponsavel = document.getElementById("InputResponsavel").value;
    const InputEmail = document.getElementById("InputEmail").value;
    const InputTelefone = document.getElementById("InputTelefone").value;
    const InputMensagem = document.getElementById("InputMensagem").value;


    let msg = "Mensagem enviada: " + InputResponsavel + "\n\n";

    if (InputAluno == "Huguinho" || InputAluno == "Luizinho" || InputAluno == "Zezinho") {
        msg = msg + "Número de telefone enviado: " + InputTelefone + "\n" + "Email enviado: " + InputEmail + "\n" + "Mensagem enviada: " + InputMensagem;
        alert(msg);
    } else {
        alert("ALUNO NÃO ENCONTRADO!");
    }
}

function gerarAtividade() {
    const InputNameAluno = document.getElementById("InputNameAluno").value;
    const inputMateria = document.getElementById("inputMateria").value;
    const InputConteudo = document.getElementById("InputConteudo").value;
    const InputData = document.getElementById("InputData").value;


    let msg = "Atividade Aplicada: " + InputNameAluno + "\n\n";

    if (InputNameAluno == "Huguinho" || InputNameAluno == "Luizinho" || InputNameAluno == "Zezinho") {
        msg = msg + "Matéria: " + inputMateria + "\n" + "Atividade: " + InputConteudo + "\n" + "Data da aplicação: " + InputData;
        alert(msg);
    } else {
        alert("ALUNO NÃO ENCONTRADO!");
    }
}

function lancarNota(){
    let alunoId = $("#sltAlunoLancarNotas").val();
    let disciplinaId = $("#sltDisciplinaLancarNotas").val();
    let tipoNotaId = $("#sltTipoNotaLancarNotas").val();
    let nota = $("#txtNota").val();

    if (alunoId == 0) {
        alert("ESCOLHA UM ALUNO");
        return;
    } 

    if (disciplinaId == 0) {
        alert("ESCOLHA UMA DISCIPLINA");
        return;
    } 

    if (tipoNotaId == 0) {
        alert("ESCOLHA UM TIPO DE NOTA");
        return;
    } 

    if (nota == 0) {
        alert("DIGITE UMA NOTA");
        return;
    } 

    alunos.forEach((aluno, i) => {

        if (aluno.id == alunoId) {
            aluno.turma.disciplinas.forEach((disc) => {
                if (disc.id == disciplinaId) {
                    if(tipoNotaId == 1){
                        disc.notaProva = parseInt(nota);
                        alert("NOTA DA PROVA LANÇADA COM SUCESSO")
                    }                        
                    else if(tipoNotaId == 2){
                        disc.trabalho = parseInt(nota);
                        alert("NOTA DO TRABALHO LANÇADA COM SUCESSO")
                    }   
                }
            });
        }
    });

    localStorage.setItem("alunos", JSON.stringify(alunos));

    $("#sltAlunoLancarNotas").val(0);
    $("#sltDisciplinaLancarNotas").val(0);
    $("#sltTipoNotaLancarNotas").val(0);
    $("#txtNota").val(0);
}

const items = [
    { id: "1", aluno: "Aluno 1", Matricula: "123456", CargaHoraria: "80 horas", },
    { id: "2", aluno: "Aluno 2", Matricula: "654321", CargaHoraria: "70 horas" },
    { id: "3", aluno: "Aluno 3", Matricula: "951357", CargaHoraria: "90 horas" }
];

function carregarTableData() {
    const table = document.getElementById("tableBody");

    let totalRegistro = table.children.length;

    if (totalRegistro == 0) {
        items.forEach(item => {
            let row = table.insertRow();

            let id = row.insertCell(0);
            id.innerHTML = item.id;

            let aluno = row.insertCell(1);
            aluno.innerHTML = item.aluno;

            let Matricula = row.insertCell(2);
            Matricula.innerHTML = item.Matricula;

            let CargaHoraria = row.insertCell(3);
            CargaHoraria.innerHTML = item.CargaHoraria;

            let valor = row.insertCell(4);
            valor.innerHTML = item.valor;

            let btn = row.insertCell(5);
            btn.innerHTML = "<button type=\"button\" onclick='carregarBoletoAluno(" + item.id + ")' class=\"btn btn-secondary\">Imprimir</button>";
        });
    }
}