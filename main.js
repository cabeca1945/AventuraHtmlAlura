var container1 = document.getElementById("container1");
var container2 = document.getElementById("container2");
var container3 = document.getElementById("container3");
var container4 = document.getElementById("container4");
var container5 = document.getElementById("container5");
var container6 = document.getElementById("container6");
var container7 = document.getElementById("container7");
var container8 = document.getElementById("container8");

// container1.remove();
container2.remove();
container3.remove();
container4.remove();
container5.remove();
container6.remove();
container7.remove();
container8.remove();

function SaiDaCama() {
    container1.remove();
    document.body.appendChild(container2);
    container3.remove();
    container4.remove();
    container5.remove();
    container6.remove();
    container7.remove();
    container8.remove();

    Clique();
}

function Acordar() {
    container2.remove();
    document.body.appendChild(container1);
    container3.remove();
    container4.remove();
    container5.remove();
    container6.remove();
    container7.remove();
    container8.remove();

    Clique();
}

function VoltaDormir() {
    container1.remove();
    document.body.appendChild(container3)
    container4.remove();
    container5.remove();
    container6.remove();
    container7.remove();
    container8.remove();

    Clique();
}

function SaiDeCasa() {
    container1.remove();
    container2.remove();
    container3.remove();
    document.body.appendChild(container4);
    container5.remove();
    container6.remove();
    container7.remove();
    container8.remove();

    Clique();
}

function Explorar() {
    container1.remove();
    container2.remove();
    container3.remove();
    container4.remove();
    container5.remove();
    container6.remove();
    document.body.appendChild(container6);
    container7.remove();
    container8.remove();

    Clique();
}

function Pescar() {
    container1.remove();
    container2.remove();
    container3.remove();
    container4.remove();
    document.body.appendChild(container5);
    container6.remove();
    container7.remove();
    container8.remove();

    Clique();
}

function Afundo() {
    container1.remove();
    container2.remove();
    container3.remove();
    container4.remove();
    container5.remove();
    container6.remove();
    document.body.appendChild(container7);
    container8.remove();

    Clique();
}

function EncontraDragao() {
    container1.remove();
    container2.remove();
    container3.remove();
    container4.remove();
    container5.remove();
    container6.remove();
    container7.remove();
    document.body.appendChild(container8);   

    Clique();
}

function Clique() {

}

// var containers = [];
// containers[1] = container1;
// containers[2] = container2;
// containers[3] = container3;
// containers[4] = container4;
// containers[5] = container5;
// containers[6] = container6;
// containers[7] = container7;
// containers[8] = container8;

// function SetLand(int) {
//     for(let i = 0 ; i <= 8; i++) {

//     }
// }