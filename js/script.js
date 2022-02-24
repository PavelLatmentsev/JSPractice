// Домашка
// дана строка цифр вы должны заменить любую цифру ниже 5 на «0», а любую цифру выше или равную 5 на «1». Функция возвращает строку.


function fakeStr(test) {
    let result = test.split('')
    let binari = result.map(function(item){
        if(item < 5) {
            return '0'
        }
        if (item >=5) {
            return '1'
        }
    }).join('')
    return binari
  }
 
  console.log(fakeStr('45385593107843568')); // '01011110001100111'
  console.log(fakeStr('509321967506747')); // 101000111101101
clear 