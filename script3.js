function mudaCor(){

    let valor = document.getElementById("darkmode");

    if(valor.checked){

        document.getElementById("main").style.backgroundColor = "black";
        document.body.style.color = "white";

    }
    else{

        document.getElementById("main").style.backgroundColor = "white";
        document.body.style.color = "black";

    }

}

function mudaFonte(){

    let fon = document.getElementById("tamanhofonte").value;
    document.body.style.fontSizeAdjust = fon;
    

}