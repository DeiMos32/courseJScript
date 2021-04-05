    let money = 15000;
    let inCome = 'Freelance';
    let addExpenses = 'Internet, taxi, communal apartment';
    let deposit = true;
    let mission = 160000;
    let period = 4;


    console.log(typeof money);
    console.log(typeof inCome);
    console.log(typeof deposit);
    console.log(addExpenses.length);
    console.log('Период равен ' + period + ' месяцам');
    console.log('Цель заработать ' + mission + ' рублей');
    console.log(addExpenses.toLowerCase());
    console.log(addExpenses.split(', '));

    let budgetDay = money / 30;
    //console.log(budgetDay);

    money = prompt('Ваш месячный доход');
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    deposit = confirm('Есть ли у вас депозит в банке');
    let expenses1 = prompt('Введите обязательную статью расходов?');
    let expenses2 = prompt('Введите обязательную статью расходов?');
    let amount1 = prompt('Во сколько это обойдется?');
    let amount2 = prompt('Во сколько это обойдется?');
    let budgetMonth = money - amount1 - amount2;
    console.log('Бюджет на месяц: ', budgetMonth);
    console.log('Цель будет достигнута за ' + Math.ceil(mission / budgetMonth) + ' месяцев');
    budgetDay = budgetMonth / 30;
    console.log('Бюджен на день: ', Math.floor(budgetDay));

    if (budgetDay >= 1200) {
        console.log('У вас высокий уровень дохода');
    } 
    if ( (budgetDay < 1200) && (budgetDay >= 600) ) {
        console.log('У вас средний уровень дохода');
    } 
    if ( (budgetDay < 600) && (budgetDay >= 0) ) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    }
    if (budgetDay < 0) {
        console.log('Что то пошло не так');
    }