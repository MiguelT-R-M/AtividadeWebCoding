
function mudaCor(){

    let valor = document.getElementById("darkmode");

    if(valor.checked){

        document.getElementById("main").style.backgroundColor = "black";
        document.getElementById("divnome").style.backgroundColor = "white";
        document.getElementById("h1nome").style.color = "black";
        document.getElementById("h2nome").style.color = "black";
        document.getElementById("p1").style.color = "black";
        document.getElementById("p2").style.color = "black";
        document.getElementById("p3").style.color = "black";
        document.getElementById("p4").style.color = "black";
        document.body.style.color = "white";

    }
    else{

        document.getElementById("main").style.backgroundColor = "white";
        document.getElementById("divnome").style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        document.getElementById("h1nome").style.color = "white";
        document.getElementById("h2nome").style.color = "white";
        document.getElementById("p1").style.color = "white";
        document.getElementById("p2").style.color = "white";
        document.getElementById("p3").style.color = "white";
        document.getElementById("p4").style.color = "white";
        document.body.style.color = "black";

    }

}

function mudaFonte(){

    let fon = document.getElementById("tamanhofonte").value;
    document.body.style.fontSizeAdjust = fon;
    

}

function divSobe(){

    document.getElementById("divnome").style.transform = "translateY(-20px)";


}

function divCai(){

    document.getElementById("divnome").style.transform = "translateY(20px)";

}
