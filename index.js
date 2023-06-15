// Code your solutions in this file

let name = ["Guadalupe", "Ollie", "Aki"];

let occasion = "surprise";

function writeCards(names, occasion) {
  const thankyouMessage = [];
  for (let i = 0; i < names.length; i++) {
    thankyouMessage.push(
      `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`
    );
  }
  return thankyouMessage;
}

let log;

function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}
