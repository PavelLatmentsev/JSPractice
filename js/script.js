//--------------Задача 1-------------------------------------------------------//
let cities = ['moscow', 'london', 'berlin', 'porto']


function get(cities,index,def) {
  
 
if (index < cities.length){
  return cities[index]
}

if(index === cities.length) {
    return null
}
if (index > cities.length ){// Так и не поборол я вариант со значением индекса меньше нуля. Выводит значение undefind/ Пробовал разное, не помогло.
    return def
  }
if (index < 0 ) {
  return "oops"
}

}

console.log(get(cities,1))
console.log(get(cities,4))
console.log(get(cities,10,'paris'))
console.log(get(cities,-1,'oops'))

//------------------------Задача 2----------------------------------------//


function camelBreak(camelWord) {                             //Кладем в параметр аргумент  в виде произвольной строки в нотации lowerCamelCase
  let result = ''                                       // Заводим переменную равную пустой строке куда будем складывать результат
  for (let i = 0; i<camelWord.length; i++ ) {           // Прогоняем циклом от 0 до длины строки - 1(что бы индекс получился, он же меньше на 1 чем длина)
          if (camelWord[i]===camelWord[i].toUpperCase()) { // сравниваем текущий строчный символ с верхним регистром. Если не равно верхнему регистру то берем символ и суммируем с предыдущим результатом(изначально это пустая строка)
              result = result + ' '
          }                                                  // Как только нашли букву верхнего регистра  суммируем с пробелом. получившееся слово нижнего регистра до большой буквы, и дальше до конца
          
              result = result + camelWord[i]                      

          }
  
  return result
}


console.log(camelBreak('camelCase'))


//------------------------Задача 3-------------------------------------------//-

function positiveSum() {
  const mass = [20, 3, 5, -7, 8, 25, -9, -4]
  let sum = 0                                        // Создаем переменную с нулевым значением, что бы потом к ней прибавлять значения положительных чисел, что бы вычислить сумму по итогу
  for (let i = 0; i < mass.length; i++) {             // прогоняем массив
          if (mass[i]>0) {                             //ищем положительные числа
  
              sum = sum + mass[i]// Прибавляем итый положительный элемент
              
          }
           
      } 
      return sum                                          // возвращаем сумму
  }
  
  
  console.log(positiveSum())

  //--------------------------------------------------------//