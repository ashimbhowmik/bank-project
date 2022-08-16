
// step-1 add event listener to the deposite btn
document.getElementById('btn-diposite').addEventListener('click',function(){
    
    // step - 2 get the deposite amout form th deposite input field
    // For input field use .value amout from the deposit input field
    
    const depositeField = document.getElementById('diposite-field');
    const newDepositAmountString = depositeField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(typeof newDepositAmount);

    if(newDepositAmount > 0){

        // step - 3 get the current deposite total
        // for non-inpute ( element other than input, textarea), use innertext to get text

        const depositeTotalElement = document.getElementById('deposit-total');
        const previousDepositTotalString = depositeTotalElement.innerText;
        const previousDepositTotal = parseFloat(previousDepositTotalString);

        // step - 4 add number to set the total deposite
        const curentDepositeTotal = previousDepositTotal + newDepositAmount;

        // set the deposit total
        depositeTotalElement.innerText = curentDepositeTotal;

        // step-5 get ballance cuurent total

        const balanceTotalElement = document.getElementById('balance-total');
        const previousBalanceTotalString = balanceTotalElement.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceTotalString);

        // step-6 : calculate current total balance

        const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
        balanceTotalElement.innerText = currentBalanceTotal;

    }
    else {
        alert('Input valid number...!!!');
    }

    depositeField.value = '';
})