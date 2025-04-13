// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {

    if ( Math.floor(number / 2) === number / 2 ) {
        return true
    } else {
        return false
    }
}


console.log(isEven(10));