const purchasePrice = document.querySelector("#purchase-price");
const quantityOfStocks = document.querySelector("#quantity-of-stocks");
const currentPrice = document.querySelector("#current-price");

const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output-box");

function validateProfitLoss(){
 var pp = purchasePrice.value;
 var qty = quantityOfStocks.value;
 var curr = currentPrice.value;

 calculateProfitLoss(pp,qty,curr);

}

function calculateProfitLoss(initial,quantity,current){
 if(initial>current){
 var loss = (initial - current)*quantity;
 var lossPerc = (loss/initial)*100;
 output.innerHTML="Seems like this ship sank too hard!";
 output.innerHTML="Your stock is under a loss of " +loss+" with a loss percentage of " +lossPerc+ "%";
}else if(current>initial){
  var profit = (current- initial)*quantity;
  var profitPerc = (profit/initial)*100;
  output.innerHTML="Good gains!";
  output.innerHTML="Your stock is showing a profit of " +profit+  " with a profit percentage of " +profitPerc+ "%";
}else{
  output.innerHTML="Looks like the water is stagnant here!";
}

}
checkButton.addEventListener("click", validateProfitLoss)

