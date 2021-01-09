n1 = 0;

function gera(){
    return Math.floor(Math.random() * 6)+1;
}

function geraNaoRepetido(){
    n2 = Math.floor(Math.random() * 6)+1;

    if(n2==n1){
        return gera();
    }
    else{
        n1=n2;
        return n2;
    }
}

const dado = document.getElementById("dado");
dado.onclick = function (){
//  switch(gera()){
    switch(geraNaoRepetido()){

        case 1:

            document.getElementById("p1").style.backgroundColor = "white";
            document.getElementById("p2").style.backgroundColor = "white";
            document.getElementById("p3").style.backgroundColor = "white";
            document.getElementById("p5").style.backgroundColor = "white";
            document.getElementById("p6").style.backgroundColor = "white";
            document.getElementById("p7").style.backgroundColor = "white";

            document.getElementById("p4").style.backgroundColor = "black";

            break;

        case 2:

            document.getElementById("p3").style.backgroundColor = "white";
            document.getElementById("p1").style.backgroundColor = "white";
            document.getElementById("p4").style.backgroundColor = "white";
            document.getElementById("p5").style.backgroundColor = "white";
            document.getElementById("p7").style.backgroundColor = "white";

            document.getElementById("p6").style.backgroundColor = "black";
            document.getElementById("p2").style.backgroundColor = "black";

            break;

        case 3:

            document.getElementById("p2").style.backgroundColor = "white";
            document.getElementById("p5").style.backgroundColor = "white";
            document.getElementById("p6").style.backgroundColor = "white";
            document.getElementById("p3").style.backgroundColor = "white";

            document.getElementById("p4").style.backgroundColor = "black";
            document.getElementById("p7").style.backgroundColor = "black";
            document.getElementById("p1").style.backgroundColor = "black";

            break;

        case 4:

            document.getElementById("p4").style.backgroundColor = "white";
            document.getElementById("p3").style.backgroundColor = "white";
            document.getElementById("p5").style.backgroundColor = "white";

            document.getElementById("p1").style.backgroundColor = "black";
            document.getElementById("p2").style.backgroundColor = "black";
            document.getElementById("p6").style.backgroundColor = "black";
            document.getElementById("p7").style.backgroundColor = "black";

            break;

        case 5:

            document.getElementById("p3").style.backgroundColor = "white";
            document.getElementById("p5").style.backgroundColor = "white";

            document.getElementById("p1").style.backgroundColor = "black";
            document.getElementById("p2").style.backgroundColor = "black";
            document.getElementById("p4").style.backgroundColor = "black";
            document.getElementById("p6").style.backgroundColor = "black";
            document.getElementById("p7").style.backgroundColor = "black";

            break;

        case 6:

            document.getElementById("p4").style.backgroundColor = "white";

            document.getElementById("p1").style.backgroundColor = "black";
            document.getElementById("p2").style.backgroundColor = "black";
            document.getElementById("p3").style.backgroundColor = "black";
            document.getElementById("p5").style.backgroundColor = "black";
            document.getElementById("p6").style.backgroundColor = "black";
            document.getElementById("p7").style.backgroundColor = "black";

            break;

    }

}