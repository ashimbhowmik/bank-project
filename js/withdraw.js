
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);


    if ( newWithdrawAmount > 0 ) {

        const withdrawTotalAmountElement = document.getElementById('withdraw-total');
        const withdrawTotalAmountString = withdrawTotalAmountElement.innerText;
        const withdrawTotalAmount = parseFloat(withdrawTotalAmountString);

        const currentWithdrawTotal = withdrawTotalAmount + newWithdrawAmount;


        const previousTotalAmount = document.getElementById('balance-total');
        const totalWithdrawAmountString = previousTotalAmount.innerText;
        const totalWithdrawAmount = parseFloat(totalWithdrawAmountString);

        const currentTotalBalance = totalWithdrawAmount - newWithdrawAmount;

        if (currentWithdrawTotal <= currentTotalBalance ) {
            withdrawTotalAmountElement.innerText = currentWithdrawTotal;
            if (currentTotalBalance >= 0) {
                previousTotalAmount.innerText = currentTotalBalance;
            }
        }
        else {
            alert('You do not have sufficient balance');
        }
    }
    else {
        alert('Input valid number...!!!');
    }
    withdrawField.value = '';

})