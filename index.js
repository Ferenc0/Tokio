var rontasaid=0

//1
function Edo0(){
    var edo = document.getElementById("Edo").value
    var valasz001 = document.getElementById("valasz001")
    

    if(edo.toLowerCase() === "edo")
    {
        valasz001.innerHTML="Helyes"
        valasz001.style.color="green"
        document.getElementById("submint1").style.display="none"
        document.getElementById("Edo").disabled=true
    }else{
        valasz001.innerHTML="Helytelen"
        valasz001.style.color="red"
        
        rontasodE();
    }

}


//3

function hivatalos(){
    var palota = document.getElementById("palota").value
    var valasz002 = document.getElementById("valasz002")
    

    if(palota == 1869){
        valasz002.innerHTML="Helyes"
        valasz002.style.color="green"
        document.getElementById("submint2").style.display="none"
        document.getElementById("palota").disabled=true
    }else{
        valasz002.innerHTML="Helytelen"
        valasz002.style.color="red"
        
        rontasodE();
    }


}



//5

function shibuya0(){
    var shibuya = document.getElementById("shibuya").value
    var valasz003 = document.getElementById("valasz003")
    

    if(shibuya.toLowerCase() === "shibuya")
    {
        valasz003.innerHTML="Helyes"
        valasz003.style.color="green"
        document.getElementById("submint3").style.display="none"
        document.getElementById("shibuya").disabled=true
    }else{
        valasz003.innerHTML="Helytelen"
        valasz003.style.color="red"
       
        rontasodE();
    }
}






//2
var Kezdet = document.getElementById("jo");
var rkezdet = document.getElementsByClassName("rossz");


document.getElementById("kezdet").addEventListener("click", valasz1);

function valasz1() {
    Kezdet.style.color = "green";

    for (var i = 0; i < rkezdet.length; i++) {
        rkezdet[i].style.display = "none";
    }
}

var rosszak = document.getElementsByClassName("kezdet2");

for (var i = 0; i < rosszak.length; i++) {
    rosszak[i].addEventListener("click", valasz01);
    
}

function valasz01() {
    this.style.color = "red";
    rontasodE();
}




//4
var megalloJO = document.getElementById("megallokJO");
var rmegallok = document.getElementsByClassName("megallok");


megalloJO.addEventListener("click", megallo);

function megallo() {
    megalloJO.style.color = "green";

    for (var i = 0; i < rmegallok.length; i++) {
        rmegallok[i].style.display = "none";
    }
}

for (var i = 0; i < rmegallok.length; i++) {
    rmegallok[i].addEventListener("click", rosszMegallo);
    
}

function rosszMegallo() {
    this.style.color = "red";
    
    rontasodE();
}



function rontasodE(){
   rontasaid++
   document.getElementById("rontasod").innerText= rontasaid
}