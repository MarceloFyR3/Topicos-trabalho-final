
const items = [
    { id: "1", aluno: "Aluno 1", atividade: "Atv. Extra 1", dateMatricula: "03/03/2022", valor: "299,90" },
    { id: "2", aluno: "Aluno 2", atividade: "Atv. Extra 2", dateMatricula: "06/04/2022", valor: "199,90" },
    { id: "3", aluno: "Aluno 3", atividade: "Atv. Extra 1", dateMatricula: "06/04/2022", valor: "299,90" }
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
    
            let atividade = row.insertCell(2);
            atividade.innerHTML = item.atividade;
    
            let dateMatricula = row.insertCell(3);
            dateMatricula.innerHTML = item.dateMatricula;
    
            let valor = row.insertCell(4);
            valor.innerHTML = item.valor;
    
            let btn = row.insertCell(5);
            btn.innerHTML = "<button type=\"button\" onclick='carregarBoletoAluno(" + item.id + ")' class=\"btn btn-secondary\">Imprimir</button>";
        });
    }    
}

function carregarBoletoAluno(id) {
    let item = items.find(f => f.id == id);

    let msg = "Nome: " + item.aluno + "\n" + "Atividade: " + item.atividade + "\n" + "Data Matricula: " + item.dateMatricula + "\n" + "Valor à Pagar: " + item.valor + "\n";

    alert(msg);
}