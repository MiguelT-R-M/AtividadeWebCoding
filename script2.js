function mudaCor(){

    let valor = document.getElementById("darkmode");

    if(valor.checked){

        document.getElementById("main2").style.backgroundColor = "black";
        document.body.style.color = "white";

    }
    else{

        document.getElementById("main2").style.backgroundColor = "white";
        document.body.style.color = "black";

    }

}

function mudaFonte(){

    let fon = document.getElementById("tamanhofonte").value;
    document.body.style.fontSizeAdjust = fon;
    

}


let figuras = ["game_1.jpeg", "game_2.png", "game_3.jpg", "game_4.png", "game_5.jpg"]

let cont = 1

function mudaImagem(){



    
    let imagem = document.getElementById("image");
    
    imagem.src = figuras[cont]
    
    
    cont++
    
    if(cont>figuras.length-1){
        cont=0
    }

    if(cont==2){

        document.getElementById("games").style.height = "700px";
        document.getElementById("titulo").innerHTML = "Rain World";
        document.getElementById("sobre").innerHTML = "Jogo de exploração, sobrevivência e plataforma 2D";

    }
    if(cont==3){

        document.getElementById("games").style.height = "281px";
        document.getElementById("titulo").innerHTML = "Tunic";
        document.getElementById("sobre").innerHTML = "Jogo souls e zeldalike"

    }
    if(cont==4){

        document.getElementById("games").style.height = "636px";
        document.getElementById("titulo").innerHTML = "Dark Souls"
        document.getElementById("sobre").innerHTML = "Dark Souls"
        

    }
    if(cont==0){

        document.getElementById("games").style.height = "600px";
        document.getElementById("titulo").innerHTML = "Metal Gear Solid 3"
        document.getElementById("sobre").innerHTML = "Jogo de stealth, sobrevivência e espionagem"

    }
    if(cont==1){

        document.getElementById("games").style.height = "700px";
        document.getElementById("titulo").innerHTML = "Outer Wilds";
        document.getElementById("sobre").innerHTML = "Jogo de exploração e puzzle";
        

    }


}