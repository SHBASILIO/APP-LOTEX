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

function simularLotomania(){

    var outLotomania01 = document.getElementById("outLotomania01");
    var outLotomania02 = document.getElementById("outLotomania02");
    var outLotomania03 = document.getElementById("outLotomania03");
    var outLotomania04 = document.getElementById("outLotomania04");
    var outLotomania05 = document.getElementById("outLotomania05");

    var outLotomania06 = document.getElementById("outLotomania06");
    var outLotomania07 = document.getElementById("outLotomania07");
    var outLotomania08 = document.getElementById("outLotomania08");
    var outLotomania09 = document.getElementById("outLotomania09");
    var outLotomania10 = document.getElementById("outLotomania10");

    var outLotomania11 = document.getElementById("outLotomania11");
    var outLotomania12 = document.getElementById("outLotomania12");
    var outLotomania13 = document.getElementById("outLotomania13");
    var outLotomania14 = document.getElementById("outLotomania14");
    var outLotomania15 = document.getElementById("outLotomania15");

    var outLotomania16 = document.getElementById("outLotomania16");
    var outLotomania17 = document.getElementById("outLotomania17");
    var outLotomania18 = document.getElementById("outLotomania18");
    var outLotomania19 = document.getElementById("outLotomania19");
    var outLotomania20 = document.getElementById("outLotomania20");

    var Lotomania = [];

    for(var i = 0; i < 50; i++){
        var temp = Math.floor(Math.random() * (100) + 1);

        if(Lotomania.indexOf(temp) == -1){
           Lotomania.push(temp);

        }else{
            i--;
        }
    }

    outLotomania01.textContent = Lotomania[0];
    outLotomania02.textContent = Lotomania[1];
    outLotomania03.textContent = Lotomania[2];
    outLotomania04.textContent = Lotomania[3];
    outLotomania05.textContent = Lotomania[4];
    outLotomania06.textContent = Lotomania[5];
    outLotomania07.textContent = Lotomania[6];
    outLotomania08.textContent = Lotomania[7];
    outLotomania09.textContent = Lotomania[8];
    outLotomania10.textContent = Lotomania[9];
    outLotomania11.textContent = Lotomania[10];
    outLotomania12.textContent = Lotomania[11];
    outLotomania13.textContent = Lotomania[12];
    outLotomania14.textContent = Lotomania[13];
    outLotomania15.textContent = Lotomania[14];
    outLotomania16.textContent = Lotomania[15];
    outLotomania17.textContent = Lotomania[16];
    outLotomania18.textContent = Lotomania[17];
    outLotomania19.textContent = Lotomania[18];
    outLotomania20.textContent = Lotomania[19];
}

function LimparCampos_6(){

    document.getElementById("outLotomania01").textContent = "?";
    document.getElementById("outLotomania02").textContent = "?";
    document.getElementById("outLotomania03").textContent = "?";
    document.getElementById("outLotomania04").textContent = "?";
    document.getElementById("outLotomania05").textContent = "?";

    document.getElementById("outLotomania06").textContent = "?";
    document.getElementById("outLotomania07").textContent = "?";
    document.getElementById("outLotomania08").textContent = "?";
    document.getElementById("outLotomania09").textContent = "?";
    document.getElementById("outLotomania10").textContent = "?";

    document.getElementById("outLotomania11").textContent = "?";
    document.getElementById("outLotomania12").textContent = "?";
    document.getElementById("outLotomania13").textContent = "?";
    document.getElementById("outLotomania14").textContent = "?";
    document.getElementById("outLotomania15").textContent = "?";

    document.getElementById("outLotomania16").textContent = "?";
    document.getElementById("outLotomania17").textContent = "?";
    document.getElementById("outLotomania18").textContent = "?";
    document.getElementById("outLotomania19").textContent = "?";
    document.getElementById("outLotomania20").textContent = "?";
}

var btSimula_6 = document.getElementById("btSimula_6");
    btSimula_6.addEventListener("click", simularLotomania);

var btLimpar_6 = document.getElementById("btLimpar_6");
    btLimpar_6.addEventListener("click", LimparCampos_6);