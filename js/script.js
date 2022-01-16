//-----------------first task----------------------------//

function calculator(Operator, value1, value2) {
    if (Operator === '+') {
        return value1 + value2
    } else if(Operator === '-') {
        return value1 - value2
    }
    else if (Operator === '*') {
        return value1 * value2
    }
    else if (Operator === '/') {
        return value1 / value2
    }
}

console.log(calculator('-',15,18))
console.log(calculator('+',4,7))
console.log(calculator('*',5,5))
console.log(calculator('/',49,7))

//---------------second task------------------------------//

function squareOfSum(value1,value2) {
    let square = value1**2 + 2 * value1 * value2 + value2**2
    return square
}

console.log(squareOfSum(2,3))
console.log(squareOfSum(1,10))

//----------------------third task---------------------------------//

function finalGrade(exam,projects) {
    if (exam > 90 || projects > 10 ) {
        return 100
    }
    else if (exam > 75 && projects >= 5) {
        return 90
    }
    else if (exam > 50 && projects >= 2) {
        return 75
    }
    else {
        return 0
    }
    }
  console.log(finalGrade(96,12))
  console.log(finalGrade(92,8))
  console.log(finalGrade(82,5))
  console.log(finalGrade(80,4))
  console.log(finalGrade(60,4))
  console.log(finalGrade(70,1))
  console.log(finalGrade(40,2))
  console.log(finalGrade(30,0))


