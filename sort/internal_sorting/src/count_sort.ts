let countOfNumbers: number; //счетчик итераций

export const count_sort = (array: number[]): number[] => {

    countOfNumbers = 0;
    const maxElement = Math.max.apply(null, array);

    const orderOfNumbers = Array(maxElement + 1).fill(0);
    countOfNumbers += maxElement+1;

    array.forEach(itemValue => {
        orderOfNumbers[itemValue]++;
        countOfNumbers++;
    }); // наполнение вспомогательного массива

    let index = 0;

    orderOfNumbers.forEach(((itemValue, indexValue) => {
        for(let i = 0; i< itemValue; i++){
            array[index] = indexValue;
            orderOfNumbers[indexValue]--;
            index++;
            countOfNumbers++;
        }
    }))
    return array;
}

