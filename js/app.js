const calculateBtn = document.getElementById('calculate-btn');

calculateBtn.addEventListener('click', function () {

    const income = document.getElementById('income');
    const incomeValue = parseFloat(income.value);
    const food = document.getElementById('food');
    const foodValue = parseFloat(food.value);
    const rent = document.getElementById('rent');
    const rentValue = parseFloat(rent.value);
    const cloth = document.getElementById('cloth');
    const clothValue = parseFloat(cloth.value);

    // console.log(incomeValue, foodValue, rentValue, clothValue)
    // // const incomeValue = income.value;
    // console.log(income);

    const totalExpenses = document.getElementById('total-expenses').innerText = foodValue + rentValue + clothValue;
    console.log(totalExpenses);
    const balanceAfterExp = document.getElementById('balance-after-expense');
    balanceAfterExp.innerText = parseFloat(incomeValue - totalExpenses);
});


const saveBtn = document.getElementById('save-btn');

saveBtn.addEventListener('click', function () {
    const income = document.getElementById('income');
    const incomeValue = parseFloat(income.value);
    const save = document.getElementById('save');
    const saveValue = parseFloat(save.value);
    const saving = document.getElementById('saving-amount');
    const savingValue = parseFloat(saving.value);
    const remaining = document.getElementById('remain-amount');
    const remainingValue = parseFloat(remaining.value);


    const balanceAfterExp = document.getElementById('balance-after-expense');
    const balanceAfterExpValue = parseFloat(balanceAfterExp.innerText);
    const saveMoney = parseFloat(incomeValue / 100 * saveValue);
    saving.innerText = saveMoney;
    remaining.innerText = balanceAfterExpValue - saveMoney;

})


// function idGetter(idName) {
//     document.getElementById(idName);
// }