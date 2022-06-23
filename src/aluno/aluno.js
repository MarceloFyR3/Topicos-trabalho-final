$(document).ready(function () {



    carregarAlunos();

});

function carregarAlunos() {

    var select = document.getElementById("sltAlunos"),
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


var section = document.getElementsByTagName('tbody')[0];

function escolhaAluno() {


    for (var i = 0; i < alunos.length; i++) {
        var listaDiscis = document.createElement('td')
        var listaMates = document.createElement('td')

        var myArticle = document.createElement('tr')
        // var disci = document.createElement('td');
        var listaDisci = document.createElement('li');
        var listaProva = document.createElement('td');
        var listaMate = document.createElement('li');
        var listaFalta = document.createElement('td');
        listaFalta.textContent = disciplinas[i].falta;
        listaDiscis.appendChild(listaDisci);
        listaMate.textContent = disciplinas[i].nome;
        listaMates.appendChild(listaMate);
        listaProva.textContent = disciplinas[i].provas;
        // disci.appendChild(listaProva);
        listaDisci.textContent = disciplinas[i].diaSemanaAula;
        // disci.appendChild(listaDisci);

        myArticle.appendChild(listaMates);
        myArticle.appendChild(listaDiscis);
        myArticle.appendChild(listaProva);
        myArticle.appendChild(listaFalta);
        section.appendChild(myArticle)

    }

}






// function carregaMaterial1() {
//     let count = 0
//     do {
//         let para = document.createElement('p');
//         para.textContent = count + 1;
//         document.body.appendChild(para);
//         count++;
//     } while (count < 10);
// }
// function carregaMaterial2() {
//     var display = document.getElementById(carregaMaterial2).style.display;
//     if (display == "none")
//         document.getElementById(carregaMaterial2).style.display = 'block';
//     else
//         document.getElementById(carregaMaterial2).style.display = 'none';
// }



// function Consultaragendadeprovas() {

//     let divDisplayState = document.getElementById("dvConsultaAgenda").style.display;

//     console.log(divDisplayState);

//     if (divDisplayState == "none") {
//         document.getElementById("dvConsultaAgenda").style.display = "block";
//     } else {
//         document.getElementById("dvConsultaAgenda").style.display = "none";
//     }

// let para = document.createElement('p');
// para.textContent = 'Próximas Provas';
// document.body.appendChild(para);
// }

function Consultaturma1() {

    let divDisplayState = document.getElementById("Turma1").style.display;

    console.log(divDisplayState);

    if (divDisplayState == "none") {
        document.getElementById("Turma1").style.display = "block";
    } else {
        document.getElementById("Turma1").style.display = "none";
    }

}

function Consultaturma2() {

    let divDisplayState = document.getElementById("Turma2").style.display;

    console.log(divDisplayState);

    if (divDisplayState == "none") {
        document.getElementById("Turma2").style.display = "block";
    } else {
        document.getElementById("Turma2").style.display = "none";
    }

}

// function HorariodeAulas() {

//     let divDisplayState = document.getElementById("dvHorariodeAulas").style.display;

//     console.log(divDisplayState);

//     if (divDisplayState == "none") {
//         document.getElementById("dvHorariodeAulas").style.display = "block";
//     } else {
//         document.getElementById("dvHorariodeAulas").style.display = "none";
//     }

// }

// function AulasExtras() {

//     let divDisplayState = document.getElementById("dvAulasExtras").style.display;

//     console.log(divDisplayState);

//     if (divDisplayState == "none") {
//         document.getElementById("dvAulasExtras").style.display = "block";
//     } else {
//         document.getElementById("dvAulasExtras").style.display = "none";
//     }
// }



// function MateriaPortugues() {

//     let divDisplayState = document.getElementById("dvConsultaPortugues").style.display;

//     console.log(divDisplayState);

//     if (divDisplayState == "none") {
//         document.getElementById("dvConsultaPortugues").style.display = "block";
//     } else {
//         document.getElementById("dvConsultaPortugues").style.display = "none";
//     }

// }



// function materiaMatematica() {

//     let divDisplayState = document.getElementById("dvConsultaMatematicca").style.display;

//     console.log(divDisplayState);

//     if (divDisplayState == "none") {
//         document.getElementById("dvConsultaMatematicca").style.display = "block";
//     } else {
//         document.getElementById("dvConsultaMatematicca").style.display = "none";
//     }

// }

// function materiaGeografia() {

//     let divDisplayState = document.getElementById("dvConsultaGeografia").style.display;

//     console.log(divDisplayState);

//     if (divDisplayState == "none") {
//         document.getElementById("dvConsultaGeografia").style.display = "block";
//     } else {
//         document.getElementById("dvConsultaGeografia").style.display = "none";
//     }

// }

// function materiaCiencias() {

//     let divDisplayState = document.getElementById("dvConsultaCiencias").style.display;

//     console.log(divDisplayState);

//     if (divDisplayState == "none") {
//         document.getElementById("dvConsultaCiencias").style.display = "block";
//     } else {
//         document.getElementById("dvConsultaCiencias").style.display = "none";
//     }

// }

// function materiaEdFisica() {

//     let divDisplayState = document.getElementById("dvConsultaEdFisica").style.display;

//     console.log(divDisplayState);

//     if (divDisplayState == "none") {
//         document.getElementById("dvConsultaEdFisica").style.display = "block";
//     } else {
//         document.getElementById("dvConsultaEdFisica").style.display = "none";
//     }

// }





function myFunction() {

    var person = prompt("Olá, o que deseja?", 'Preciso da minha declaração de Matricula, via e-mail');

    if (person.toLowerCase() == "Declaração de Matricula, via e-mail") {

    }


    var person = window.prompt("Qual seu e-mail?", 'maria@gmail.com');

    var person = window.prompt("Confirmando: maria@gmail.com", 'Esse mesmo.');
    var person = prompt("Ok, iremos encaminhar para maria@gmail.com. \nAjudo em algo mais?", 'Não somento isso, obrigada!');

    var person = window.alert("Até breve! \n\nATENDIMENTO ENCERRADO!");

}
