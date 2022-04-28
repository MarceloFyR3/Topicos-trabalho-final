function Consultaragendadeprovas(){

    let divDisplayState = document.getElementById("dvConsultaAgenda").style.display;

    console.log(divDisplayState);
    
    if(divDisplayState == "none"){
        document.getElementById("dvConsultaAgenda").style.display = "block";
    }else{
        document.getElementById("dvConsultaAgenda").style.display = "none";
    }
    
    // let para = document.createElement('p');
    // para.textContent = 'Próximas Provas';
    // document.body.appendChild(para);
}

function HorariodeAulas(){

    let divDisplayState = document.getElementById("dvHorariodeAulas").style.display;

    console.log(divDisplayState);
    
    if(divDisplayState == "none"){
        document.getElementById("dvHorariodeAulas").style.display = "block";
    }else{
        document.getElementById("dvHorariodeAulas").style.display = "none";
    }
     
}

function AulasExtras(){

    let divDisplayState = document.getElementById("dvAulasExtras").style.display;

    console.log(divDisplayState);
    
    if(divDisplayState == "none"){
        document.getElementById("dvAulasExtras").style.display = "block";
    }else{
        document.getElementById("dvAulasExtras").style.display = "none";
    }
}

function matricularAluno(){
    const imputNomeAluno = document.getElementById("nome").value;
    const imputMatAluno = document.getElementById("matricula").value;
    const imputActAluno = document.getElementById("atividades").value;


    // verificar se os campos não estão vazion 

    if(imputNomeAluno == ""){
     alert("FAVOR PREENCHER NOME");
        return;
    }
    if(imputMatAluno == ""){
     alert("FAVOR PREENCHER MATRICULA");
        return;
    }
    if(imputActAluno == "0"){
     alert("SELECIONE UMA OPÇÃO");
    }
    
    alert("Aluno: " + imputNomeAluno + " Matriculado com Sucesso!");
}

    function MateriaPortugues(){

        let divDisplayState = document.getElementById("dvConsultaPortugues").style.display;
    
        console.log(divDisplayState);
        
        if(divDisplayState == "none"){
            document.getElementById("dvConsultaPortugues").style.display = "block";
        }else{
            document.getElementById("dvConsultaPortugues").style.display = "none";
        }
         
    }    



    function materiaMatematica(){

        let divDisplayState = document.getElementById("dvConsultaMatematicca").style.display;
    
        console.log(divDisplayState);
        
        if(divDisplayState == "none"){
            document.getElementById("dvConsultaMatematicca").style.display = "block";
        }else{
            document.getElementById("dvConsultaMatematicca").style.display = "none";
        }
         
    }    

    function materiaGeografia(){

        let divDisplayState = document.getElementById("dvConsultaGeografia").style.display;
    
        console.log(divDisplayState);
        
        if(divDisplayState == "none"){
            document.getElementById("dvConsultaGeografia").style.display = "block";
        }else{
            document.getElementById("dvConsultaGeografia").style.display = "none";
        }
         
    }    

    function materiaCiencias(){

        let divDisplayState = document.getElementById("dvConsultaCiencias").style.display;
    
        console.log(divDisplayState);
        
        if(divDisplayState == "none"){
            document.getElementById("dvConsultaCiencias").style.display = "block";
        }else{
            document.getElementById("dvConsultaCiencias").style.display = "none";
        }
         
    }    

    function materiaEdFisica(){

        let divDisplayState = document.getElementById("dvConsultaEdFisica").style.display;
    
        console.log(divDisplayState);
        
        if(divDisplayState == "none"){
            document.getElementById("dvConsultaEdFisica").style.display = "block";
        }else{
            document.getElementById("dvConsultaEdFisica").style.display = "none";
        }
         
    }    

    function enviarMensagem(){
        const inputEnviarMmensagem = document.getElementById("inputEnviarMmensagem").value;
        
        let msg = "Mensagem enviada: " + inputEnviarMmensagem;

        alert(msg);
    }