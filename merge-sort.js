function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const left = arr.slice(0, Math.floor(arr.length / 2));
    const right = arr.slice(Math.floor(arr.length / 2));

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    
    let i = 0;
    let j = 0;
    const sortedArr = [];
    while (i < sortedLeft.length && j < sortedRight.length) {
        if (sortedLeft[i] <= sortedRight[j]) {
            sortedArr.push(sortedLeft[i]);
            i++;
        }
        else {
            sortedArr.push(sortedRight[j]);
            j++;
        }
    }

    if (i < sortedLeft.length) {
        sortedArr.push(...sortedLeft.slice(i));
    } else if (j < sortedRight.length) {
        sortedArr.push(...sortedRight.slice(j));
    }

    return sortedArr;
}