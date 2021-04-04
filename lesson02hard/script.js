    let num = 266219;
    let result = 1;
    let tmp;
    while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        result *= tmp;
    }
    console.log(result);
    result = result ** 3;
    console.log(String(result).substring(0, 2));