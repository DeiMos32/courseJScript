'use strict';

    function showString(data) {
        if (typeof(data) !== 'string') {
            console.log('В качестве аргумента передана не строка');
        } 
           
        let newData = data.replace(/\s+/g,'');
    
        if (data.length > 30) {
            data = data.slice(0, 30) + '...';
            console.log(data);
        }

    return newData;
    }

  console.log( showString('Привет меня зовут Леонид и мне 19 лет'));