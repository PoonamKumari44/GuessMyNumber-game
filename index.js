let a = Math.random() * 100;
a = Number.parseInt(a)
let num;
let score = 100;

while (num != a) {
  score = score - 1;
  num = prompt("Enter the number: ");
  if (num == a) {
    console.log("Congratulations! You guess the correct number.")
    console.log(`your score is ${100 - score}.`);
  }
  else if (num > a && num < 100) {
    console.log("your num is greater than the actual num.")
  }
  else if (num < a && num > 0) {
    console.log("your num is smaller than the actual num.")
  }
  else {
    console.log("Enter num between 1 and 100")
  }
}