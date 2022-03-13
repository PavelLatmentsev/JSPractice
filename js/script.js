let oddOrEven = array => {
    let result = array.reduce((total,current)=>{
    return total + current
    },0)

   if (result%2===0){
       return 'even'
    }
    else {
        return 'odd'
    }
}

console.log(oddOrEven([0, 1, 5])); // 'even'
console.log(oddOrEven([0, 1, 3])); // 'even'
console.log(oddOrEven([0, -1, -5])); // 'even'

console.log(oddOrEven([0, 1, 4])); // 'odd'
console.log(oddOrEven([0, -1, 2])); // 'odd'

console.log(oddOrEven([0])); // 'even'


//Задача 1. Функция должна возвращать каждый первый символ в слове в верхнем регистре.

let toJadenCase = array => {
    let word = array.split(' ')
    let result = word.map(item => {
      return  item[0].toUpperCase() + item.slice(1)
    }).join(' ')
    return result
}


console.log(toJadenCase('How can mirrors be real if our eyes aren"t real')); // How Can Mirrors Be Real If Our Eyes Aren"t Real
