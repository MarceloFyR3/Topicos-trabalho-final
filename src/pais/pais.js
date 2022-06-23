$(document).ready(function () {

    //Check Aluno localstorage
    let alunosString = localStorage.getItem('alunos');

    if (alunosString) {
        alunos = JSON.parse(alunosString);
    }

    //carregarPais();
    carregarAlunos();
    carregaDisciplinaExtra();
    carregaDisciplina();
    carregarTurmas();
});

function carregarTurmas() {

    var select = document.getElementById("sltTurmas"),
        option,
        i = 0,
        il = turmas.length;

    for (; i < il; i += 1) {
        option = document.createElement('option');
        option.setAttribute('value', turmas[i].id);
        option.appendChild(document.createTextNode(turmas[i].nome));
        select.appendChild(option);
    }
}


function carregarAlunos() {

    let responsaveis = [];

    alunos.forEach(aluno => {

        aluno.responsavel.forEach(resp => {
            responsaveis.push(resp);
        });
    })

    responsaveis = unique(responsaveis);

    var select = document.getElementById("sltAluno"),
        option,
        i = 0,
        il = alunos.length;

    for (; i < il; i += 1) {
        option = document.createElement('option');
        option.setAttribute('value', alunos[i].id);
        option.appendChild(document.createTextNode(alunos[i].nome));
        select.appendChild(option);
    }

    var selectExtra = document.getElementById("sltAlunoExtra"),
        option,
        i = 0,
        il = alunos.length;

    for (; i < il; i += 1) {
        option = document.createElement('option');
        option.setAttribute('value', alunos[i].id);
        option.appendChild(document.createTextNode(alunos[i].nome));
        selectExtra.appendChild(option);
    }

}

function carregarPais() {

    let responsaveis = [];

    alunos.forEach(aluno => {

        aluno.responsavel.forEach(resp => {
            responsaveis.push(resp);
        });
    })

    responsaveis = unique(responsaveis);

    var select = document.getElementById("sltResponsavel"),
        option,
        i = 0,
        il = responsaveis.length;

    for (; i < il; i += 1) {
        option = document.createElement('option');
        option.setAttribute('value', responsaveis[i].id);
        option.appendChild(document.createTextNode(responsaveis[i].nome));
        select.appendChild(option);
    }

}

function unique(array) {
    let unique = [];

    array.filter(function (el) {
        if (!unique.find(x => x.id == el.id)) {
            unique.push(el)
        }

    });
    return unique;
}

function escolhaResponsavel() {
    document.getElementById("#lblAno").innerHTML = "-";
    slt = $("#sltResponsavel").val();
    let arrAlunos = [];

    $("#sltAluno").find('option[value]').remove();

    alunos.forEach((aluno, i) => {
        let exist = aluno.responsavel.find(x => x.id == slt);
        if (exist)
            arrAlunos.push(aluno)

    });

    var select = document.getElementById("sltAluno"),
        option,
        i = 0,
        il = arrAlunos.length;

    option = document.createElement('option');
    option.setAttribute('value', 0);
    option.appendChild(document.createTextNode('-- Selecione --'));
    select.appendChild(option);

    for (; i < il; i += 1) {
        option = document.createElement('option');
        option.setAttribute('value', arrAlunos[i].id);
        option.appendChild(document.createTextNode(arrAlunos[i].nome));
        select.appendChild(option);
    }
}

function carregaDisciplinaExtra() {
    let disExtra = disciplinas.filter(x => x.tipo == "Extra");

    var select = document.getElementById("sltDisciplinaExtra"),
        option,
        i = 0,
        il = disExtra.length;

    for (; i < il; i += 1) {
        option = document.createElement('option');
        option.setAttribute('value', disExtra[i].id);
        option.appendChild(document.createTextNode(disExtra[i].nome));
        select.appendChild(option);
    }
}

function carregaDisciplina() {
    let disExtra = disciplinas.filter(x => x.tipo == "Curricular");

    var select = document.getElementById("sltDisciplina"),
        option,
        i = 0,
        il = disExtra.length;

    for (; i < il; i += 1) {
        option = document.createElement('option');
        option.setAttribute('value', disExtra[i].id);
        option.appendChild(document.createTextNode(disExtra[i].nome));
        select.appendChild(option);
    }
}

function escolhaAluno() {
    document.getElementById("dvTurma").style.display = "none";
    document.getElementById("temTurma").style.display = "none";
    let alunoId = $("#sltAluno").val();

    if (alunoId != 0) {
        var aluno = alunos.find(x => x.id == alunoId);

        document.getElementById("dvTurma").style.display = "block";

        if (aluno.turma == null) {
            document.getElementById("escolhaTurma").style.display = "block";
        } else {
            document.getElementById("temTurma").style.display = "block";
            document.getElementById("#lblAno").innerHTML = aluno.turma.nome;
        }
    }
}

function escolhaAlunoExtra() {
    debugger
    document.getElementById("dvTurmaExtra").style.display = "none";

    let alunoId = $("#sltAlunoExtra").val();

    if (alunoId != 0) {
        var aluno = alunos.find(x => x.id == alunoId);

        if (aluno.turma == null) {
            alert("POR FAVOR CADASTRE AO MENOS UMA DISCIPLINA CURRICULAR");
            $("anoCursando").val(0);
        } else {
            document.getElementById("dvTurmaExtra").style.display = "block";
            document.getElementById("#lblAnoExtra").innerHTML = aluno.turma.nome;
        }
            
    }
}

function matricularCurricular() {

    let alunoId = $("#sltAluno").val();

    if (alunoId == 0) {
        alert("Escolha um Aluno");
        return;
    } else {
        let disciplinaId = parseInt($("#sltDisciplina").val());

        if (disciplinaId == 0) {
            alert("Escolha uma Disciplina");
            return;
        } else {
            let disciplina = disciplinas.find(x => x.id == disciplinaId);

            alunos.filter((aluno) => {
                if (aluno.id == alunoId) {

                    if (aluno.turma == null) {
                        var idTurma = parseInt($("#sltTurmas").val());
                        if (idTurma == 0) {
                            alert("Escolha uma Disciplina");
                        } else {
                            let tt = turmas.find(x => x.id == idTurma);
                            aluno.turma = tt;
                        }
                    }

                    if (aluno.turma.disciplinas.length == 0) {
                        aluno.turma.disciplinas.push(disciplina);
                        alert("MATRICULA REALIZADA DISCIPLINA " + disciplina.nome);
                    } else {
                        if (!aluno.turma.disciplinas.find(x => x.id == disciplina.id)) {

                            aluno.turma.disciplinas.push(disciplina);
                            alert("MATRICULA REALIZADA DISCIPLINA " + disciplina.nome);
                        }
                        else
                            alert("DISCIPLINA JA CADASTRADA");
                    }
                }
            });

            localStorage.setItem("alunos", JSON.stringify(alunos));
        }
    }
}

function matricular() {

    let alunoId = $("#sltAlunoExtra").val();

    if (alunoId == 0) {
        alert("Escolha um Aluno");
        return;
    } else {

        let disciplinaId = $("#sltDisciplinaExtra").val();

        if (disciplinaId == 0) {
            alert("Escolha uma Disciplina");
            return;
        } else {
            let disciplina = disciplinas.find(x => x.id == disciplinaId);

            alunos.filter((aluno) => {
                if (aluno.id == alunoId) {
                    if (!aluno.turma.disciplinas.find(x => x.id == disciplina.id)) {
                        aluno.turma.disciplinas.push(disciplina);
                        alert("MATRICULA REALIZADA DISCIPLINA " + disciplina.nome);
                    }
                    else
                        alert("DISCIPLINA JA CADASTRADA");
                }
            });

            localStorage.setItem("alunos", JSON.stringify(alunos));
        }
    }
}