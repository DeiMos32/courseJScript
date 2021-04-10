    'use sctrict';

    let lang = prompt('Введите значение переменной lang:');
    let namePerson = prompt('Имя человека:');
    

    if (lang === 'ru') {
        console.log('Понедельник, Вторник, Среда, Четверг, Пятнца, Суббота, Воскресенье');
     } else if (lang === 'en') {
         console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
     }

     switch (lang) {
        case 'ru':
            console.log('Понедельник, Вторник, Среда, Четверг, Пятнца, Суббота, Воскресенье');
            break;
        case 'en':
            console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
            break;
     }

     var arr = {
         'ru':['Понедельник, Вторник, Среда, Четверг, Пятнца, Суббота, Воскресенье'],
         'en':['Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday'],
     };
     console.log(arr[lang]);

     console.log((namePerson === 'Артем') ? 'директор' : namePerson === 'Максим' ? 'преподователь' : 'ученик');