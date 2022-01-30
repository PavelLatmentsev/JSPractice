//--------------------------------task1 создать функцию, которая удаляет первый и последний символы строки. Вам дан один параметр, исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов.-------------------//
function removeChar(strokeItems) {
    let str = ''
    str = strokeItems.substring(1, strokeItems.length - 1)
    return str
}

console.log(removeChar('eloquent')); // loquen
console.log(removeChar('country')); // ountr
console.log(removeChar('person')); // erso
// нащёль на MDN метод https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/substring - Метод substring() извлекает символы, начиная с индекса indexA до, но не включая, индекс indexB





//-------------- task 2 Реализуйте функцию, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3.------------------------//

function calculateSum(arrays) {
    let sum = 0
    arrays.forEach(function (items) {
        if (items % 3 === 0) {
            sum = sum + items
        }
    })
    return sum
}

console.log(calculateSum([8, 9, 21, 19, 18, 22, 7])) // 48


console.log(calculateSum([2, 0, 17, 3, 9, 15, 4])) //27