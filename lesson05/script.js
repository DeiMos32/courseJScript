'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

    let inCome = 'Freelance',
     mission = 160000,
     period = 4,
     money;

    
    let showTypeOf = function(data){
        return typeof(data);
    };

    let start = function() {
        
        do {
            money = prompt('Ваш месячный доход?');
        }
        while (!isNumber(money));
        
    };

    start();


    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    let deposit = confirm('Есть ли у вас депозит в банке');
    let expenses = [];

    function getExpensesMonth() {
        let sum = 0;
        let cost;
        for (let i = 0; i < 2;i++){
         
            expenses = prompt('Введите обязательную статью расходов?');
            cost = prompt('Во сколько это обойдется?');
            
            while(!isNumber(cost)) {
                cost = prompt('Во сколько это обойдется?');
            }
            
            sum += Number(cost);
        }
        
        return sum;
    }

    let expensesAmount = getExpensesMonth();

    function getAccumulatedMonth() {
        return money - expensesAmount;
    }


    let  accumulatedMonth = getAccumulatedMonth();

     let budgetDay = accumulatedMonth / 30;

    
    function getTargetMonth(mission, accumulatedMonth) {
      let key = mission / accumulatedMonth;  
      return key;
    }


    let getStatusIncome = function() {
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } 
    if ( budgetDay < 1200 && budgetDay >= 600 ) {
        return ('У вас средний уровень дохода');
    } 
    if ( budgetDay < 600 && budgetDay >= 0 ) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    }
    if (budgetDay < 0) {
        return ('Что то пошло не так');
    }
   
    };

    console.log(showTypeOf(money));
    console.log(showTypeOf(inCome));
    console.log(showTypeOf(deposit));
    console.log('Расходы за месяц: ', expensesAmount);
    console.log(addExpenses.split(', '));
    
    if (getTargetMonth(mission, accumulatedMonth) > 0) {
        console.log('Цель будет достигнута за ' + getTargetMonth(mission, accumulatedMonth) + ' месяца');
    } else {
        console.log('Цель не будет достигнута');
    }
    
    console.log('Бюджет на день: ' + Math.floor(budgetDay));
    console.log(getStatusIncome(budgetDay));