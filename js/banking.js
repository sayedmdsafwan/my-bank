document
    .getElementById("deposit-button")
    .addEventListener("click", function () {
        const depositInput = document.getElementById("deposit-input");
        const newDepositAmount = depositInput.value;
        const depositTotal = document.getElementById("deposit-total");
        const previousDepositAmount = depositTotal.innerText;
        const newDepositTotal =
            Number(newDepositAmount) + Number(previousDepositAmount);
        depositTotal.innerText = newDepositTotal;
        // deposit calc

        const prevBalance = document.getElementById("prev-balance");
        const prevBalanceAmount = prevBalance.innerText;
        const updatedBalance =
            Number(prevBalanceAmount) + Number(newDepositAmount);
        prevBalance.innerText = updatedBalance;
        // balance calc

        depositInput.value = "";
    });

document
    .getElementById("withdraw-button")
    .addEventListener("click", function () {
        //withdraw related
        const withdrawInput = document.getElementById("withdraw-input");
        const withdrawAmount = withdrawInput.value;
        const withdrawTotal = document.getElementById("withdraw-total");
        const withdrawTotalText = withdrawTotal.innerText;
        const withdrawTotalAmount =
            Number(withdrawAmount) + Number(withdrawTotalText);

        // balance related
        const prevBalance = document.getElementById("prev-balance");
        const prevBalanceAmount = prevBalance.innerText;
        const updatedBalance =
            Number(prevBalanceAmount) - Number(withdrawAmount);

        // can't withdraw more than balance
        if (Number(withdrawAmount) <= Number(prevBalanceAmount)) {
            withdrawTotal.innerText = withdrawTotalAmount;
            prevBalance.innerText = updatedBalance;
        } else {
            alert("You can't withdraw more than you have");
        }
        withdrawInput.value = "";
    });
