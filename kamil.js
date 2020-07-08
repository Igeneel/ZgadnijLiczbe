const readlineSync = require('readline-sync');
console.log("Zagrajmy w zgadnij liczbe w zakresie od 1 do 100 ");
function dawajLiczbe() {
    while(true) {
        var x = readlineSync.question('\nPodaj liczbe : \n');
        const parsed = Number.parseInt(x);
    if(x=="exit"){
        return x;
    }else if (Number.isNaN(parsed)) {
            console.log("\nTo nie jest liczba");
        } else {
            return parsed;
        }

    }
}
function game() {
    var random = (Math.floor(Math.random() * 100 + 1));
    var tries = 0;
   var x=dawajLiczbe();

        while (true) {
            if(x=="exit"){
                break;
            }else if (tries == 4) {
            break;
        } else if (x < 1|| x > 100) {
                console.log("\nTwoja liczba wychodzi poza zakres ")
                x=dawajLiczbe();
                tries++;
            } else if (random > x) {
                console.log("\nTwoja liczba jest za mala");
                x=dawajLiczbe();
                tries++;
            } else if (random < x) {
                console.log("\nTwoja liczba jest za duza");
                x=dawajLiczbe();
                tries++;
            }


    }   if(x=="exit"){
            return;
    }else   if (random == x) {
            console.log("\n!!!!trafiles!!!!! Liczba o ktora chodzilo to " + random);
        }else        if (random != x) {
            console.log("\nNie udalo sie zgadnac liczby. \n !!!!!!Jestes Glupi!!!!!");
        }
        var b = readlineSync.question('\nCzy chcesz zagrac ponownie (yes or no) \n\n');
        if (b == "yes") {
            game();
        } else {
            console.log("\nNie to nie Elo !!\n");
        }
}
game();



