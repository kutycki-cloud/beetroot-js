let age = +prompt("How old are you?");

if (age < 2) {
   console.log("You are ребенок");
} else if (age < 18) {
   console.log("You are подросток");
} else if (age < 60) {
   console.log("You are взрослый");
} else if (age > 60 || age == 60) {
   console.log("You are пенсионер");
}

