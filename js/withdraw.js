document.getElementById('btn-withdraw').addEventListener('click',function(){
    // console.log('clicked')
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawAmountString = withdrawField.value;

    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);
})