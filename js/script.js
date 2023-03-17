// 1. add event listener to the deposit button
// get deposit amount from the deposit input field
// convert string deposit amount to number
// clear the deposit input field after getting value
document.getElementById('btn-deposit').addEventListener('click',function(){
// console.log('deposit button clicked');
const depositField  = document.getElementById('deposit-input');
const newDepositAmountString = depositField.value;
// console.log(newDepositAmountString);
const newDepositAmount = parseFloat(newDepositAmountString);
// console.log(newDepositAmount);

depositField.value= '';

const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);

const newDepositTotal = previousDepositTotal + newDepositAmount;
depositTotalElement.innerText = newDepositTotal;












}) 