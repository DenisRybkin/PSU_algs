export class Heap_sort {
    initialArray : number[]
    heap : number[];
    sortedArray : number[];

    constructor(array : number[]) {
        this.initialArray = array;
        this.heap = [0];
        this.sortedArray = [];
    }

    swapValues(num1 : number, num2 : number) : number[]{
        return [num1,num2];
    }

    add(value : number) : void { // добавляю эелемент в кучу и правильно формирую дерево (min родитель, max ребенок)
        this.heap.push(value);

        let valueIndex = this.heap.length - 1;
        let parentValueIndex = Math.floor(valueIndex/2);

        while (valueIndex > 1 && this.heap[valueIndex] < this.heap[parentValueIndex]){ //чекаю какой элемент минимальный (родитель или ребенок) и перестраваю дерево

            const replacingValues = this.swapValues(this.heap[Math.floor(valueIndex)],this.heap[parentValueIndex])
            this.heap[parentValueIndex] = replacingValues[0];
            this.heap[valueIndex] = replacingValues[1];

            valueIndex = Math.floor(valueIndex);
            parentValueIndex = Math.floor(valueIndex/2);
        }

        //строю кучу с минимальной вершиной, если this.heap[valueIndex] меньше родителя то мы меняем их местами,
        // до тех пор, пока this.heap[valueIndex] не займет своё мместо в дереве
    }

    delete(index : number) : number | null {  //удаляю элемент из кучи и перестраиваю дерево кучи, возвращая минимальный элемент для записи в отсортированный массив

        if(this.heap.length > 2) { // если удаляю не последние 2 элемента кучи
            let deletedValue = this.heap[index]; //беру переменную, которую возможно заменю заменю, верхушка
            this.heap[index] = this.heap.pop()!;

            let j = index, n = this.heap.length-1; // n - граница

            while (j * 2 <= n){ // проверяем наличие ребёнка, пока не выйдем за границы
                let minElementIndex = j * 2; //индекс левого ребёнка

                //чекаю если правый ребенок меньше левого, тогда првый наименьший
                if(minElementIndex + 1 <= n && this.heap[minElementIndex] > this.heap[minElementIndex + 1]) minElementIndex += 1;

                if(this.heap[j] > this.heap[minElementIndex]){  //если эллемент по удаленному индексу (нынче последний элемент массива) меньше минимального ребенка, то я меняюх их родство
                    const replacingValues = this.swapValues(this.heap[j], this.heap[minElementIndex])

                    this.heap[j] = replacingValues[1];
                    this.heap[minElementIndex] = replacingValues[0];
                }
                j = minElementIndex;
            }
            return deletedValue;
        }
        else if(this.heap.length === 2) return this.heap.pop()!;
        else return null
    }

    sort() : number[] {
        while (this.initialArray.length > 0 )
        {
            const lastElem = this.initialArray.pop();
            lastElem && this.add(lastElem);
        }
        while (this.heap.length > 1){
            const value = this.delete(1); // удаляю из кучи верхушку (она самая минимальня)
            value && this.sortedArray.push(value); // добавляю минимальный эллемент кучи в верхушку
        }
        return this.sortedArray;
    }
}

const heap = new Heap_sort([5,7,9,4,3,8,3,1,0,3]);
console.log(heap.sort())
// написать метод трёх стаканов;