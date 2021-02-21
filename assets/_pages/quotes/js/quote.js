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
function mostrarQuote(){

    var outMsg = document.getElementById("outMsg");
    var num = Math.floor(Math.random() * (50) + 1);

switch (num){
    case 1:
    outMsg.textContent = "\"Ter dinheiro sobrando é bom, mas saber multiplicá-lo para realizar sonhos é ainda melhor\" (Nathalia Arcuri)";
    break;

    case 2:
    outMsg.textContent = "\"Você pode sair do buraco. Não desanime! Apenas mova-se.\" (Nathalia Arcuri)";
    break;

    case 3:
    outMsg.textContent = "\"Para ser livre financeiramente você precisa antes de tudo ter disciplina.\" (Nathalia Arcuri)";
    break;

    case 4:
    outMsg.textContent = "\"Tenha objetivos que sejam: autênticos, importantes e justificáveis.\" (Nathalia Arcuri)";
    break;

    case 5:
    outMsg.textContent = "\"Para definir prioridades e planejar sua vida financeira, você precisa de autoconhecimento.\" (Nathalia Arcuri)";
    break;

    case 6:
    outMsg.textContent = "\"Dinheiro pode trazer felicidade sim. Desde que você saiba o que te faz feliz.\" (Nathalia Arcuri)";
    break;

    case 7:
    outMsg.textContent = "\"Chegar a máxima performance exige treino, dedicação e disciplina.\" (Nathalia Arcuri)";
    break;

    case 8:
    outMsg.textContent = "\"Dinheiro não aceita desaforo. Não desperdice o que você suou tanto para conquistar.\" (Nathalia Arcuri)";
    break;

    case 9:
    outMsg.textContent = "\"O quanto antes começar a poupar, menor será o esforço para alcançar as metas.\" (Nathalia Arcuri)";
    break;

    case 10:
    outMsg.textContent = "\"É possível viver o hoje com tudo que realmente importa. Não é necessariamente fácil.\" (Nathalia Arcuri)";
    break;

    case 11:
    outMsg.textContent = "\"Ei você, o que você está fazendo hoje para garantir uma velhice tranquila?\" (Gustavo Cerbasi)";
    break;

    case 12:
    outMsg.textContent = "\"Atente-se. Os pequenos gastos não são o problema. O problema é quando eles são ignorados.\" (Gustavo Cerbasi)";
    break;

    case 13:
    outMsg.textContent = "\"Juro é uma quantia que você paga por um dinheiro que não é seu.\" (Gustavo Cerbasi)";
    break;

    case 14:
    outMsg.textContent = "\"Deixar seu dinheiro na conta-corrente sem aplicá-lo é deixá-lo a disposição do banco sem que ele tenha que lhe pagar nada.\" (Gustavo Cerbasi)";
    break;

    case 15:
    outMsg.textContent = "\"Uma jornada de mil milhões começa sempre com um simples passo.\" (Gustavo Cerbasi)";
    break;

    case 16:
    outMsg.textContent = "\"Qual é a sua meta? Para construir sua riqueza de forma consistente, você precisa estar consciente da sua meta.\" (Gustavo Cerbasi)";
    break;

    case 17:
    outMsg.textContent = "\"A dica do dia é: evite pagar juros mais altos do que aqueles que você recebe dos seus investimentos.\" (Gustavo Cerbasi)";
    break;

    case 18:
    outMsg.textContent = "\"Nada é mais urgente do que garantir seu futuro com tranquilidade ...\" (Gustavo Cerbasi)";
    break;

    case 19:
    outMsg.textContent = "\"Quanto mais tempo deixar seu dinheiro aplicado maior será a renda obtida.\" (Gustavo Cerbasi)";
    break;

    case 20:
    outMsg.textContent = "\"Não aceite juros que custem mais do que a rentabilidade dos seus recursos.\" (Gustavo Cerbasi)";
    break;

    case 21:
    outMsg.textContent = "\"Rico é aquele que recebe mais do que ganha. Pobre é aquele cuja despesa é maior que a receita.\" (Gustavo Cerbasi)";
    break;

    case 22:
    outMsg.textContent = "\"A dica do dia é: evite pagar juros mais altos do que aqueles que você recebe dos seus investimentos.\" (Gustavo Cerbasi)";
    break;

    case 23:
    outMsg.textContent = "\"Reflita: A chave do sucesso financeiro está na sua capacidade de investir parte do que você ganha.\" (Gustavo Cerbasi)";
    break;

    case 24:
    outMsg.textContent = "\"Dica do dia: Gaste menos do que ganha e invista bem a diferença.\" (Gustavo Cerbasi)";
    break;

    case 25:
    outMsg.textContent = "\"Dica importante do dia: Independente das suas escolhas elas devem caber no seu orçamento.\" (Gustavo Cerbasi)";
    break;

    case 26:
    outMsg.textContent = "\"Uma pessoa só está sentada em uma sombra hoje porque outra plantou uma árvore há muito tempo.\" (Warren Buffett)";
    break;

    case 27:
    outMsg.textContent = "\"Lembre-se: \"Não se pode fazer um bom acordo com uma pessoa má.\"\" (Warren Buffett)";
    break;

    case 28:
    outMsg.textContent = "\"Regra nº 1: nunca perca dinheiro. Regra nº 2: não se esqueça da regra nº 1.\" (Warren Buffett)";
    break;

    case 29:
    outMsg.textContent = "\"No mundo dos negócios, o espelho retrovisor é sempre mais claro que o pára-brisa..\" (Warren Buffett)";
    break;

    case 30:
    outMsg.textContent = "\"Nunca queremos ser dependentes, não apenas da bondade de estranhos, mas da bondade de amigos.\" (Warren Buffett)";
    break;

    case 31:
    outMsg.textContent = "\"A idade é menos relevante do que a atitude de continuamente melhorar.\" (Conrad Irwin)";
    break;

    case 32:
    outMsg.textContent = "\"Integridade - um senso de saber quem você é e ser guiado pelo seu entendimento de certo e errado é uma espécie de arma secreta.\" (Bob Iger (presidente da Disney))";
    break;

    case 33:
    outMsg.textContent = "\"Os três principais elementos para se empreender são o capital humano, o capital financeiro e o propósito.\" (Mate Pencz)";
    break;

    case 34:
    outMsg.textContent = "\"Siga todas as suas ambições. Vá até onde você consegue sonhar.\" (Lebron James)";
    break;

    case 35:
    outMsg.textContent = "\"O primeiro passo para você chegar a algum lugar é decidir que você não vai ficar onde está.\" (J.P. Morgan)";
    break;

    case 36:
    outMsg.textContent = "\"É importante que seu planejamento financeiro inclua uma meta de aprendizado e aperfeiçoamento contínuos.\" (Gustavo Cerbasi)";
    break;

    case 37:
    outMsg.textContent = "\" Dica do dia: Não confie cegamente no gerente do seu banco. Ele também é um vendedor.\" (Gustavo Cerbasi)";
    break;

    case 38:
    outMsg.textContent = "\" Reflexão: Basta uma pessoa certa para que você chegue onde jamais chegaria sozinho.\" (Thiago Nigro)";
    break;

    case 39:
    outMsg.textContent = "\" Reflita: A mudança que você deseja está no sacrifício que você não faz.\" (Thiago Nigro)";
    break;

    case 40:
    outMsg.textContent = "\" Reflita: O trabalho devolve.\" (Joel Jota)";
    break;

    case 41:
    outMsg.textContent = "\" Existem duas maneiras de viver sua vida. Uma é como se nada fosse um milagre. A outra é como se tudo fosse um milagre.\" (Albert Einstein)";
    break;

    case 42:
    outMsg.textContent = "\" Como você não pode mudar o passado, o melhor é concentrar-se em seguir em frente, fazendo o melhor que pode com o que você tem agora.\" (Hal Elrod)";
    break;

    case 43:
    outMsg.textContent = "\" Reflita: Não faz sentido ficar remoendo ou se sentido mal quanto aos aspectos de nossas vidas que não podemos mudar.\" (Hal Elrod)";
    break;

    case 44:
    outMsg.textContent = "\" Lembre-se: Sempre há uma maneira... quando você está comprometido.\" (Romacio Fulcher)";
    break;

    case 45:
    outMsg.textContent = "\" Aceite a total responsabilidade por sua vida e recuse-se a culpar outra pessoa.\" (Hal Elrod)";
    break;

    case 46:
    outMsg.textContent = "\" Você não tem tempo para ser infeliz e medíocre. Isso não é apenas sem sentido; é doloroso.\" (Seth Godih)";
    break;

    case 47:
    outMsg.textContent = "\" Existe uma diferença entre médio e medíocre? Não muita\" (Seth Godih)";
    break;

    case 48:
    outMsg.textContent = "\" Seu nível de sucesso raramente excederá seu nível de desenvolvimento pessoal, pois o sucesso é algo que você atrai pela pessoa em quem se torna\" (Jim)";
    break;

    case 49:
    outMsg.textContent = "\" Se você quer que sua vida seja diferente, precisa estar disposto a fazer algo diferente, em primeiro lugar!\" (Kevin Bracy)";
    break;

    case 50:
    outMsg.textContent = "\" Movimento gera emoção. Movimente seu corpo\" (Tony Robbins)";
    break;

    default:
    outMsg.textContent = "\"Reflexão do dia: Acredite que você pode e estará na metade do caminho.\" (Theodore Roosevelt)";
    break;
    
    }
}

function limparCampo(){
    location.reload();
    document.getElementById("outMsg").value = " ";
}

    var btGerar = document.getElementById("btGerar");
        btGerar.addEventListener("click", mostrarQuote);

    var btLimpa = document.getElementById("btLimpa");
        btLimpa.addEventListener("click", limparCampo);