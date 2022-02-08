//-----------------------task-1 Отсортировать массив без метода reverse----------------------------//

function bubbleSort(arrays) {
    for (let n = 0; n < arrays.length; n++) { // Данный цикл предназначен для прохода по массиву n  раз, что бы перебрать все элементы
        for (let i = 0; i < arrays.length - 1 - n; i++) { // Данный цикл предназначен для прохода по элементам. (-n означает исключение обхода уже отсортированных элементов)
            if (arrays[i] > arrays[i + 1]) {
                let swapped = arrays[i] // Нижние три строки означают замену переменной если iтый элемент больше следующего
                arrays[i] = arrays[i + 1]
                arrays[i + 1] = swapped
            }
        }
    }
    return arrays
}


console.log(bubbleSort([2, 5, 6, 3, 8, 12, 1, 5, 22, 44, 1, 0]))
console.log(bubbleSort(['john', 'smith', 'karl']))
//---------------Использовался метод пузырьковой сортировки----------------------//


//--------------------

function isPangram(string) {
    let newString = string.toLowerCase();                // на вход принимаем строку и приводим к нижнему регистру.
    for (let value of 'abcdefghijklmnopqrstuvwxyz') {    // c помощью цикла for of пробегаемся по строке и с помощью метода includes проверяем наличие букв.
        if (!newString.includes(value)) {                 // Если строка не содержит необходимых элементов то возвращаем ложь. В других случаях правда.
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps23 over the lazy dog12")) // true
console.log(isPangram("This is not a pangram")) // false

