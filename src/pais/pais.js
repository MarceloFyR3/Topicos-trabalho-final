$(document).ready(function () {
    carregarPais();
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
    slt = $("#sltResponsavel").val();
    let arrAlunos = [];
    alunos.forEach((aluno, i) => {
        if (aluno.responsavel.find(x => x.id).id == slt)
            arrAlunos.push(aluno)

    });

    var select = document.getElementById("sltAluno"),
        option,
        i = 0,
        il = arrAlunos.length;

    // $('#sltAluno option').each(function () {
    //     $(this).remove();
    // });

    for (; i < il; i += 1) {
        option = document.createElement('option');
        option.setAttribute('value', arrAlunos[i].id);
        option.appendChild(document.createTextNode(arrAlunos[i].nome));
        select.appendChild(option);
    }
}

function escolhaAluno() { }