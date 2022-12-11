document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount depositted 
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    const depositTotal = document.getElementById('deposit-total');
    
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal ;

    // update balance 
    const balanceTotal = document.getElementById('prev-balance');
    const balanceTotalText = balanceTotal.innerText;
    const prevBalanceTotal = parseFloat(balanceTotalText);
    const newbalanceTotal = prevBalanceTotal + newDepositTotal;
    balanceTotal.innerText = newbalanceTotal;

    // clear the input field 
    depositInput.value = '';
});

// handle withdraw event with handler 

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw to text 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    // total withdraw 
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance 
    const balanceTotal = document.getElementById('prev-balance');
    const balanceTotalText = balanceTotal.innerText;
    const prevBalanceTotal = parseFloat(balanceTotalText);
    const newbalanceTotal = prevBalanceTotal - newWithdrawTotal;
    balanceTotal.innerText = newbalanceTotal;

    withdrawInput.value = '';
})