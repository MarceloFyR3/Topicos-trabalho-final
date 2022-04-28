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

const items = [
    { id: "1", aluno: "Aluno 1", Matricula: "123456", CargaHoraria: "80 horas",},
    { id: "2", aluno: "Aluno 2", Matricula: "654321", CargaHoraria: "70 horas"},
    { id: "3", aluno: "Aluno 3", Matricula: "951357", CargaHoraria: "90 horas"}
];

function carregarTableData() {
    const table = document.getElementById("tableBody");
    
    let totalRegistro = table.children.length;

    if(totalRegistro == 0)
    {
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