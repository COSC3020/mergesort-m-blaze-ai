function mergesort(array) {
    let n = array.length;

    for (let width = 1; width < n; width *= 2) {
        for (let i = 0; i < n; i += 2 * width){
            let left = i;
            let mid = Math.min(i + width, n);
            let right = Math.min(i + 2 * width, n);
            merge (array, left, mid, right);
        }
    }

    return array;
}

function merge (arr, left, mid, right){
    let temp = [];
    let i = left;
    let j = mid;

    while (i < mid && j < right) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i++]);
        } else {
            temp.push(arr[j++]);
        }
    }

    while (i < mid) {
        temp.push(arr[i++]);
    }

    while (j < right) {
        temp.push(arr[j++]);
    }

    for (let k = 0; k < temp.length; k++) {
        arr[left + k] = temp[k];
        }
}