const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1,-5,13];

let count = 0;

export const bubble_sort = (array : number[]) : number[]  => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j+1] < array[j]){
                let tmp : number = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }
            count +=1;
        }
    }
    return array;
}

console.log(bubble_sort(arr));
console.log('count = ',count);