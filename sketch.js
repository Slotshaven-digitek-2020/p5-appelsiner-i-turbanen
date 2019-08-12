/*
Først laver vi et nogle variable til at lave en bold - en kugle som vi vil have til at hoppe rundt mellem skærmens hjørner. Vi giver kuglen nogle egenskaber (variable): x og y koordinater samt to hastigheder.
*/

var x = 0; 
var y = 300;
var rad = 20;
var xspeed = 3;
var yspeed = -4;
var grav = 0.022;
var col = [200,100,0];
var tid = 500;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    display();
    move();


}

function display() {
    //Her skal vi sørge for at kuglen bliver vist, hvis den skal vises
    if(tid > 0) {
        tid -= 1;
    }
    if (tid < 300) {
        fill(col);
        ellipse(x, y, rad*2, rad*2);
    }
}
    
function move() {
    //Her skal vi sørge for at kuglen bevæger sig, hvis den er startet
    if (tid <= 0) {
        x += xspeed;
        y += yspeed;
        yspeed += grav;
    }
    if (x > width || y > height) {
        shootNew();
    }
}
    
function shootNew() {
    //Her skal vi sørge for at kuglen starter forfra 
    x = 0;
    y = 300;
    yspeed = -3;
    tid = (int) (Math.random() * 1000);
}

function mouseClicked(){

}


/*
OPGAVER

Start med funktionen display(). Hvad skal der til for at tegne en cirkel? Du skal bruge funktionen ellipse(x, y, h, w), men husk at du skal bruge programmets variable: x, y etc..
https://p5js.org/reference/#/p5/ellipse

Dernæst funktionen move() - hvad skal der til for at kuglen kan bevæge sig? Du skal tænke sadan, at funktionen draw() bliver kaldt hele tiden (60 gange hver sekund). Og hvad gør draw så 60 gange i sekundet? Jo, den kalder funtionerne display, move og bounce... Så hvis du i move() funktionen påvirker programmets x- og y-værdier (ved at lægge xspeed og yspeed til), så flytter den sig..

Tag til sidst funktionen bounce() - hvad skal der til for at kuglen ikke kommer til at bevæge sig udenfor skærmens højde og bredde? 

Tip: if(x > width || x < 0){...}

- - - -

lidt sværere opgaver

Prøv at lave en ny funktion: changeColor(){} som skal sætte cirklens farve. Se først om du kan få funktionen til at sætte cirklens farve med programmets variabel col. Husk at du skal kalde din nye funktion fra draw() ligesom display, move og bounce.

Kan du skrive funktionen så den skifter mellem to forskellige farver hver gang cirklen rammer væggen?
Husk at lave en ny variabel "col2" først..
tip: if(xspeed > 0){...}else{...}

- - - - 

Lidt sværere opgaver

Funktionen fill(r, g, b) har en fjerde parameter - a - som sætter fyldfarvens transparens. Hvis du for eksempel skriver fill(255, 0, 0, 127), farver du noget helt rødt, med en transparens på 50%. 

Funktionen map() gør det muligt at flytte en variabels værdi fra én skala til en anden. Går variablen x for eksempel fra 0-600, kan du bruge map() til at omregne dens værdi til en skala fra 0-255. Se: https://p5js.org/reference/#/p5/map

Kan du få cirklen til gradvist at face ud når den nærmer sig højre side af skærmen - og blive tydeligere når den nærmer sig venstre?

Funktionen mouseClicked() bliver kaldt hvis man trykker med musen på programmet. Kan du sørge for at cirklen skifter retning på x-aksen, når der klikkes?



*/