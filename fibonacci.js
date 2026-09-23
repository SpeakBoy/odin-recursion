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
    if (n === 1) {
        return [0];
    }

    return fibsRec(n - 1).concat(fibsRecNum(n));

    function fibsRecNum(n) {
        if (n <= 1) {
            return 0;
        }
        if (n === 2) {
            return 1;
        }

        return fibsRecNum(n - 1) + fibsRecNum(n - 2);   
    }
}