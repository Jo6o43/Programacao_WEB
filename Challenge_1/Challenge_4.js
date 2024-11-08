

let bill = [275, 40, 430];

function CalculateBill(value) {
    let tip = (value >= 50 && value <= 300) ? value * 0.15 : value * 0.20;
    return tip;
}

for (i = 0; i < bill.length; i++) {
    let tip = CalculateBill(bill[i]);
    console.log("The bill was " + bill[i] + ", the tip was " + tip + ", and the total value " + (bill[i] + tip) + ".");
}