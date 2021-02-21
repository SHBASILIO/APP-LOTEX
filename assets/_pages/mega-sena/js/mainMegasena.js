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


function simularMega(){

    var outMegaSena1 = document.getElementById("outMegaSena1");
    var outMegaSena2 = document.getElementById("outMegaSena2");
    var outMegaSena3 = document.getElementById("outMegaSena3");
    var outMegaSena4 = document.getElementById("outMegaSena4");
    var outMegaSena5 = document.getElementById("outMegaSena5");
    var outMegaSena6 = document.getElementById("outMegaSena6");

    var MegaSena = [];

    for(var i = 0; i < 6; i++){
        var temp = Math.floor(Math.random() * (60) + 1);

        if(MegaSena.indexOf(temp) == -1){
           MegaSena.push(temp);

        }else{
            i--;
        }
    }
    
    outMegaSena1.textContent = MegaSena[0];
    outMegaSena2.textContent = MegaSena[1];
    outMegaSena3.textContent = MegaSena[2];
    outMegaSena4.textContent = MegaSena[3];
    outMegaSena5.textContent = MegaSena[4];
    outMegaSena6.textContent = MegaSena[5];  
}

function LimparCampos_2(){

    document.getElementById("outMegaSena1").textContent = "?";
    document.getElementById("outMegaSena2").textContent = "?";
    document.getElementById("outMegaSena3").textContent = "?";
    document.getElementById("outMegaSena4").textContent = "?";
    document.getElementById("outMegaSena5").textContent = "?";
    document.getElementById("outMegaSena6").textContent = "?";
}

var btSimula_2 = document.getElementById("btSimula_2");
    btSimula_2.addEventListener("click", simularMega);

var btLimpar_2 = document.getElementById("btLimpar_2");
    btLimpar_2.addEventListener("click", LimparCampos_2);

