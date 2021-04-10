'use strict';

    let inCome = 'Freelance',
     mission = 160000,
     period = 4;

    
    let showTypeOf = function(data){
        return typeof(data);
    };
  

    let money = +prompt('Ваш месячный доход');
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    let deposit = confirm('Есть ли у вас депозит в банке');
    let expenses1 = prompt('Введите обязательную статью расходов?');
    let amount1 = +prompt('Во сколько это обойдется?');
    let expenses2 = prompt('Введите обязательную статью расходов?');
    let amount2 = +prompt('Во сколько это обойдется?');
  


    function getExpensesMonth(amount1, amount2) {
        return amount1 + amount2;
    }
    

    function getAccumulatedMonth(money, amount1, amount2) {
        return money - amount1 - amount2;
    }


    let  accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);

     let budgetDay = accumulatedMonth / 30;

    
    function getTargetMonth(mission, accumulatedMonth) {
      return mission / accumulatedMonth;  
    }


    let getStatusIncome = function() {
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } 
    if ( (budgetDay < 1200) && (budgetDay >= 600) ) {
        return ('У вас средний уровень дохода');
    } 
    if ( (budgetDay < 600) && (budgetDay >= 0) ) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    }
    if (budgetDay < 0) {
        return ('Что то пошло не так');
    }
   
    };

    console.log(showTypeOf(money));
    console.log(showTypeOf(inCome));
    console.log(showTypeOf(deposit));
    console.log('Расходы за месяц: ', getExpensesMonth(amount1, amount2));
    console.log(addExpenses.split(', '));
    console.log('Цель будет достигнута за ' + getTargetMonth(mission, accumulatedMonth) + ' месяца');
    console.log('Бюджет на день: ' + Math.floor(budgetDay));
    console.log(getStatusIncome(budgetDay));