'use strict';

    let arr = ['3456', '2121', '4587345607540', '324234234', '87586478409', '453265462', '564767984'];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].slice(0, 1) === '2' || arr[i].slice(0, 1) === '4') {
        console.log(arr[i]);
        }
    }

    function isSimple (n) {
        if (n === 1 || n === 0) {
            return false;
        } else {
            for(let i = 2; i < n; i++) {
                if(n % i === 0) {
                    return false;
                }
            }
            return true;  
        }
    }

    for (let i = 0; i < 100; i++){
        if (isSimple(i) === true) {
            console.log(i + ' Делители этого числа: ' + ' 1 и ' + i);
        }
    }
