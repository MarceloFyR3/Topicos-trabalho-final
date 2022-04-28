const itemsMatricula = [
    { id: "1", aluno: "Aluno 1", matricula: "SD54RF", atividade: "Atv. Extra 1", anoLetivo: "8-A" },
    { id: "2", aluno: "Aluno 1", matricula: "SD54RF", atividade: "Atv. Extra 2", anoLetivo: "8-A" },
    { id: "3", aluno: "Aluno 2", matricula: "SK12FG", atividade: "Atv. Extra 1", anoLetivo: "7-C" },
    { id: "4", aluno: "Aluno 2", matricula: "SK12FG", atividade: "Atv. Extra 2", anoLetivo: "7-C" },
    { id: "5", aluno: "Aluno 3", matricula: "SK12FG", atividade: "Atv. Extra 1", anoLetivo: "8-B" },
    { id: "6", aluno: "Aluno 3", matricula: "RW11GG", atividade: "Atv. Extra 2", anoLetivo: "8-B" },
];

const frequenciaAluno = [
    { aluno: "Aluno 1", atividade: "Atv. Extra 1", faltas: "20", presenca: "60", aproveitamento: "75 %" },
    { aluno: "Aluno 1", atividade: "Atv. Extra 2", faltas: "10", presenca: "70", aproveitamento: "88 %" },
    { aluno: "Aluno 2", atividade: "Atv. Extra 1", faltas: "40", presenca: "40", aproveitamento: "50 %" },
    { aluno: "Aluno 2", atividade: "Atv. Extra 2", faltas: "0", presenca: "80", aproveitamento: "100 %" },
    { aluno: "Aluno 3", atividade: "Atv. Extra 1", faltas: "35", presenca: "55", aproveitamento: "65 %" },
    { aluno: "Aluno 3", atividade: "Atv. Extra 2", faltas: "80", presenca: "0", aproveitamento: "0 %" }
]

const notasAluno = [
    {
        aluno: "Aluno 1", atividades: [
            { nome: "Atv. Extra 1", nota1: "7", nota2: "6", nota3: "7", nota4: "8" },
            { nome: "Atv. Extra 2", nota1: "5", nota2: "6", nota3: "7", nota4: "4" }
        ]
    },
    {
        aluno: "Aluno 2", atividades: [
            { nome: "Atv. Extra 1", nota1: "8", nota2: "9", nota3: "7", nota4: "10" },
            { nome: "Atv. Extra 2", nota1: "6", nota2: "6", nota3: "7", nota4: "7" }
        ]
    },
    {
        aluno: "Aluno 2", atividades: [
            { nome: "Atv. Extra 1", nota1: "7", nota2: "5", nota3: "4", nota4: "10" },
            { nome: "Atv. Extra 2", nota1: "3", nota2: "6", nota3: "7", nota4: "8" }
        ]
    },
]

function carregarTableDataMatricula() {
    const table = document.getElementById("tableMatriculaBody");

    let totalRegistro = table.children.length;

    if (totalRegistro == 0) {
        itemsMatricula.forEach(item => {
            let row = table.insertRow();

            let id = row.insertCell(0);
            id.innerHTML = item.id;

            let aluno = row.insertCell(1);
            aluno.innerHTML = item.aluno;

            let matricula = row.insertCell(2);
            matricula.innerHTML = item.matricula;

            let atividade = row.insertCell(3);
            atividade.innerHTML = item.atividade;

            let anoLetivo = row.insertCell(4);
            anoLetivo.innerHTML = item.anoLetivo;

            // let btn = row.insertCell(5);
            // btn.innerHTML = "<button type=\"button\" onclick='carregarBoletoAluno(" + item.id + ")' class=\"btn btn-secondary\">Imprimir</button>";
        });
    }
}

function exportarFrequenciaAluno() {
    const imputFreqAluno = document.getElementById("inputFreqAluno");

    let alunos = frequenciaAluno.filter(f => f.aluno == imputFreqAluno.value);

    if (alunos.length > 0) {
        let msg = "Aluno: " + alunos[0].aluno + "\n\n";

        alunos.forEach(aluno => {
            msg = msg + "Atividade: " + aluno.atividade + "\n" + "Presença: " + aluno.presenca + "\n" + "Faltas: " + aluno.faltas + "\n" + "Aproveitamento: " + aluno.aproveitamento + "\n\n"
        });

        alert(msg);

    } else {
        alert("ALUNO NÃO ENCONTRADO!");
    }
}

function exportarNotasAluno() {
    const imputNotaAluno = document.getElementById("inputNotaAluno");

    let alunos = notasAluno.filter(f => f.aluno == imputNotaAluno.value);
    
    if (alunos.length > 0) {
        let msg = "";

        alunos.forEach(aluno => {
            msg = "Aluno: " + aluno.aluno + "\n\n";

            aluno.atividades.forEach(atv => {

                let n1 = parseInt(atv.nota1);
                let n2 = parseInt(atv.nota2);
                let n3 = parseInt(atv.nota3);
                let n4 = parseInt(atv.nota4);

                let staus = "REPROVADO";

                let result = (n1 + n2 + n3 + n4) / 4;
                debugger
                if (result >= 6)
                    staus = "APROVADO";

                msg = msg + "Atividade: " + atv.nome + "\n" + "Nota 1: " + atv.nota1 + "\n" + "Nota 2: " + atv.nota2 + "\n" + "Nota 3: " + atv.nota3 + "\n" + "Nota 4: " + atv.nota4 + "\n" + "Status: " + staus + "\n\n"
            });
        });

        alert(msg);

    } else {
        alert("ALUNO NÃO ENCONTRADO!");
    }
}