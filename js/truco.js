let ptosNosotros = 0
let ptosEllos = 0
let brutoNos = 0
let brutoEllos = 0

var diego = "n"
var bombita = "n"
var mono = "n"
var carlo = "n"
var maga = "n"
var adri = "n"
var ringo = "n"
var lau = "n"
var yo = "n"
var nari = "n"
var lucho = "n"
var sucio = "n"

var cantJugadoresN = 0
var cantJugadoresE = 0
var nn1 = "./img/Diego3.jpg"
var nn2 = "./img/Mono3.jpg"
var nn3 = ""
var eligiendo = "Nosotros"



window.onload = function () {
    $("#quiero").animate({
        opacity: '1'

    }, "slow");
    $("#veinte").animate({
        opacity: '1'

    }, 4500);
}

function sumarPorotos() {
    ptosNosotros += 1
    brutoNos += 1

    if (brutoNos > 15) {
        ptosNosotros = brutoNos - 15
    }

    switch (ptosNosotros) {
        case 1:
            document.getElementById('ptos1-1').src = './img/1 poroto.png';
            document.getElementById('ptos2-1').src = './img/0 porotos.jpg';
            document.getElementById('ptos3-1').src = './img/0 porotos.jpg';
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
    if (brutoNos < 16) {
        document.getElementById("marcadorPtosN").textContent = ptosNosotros + " Malas"
    } else {
        document.getElementById("marcadorPtosN").textContent = (ptosNosotros) + " Buenas"
    }
}

function restarPorotos() {
    ptosNosotros -= 1
    brutoNos -= 1
    if (ptosNosotros < 0) {
        ptosNosotros = 0
        brutoNos = 0
    }
    if (brutoNos > 15) {
        ptosNosotros = brutoNos - 15
    } else {
        ptosNosotros = brutoNos
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
            document.getElementById('ptos2-1').src = './img/5 porotos.jpg';
            document.getElementById('ptos1-1').src = './img/5 porotos.jpg';
            break;

        default:
            break;
    }
    if (brutoNos < 16) {
        document.getElementById("marcadorPtosN").textContent = ptosNosotros + " Malas"
    } else {
        document.getElementById("marcadorPtosN").textContent = (ptosNosotros) + " Buenas"
    }

}

function sumarPorotosE() {
    ptosEllos += 1
    brutoEllos += 1

    if (brutoEllos > 15) {
        ptosEllos = brutoEllos - 15
    }

    switch (ptosEllos) {
        case 1:
            document.getElementById('ptos1-2').src = './img/1 poroto.png';
            document.getElementById('ptos2-2').src = './img/0 porotos.jpg';
            document.getElementById('ptos3-2').src = './img/0 porotos.jpg';
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
    if (brutoEllos < 16) {
        document.getElementById("marcadorPtosE").textContent = ptosEllos + " Malas"
    } else {
        document.getElementById("marcadorPtosE").textContent = (ptosEllos) + " Buenas"
    }
}

function restarPorotosE() {
    ptosEllos -= 1
    brutoEllos -= 1
    if (ptosEllos < 0) {
        ptosEllos = 0
        brutoEllos = 0
    }
    if (brutoEllos > 15) {
        ptosEllos = brutoEllos - 15
    } else {
        ptosEllos = brutoEllos
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
            document.getElementById('ptos2-2').src = './img/5 porotos.jpg';
            document.getElementById('ptos1-2').src = './img/5 porotos.jpg';
            break;

        default:
            break;
    }
    if (brutoEllos < 16) {
        document.getElementById("marcadorPtosE").textContent = ptosEllos + " Malas"
    } else {
        document.getElementById("marcadorPtosE").textContent = (ptosEllos) + " Buenas"
    }

}

function aJugar() {
    document.getElementById("inicio").style.visibility = "hidden ";
    document.getElementById("inicio").style.display = "none";
    document.getElementById("tablero").style.visibility = "visible";
    document.getElementById("tablero").style.display = "block"

}

function yaElegí(){
    document.getElementById("elegirParticipantes").style.visibility = "hidden ";
    document.getElementById("elegirParticipantes").style.display = "none";
    document.getElementById("inicio").style.visibility = "visible";
    document.getElementById("inicio").style.display = "block"
}

function irAFotos() {
    eligiendo = "Nosotros"
    document.getElementById("inicio").style.visibility = "hidden ";
    document.getElementById("inicio").style.display = "none";
    document.getElementById("elegirParticipantes").style.visibility = "visible ";
    document.getElementById("elegirParticipantes").style.display = "block";
    document.getElementById("futer").style.visibility = "hidden ";
    document.getElementById("futer").style.display = "none";
}

function irAFotosE() {
    eligiendo = "Ellos"
    document.getElementById("inicio").style.visibility = "hidden ";
    document.getElementById("inicio").style.display = "none";
    document.getElementById("elegirParticipantes").style.visibility = "visible ";
    document.getElementById("elegirParticipantes").style.display = "block";
    document.getElementById("futer").style.visibility = "hidden ";
    document.getElementById("futer").style.display = "none";
}

function elijoDiego() {
    if (eligiendo == "Nosotros") {


        if (diego == "s") {
            document.getElementById("fDiego").src = './img/Diego3.jpg'
            diego = "n"
            cantJugadoresN -= 1
            switch (cantJugadoresN) {
                case 0:
                    document.getElementById("n1").src = ''
                    break;
                case 1:
                    document.getElementById("n2").src = ''
                    break;
                case 2:
                    document.getElementById("n3").src = ''
                    break;
                default:
                    break;
            }
        } else {
            document.getElementById("fDiego").src = './img/DiegoSel.jpg'
            diego = "s"
            cantJugadoresN += 1
            switch (cantJugadoresN) {
                case 1:
                    document.getElementById("n1").src = './img/Diego3.jpg'
                    break;
                case 2:
                    document.getElementById("n2").src = './img/Diego3.jpg'
                    break;
                case 3:
                    document.getElementById("n3").src = './img/Diego3.jpg'
                    break;
                case is > 3:
                    window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                    break;
                default:
                    break;
            }
        }
    } else {
        if (diego == "s") {
            document.getElementById("fDiego").src = './img/Diego3.jpg'
            diego = "n"
            cantJugadoresE -= 1
            switch (cantJugadoresE) {
                case 0:
                    document.getElementById("e1").src = ''
                    break;
                case 1:
                    document.getElementById("e2").src = ''
                    break;
                case 2:
                    document.getElementById("e3").src = ''
                    break;

                default:
                    break;
            }

        } else {
            document.getElementById("fDiego").src = './img/DiegoSel.jpg'
            diego = "s"
            cantJugadoresE += 1
            switch (cantJugadoresE) {
                case 1:
                    document.getElementById("e1").src = './img/Diego3.jpg'
                    break;
                case 2:
                    document.getElementById("e2").src = './img/Diego3.jpg'
                    break;
                case 3:
                    document.getElementById("e3").src = './img/Diego3.jpg'
                    break;
                case is > 3:
                    window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                default:
                    break;
            }
        }
    }
}
function elijoMono() {
    if (eligiendo == "Nosotros") {


        if (mono == "s") {
            document.getElementById("fMono").src = './img/Mono3.jpg'
            mono = "n"
            cantJugadoresN -= 1
            switch (cantJugadoresN) {
                case 0:
                    document.getElementById("n1").src = ''
                    break;
                case 1:
                    document.getElementById("n2").src = ''
                    break;
                case 2:
                    document.getElementById("n3").src = ''
                    break;
                default:
                    break;
            }
        } else {
            document.getElementById("fMono").src = './img/MonoSel.jpg'
            mono = "s"
            cantJugadoresN += 1
            switch (cantJugadoresN) {
                case 1:
                    document.getElementById("n1").src = './img/Mono3.jpg'
                    break;
                case 2:
                    document.getElementById("n2").src = './img/Mono3.jpg'
                    break;
                case 3:
                    document.getElementById("n3").src = './img/Mono3.jpg'
                    break;
                case is > 3:
                    window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                    break;
                default:
                    break;
            }
        }
    } else {
        if (mono == "s") {
            document.getElementById("fMono").src = './img/Mono3.jpg'
            mono = "n"
            cantJugadoresE -= 1
            switch (cantJugadoresE) {
                case 0:
                    document.getElementById("e1").src = ''
                    break;
                case 1:
                    document.getElementById("e2").src = ''
                    break;
                case 2:
                    document.getElementById("e3").src = ''
                    break;

                default:
                    break;
            }

        } else {
            document.getElementById("fMono").src = './img/MonoSel.jpg'
            mono = "s"
            cantJugadoresE += 1
            switch (cantJugadoresE) {
                case 1:
                    document.getElementById("e1").src = './img/Mono3.jpg'
                    break;
                case 2:
                    document.getElementById("e2").src = './img/Mono3.jpg'
                    break;
                case 3:
                    document.getElementById("e3").src = './img/Mono3.jpg'
                    break;
                case is > 3:
                    window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                default:
                    break;
            }
        }
    }
}

function elijobombita() {
    if (eligiendo == "Nosotros") {


        if (bombita == "s") {
            document.getElementById("fBombita").src = './img/Bombita3.jpg'
            bombita = "n"
            cantJugadoresN -= 1
            switch (cantJugadoresN) {
                case 0:
                    document.getElementById("n1").src = ''
                    break;
                case 1:
                    document.getElementById("n2").src = ''
                    break;
                case 2:
                    document.getElementById("n3").src = ''
                    break;
                default:
                    break;
            }
        } else {
            document.getElementById("fBombita").src = './img/bombitaSel.jpg'
            bombita = "s"
            cantJugadoresN += 1
            switch (cantJugadoresN) {
                case 1:
                    document.getElementById("n1").src = './img/Bombita3.jpg'
                    break;
                case 2:
                    document.getElementById("n2").src = './img/Bombita3.jpg'
                    break;
                case 3:
                    document.getElementById("n3").src = './img/Bombita3.jpg'
                    break;
                case is > 3:
                    window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                    break;
                default:
                    break;
            }
        }
    } else {
        if (bombita == "s") {
            document.getElementById("fBombita").src = './img/Bombita3.jpg'
            bombita = "n"
            cantJugadoresE -= 1
            switch (cantJugadoresE) {
                case 0:
                    document.getElementById("e1").src = ''
                    break;
                case 1:
                    document.getElementById("e2").src = ''
                    break;
                case 2:
                    document.getElementById("e3").src = ''
                    break;

                default:
                    break;
            }

        } else {
            document.getElementById("fBombita").src = './img/bombitaSel.jpg'
            bombita = "s"
            cantJugadoresE += 1
            switch (cantJugadoresE) {
                case 1:
                    document.getElementById("e1").src = './img/Bombita3.jpg'
                    break;
                case 2:
                    document.getElementById("e2").src = './img/Bombita3.jpg'
                    break;
                case 3:
                    document.getElementById("e3").src = './img/Bombita3.jpg'
                    break;
                case is > 3:
                    window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                default:
                    break;
            }
        }
    }

}

function elijoCarlo() {
    if (eligiendo == "Nosotros") {


        if (carlo == "s") {
            document.getElementById("fCarlo").src = './img/Carlo3.jpg'
            carlo = "n"
            cantJugadoresN -= 1
            switch (cantJugadoresN) {
                case 0:
                    document.getElementById("n1").src = ''
                    break;
                case 1:
                    document.getElementById("n2").src = ''
                    break;
                case 2:
                    document.getElementById("n3").src = ''
                    break;
                default:
                    break;
            }
        } else {
            document.getElementById("fCarlo").src = './img/carloSel.jpg'
            carlo = "s"
            cantJugadoresN += 1
            switch (cantJugadoresN) {
                case 1:
                    document.getElementById("n1").src = './img/Carlo3.jpg'
                    break;
                case 2:
                    document.getElementById("n2").src = './img/Carlo3.jpg'
                    break;
                case 3:
                    document.getElementById("n3").src = './img/Carlo3.jpg'
                    break;
                case is > 3:
                    window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                    break;
                default:
                    break;
            }
        }
    } else {
        if (carlo == "s") {
            document.getElementById("fCarlo").src = './img/Carlo3.jpg'
            carlo = "n"
            cantJugadoresE -= 1
            switch (cantJugadoresE) {
                case 0:
                    document.getElementById("e1").src = ''
                    break;
                case 1:
                    document.getElementById("e2").src = ''
                    break;
                case 2:
                    document.getElementById("e3").src = ''
                    break;

                default:
                    break;
            }

        } else {
            document.getElementById("fCarlo").src = './img/carloSel.jpg'
            carlo = "s"
            cantJugadoresE += 1
            switch (cantJugadoresE) {
                case 1:
                    document.getElementById("e1").src = './img/Carlo3.jpg'
                    break;
                case 2:
                    document.getElementById("e2").src = './img/Carlo3.jpg'
                    break;
                case 3:
                    document.getElementById("e3").src = './img/Carlo3.jpg'
                    break;
                case is > 3:
                    window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                default:
                    break;
            }
        }
    }

}

function elijoMaga() {
    if (eligiendo == "Nosotros") {


        if (maga == "s") {
            document.getElementById("fMaga").src = './img/Maga3.jpg'
            maga = "n"
            cantJugadoresN -= 1
            switch (cantJugadoresN) {
                case 0:
                    document.getElementById("n1").src = ''
                    break;
                case 1:
                    document.getElementById("n2").src = ''
                    break;
                case 2:
                    document.getElementById("n3").src = ''
                    break;
                default:
                    break;
            }
        } else {
            document.getElementById("fMaga").src = './img/MagaSel.jpg'
            maga = "s"
            cantJugadoresN += 1
            switch (cantJugadoresN) {
                case 1:
                    document.getElementById("n1").src = './img/Maga3.jpg'
                    break;
                case 2:
                    document.getElementById("n2").src = './img/Maga3.jpg'
                    break;
                case 3:
                    document.getElementById("n3").src = './img/Maga3.jpg'
                    break;
                case is > 3:
                    window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                    break;
                default:
                    break;
            }
        }
    } else {
        if (maga == "s") {
            document.getElementById("fMaga").src = './img/Maga3.jpg'
            maga = "n"
            cantJugadoresE -= 1
            switch (cantJugadoresE) {
                case 0:
                    document.getElementById("e1").src = ''
                    break;
                case 1:
                    document.getElementById("e2").src = ''
                    break;
                case 2:
                    document.getElementById("e3").src = ''
                    break;

                default:
                    break;
            }

        } else {
            document.getElementById("fMaga").src = './img/MagaSel.jpg'
            maga = "s"
            cantJugadoresE += 1
            switch (cantJugadoresE) {
                case 1:
                    document.getElementById("e1").src = './img/Maga3.jpg'
                    break;
                case 2:
                    document.getElementById("e2").src = './img/Maga3.jpg'
                    break;
                case 3:
                    document.getElementById("e3").src = './img/Maga3.jpg'
                    break;
                case is > 3:
                    window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                default:
                    break;
            }
        }
    }

}

function elijoAdri() {
    if (eligiendo == "Nosotros") {


        if (adri == "s") {
            document.getElementById("fAdri").src = './img/Adri.jpg'
            adri = "n"
            cantJugadoresN -= 1
            switch (cantJugadoresN) {
                case 0:
                    document.getElementById("n1").src = ''
                    break;
                case 1:
                    document.getElementById("n2").src = ''
                    break;
                case 2:
                    document.getElementById("n3").src = ''
                    break;
                default:
                    break;
            }
        } else {
            document.getElementById("fAdri").src = './img/AdriSel.jpg'
            adri = "s"
            cantJugadoresN += 1
            switch (cantJugadoresN) {
                case 1:
                    document.getElementById("n1").src = './img/Adri.jpg'
                    break;
                case 2:
                    document.getElementById("n2").src = './img/Adri.jpg'
                    break;
                case 3:
                    document.getElementById("n3").src = './img/Adri.jpg'
                    break;
                case is > 3:
                    window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                    break;
                default:
                    break;
            }
        }
    } else {
        if (adri == "s") {
            document.getElementById("fAdri").src = './img/Adri.jpg'
            adri = "n"
            cantJugadoresE -= 1
            switch (cantJugadoresE) {
                case 0:
                    document.getElementById("e1").src = ''
                    break;
                case 1:
                    document.getElementById("e2").src = ''
                    break;
                case 2:
                    document.getElementById("e3").src = ''
                    break;

                default:
                    break;
            }

        } else {
            document.getElementById("fAdri").src = './img/AdriSel.jpg'
            adri = "s"
            cantJugadoresE += 1
            switch (cantJugadoresE) {
                case 1:
                    document.getElementById("e1").src = './img/Adri.jpg'
                    break;
                case 2:
                    document.getElementById("e2").src = './img/Adri.jpg'
                    break;
                case 3:
                    document.getElementById("e3").src = './img/Adri.jpg'
                    break;
                case is > 3:
                    window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                default:
                    break;
            }
        }
    }

}

function elijoLau() {
    if (eligiendo == "Nosotros") {


        if (lau == "s") {
            document.getElementById("fLau").src = './img/Lau.jpg'
            lau = "n"
            cantJugadoresN -= 1
            switch (cantJugadoresN) {
                case 0:
                    document.getElementById("n1").src = ''
                    break;
                case 1:
                    document.getElementById("n2").src = ''
                    break;
                case 2:
                    document.getElementById("n3").src = ''
                    break;
                default:
                    break;
            }
        } else {
            document.getElementById("fLau").src = './img/LauSel.jpg'
            lau = "s"
            cantJugadoresN += 1
            switch (cantJugadoresN) {
                case 1:
                    document.getElementById("n1").src = './img/Lau.jpg'
                    break;
                case 2:
                    document.getElementById("n2").src = './img/Lau.jpg'
                    break;
                case 3:
                    document.getElementById("n3").src = './img/Lau.jpg'
                    break;
                case is > 3:
                    window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                    break;
                default:
                    break;
            }
        }
    } else {
        if (lau == "s") {
            document.getElementById("fLau").src = './img/Lau.jpg'
            lau = "n"
            cantJugadoresE -= 1
            switch (cantJugadoresE) {
                case 0:
                    document.getElementById("e1").src = ''
                    break;
                case 1:
                    document.getElementById("e2").src = ''
                    break;
                case 2:
                    document.getElementById("e3").src = ''
                    break;

                default:
                    break;
            }

        } else {
            document.getElementById("fLau").src = './img/LauSel.jpg'
            lau = "s"
            cantJugadoresE += 1
            switch (cantJugadoresE) {
                case 1:
                    document.getElementById("e1").src = './img/Lau.jpg'
                    break;
                case 2:
                    document.getElementById("e2").src = './img/Lau.jpg'
                    break;
                case 3:
                    document.getElementById("e3").src = './img/Lau.jpg'
                    break;
                case is > 3:
                    window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                default:
                    break;
            }
        }
    }

}

function elijoRingo() {
    if (ringo == "s") {
        document.getElementById("fRingo").src = './img/Ringo3.jpg'
        ringo = "n"
    } else {
        document.getElementById("fRingo").src = './img/RingoSel.jpg'
        ringo = "s"
    }
}

function elijoNari() {
    if (nari == "s") {
        document.getElementById("fNari").src = './img/Nari3.jpg'
        nari = "n"
    } else {
        document.getElementById("fNari").src = './img/NariSel.jpg'
        nari = "s"
    }
}

function elijoYo() {
    if (yo == "s") {
        document.getElementById("fYo").src = './img/Yo3.jpg'
        yo = "n"
    } else {
        document.getElementById("fYo").src = './img/YoSel.jpg'
        yo = "s"
    }
}
function elijoLucho() {
    if (lucho == "s") {
        document.getElementById("fLucho").src = './img/Lucho.jpg'
        lucho = "n"
    } else {
        document.getElementById("fLucho").src = './img/LuchoSel.jpg'
        lucho = "s"
    }
}
function elijoSucio() {
    if (sucio == "s") {
        document.getElementById("fSucio").src = './img/Sucio.jpg'
        sucio = "n"
    } else {
        document.getElementById("fSucio").src = './img/SucioSel.jpg'
        sucio = "s"
    }
}