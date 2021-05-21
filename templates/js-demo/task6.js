let eur_price = 0.82;
let uah_price = 27.43;
let azn_price = 1.7;

let usd_input = +prompt("How many USD do you want to exchange?");
let currency = prompt("Select currency EUR, UAH or AZN")


console.log(currency)

if (currency = "EUR") {
   console.log(usd_input * eur_price);
} else if (currency = "UAH") {
   console.log(usd_input * uah_price);
} else if (currency = "AZN") {
   console.log(usd_input * azn_price);
}