//n1 = 0;

function gera(){
    return Math.floor(Math.random() * 6)+1;
}
function monta(){

    switch(gera()){

        case 1:

            document.getElementById("p1").style.background = "white";
            document.getElementById("p2").style.background = "white";
            document.getElementById("p3").style.background = "white";
            document.getElementById("p5").style.background = "white";
            document.getElementById("p6").style.background = "white";
            document.getElementById("p7").style.background = "white";

            document.getElementById("p4").style.background = "black";

            break;

        case 2:

            document.getElementById("p1").style.background = "white";
            document.getElementById("p3").style.background = "white";
            document.getElementById("p4").style.background = "white";
            document.getElementById("p5").style.background = "white";
            document.getElementById("p7").style.background = "white";

            document.getElementById("p2").style.background = "black";
            document.getElementById("p6").style.background = "black";

            break;

        case 3:

            document.getElementById("p2").style.background = "white";
            document.getElementById("p3").style.background = "white";
            document.getElementById("p5").style.background = "white";
            document.getElementById("p6").style.background = "white";

            document.getElementById("p1").style.background = "black";
            document.getElementById("p4").style.background = "black";
            document.getElementById("p7").style.background = "black";

            break;

        case 4:

            document.getElementById("p3").style.background = "white";
            document.getElementById("p4").style.background = "white";
            document.getElementById("p5").style.background = "white";

            document.getElementById("p1").style.background = "black";
            document.getElementById("p2").style.background = "black";
            document.getElementById("p6").style.background = "black";
            document.getElementById("p7").style.background = "black";

            break;

        case 5:

            document.getElementById("p3").style.background = "white";
            document.getElementById("p5").style.background = "white";

            document.getElementById("p1").style.background = "black";
            document.getElementById("p2").style.background = "black";
            document.getElementById("p4").style.background = "black";
            document.getElementById("p6").style.background = "black";
            document.getElementById("p7").style.background = "black";

            break;

        case 6:

            document.getElementById("p4").style.background = "white";

            document.getElementById("p1").style.background = "black";
            document.getElementById("p2").style.background = "black";
            document.getElementById("p3").style.background = "black";
            document.getElementById("p5").style.background = "black";
            document.getElementById("p6").style.background = "black";
            document.getElementById("p7").style.background = "black";

            break;

    }

}

function geraNaoRepetido(){
    /*
    
    n2 = Math.floor(Math.random() * 6)+1;

    if(n2==n1){
        return gera();
    }
    else{
        n1=n2;
        return n2;
    }

    */
}