const skinRara = document.getElementById("skinRara");
const skinSuperRara = document.getElementById("skinSuperRara");
const skinEpica = document.getElementById("skinEpica");
const skinMitica = document.getElementById("skinMitica");
const skinLendaria = document.getElementById("skinLendaria");
const skinHyper = document.getElementById("skinHyper");
const skinPrateada = document.getElementById("skinPrateada");
const skinDourada = document.getElementById("skinDourada");

const emojiComum = document.getElementById("emojiComum");
const emojiRaro = document.getElementById("emojiRaro");
const emojiEpico = document.getElementById("emojiEpico");

const icone = document.getElementById("icone");
const gadget = document.getElementById("gadget");
const starPower = document.getElementById("starPower");
const buffies = document.getElementById("buffies");
const hyper = document.getElementById("hyper");

const btnCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

const gemasSkin = [29, 79, 149, 199, 299, 499, 1000, 2500];
const skins = [skinRara, skinSuperRara, skinEpica, skinMitica,
     skinLendaria, skinHyper, skinPrateada, skinDourada];
const gemasEmoji = [10, 30, 50];
const emojis = [emojiComum, emojiRaro, emojiEpico];
const emojisValor = [];
const skinsValor = [];
const contBrawler = document.getElementById("contBrawler");
const niveisBrawlers = document.getElementById("niveisBrawlers"); 
const valoresBrawler = [424, 276.5, 180, 114, 69, 42, 22, 12.5, 6.5, 4, 0];
const nomesSkins = ["Rara", "Super Rara", "Épica", "Mítica", "Lendária", "Hyper", "Prateada", "Dourada"];
const nomesEmojis = ["Comum", "Raro", "Épico"];

const btnDetalhes = document.getElementById("btnDetalhes");
const popup = document.getElementById("popup");
const paginaDetalhes = document.getElementById("paginaDetalhes");
const btnAnterior = document.getElementById("btnAnterior");
const btnProximo = document.getElementById("btnProximo");
const btnFechar = document.getElementById("btnFechar");
const contadorPagina = document.getElementById("contadorPagina");

let paginaAtual = 0;

let paginas = [];
let htmlSkins = "<h5>Detalhes das skins</h4>";
let htmlBrawlers = "<h5>Detalhes dos brawlers</h4>";
let htmlEmojis = "<h5>Detalhes dos emojis</h4>";

function Calcular(){
    console.log("Clicou");

    const niveis = [];
    let somaNiveis = 0;

    for(let nivel = 11; nivel >= 2; nivel--){

        const campo = document.getElementById(`nivel${nivel}`);
        const totalBrawlers = Number(contBrawler.value);
        const valor = Number(campo.value);
        niveis.push(valor);

        somaNiveis += valor;

        if(somaNiveis > totalBrawlers){
            alert("Você informou mais brawlers do que possui");
            return;
        }
    }

    console.log(niveis);
    console.log(somaNiveis);

    let brawlerValor = 0;
    const gemasNivel = [];

    for(let i = 0; i < niveis.length; i++){
        brawlerValor += niveis[i] * valoresBrawler[i];
        gemasNivel[i] = niveis[i] * valoresBrawler[i];
    }

    for(let i = 0; i < gemasNivel.length; i++){
        const nvl = 11 - i;

        htmlBrawlers += `<p>Nível ${nvl}: ${gemasNivel[i]} gemas</p>`;
    }

    console.log("Variavel niveis: ", niveis);
    console.log("niveis length: ", niveis.length);
    console.log(brawlerValor);


    const valorIcone = Number(icone.value) * 19;
    const valorGadget = Number(gadget.value) * 100;
    const valorStarPower = Number(starPower.value) * 200;
    const valorBuffies = Number(buffies.value) * 300;
    const valorHyper = Number(hyper.value) * 500;

    let totalGemasSkins = 0;

    for(let i = 0; i < skins.length; i++){
        totalGemasSkins += Number(skins[i].value) * gemasSkin[i];
        skinsValor[i] = Number(skins[i].value) * gemasSkin[i];
    }

    for(let i = 0; i < nomesSkins.length; i++){
        console.log("entrou no loop");
        htmlSkins += `<p>${nomesSkins[i]}(s) valem: ${skinsValor[i]} gemas </p>`;
    }

    let totalGemasEmoji = 0;

    for(let i = 0; i < emojis.length; i++){
        totalGemasEmoji += Number(emojis[i].value) * gemasEmoji[i];
        emojisValor[i] = Number(emojis[i].value) * gemasEmoji[i];
    }

    for(let i = 0; i < nomesEmojis.length; i++){
        htmlEmojis += `<p>${nomesEmojis[i]}(s): ${emojisValor[i]} gemas`;
    }

    const valorConta = totalGemasSkins + totalGemasEmoji +
        valorIcone + valorGadget + valorStarPower + valorBuffies + valorHyper + brawlerValor;

    resultado.innerHTML = `
    <h3 class = "dados">Seus dados</h3> 
    <p>Suas skins valem: ${totalGemasSkins.toLocaleString("pt-BR", {minimumFractionDigits: 0, maximumFractionDigits: 0})} gemas</p>
    <p>Seus emojis valem: ${totalGemasEmoji.toLocaleString("pt-BR", {minimumFractionDigits: 0, maximumFractionDigits: 0})} gemas</p>
    <p>Icones valem: ${valorIcone.toLocaleString("pt-BR", {minimumFractionDigits: 0, maximumFractionDigits: 0})} gemas</p> 
    <p>Acessórios valem: ${valorGadget.toLocaleString("pt-BR", {minimumFractionDigits: 0, maximumFractionDigits: 0})} gemas</p> 
    <p>Poderes de estrela valem: ${valorStarPower.toLocaleString("pt-BR", {minimumFractionDigits: 0, maximumFractionDigits: 0})} gemas</p> 
    <p>Buffies valem: ${valorBuffies.toLocaleString("pt-BR", {minimumFractionDigits: 0, maximumFractionDigits: 0})} gemas</p> 
    <p>Hypercargas valem: ${valorHyper.toLocaleString("pt-BR", {minimumFractionDigits: 0, maximumFractionDigits: 0})} gemas</p>
    <p>Desenvolvimento dos seus brawlers valem: ${brawlerValor.toLocaleString("pt-BR", {minimumFractionDigits: 0, maximumFractionDigits: 0})} gemas</p>
    <p>Seus cosméticos, itens e progresso da sua conta equivalem a: ${valorConta.toLocaleString("pt-BR", {minimumFractionDigits: 0, maximumFractionDigits: 0})} gemas</p>
    `;

    paginas = [htmlSkins, htmlBrawlers, htmlEmojis];

    btnDetalhes.style.display = "flex";
}

function GerarCampos(){
    niveisBrawlers.innerHTML = "";

    for(let nivel = 11; nivel >= 2; nivel--){
        niveisBrawlers.innerHTML +=`
        <div class = "campo">
        <br>
        <label>Nível ${nivel}</label>
        <input type = "number" min = "0" id = "nivel${nivel}" class = "form-control">
        </div>`;
    }
}

function AbrirPopup(){
    paginaAtual = 0;

    AtualizarPagina();

    popup.style.display = "flex";

    setTimeout(() => {
        popup.classList.add("ativo");
    }, 10);
}

function FecharPopup(){
    
    popup.classList.remove("ativo");

    setTimeout(() => {
        popup.style.display = "none";
    }, 300);
}

function AtualizarPagina(){
    paginaDetalhes.innerHTML = paginas[paginaAtual];

    contadorPagina.textContent = `${paginaAtual + 1}/${paginas.length}`;
}

function ProximaPagina(){
    if(paginaAtual < paginas.length - 1){
        paginaAtual++;

        AtualizarPagina();
    }
}

function PaginaAnterior(){
    if(paginaAtual > 0){
        paginaAtual--;

        AtualizarPagina();
    }
}

btnCalcular.addEventListener("click", Calcular);
btnCalcular.addEventListener("click", function(){
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
    });
});
btnDetalhes.addEventListener("click", AbrirPopup);
btnFechar.addEventListener("click", FecharPopup);
btnProximo.addEventListener("click", ProximaPagina);
btnAnterior.addEventListener("click", PaginaAnterior);
popup.addEventListener("click", function(event){
    if(event.target == popup){
        FecharPopup();
    }
});


GerarCampos();

