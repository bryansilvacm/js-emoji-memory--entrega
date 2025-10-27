//array com os emojis
const emojis = [
    "🏃",
    "🏃",
    "👀",
    "👀",
    "💩",
    "💩",
    "😎",
    "😎",
    "😨",
    "😨",
    "😬",
    "😬",
    "😱",
    "😱",
    "🤡",
    "🤡",
    "🌱",
    "🌱",
    "🍎",
    "🍎"
];


let openCards = []; //as cartas abertas serão adicionadas aqui
let iniciou = false; // variável utilizada para controlar a inicialização do timer
let timer = 0; //timer sempre começa do 0
let timerSeg = document.querySelector(".timerSeg") // view para exibir timer na página
let timerID; //inicia o setINterval do timer

//embaralha os emojis
let randomEmojis = emojis.sort(()=> (Math.random() > 0.5 ? 2 : -1));

//cria as "Box/divs" onde cada emoji será posicionado na página e adiciona os emojis em cada div pendura as box na div principal (game) para vizualização na página
for(let i=0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = randomEmojis[i];
    box.onclick = handleClick; //chama a função handleCLick
    document.querySelector(".game").appendChild(box)
}

function handleClick(){
     // inicia o timer
     if (!iniciou) {
        iniciou = true;
        timerID = setInterval(contagem, 1000);
    }

    //se openCards tiver menos que 2 cartas adiciona a carta clicada ao opencards e adiciona a classe boxOpen ao classlist do item clicado
    if (openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);

    }
    //se openCards tiver com 2 cartas ele chama a função checkMacth para comparação
    if(openCards.length == 2){
        setTimeout(checkMatch, 500);
    }
}

//comparação se cartas são iguais
function checkMatch(){
    //se as duas cartas forem iguais adiciona ao class list de ambos itens a classe boxMatch
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch")
    } else{ //se forem diferentes remove a classe boxOPen para que com o css a carta seja "tampada" novamente
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    //limpa o openCards para a próxima jogada
    openCards=[];
    
    //verifica se todas a cartas foram "abertas e acertadas" e finaliza o jogo mostrando o tempo e após o ok do usuário o jogo é reiniciado 
    if (document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Parabéns você finalizou o jogo em " + timer+"s")
        window.location.reload();
    }
}
//função para  contagem do timer
function contagem(){
        timer++;
        timerSeg.innerHTML = timer+"s";
}


