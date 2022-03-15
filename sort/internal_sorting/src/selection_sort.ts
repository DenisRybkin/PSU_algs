const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1,-5,13];

let count : number = 0;

export const selection_sort = (array : number[]) : number[] => {
    for (let i = 0; i < array.length; i++) {
        let indexMin : number = i;
        for(let j = i+1; j < array.length; j++){
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
            count += 1;
        }
        let tmp : number = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;
    }
    return array;
}

// O(n*n)
console.log(selection_sort(arr));
console.log('count = ',count);