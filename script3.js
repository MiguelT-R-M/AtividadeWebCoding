function mudaCor(){

    let valor = document.getElementById("darkmode");

    if(valor.checked){

        document.getElementById("main3").style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById("divform").style.backgroundColor = "gray";

    }
    else{

        document.getElementById("main3").style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById("divform").style.backgroundColor = "rgba(0, 0, 0, 0.8)";


    }

}

function mudaFonte(){

    let fon = document.getElementById("tamanhofonte").value;
    document.body.style.fontSizeAdjust = fon;
    

}

let nomeaf = false;
let senhaaf = false;
let nomevar = true;
let senhavar = true;



function a1(){

    let nome = document.getElementById("user").value;

    if(nome.length>=8){

        document.getElementById("divform").style.height = "350px";
        document.getElementById("aviso1").innerHTML = "";
        nomeaf = true;
        nomevar = true;

    }
    else{

        document.getElementById("divform").style.height = "468px";
        document.getElementById("aviso1").innerHTML = "O nome deve ter 8 ou mais caracteres";
        nomeaf = false;
        nomevar = false;

    }


    if (senhavar==false){

        document.getElementById("divform").style.height = "468px";

    }

}

function a2(){

    let senha = document.getElementById("senha").value;

    if(senha.length>=6){

        document.getElementById("divform").style.height = "350px";
        document.getElementById("aviso2").innerHTML = "";
        senhaaf = true;
        senhavar = true;
        
        if(senha.includes("1") == true || senha.includes("2") == true || senha.includes("3") == true || senha.includes("4") == true || senha.includes("5") == true || senha.includes("6") == true || senha.includes("7") == true || senha.includes("8") == true || senha.includes("9") == true){

            document.getElementById("divform").style.height = "350px";
            document.getElementById("aviso2").innerHTML = "";
            senhaaf = true;
            senhavar = true;
            
    
        }
        else{
    
            document.getElementById("divform").style.height = "468px";
            document.getElementById("aviso2").innerHTML = "a senha deve conter números";
            senhaaf = false;
            senhavar = false;
    
        } 

    }
    else{

        document.getElementById("divform").style.height = "468px";
        document.getElementById("aviso2").innerHTML = "a senha deve ter 6 ou mais caracteres";
        senhaaf = false;
        senhavar = false;

    }


    if (nomevar==false){

        document.getElementById("divform").style.height = "468px";

    }


}

function redireciona(){

    if(nomeaf == true & senhaaf == true){

        location.href = "index.html";

    }

}