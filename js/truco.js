let ptosNosotros = 0
let ptosEllos=0

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

    switch (ptosNosotros) {
        case 0:
            document.getElementById('ptos1-1').src = './img/0 porotos.png';

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

    switch (ptosEllos) {
        case 0:
            document.getElementById('ptos1-2').src = './img/0 porotos.png';

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