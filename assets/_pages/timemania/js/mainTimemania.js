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


function simularTimemania(){

    var outTimemania01 = document.getElementById("outTimemania01");
    var outTimemania02 = document.getElementById("outTimemania02");
    var outTimemania03 = document.getElementById("outTimemania03");
    var outTimemania04 = document.getElementById("outTimemania04");
    var outTimemania05 = document.getElementById("outTimemania05");
    var outTimemania06 = document.getElementById("outTimemania06");
    var outTimemania07 = document.getElementById("outTimemania07");
    var outTimemania08 = document.getElementById("outTimemania08");
    var outTimemania09 = document.getElementById("outTimemania09");
    var outTimemania10 = document.getElementById("outTimemania10");

    var outManiaTime = document.getElementById("outManiaTime");
    var Timemania = [];

    for(var i = 0; i < 10; i++){
        var temp = Math.floor(Math.random() * (80) + 1);

        if(Timemania.indexOf(temp) == -1){
           Timemania.push(temp);

        }else{
            i--;
        }
    }

    outTimemania01.textContent = Timemania[0];
    outTimemania02.textContent = Timemania[1];
    outTimemania03.textContent = Timemania[2];
    outTimemania04.textContent = Timemania[3];
    outTimemania05.textContent = Timemania[4];
    outTimemania06.textContent = Timemania[5];
    outTimemania07.textContent = Timemania[6];
    outTimemania08.textContent = Timemania[7];
    outTimemania09.textContent = Timemania[8];
    outTimemania10.textContent = Timemania[9];
  
    var ManiaTime = Math.floor(Math.random() * (20) + 1);

    switch (ManiaTime){
        
        case 1:
        outManiaTime.textContent = "ATLÉTICO / MG";
        break;

        case 2:
        outManiaTime.textContent = "VASCO DA GAMA / RJ";
        break;

        case 3:
        outManiaTime.textContent = "FORTALEZA / CE";
        break;

        case 4:
        outManiaTime.textContent = "BRAGANTINO / SP";
        break;

        case 5:
        outManiaTime.textContent = "GRÊMIO / RS";
        break;

        case 6:
        outManiaTime.textContent = "ATHLÉTICO / PR";
        break;

        case 7:
        outManiaTime.textContent = "BAHIA / BA";
        break;

        case 8:
        outManiaTime.textContent = "GOIÁS / GO";
        break;

        case 9:
        outManiaTime.textContent = "PALMEIRAS / SP";
        break;

        case 10:
        outManiaTime.textContent = "BOTAFOGO / RJ";
        break;

        case 11:
        outManiaTime.textContent = "INTERNACIONAL / RS";
        break;

        case 12:
        outManiaTime.textContent = "CEARÁ / SC";
        break;

        case 13:
        outManiaTime.textContent = "SÃO PAULO / SP";
        break;

        case 14:
        outManiaTime.textContent = "CORITIBA / PR";
        break;

        case 15:
        outManiaTime.textContent = "CORINTHIANS / SP";
        break;

        case 16:
        outManiaTime.textContent = "SPORT RECIFE / PE";
        break;

        case 17:
        outManiaTime.textContent = "FLUMINENSE / RJ";
        break;

        case 18:
        outManiaTime.textContent = "FLAMENGO / RJ";
        break;

        case 19:
        outManiaTime.textContent = "SANTOS / SP";
        break;

        case 20:
        outManiaTime.textContent = "ATLÉTICO / GO";
        break;
    }
}

function LimparCampos_4(){

    document.getElementById("outTimemania01").textContent = "?";
    document.getElementById("outTimemania02").textContent = "?";
    document.getElementById("outTimemania03").textContent = "?";
    document.getElementById("outTimemania04").textContent = "?";
    document.getElementById("outTimemania05").textContent = "?";

    document.getElementById("outTimemania06").textContent = "?";
    document.getElementById("outTimemania07").textContent = "?";
    document.getElementById("outTimemania08").textContent = "?";
    document.getElementById("outTimemania09").textContent = "?";
    document.getElementById("outTimemania10").textContent = "?";

    document.getElementById("outManiaTime").textContent = "TIME DO CORAÇÃO"
}

var btSimula_4 = document.getElementById("btSimula_4");
    btSimula_4.addEventListener("click", simularTimemania);

var btLimpar_4 = document.getElementById("btLimpar_4");
    btLimpar_4.addEventListener("click", LimparCampos_4);