'use strict';
    let money;
    
    let isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    let start = function() {
        
        do {
        money = prompt('Ваш месячный доход?');
        }
        while (!isNumber(money));
    
    };

    start();

    let appData = {
        inCome: {},
        addIncome: [],
        expenses1: {},
        addExpenses: [],
        deposit: false,
        mission: 160000,
        period: 4,
        budget: money,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,
        asking: function() {
                appData.inCome = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
                appData.addExpenses = appData.inCome.toLowerCase().split(',');
                appData.deposit = confirm('Есть ли у вас депозит в банке');
                
                for (let i = 0; i < 2;i++) {
                    let quest = prompt('Введите обязательную статью расходов?');
                    let cost = prompt('Во сколько это обойдется?');
                    
                    while(!isNumber(cost)) {
                        cost = prompt('Во сколько это обойдется?');
                    }

                    appData.expenses1[quest] = Number(cost);
                }
        },
        getExpensesMonth: function() {
            
            for (let key in appData.expenses1) {
                appData.expensesMonth += appData.expenses1[key];
            }
            
        },
        getBudget: function() {
            appData.budgetDay = Math.floor((appData.budget - appData.expensesMonth) / 30);
            appData.budgetMonth = appData.budget - appData.expensesMonth;
        },
        getTargetMonth: function() {
          appData.period = appData.mission / appData.budgetMonth;  
        },
        getStatusIncome:  function() {
            if (appData.budgetDay >= 1200) {
                return ('У вас высокий уровень дохода');
            } 
            
            if (appData.budgetDay < 1200 && appData.budgetDay >= 600 ) {
                return ('У вас средний уровень дохода');
            } 
            
            if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
                return ('К сожалению у вас уровень дохода ниже среднего');
            }
            
            if (appData.budgetDay < 0) {
                return ('Что то пошло не так');
            }
         }
    };

    appData.asking();
    appData.getExpensesMonth();
    appData.getBudget();
    appData.getTargetMonth();
    appData.getStatusIncome();

    console.log('Рассходы за месяц: ' + appData.expensesMonth);
    console.log('Цель будет достигнута за ' + appData.period + ' месяца');
    console.log(appData.getStatusIncome());
    
    for (let key in appData) {
        console.log('Наша программа включает в себя данные: ' + key + ' - ' +appData[key]);
    }
