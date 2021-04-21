'use strict';
    
let money;
    
    let isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    let isString = function(s) {
        return isNaN(s);
    };

    let firstCharacter = function(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
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
        percentDeposit: 0,
        moneyDeposit: 0,
        mission: 160000,
        period: 4,
        budget: money,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,
        asking: function() {

                if (confirm('Есть ли у вас дополнительный источник заработка?')) {
                    
                    let itemInCome;

                    do {
                        itemInCome = prompt('Какой у вас дополнительный заработок?', 'Такси');
                    }
                    while (isString(itemInCome) === false);
                    


                    let cashInCome;
                    
                    do{
                        cashInCome = prompt('Сколько в месяц вы зарабатываете на этом?', 10000);
                    }
                    while(!isNumber(cashInCome));

                    appData.inCome[itemInCome] = cashInCome;
                }


                appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
                appData.addExpenses = appData.addExpenses.split(',');
                appData.deposit = confirm('Есть ли у вас депозит в банке');
                
                for (let i = 0; i < 2;i++) {
                    let quest;

                    do {
                        quest = prompt('Введите обязательную статью расходов?');
                    }
                    while(isString(quest) === false);

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
         },
         getInfoDeposit: function() {
             if (appData.deposit) {
                do {
                appData.percentDeposit = prompt('Какой годовой процент?', 10);
                }
                while(!isNumber(appData.percentDeposit));

                do{
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
                }
                while(!isNumber(appData.moneyDeposit));
             }
         },
         calcSavedMoney: function() {
            return appData.budgetMonth * appData.period;
         }
    };

    appData.asking();
    appData.getInfoDeposit();
    appData.getExpensesMonth();
    appData.getBudget();
    appData.getTargetMonth();
    appData.getStatusIncome();
    appData.calcSavedMoney();

    console.log('Рассходы за месяц: ' + appData.expensesMonth);
    console.log('Цель будет достигнута за ' + Math.floor(appData.period) + ' месяца');
    console.log(appData.getStatusIncome());
    console.log(appData.addExpenses.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', '));
    
    for (let key in appData) {
        console.log('Наша программа включает в себя данные: ' + key + ' - ' +appData[key]);
    }
