function fibs(n) {
    if (n <= 0) {
        return [];
    }
    let first = 0;
    let second = 1;
    if (n === 1) {
        return [first];
    }
    if (n === 2) {
        return [first, second];
    }
    
    const fibArr = [first, second];
    let i = 3;
    while (i <= n) {
        const curr = first + second;
        fibArr.push(curr);
        first = second;
        second = curr;
        i++;
    }

    return fibArr;
}

function fibsRec(n) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0, 1];
    }

    const fibArr = fibsRec(n - 1);
    fibArr.push(fibArr[n - 2] + fibArr[n - 3]);
    return fibArr;
}