let num = +prompt("Write your number from 0 to 9");

switch (num) {
   case 0:
      console.log(")");
   case 1:
      console.log("!");
   case 2:
      console.log("@");
   case 3:
      console.log("#");
   case 4:
      console.log("$");
   case 5:
      console.log("%");
   case 6:
      console.log("^");
   case 7:
      console.log("&");
   case 8:
      console.log("*");
   case 9:
      console.log("(");
}

if (num < 0 || num > 9) {
   alert("Incorrect number, write your number from 0 to 9");
}