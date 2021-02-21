const $navBar = document
    .querySelectorAll('.nav-bar')[0];

const $menu = document
    .querySelectorAll('.menu')[0];

        $menu.addEventListener('click', toggleMenu, false);
        var isOpen = false;

    function toggleMenu(){
        if(!isOpen){
            $navBar.classList.add('menu-opened');
            $menu.firstElementChild.classList.add('close-btn');
            isOpen = true;
        }else{
            $navBar.classList.remove('menu-opened');
            $menu.firstElementChild.classList.remove('close-btn');
            isOpen = false;
          }
    }

function simularDuplaSena(){

    var outDuplaSena01 = document.getElementById("outDuplaSena01");
    var outDuplaSena02 = document.getElementById("outDuplaSena02");
    var outDuplaSena03 = document.getElementById("outDuplaSena03");
    var outDuplaSena04 = document.getElementById("outDuplaSena04");
    var outDuplaSena05 = document.getElementById("outDuplaSena05");
    var outDuplaSena06 = document.getElementById("outDuplaSena06");

    var outDuplaSena07 = document.getElementById("outDuplaSena07");
    var outDuplaSena08 = document.getElementById("outDuplaSena08");
    var outDuplaSena09 = document.getElementById("outDuplaSena09");
    var outDuplaSena10 = document.getElementById("outDuplaSena10");
    var outDuplaSena11 = document.getElementById("outDuplaSena11");
    var outDuplaSena12 = document.getElementById("outDuplaSena12");

    var DuplaSena = [];

    for(var i = 0; i < 12; i++){
        var temp = Math.floor(Math.random() * (50) + 1);

        if(DuplaSena.indexOf(temp) == -1){
           DuplaSena.push(temp);

        }else{
            i--;
        }
    }

    outDuplaSena01.textContent = DuplaSena[0];
    outDuplaSena02.textContent = DuplaSena[1];
    outDuplaSena03.textContent = DuplaSena[2];
    outDuplaSena04.textContent = DuplaSena[3];
    outDuplaSena05.textContent = DuplaSena[4];
    outDuplaSena06.textContent = DuplaSena[5];
    outDuplaSena07.textContent = DuplaSena[6];
    outDuplaSena08.textContent = DuplaSena[7];
    outDuplaSena09.textContent = DuplaSena[8];
    outDuplaSena10.textContent = DuplaSena[9];
    outDuplaSena11.textContent = DuplaSena[10];
    outDuplaSena12.textContent = DuplaSena[11];
}

function LimparCampos_3(){

    document.getElementById("outDuplaSena01").textContent = "?";
    document.getElementById("outDuplaSena02").textContent = "?";
    document.getElementById("outDuplaSena03").textContent = "?";
    document.getElementById("outDuplaSena04").textContent = "?";
    document.getElementById("outDuplaSena05").textContent = "?";

    document.getElementById("outDuplaSena06").textContent = "?";
    document.getElementById("outDuplaSena07").textContent = "?";
    document.getElementById("outDuplaSena08").textContent = "?";
    document.getElementById("outDuplaSena09").textContent = "?";
    document.getElementById("outDuplaSena10").textContent = "?";
}


var btSimula_3 = document.getElementById("btSimula_3");
    btSimula_3.addEventListener("click", simularDuplaSena);

var btLimpar_3 = document.getElementById("btLimpar_3");
    btLimpar_3.addEventListener("click", LimparCampos_3);
