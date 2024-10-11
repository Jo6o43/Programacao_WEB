//TestData
let Dolphins = [96, 108, 89];
let Koalas = [88, 91, 110];

//TestData Bonus 1
let DolphinsBonus1 = [97, 112, 101];
let KoalasBonus1 = [109, 95, 123];

//TestData Bonus 2
let DolphinsBonus2 = [97, 112, 101];
let KoalasBonus2 = [109, 95, 106];

//Aux Variables
let DolphinsAvg = 0;
let KoalasAvg = 0;

////////////////////////////////////////////////////////////////
//Calculate Average Score ( Exercise 1 )
function CalculateAverageScore(team) {
    let ScoreSum = 0;
    let Avg = 0;
    for (let i = 0; i < team.length; i++) {
        ScoreSum += team[i];
    }
    Avg = ScoreSum / Dolphins.length;
    return Avg;
}

//Calculate Winner ( Exercise 2 )
function Winner(DolphinsAvg, KoalasAvg) {
    if (DolphinsAvg > KoalasAvg) {
        console.log("\nEX2 >> Dolphins are the Winners.");
    }
    else if (DolphinsAvg < KoalasAvg) {
        console.log("\nEX2 >> Koalas are the Winners.");
    }
    else {
        console.log("\nEX2 >> It's a Draw.");
    }
}

//Verify Winner ( Exercise 3 and 4 )
function VerifyWinner(DolphinsAvg, KoalasAvg) {
    if (DolphinsAvg >= 100 && KoalasAvg >= 100) {
        if (DolphinsAvg > KoalasAvg) {
            console.log("EX3 >> Dolphins are the Winners.");
        }
        else if (DolphinsAvg < KoalasAvg) {
            console.log("EX3 >> Koalas are the Winners.");
        }
        else {
            console.log("EX3 >> It's a Draw.");
        }
    }
    else {
        console.log("EX3 >> No Winner.");
    }
}

//////////////////////////////////////////////////////////////////////
//TestData
console.log("\n====================================");
console.log("TestData::");
DolphinsAvg = CalculateAverageScore(Dolphins);
KoalasAvg = CalculateAverageScore(Koalas);

console.log("Dolphin's Average Score -> " + DolphinsAvg.toFixed(2));
console.log("Koala's Average Score -> " + KoalasAvg.toFixed(2));

Winner(DolphinsAvg, KoalasAvg);
VerifyWinner(DolphinsAvg, KoalasAvg);

//TestData Bonus 1
console.log("====================================");
console.log("TestData Bonus 1::");
DolphinsAvg = CalculateAverageScore(DolphinsBonus1);
KoalasAvg = CalculateAverageScore(KoalasBonus1);

console.log("Dolphin's Average Score -> " + DolphinsAvg.toFixed(2));
console.log("Koala's Average Score -> " + KoalasAvg.toFixed(2));

Winner(DolphinsAvg, KoalasAvg);
VerifyWinner(DolphinsAvg, KoalasAvg);

//TestData Bonus 2
console.log("====================================");
console.log("TestData Bonus 2::");
DolphinsAvg = CalculateAverageScore(DolphinsBonus2);
KoalasAvg = CalculateAverageScore(KoalasBonus2);

console.log("Dolphin's Average Score -> " + DolphinsAvg.toFixed(2));
console.log("Koala's Average Score -> " + KoalasAvg.toFixed(2));

Winner(DolphinsAvg, KoalasAvg);
VerifyWinner(DolphinsAvg, KoalasAvg);

console.log("====================================");
 