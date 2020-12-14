/* 
 Kiah Nicholson-Wilcox
12/14/2020
 */

let bet = prompt("Place a bet");
bet = Number(bet);

function generateNumber() {
    return Math.floor((Math.random() * 6));
}

let items = ['cherries', 'oranges', 'plums', 'bells', 'melons', 'bars'];

function generateSlot1() {
let slot = (generateNumber());
picture1 = items[slot];
document.write(picture1 + "<br>");
}

function generateSlot2() {
let slot = (generateNumber());
picture2 = items[slot];
document.write(picture2 + "<br>");
}

function generateSlot3() {
let slot = (generateNumber());
picture3 = items[slot];
document.write(picture3 + "<br>");
}

generateSlot1();
generateSlot2();
generateSlot3();


let winnings;

if ((picture1 === picture2) && (picture1 === picture3)){
    winnings = bet * 3;
}
else if ((picture1 === picture2) || (picture1 === picture3)){
    winnings = bet * 2;
}
else if ((picture2 === picture1) || (picture2 === picture3)){
    winnings = bet * 2;
}
else if ((picture3 === picture1) || (picture3 === picture2)){
    winnings = bet * 2;
}
else if ((picture1 !== picture2) && (picture1 !== picture3)){
    winnings = 0;
}

document.write("You bet " + bet + "<br>");
document.write("You won " + winnings);
 

