// Functions

function getId(idName) {
    return document.getElementById(idName);
}
function toNum(value) {
    return parseFloat(value);
}

// Calculate Button Events
const calculateBtn = getId('calculate-btn');
calculateBtn.addEventListener('click', function () {
    const income = getId('income');
    const incomeValue = toNum(income.value);
    const food = getId('food');
    const foodValue = toNum(food.value);
    const rent = getId('rent');
    const rentValue = toNum(rent.value);
    const cloth = getId('cloth');
    const clothValue = toNum(cloth.value);

    // Error Handeling
    const negError = getId('negetive');
    const stringError = getId('blank-error');
    const extraError = getId('extra-expense')
    if (incomeValue < 0 || foodValue < 0 || rentValue < 0 || clothValue < 0) {
        negError.style.display = 'block';
    } else if (isNaN(incomeValue) || isNaN(foodValue) || isNaN(rentValue) || isNaN(clothValue)) {
        stringError.style.display = 'block';
    } else {
        const totalExpenses = getId('total-expenses').innerText = foodValue + rentValue + clothValue;
        const balanceAfterExp = getId('balance-after-expense');
        if (totalExpenses > incomeValue) {
            extraError.style.display = 'block';
        } else {
            balanceAfterExp.innerText = toNum(incomeValue - totalExpenses);
        }

    }
});


// Save Money Button Events

const saveBtn = getId('save-btn');
saveBtn.addEventListener('click', function () {
    const income = getId('income');
    const incomeValue = toNum(income.value);
    const save = getId('save');
    const saveValue = toNum(save.value);
    const saving = getId('saving-amount');
    const remaining = getId('remain-amount');

    const balanceAfterExp = getId('balance-after-expense');
    const balanceAfterExpValue = toNum(balanceAfterExp.innerText);
    const saveMoney = toNum(incomeValue / 100 * saveValue);
    // Error Handeling
    if (saveMoney > balanceAfterExpValue) {
        getId('saving-error').style.display = 'block'
    } else {
        saving.innerText = saveMoney;
        remaining.innerText = balanceAfterExpValue - saveMoney;
    }
});



