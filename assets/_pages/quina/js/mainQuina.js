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

function simularQuina(){

    var outQuina1 = document.getElementById("outQuina1");
    var outQuina2 = document.getElementById("outQuina2");
    var outQuina3 = document.getElementById("outQuina3");
    var outQuina4 = document.getElementById("outQuina4");
    var outQuina5 = document.getElementById("outQuina5");

    var Quina = [];

    for(var i = 0; i < 5; i++){
        var temp = Math.floor(Math.random() * (80) + 1);

        if(Quina.indexOf(temp) == -1){
           Quina.push(temp);

        }else{
            i--;
        }
    }
  
    outQuina1.textContent = Quina[0];
    outQuina2.textContent = Quina[1];
    outQuina3.textContent = Quina[2];
    outQuina4.textContent = Quina[3];
    outQuina5.textContent = Quina[4];
}

function LimparCampos_1(){

    document.getElementById("outQuina1").textContent = "?";    
    document.getElementById("outQuina2").textContent = "?";
    document.getElementById("outQuina3").textContent = "?";
    document.getElementById("outQuina4").textContent = "?";
    document.getElementById("outQuina5").textContent = "?";
}

var btSimula = document.getElementById("btSimula");
    btSimula.addEventListener("click", simularQuina);

var btLimpar = document.getElementById("btLimpar");
    btLimpar.addEventListener("click", LimparCampos_1);