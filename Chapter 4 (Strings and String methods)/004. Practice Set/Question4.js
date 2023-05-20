// Extract the amount out of this String "Please give 100 Rs"

let extractAmount = "Please give Rs 100";

let amount = extractAmount.slice("Please give Rs ".length);
console.log(amount);