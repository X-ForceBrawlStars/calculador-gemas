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
const skinsValor = [];
const contBrawler = document.getElementById("contBrawler");
const niveisBrawlers = document.getElementById("niveisBrawlers"); 
const valoresBrawler = [424, 276.5, 180, 114, 69, 42, 22, 12.5, 6.5, 4, 0];
const nomesSkins = ["Rara", "Super Rara", "Épica", "Mítica", "Lendária", "Hyper", "Prateada", "Dourada"];

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

    let totalGemasEmoji = 0;

    for(let i = 0; i < emojis.length; i++){
        totalGemasEmoji += Number(emojis[i].value) * gemasEmoji[i];
    }

    const valorConta = totalGemasSkins + totalGemasEmoji +
        valorIcone + valorGadget + valorStarPower + valorBuffies + valorHyper + brawlerValor;

    resultado.innerHTML = `
    <h3>Seus dados</h3> 
    <br>
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
}

function GerarCampos(){
    niveisBrawlers.innerHTML = "";

    for(let nivel = 11; nivel >= 2; nivel--){
        niveisBrawlers.innerHTML +=`
        <div class = "campo">
        <br>
        <label>Nível ${nivel}</label>
        <input type = "number" min = "0" id = "nivel${nivel}">
        </div>`;
    }
}

btnCalcular.addEventListener("click", Calcular);

GerarCampos();

