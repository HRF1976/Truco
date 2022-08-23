let ptosNosotros = 0
let ptosEllos=0

var diego="n"
var bombita="n"
var mono="n"
var carlo="n"
var maga="n"
var adri="n"
var ringo="n"
var lau="n"
var yo="n"
var nari=""


function sumarPorotos() {
    ptosNosotros += 1

    switch (ptosNosotros) {
        case 1:
            document.getElementById('ptos1-1').src = './img/1 poroto.png';

            break;
        case 2:
            document.getElementById('ptos1-1').src = './img/2 porotos.jpg';

            break;
        case 3:
            document.getElementById('ptos1-1').src = './img/3 porotos.jpg';

            break;
        case 4:
            document.getElementById('ptos1-1').src = './img/4 porotos.jpg';

            break;
        case 5:
            document.getElementById('ptos1-1').src = './img/5 porotos.jpg';

            break;

        case 6:
            document.getElementById('ptos2-1').src = './img/1 poroto.png';

            break;
        case 7:
            document.getElementById('ptos2-1').src = './img/2 porotos.jpg';

            break;
        case 8:
            document.getElementById('ptos2-1').src = './img/3 porotos.jpg';

            break;
        case 9:
            document.getElementById('ptos2-1').src = './img/4 porotos.jpg';

            break;
        case 10:
            document.getElementById('ptos2-1').src = './img/5 porotos.jpg';

            break;
        case 11:
            document.getElementById('ptos3-1').src = './img/1 poroto.png';

            break;
        case 12:
            document.getElementById('ptos3-1').src = './img/2 porotos.jpg';

            break;
        case 13:
            document.getElementById('ptos3-1').src = './img/3 porotos.jpg';

            break;
        case 14:
            document.getElementById('ptos3-1').src = './img/4 porotos.jpg';

            break;
        case 15:
            document.getElementById('ptos3-1').src = './img/5 porotos.jpg';

            break;
        default:
            break;
    }
}

function restarPorotos() {
    ptosNosotros -= 1
    if (ptosNosotros <0) {
        ptosNosotros=0
    }
    switch (ptosNosotros) {
        case 0:
            document.getElementById('ptos1-1').src = './img/0 porotos.jpg';

            break;
        case 1:
            document.getElementById('ptos1-1').src = './img/1 poroto.png';

            break;
        case 2:
            document.getElementById('ptos1-1').src = './img/2 porotos.jpg';

            break;
        case 3:
            document.getElementById('ptos1-1').src = './img/3 porotos.jpg';

            break;
        case 4:
            document.getElementById('ptos1-1').src = './img/4 porotos.jpg';

            break;
        case 5:
            document.getElementById('ptos1-1').src = './img/5 porotos.jpg';
            document.getElementById('ptos2-1').src = './img/0 porotos.jpg';
            break;
        case 6:
            document.getElementById('ptos2-1').src = './img/1 poroto.png';

            break;
        case 7:
            document.getElementById('ptos2-1').src = './img/2 porotos.jpg';

            break;
        case 8:
            document.getElementById('ptos2-1').src = './img/3 porotos.jpg';

            break;
        case 9:
            document.getElementById('ptos2-1').src = './img/4 porotos.jpg';

            break;
        case 10:
            document.getElementById('ptos2-1').src = './img/5 porotos.jpg';
            document.getElementById('ptos3-1').src = './img/0 porotos.jpg';

            break;
        case 11:
            document.getElementById('ptos3-1').src = './img/1 poroto.png';

            break;
        case 12:
            document.getElementById('ptos3-1').src = './img/2 porotos.jpg';

            break;
        case 13:
            document.getElementById('ptos3-1').src = './img/3 porotos.jpg';

            break;
        case 14:
            document.getElementById('ptos3-1').src = './img/4 porotos.jpg';

            break;
        case 15:
            document.getElementById('ptos3-1').src = './img/5 porotos.jpg';

            break;

        default:
            break;
    }

}

function sumarPorotosE() {
    ptosEllos += 1

    switch (ptosEllos) {
        case 1:
            document.getElementById('ptos1-2').src = './img/1 poroto.png';

            break;
        case 2:
            document.getElementById('ptos1-2').src = './img/2 porotos.jpg';

            break;
        case 3:
            document.getElementById('ptos1-2').src = './img/3 porotos.jpg';

            break;
        case 4:
            document.getElementById('ptos1-2').src = './img/4 porotos.jpg';

            break;
        case 5:
            document.getElementById('ptos1-2').src = './img/5 porotos.jpg';

            break;

        case 6:
            document.getElementById('ptos2-2').src = './img/1 poroto.png';

            break;
        case 7:
            document.getElementById('ptos2-2').src = './img/2 porotos.jpg';

            break;
        case 8:
            document.getElementById('ptos2-2').src = './img/3 porotos.jpg';

            break;
        case 9:
            document.getElementById('ptos2-2').src = './img/4 porotos.jpg';

            break;
        case 10:
            document.getElementById('ptos2-2').src = './img/5 porotos.jpg';

            break;
        case 11:
            document.getElementById('ptos3-2').src = './img/1 poroto.png';

            break;
        case 12:
            document.getElementById('ptos3-2').src = './img/2 porotos.jpg';

            break;
        case 13:
            document.getElementById('ptos3-2').src = './img/3 porotos.jpg';

            break;
        case 14:
            document.getElementById('ptos3-2').src = './img/4 porotos.jpg';

            break;
        case 15:
            document.getElementById('ptos3-2').src = './img/5 porotos.jpg';

            break;
        default:
            break;
    }
}

function restarPorotosE() {
    ptosEllos -= 1
    if (ptosEllos <0) {
        ptosEllos=0
    }

    switch (ptosEllos) {
        case 0:
            document.getElementById('ptos1-2').src = './img/0 porotos.jpg';

            break;
        case 1:
            document.getElementById('ptos1-2').src = './img/1 poroto.png';

            break;
        case 2:
            document.getElementById('ptos1-2').src = './img/2 porotos.jpg';

            break;
        case 3:
            document.getElementById('ptos1-2').src = './img/3 porotos.jpg';

            break;
        case 4:
            document.getElementById('ptos1-2').src = './img/4 porotos.jpg';

            break;
        case 5:
            document.getElementById('ptos1-2').src = './img/5 porotos.jpg';
            document.getElementById('ptos2-2').src = './img/0 porotos.jpg';
            break;
        case 6:
            document.getElementById('ptos2-2').src = './img/1 poroto.png';

            break;
        case 7:
            document.getElementById('ptos2-2').src = './img/2 porotos.jpg';

            break;
        case 8:
            document.getElementById('ptos2-2').src = './img/3 porotos.jpg';

            break;
        case 9:
            document.getElementById('ptos2-2').src = './img/4 porotos.jpg';

            break;
        case 10:
            document.getElementById('ptos2-2').src = './img/5 porotos.jpg';
            document.getElementById('ptos3-2').src = './img/0 porotos.jpg';

            break;
        case 11:
            document.getElementById('ptos3-2').src = './img/1 poroto.png';

            break;
        case 12:
            document.getElementById('ptos3-2').src = './img/2 porotos.jpg';

            break;
        case 13:
            document.getElementById('ptos3-2').src = './img/3 porotos.jpg';

            break;
        case 14:
            document.getElementById('ptos3-2').src = './img/4 porotos.jpg';

            break;
        case 15:
            document.getElementById('ptos3-2').src = './img/5 porotos.jpg';

            break;

        default:
            break;
    }

}

function aJugar() {
    document.getElementById("elegirParticipantes").style.visibility="hidden ";
    document.getElementById("elegirParticipantes").style.display="none";
    document.getElementById("tablero").style.visibility="visible";
    document.getElementById("tablero").style.display="flex"

}
function elijoDiego (){
    if (diego=="s") {
        document.getElementById("fDiego").src='./img/Diego3.jpg'
        diego="n"
    } else {
        document.getElementById("fDiego").src='./img/DiegoSel.jpg'
        diego="s"
    }
}

function elijoMono (){
    if (mono=="s") {
        document.getElementById("fMono").src='./img/Mono3.jpg'
        mono="n"
    } else {
        document.getElementById("fMono").src='./img/MonoSel.jpg'
        mono="s"
    }
}

function elijobombita (){
    if (bombita=="s") {
        document.getElementById("fBombita").src='./img/Bombita3.jpg'
        bombita="n"
    } else {
        document.getElementById("fBombita").src='./img/bombitaSel.jpg'
        bombita="s"
    }
}

function elijoCarlo (){
    if (carlo=="s") {
        document.getElementById("fCarlo").src='./img/Carlo3.jpg'
        carlo="n"
    } else {
        document.getElementById("fCarlo").src='./img/carloSel.jpg'
        carlo="s"
    }
}

function elijoMaga (){
    if (maga=="s") {
        document.getElementById("fMaga").src='./img/Maga.jpg'
        maga="n"
    } else {
        document.getElementById("fMaga").src='./img/MagaSel.jpg'
        maga="s"
    }
}

function elijoAdri (){
    if (adri=="s") {
        document.getElementById("fAdri").src='./img/Adri.jpg'
        adri="n"
    } else {
        document.getElementById("fAdri").src='./img/AdriSel.jpg'
        adri="s"
    }
}

function elijoLau (){
    if (lau=="s") {
        document.getElementById("fLau").src='./img/Lau3.jpg'
    lau="n"
    } else {
        document.getElementById("fLau").src='./img/LauSel.jpg'
        lau="s"
    }
}

function elijoRingo (){
    if (ringo=="s") {
        document.getElementById("fRingo").src='./img/Ringo3.jpg'
        ringo="n"
    } else {
        document.getElementById("fRingo").src='./img/RingoSel.jpg'
        ringo="s"
    }
}

function elijoNari (){
    if (nari=="s") {
        document.getElementById("fNari").src='./img/Nari3.jpg'
        nari="n"
    } else {
        document.getElementById("fNari").src='./img/NariSel.jpg'
        nari="s"
    }
}

function elijoYo (){
    if (yo=="s") {
        document.getElementById("fYo").src='./img/Yo3.jpg'
        yo="n"
    } else {
        document.getElementById("fYo").src='./img/YoSel.jpg'
        yo="s"
    }
}