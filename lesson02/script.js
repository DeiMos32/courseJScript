    let money = 15000;
    let inCome = 'Freelance';
    let addExpenses = 'Internet, taxi, communal apartment';
    let deposit = true;
    let mission = 30000;
    let period = 3;


    console.log(typeof money);
    console.log(typeof inCome);
    console.log(typeof deposit);
    console.log(addExpenses.length);
    console.log('Период равен ' + period + ' месяцам');
    console.log('Цель заработать ' + mission + ' рублей');
    console.log(addExpenses.toLowerCase());
    console.log(addExpenses.split(', '));
    
    let budgetDay = money / 30;
    console.log(budgetDay);

