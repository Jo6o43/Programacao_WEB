//TestData 1
let M_mass = 78;
let M_height = 1.69;
let J_mass = 92;
let J_height = 1.95;

let best_BMI = "None";
let wrost_BMI = "None";

let BMI_Mark = M_mass / (M_height ** 2);
let BMI_John = J_mass / (J_height ** 2);

if (BMI_Mark > BMI_John) {
    best_BMI = "Mark";
    wrost_BMI = "John";
}
 else if (BMI_Mark < BMI_John) {
    best_BMI = "John";
    wrost_BMI = "Mark";
}

console.log("\nTestData 1 Results::");
console.log("Mark's BMI ->> " + BMI_Mark.toFixed(2));
console.log("John's BMI ->> " + BMI_John.toFixed(2));
console.log(best_BMI+" has best BMI than "+ wrost_BMI+".");

//TestData 2
M_mass = 95;
M_height = 1.88;
J_mass = 85;
J_height = 1.76;

BMI_Mark = M_mass / (M_height ** 2);
BMI_John = J_mass / (J_height ** 2);

if (BMI_Mark > BMI_John) {
    best_BMI = "Mark";
    wrost_BMI = "John";
}
 else if (BMI_Mark < BMI_John) {
    best_BMI = "John";
    wrost_BMI = "Mark";
}

console.log("\nTestData 2 Results::");
console.log("Mark's BMI ->> " + BMI_Mark.toFixed(2));
console.log("John's BMI ->> " + BMI_John.toFixed(2));
console.log(best_BMI+" has best BMI than "+ wrost_BMI+".");