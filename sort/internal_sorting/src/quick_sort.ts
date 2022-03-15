const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1,-5,13];

let count : number = 0;

export const quick_sort = (array : number[]) : number[] => {
    count += 1;
    if(array.length <= 1) return array;

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];

    for(let i = 0; i < array.length; i++){
        if(i === pivotIndex) continue;
        if(array[i] < pivot) less.push(array[i]);
        else greater.push(array[i]);
    }
    return [...quick_sort(less), pivot, ...quick_sort(greater)];
}

console.log(quick_sort(arr));
console.log('count = ',count);