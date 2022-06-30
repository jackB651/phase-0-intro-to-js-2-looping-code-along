// Code your solutions in this fil
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
for (let i = 0; i < gifts.length; i++ ) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

return gifts;
}
wrapGifts(gifts);

const name = ["Guadalupe", "Ollie", "Aki"];
const newArray = []; 
const event = "suprise";
function writeCards(name, event) {
    for (let i = 0; i < name.length; i++ ) {
        var x =`Thank you, ${name[i]}, for the wonderful ${event} gift!`;
        console.log(x);
        newArray.push(x);
    }
    return newArray;
}
writeCards();
let number = 4;
function countDown(number) {
    while (number >= 0){
    console.log(number);
    number--; 
    }
}
countDown(number);