$(document).ready(function () {

    //Check Aluno localstorage
    let alunosString = localStorage.getItem('alunos');

    if (alunosString) {
        alunos = JSON.parse(alunosString);
    }

    carregarPais();
    carregaDisciplinaExtra();
    console.log(alunos);
});

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

function escolhaAluno() {
    
    let alunoId = $("#sltAluno").val();

    if(alunoId != 0){
        var aluno = alunos.find(x => x.id == alunoId);

        document.getElementById("#lblAno").innerHTML = aluno.turma.nome;
    }
 }

function matricular() {

    let alunoId = $("#sltAluno").val();

    if (alunoId == 0) {
        alert("Escolha um Aluno");
        return;
    } else {

        //let aluno = alunos.find(x => x.id == alunoId);

        let disciplinaId = $("#sltDisciplinaExtra").val();

        if (disciplinaId == 0) {
            alert("Escolha uma Disciplina");
            return;
        } else {
            let disciplina = disciplinas.find(x => x.id == disciplinaId);

            alunos.filter((aluno) => {
                if (aluno.id == alunoId) {
                    if (!aluno.turma.disciplinas.find(x => x.id == disciplina.id)){
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