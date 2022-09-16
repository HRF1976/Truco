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
var sole2 = "n"
var lau = "n"
var yo = "n"
var nari = "n"
var lucho = "n"
var sucio = "n"
var sole = "n"
var lau4 = "n"
var ale = "n"



var cantJugadoresN = 0
var cantJugadoresE = 0

var eligiendo = "Nosotros"



// window.onload = function () {
//     $("#quiero").animate({
//         opacity: '1'

//     }, "slow");
//     $("#veinte").animate({
//         opacity: '1'

//     }, 4500);
// }

function sumarPorotos() {
    ptosNosotros += 1
    brutoNos += 1
    if (brutoNos > 30) {
        brutoNos = 15
    }
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
    if (brutoEllos > 30) {
        brutoEllos = 30
    }

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
    document.getElementById("futer").style.visibility = "hidden";
    document.getElementById("futer").style.display = "none";
}

function yaElegí() {
    document.getElementById("elegirParticipantes").style.visibility = "hidden ";
    document.getElementById("elegirParticipantes").style.display = "none";
    document.getElementById("inicio").style.visibility = "visible";
    document.getElementById("inicio").style.display = "block"
    document.getElementById("futer").style.visibility = "visible";
    document.getElementById("futer").style.display = "block";
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
        if (diego == "Ellos") {
            window.alert("Está en el otro equipo, mocasín");

        } else {

            if (diego != "n") {
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
                diego = "Nosotros"
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
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                        document.getElementById("fDiego").src = './img/Diego3.jpg'
                        cantJugadoresN = 3
                        diego = "n"
                        break;
                    default:
                        break;
                }
            }
        }
    } else {
        if (diego == "Nosotros") {
            window.alert("Ya tiene equipo, gil/a")
        } else {

            if (diego != "n") {
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
                diego = "Ellos"
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
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                        document.getElementById("fDiego").src = './img/Diego3.jpg'
                        cantJugadoresE = 3
                        diego = "n"
                        break;
                    default:
                        break;
                }
            }
        }
    }
}

function elijoMono() {
    if (eligiendo == "Nosotros") {
        if (mono == "Ellos") {
            window.alert("Ya está en el otro equipo, mocasín");

        } else {

            if (mono != "n") {
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
                mono = eligiendo
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
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede papá...")
                        document.getElementById("fMono").src = './img/Mono3.jpg'
                        cantJugadoresN = 3
                        mono = "n"
                        break;
                    default:
                        break;
                }
            }
        }
    } else {
        if (mono == "Nosotros") {
            window.alert("Está en el otro equipo, mocasín");

        } else {
            if (mono != "n") {
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
                mono = eligiendo
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
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                        document.getElementById("fMono").src = './img/Mono3.jpg'
                        cantJugadoresN = 3
                        mono = "n"
                    default:
                        break;
                }
            }
        }
    }
}

function elijobombita() {
    if (eligiendo == "Nosotros") {
        if (bombita == "Ellos") {
            window.alert("Ya está en el otro equipo, mocasín");

        } else {


            if (bombita != "n") {
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
                bombita = eligiendo
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
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                        document.getElementById("fBombita").src = './img/bombita3.jpg'
                        cantJugadoresN = 3
                        bombita = "n"
                        break;
                    default:
                        break;
                }
            }
        }
    } else {
        if (bombita == "Nosotros") {
            window.alert("Ya está en el otro equipo, mocasín");

        } else {
            if (bombita != "n") {
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
                bombita = eligiendo
                cantJugadoresE += 1
                switch (cantJugadoresE) {
                    case 1:
                        document.getElementById("e1").src = './img/bombita3.jpg'
                        break;
                    case 2: RingoSel
                        document.getElementById("e2").src = './img/bombita3.jpg'
                        break;
                    case 3:
                        document.getElementById("e3").src = './img/bombita3.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                        document.getElementById("fBombita").src = './img/bombita3.jpg'
                        cantJugadoresE = 3
                        bombita = "n"
                    default:
                        break;
                }
            }
        }
    }
}

function elijoCarlo() {
    if (eligiendo == "Nosotros") {
        if (carlo == "Ellos") {
            window.alert("Ya está en el otro equipo, mocasín");

        } else {

            if (carlo != "n") {
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
                carlo = eligiendo
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
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                        document.getElementById("fCarlo").src = './img/Carlo3.jpg'
                        cantJugadoresN = 3
                        carlo = "n"
                        break;
                    default:
                        break;
                }
            }
        }
    } else {
        if (carlo == "Nosotros") {
            window.alert("Ya está en el otro equipo, mocasín");

        } else {
            if (carlo != "n") {
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
                carlo = eligiendo
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
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                        document.getElementById("fCarlo").src = './img/Carlo3.jpg'
                        cantJugadoresE = 3
                        carlo = "n"
                    default:
                        break;
                }
            }
        }

    }
}

    function elijoMaga() {
        if (eligiendo == "Nosotros") {
            if (maga == "Ellos") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {

                if (maga != "n") {
                    document.getElementById("fMaga").src = './img/Maga.jpg'
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
                    maga = eligiendo
                    cantJugadoresN += 1
                    switch (cantJugadoresN) {
                        case 1:
                            document.getElementById("n1").src = './img/Maga.jpg'
                            break;
                        case 2:
                            document.getElementById("n2").src = './img/Maga.jpg'
                            break;
                        case 3:
                            document.getElementById("n3").src = './img/Maga.jpg'
                            break;
                        case 4:
                            window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                            document.getElementById("fMaga").src = './img/Maga.jpg'
                            cantJugadoresN = 3
                            maga = "n"
                            break;
                        default:
                            break;
                    }
                }
            }
        } else {
            if (bombita == "Ellos") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {
                if (maga != "n") {
                    document.getElementById("fMaga").src = './img/Maga.jpg'
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
                    maga = eligiendo
                    cantJugadoresE += 1
                    switch (cantJugadoresE) {
                        case 1:
                            document.getElementById("e1").src = './img/Maga.jpg'
                            break;
                        case 2:
                            document.getElementById("e2").src = './img/Maga.jpg'
                            break;
                        case 3:
                            document.getElementById("e3").src = './img/Maga.jpg'
                            break;
                        case 4:
                            window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                            document.getElementById("fMaga").src = './img/Maga.jpg'
                            cantJugadoresE = 3
                            maga = "n"
                        default:
                            break;
                    }
                }
            }
        }
    }


    function elijoAdri() {
        if (eligiendo == "Nosotros") {
            if (adri == "Ellos") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {

                if (adri != "n") {
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
                    adri = eligiendo
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
                        case 4:
                            window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                            document.getElementById("fAdri").src = './img/Adri.jpg'
                            cantJugadoresN = 3
                            adri = "n"
                            break;
                        default:
                            break;
                    }
                }
            }
        } else {
            if (adri == "Nosotros") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {
                if (adri != "n") {
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
                    adri = eligiendo
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
                        case 4:
                            window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                            document.getElementById("fAdri").src = './img/Adri.jpg'
                            cantJugadoresE = 3
                            adri = "n"
                        default:
                            break;
                    }
                }
            }
        }
    }

    function elijoLau() {
        if (eligiendo == "Nosotros") {
            if (lau == "Ellos") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {

            if (lau != "n") {
                document.getElementById("fLau").src = './img/Lau3.jpg'
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
                lau = eligiendo
                cantJugadoresN += 1
                switch (cantJugadoresN) {
                    case 1:
                        document.getElementById("n1").src = './img/Lau3.jpg'
                        break;
                    case 2:
                        document.getElementById("n2").src = './img/Lau3.jpg'
                        break;
                    case 3:
                        document.getElementById("n3").src = './img/Lau3.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                        document.getElementById("fLau").src = './img/Lau3.jpg'
                        cantJugadoresN = 3
                        lau = "n"
                        break;
                    default:
                        break;
                }
            }
        }
        } else {
            if (lau == "Nosotros") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {
            if (lau != "n") {
                document.getElementById("fLau").src = './img/Lau3.jpg'
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
                lau = eligiendo
                cantJugadoresE += 1
                switch (cantJugadoresE) {
                    case 1:
                        document.getElementById("e1").src = './img/Lau3.jpg'
                        break;
                    case 2:
                        document.getElementById("e2").src = './img/Lau3.jpg'
                        break;
                    case 3:
                        document.getElementById("e3").src = './img/Lau3.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                        cantJugadoresE = 3
                        document.getElementById("fLau").src = './img/Lau3.jpg'
                        lau = "n"
                    default:
                        break;
                }
            }
        }
    }
    }

    function elijoSole2() {
        if (eligiendo == "Nosotros") {
            if (sole2 == "Ellos") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {

            if (sole2 != "n") {
                document.getElementById("fSole2").src = './img/sole2.jpg'
                sole2 = "n"
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
                document.getElementById("fSole2").src = './img/sole2Sel.jpg'
                sole2 = eligiendo
                cantJugadoresN += 1
                switch (cantJugadoresN) {
                    case 1:
                        document.getElementById("n1").src = './img/sole2.jpg'
                        break;
                    case 2:
                        document.getElementById("n2").src = './img/sole2.jpg'
                        break;
                    case 3:
                        document.getElementById("n3").src = './img/sole2.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                        document.getElementById("fSole2").src = './img/sole2.jpg'
                        cantJugadoresN = 3
                        ringo = "n"
                        break;
                    default:
                        break;
                }
            }
        }
        } else {
            if (sole2 == "Nosotros") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {
            if (sole2 != "n") {
                document.getElementById("fSole2").src = './img/sole2.jpg'
                sole2 = "n"
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
                document.getElementById("fSole2").src = './img/sole2Sel.jpg'
                sole2 = eligiendo
                cantJugadoresE += 1
                switch (cantJugadoresE) {
                    case 1:
                        document.getElementById("e1").src = './img/sole2.jpg'
                        break;
                    case 2:
                        document.getElementById("e2").src = './img/sole2.jpg'
                        break;
                    case 3:
                        document.getElementById("e3").src = './img/sole2.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                        cantJugadoresE = 3
                        document.getElementById("fSole2").src = './img/sole2.jpg'
                        sole2 = "n"
                    default:
                        break;
                }
            }
        }
    }
    }

    function elijoNari() {
        if (eligiendo == "Nosotros") {
            if (nari == "Ellos") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {

            if (nari != "n") {
                document.getElementById("fNari").src = './img/Nari3.jpg'
                nari = "n"
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
                document.getElementById("fNari").src = './img/NariSel.jpg'
                nari = eligiendo
                cantJugadoresN += 1
                switch (cantJugadoresN) {
                    case 1:
                        document.getElementById("n1").src = './img/Nari3.jpg'
                        break;
                    case 2:
                        document.getElementById("n2").src = './img/Nari3.jpg'
                        break;
                    case 3:
                        document.getElementById("n3").src = './img/Nari3.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                        document.getElementById("fNari").src = './img/Nari3.jpg'
                        cantJugadoresN = 3
                        nari = "n"
                        break;
                    default:
                        break;
                }
            }
            }
        } else {
            if (nari == "Nosotros") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {
            if (nari != "n") {
                document.getElementById("fNari").src = './img/Nari3.jpg'
                nari = "n"
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
                document.getElementById("fNari").src = './img/NariSel.jpg'
                nari = eligiendo
                cantJugadoresE += 1
                switch (cantJugadoresE) {
                    case 1:
                        document.getElementById("e1").src = './img/Nari3.jpg'
                        break;
                    case 2:
                        document.getElementById("e2").src = './img/Nari3.jpg'
                        break;
                    case 3:
                        document.getElementById("e3").src = './img/Nari3.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                        cantJugadoresE = 3
                        document.getElementById("fNari").src = './img/Nari3.jpg'
                        nari = "n"
                    default:
                        break;
                }
            }
        }
    }
    }

    function elijoYo() {
        if (eligiendo == "Nosotros") {
            if (yo == "Ellos") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {

            if (yo != "n") {
                document.getElementById("fYo").src = './img/Yo3.jpg'
                yo = "n"
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
                document.getElementById("fYo").src = './img/YoSel.jpg'
                yo = eligiendo
                cantJugadoresN += 1
                switch (cantJugadoresN) {
                    case 1:
                        document.getElementById("n1").src = './img/Yo3.jpg'
                        break;
                    case 2:
                        document.getElementById("n2").src = './img/Yo3.jpg'
                        break;
                    case 3:
                        document.getElementById("n3").src = './img/Yo3.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                        document.getElementById("fYo").src = './img/Yo3.jpg'
                        cantJugadoresN = 3
                        yo = "n"
                        break;
                    default:
                        break;
                }
            }
            }
        } else {
            if (yo == "Nosotros") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {
            if (yo != "n") {
                document.getElementById("fYo").src = './img/Yo3.jpg'
                yo = "n"
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
                document.getElementById("fYo").src = './img/YoSel.jpg'
                yo = eligiendo
                cantJugadoresE += 1
                switch (cantJugadoresE) {
                    case 1:
                        document.getElementById("e1").src = './img/Yo3.jpg'
                        break;
                    case 2:
                        document.getElementById("e2").src = './img/Yo3.jpg'
                        break;
                    case 3:
                        document.getElementById("e3").src = './img/Yo3.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                        cantJugadoresE = 3
                        document.getElementById("fYo").src = './img/Yo3.jpg'
                        yo = "n"
                    default:
                        break;
                }
            }
        }
    }
    }
    function elijoLucho() {
        if (eligiendo == "Nosotros") {
            if (lucho == "Ellos") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {

            if (lucho != "n") {
                document.getElementById("fLucho").src = './img/Lucho.jpg'
                lucho = "n"
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
                document.getElementById("fLucho").src = './img/LuchoSel.jpg'
                lucho = eligiendo
                cantJugadoresN += 1
                switch (cantJugadoresN) {
                    case 1:
                        document.getElementById("n1").src = './img/Lucho.jpg'
                        break;
                    case 2:
                        document.getElementById("n2").src = './img/Lucho.jpg'
                        break;
                    case 3:
                        document.getElementById("n3").src = './img/Lucho.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                        document.getElementById("fLucho").src = './img/Lucho.jpg'
                        cantJugadoresN = 3
                        lucho = "n"
                        break;
                    default:
                        break;
                }
            }
            }
        } else {
            if (lucho == "Nosotros") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {
            if (lucho != "n") {
                document.getElementById("fLucho").src = './img/Lucho.jpg'
                lucho = "n"
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
                document.getElementById("fLucho").src = './img/LuchoSel.jpg'
                lucho = eligiendo
                cantJugadoresE += 1
                switch (cantJugadoresE) {
                    case 1:
                        document.getElementById("e1").src = './img/Lucho.jpg'
                        break;
                    case 2:
                        document.getElementById("e2").src = './img/Lucho.jpg'
                        break;
                    case 3:
                        document.getElementById("e3").src = './img/Lucho.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                        cantJugadoresE = 3
                        document.getElementById("fLucho").src = './img/Lucho.jpg'
                        lucho = "n"
                    default:
                        break;
                }
            }
        }
    }
    }
    function elijoSucio() {
        if (eligiendo == "Nosotros") {
            if (sucio == "Ellos") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {

            if (sucio != "n") {
                document.getElementById("fSucio").src = './img/Sucio.jpg'
                sucio = "n"
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
                document.getElementById("fSucio").src = './img/SucioSel.jpg'
                sucio = eligiendo
                cantJugadoresN += 1
                switch (cantJugadoresN) {
                    case 1:
                        document.getElementById("n1").src = './img/Sucio.jpg'
                        break;
                    case 2:
                        document.getElementById("n2").src = './img/Sucio.jpg'
                        break;
                    case 3:
                        document.getElementById("n3").src = './img/Sucio.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                        document.getElementById("fSucio").src = './img/Sucio.jpg'
                        cantJugadoresN = 3
                        sucio = "n"
                        break;
                    default:
                        break;
                }
            }
        }
        } else {
            if (sucio == "Nosotros") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {
            if (sucio != "n") {
                document.getElementById("fSucio").src = './img/Sucio.jpg'
                sucio = "n"
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
                document.getElementById("fSucio").src = './img/SucioSel.jpg'
                sucio = eligiendo
                cantJugadoresE += 1
                switch (cantJugadoresE) {
                    case 1:
                        document.getElementById("e1").src = './img/Sucio.jpg'
                        break;
                    case 2:
                        document.getElementById("e2").src = './img/Sucio.jpg'
                        break;
                    case 3:
                        document.getElementById("e3").src = './img/Sucio.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                        cantJugadoresE = 3
                        document.getElementById("fSucio").src = './img/Sucio.jpg'
                        sucio = "n"
                    default:
                        break;
                }
            }
        }
    }
    }

    function elijoSole() {
        if (eligiendo == "Nosotros") {
            if (sole == "Ellos") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {

            if (sole != "n") {
                document.getElementById("fSole").src = './img/sole.jpg'
                sole = "n"
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
                document.getElementById("fSole").src = './img/soleSel.jpg'
                sole = eligiendo
                cantJugadoresN += 1
                switch (cantJugadoresN) {
                    case 1:
                        document.getElementById("n1").src = './img/sole.jpg'
                        break;
                    case 2:
                        document.getElementById("n2").src = './img/sole.jpg'
                        break;
                    case 3:
                        document.getElementById("n3").src = './img/sole.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                        document.getElementById("fSole").src = './img/sole.jpg'
                        cantJugadoresN = 3
                        sucio = "n"
                        break;
                    default:
                        break;
                }
            }
            }
        } else {
            if (sole == "Nosotros") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {
            if (sole != "n") {
                document.getElementById("fSole").src = './img/sole.jpg'
                sole = "n"
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
                document.getElementById("fSole").src = './img/soleSel.jpg'
                sole = eligiendo
                cantJugadoresE += 1
                switch (cantJugadoresE) {
                    case 1:
                        document.getElementById("e1").src = './img/sole.jpg'
                        break;
                    case 2:
                        document.getElementById("e2").src = './img/sole.jpg'
                        break;
                    case 3:
                        document.getElementById("e3").src = './img/sole.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                        cantJugadoresE = 3
                        document.getElementById("fSole").src = './img/sole.jpg'
                        sole = "n"
                    default:
                        break;
                }
            }
        }
    }
    }

    function elijoAle() {
        if (eligiendo == "Nosotros") {
            if (ale == "Ellos") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {

            if (ale != "n") {
                document.getElementById("fAle").src = './img/ale.jpg'
                ale = "n"
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
                document.getElementById("fAle").src = './img/aleSel.jpg'
                ale = eligiendo
                cantJugadoresN += 1
                switch (cantJugadoresN) {
                    case 1:
                        document.getElementById("n1").src = './img/ale.jpg'
                        break;
                    case 2:
                        document.getElementById("n2").src = './img/ale.jpg'
                        break;
                    case 3:
                        document.getElementById("n3").src = './img/ale.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                        document.getElementById("fAle").src = './img/ale.jpg'
                        cantJugadoresN = 3
                        sucio = "n"
                        break;
                    default:
                        break;
                }
            }
            }
        } else {
            if (ale == "Nosotros") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {
            if (ale != "n") {
                document.getElementById("fAle").src = './img/ale.jpg'
                ale = "n"
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
                document.getElementById("fAle").src = './img/aleSel.jpg'
                ale = eligiendo
                cantJugadoresE += 1
                switch (cantJugadoresE) {
                    case 1:
                        document.getElementById("e1").src = './img/ale.jpg'
                        break;
                    case 2:
                        document.getElementById("e2").src = './img/ale.jpg'
                        break;
                    case 3:
                        document.getElementById("e3").src = './img/ale.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                        cantJugadoresE = 3
                        document.getElementById("fAle").src = './img/ale.jpg'
                        ale = "n"
                    default:
                        break;
                }
            }
        }
    }
    } function elijoLau4() {
        if (eligiendo == "Nosotros") {
            if (lau4 == "Ellos") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {

            if (lau4 != "n") {
                document.getElementById("fLau4").src = './img/lau4.jpg'
                lau4 = "n"
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
                document.getElementById("fLau4").src = './img/lau4Sel.jpg'
                lau4 = eligiendo
                cantJugadoresN += 1
                switch (cantJugadoresN) {
                    case 1:
                        document.getElementById("n1").src = './img/lau4.jpg'
                        break;
                    case 2:
                        document.getElementById("n2").src = './img/lau4.jpg'
                        break;
                    case 3:
                        document.getElementById("n3").src = './img/lau4.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede papá.")
                        document.getElementById("fLau4").src = './img/lau4.jpg'
                        cantJugadoresN = 3
                        lau4 = "n"
                        break;
                    default:
                        break;
                }
            }
        }
        } else {
            if (lau4 == "Nosotros") {
                window.alert("Ya está en el otro equipo, mocasín");

            } else {
            if (lau4 != "n") {
                document.getElementById("fLau4").src = './img/lau4.jpg'
                lau4 = "n"
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
                document.getElementById("fLau4").src = './img/lau4Sel.jpg'
                lau4 = eligiendo
                cantJugadoresE += 1
                switch (cantJugadoresE) {
                    case 1:
                        document.getElementById("e1").src = './img/lau4.jpg'
                        break;
                    case 2:
                        document.getElementById("e2").src = './img/lau4.jpg'
                        break;
                    case 3:
                        document.getElementById("e3").src = './img/lau4.jpg'
                        break;
                    case 4:
                        window.alert("No sabés jugar al truco? Más de 3 no se puede, papá...")
                        cantJugadoresE = 3
                        document.getElementById("fLau4").src = './img/lau4.jpg'
                        lau4 = "n"
                    default:
                        break;
                }
            }
        }
    }

    }
