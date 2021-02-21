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

function simularLotofacil(){

    var outLotofacil01 = document.getElementById("outLotofacil01");
    var outLotofacil02 = document.getElementById("outLotofacil02");
    var outLotofacil03 = document.getElementById("outLotofacil03");
    var outLotofacil04 = document.getElementById("outLotofacil04");
    var outLotofacil05 = document.getElementById("outLotofacil05");

    var outLotofacil06 = document.getElementById("outLotofacil06");
    var outLotofacil07 = document.getElementById("outLotofacil07");
    var outLotofacil08 = document.getElementById("outLotofacil08");
    var outLotofacil09 = document.getElementById("outLotofacil09");
    var outLotofacil10 = document.getElementById("outLotofacil10");

    var outLotofacil11 = document.getElementById("outLotofacil11");
    var outLotofacil12 = document.getElementById("outLotofacil12");
    var outLotofacil13 = document.getElementById("outLotofacil13");
    var outLotofacil14 = document.getElementById("outLotofacil14");
    var outLotofacil15 = document.getElementById("outLotofacil15");

    var LotoFacil = [];

    for(var i = 0; i < 15; i++){
        var temp = Math.floor(Math.random() * (25) + 1);

        if(LotoFacil.indexOf(temp) == -1){
           LotoFacil.push(temp);

        }else{
            i--;
        }
    }

    outLotofacil01.textContent = LotoFacil[0];
    outLotofacil02.textContent = LotoFacil[1];
    outLotofacil03.textContent = LotoFacil[2];
    outLotofacil04.textContent = LotoFacil[3];
    outLotofacil05.textContent = LotoFacil[4];
    outLotofacil06.textContent = LotoFacil[5];
    outLotofacil07.textContent = LotoFacil[6];
    outLotofacil08.textContent = LotoFacil[7];
    outLotofacil09.textContent = LotoFacil[8];
    outLotofacil10.textContent = LotoFacil[9];
    outLotofacil11.textContent = LotoFacil[10];
    outLotofacil12.textContent = LotoFacil[11];
    outLotofacil13.textContent = LotoFacil[12];
    outLotofacil14.textContent = LotoFacil[13];
    outLotofacil15.textContent = LotoFacil[14];
}

function LimparCampos_5(){

    document.getElementById("outLotofacil01").textContent = "?";
    document.getElementById("outLotofacil02").textContent = "?";
    document.getElementById("outLotofacil03").textContent = "?";
    document.getElementById("outLotofacil04").textContent = "?";
    document.getElementById("outLotofacil05").textContent = "?";

    document.getElementById("outLotofacil06").textContent = "?";
    document.getElementById("outLotofacil07").textContent = "?";
    document.getElementById("outLotofacil08").textContent = "?";
    document.getElementById("outLotofacil09").textContent = "?";
    document.getElementById("outLotofacil10").textContent = "?";

    document.getElementById("outLotofacil11").textContent = "?";
    document.getElementById("outLotofacil12").textContent = "?";
    document.getElementById("outLotofacil13").textContent = "?";
    document.getElementById("outLotofacil14").textContent = "?";
    document.getElementById("outLotofacil15").textContent = "?";
}

var btSimula_5 = document.getElementById("btSimula_5");
    btSimula_5.addEventListener("click", simularLotofacil);

var btLimpar_5 = document.getElementById("btLimpar_5");
    btLimpar_5.addEventListener("click", LimparCampos_5);