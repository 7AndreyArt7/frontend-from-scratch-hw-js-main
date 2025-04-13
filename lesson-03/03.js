// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(one, two, three) {
if (one > two && one > three) {
    return one;
}else if (two > one && two > three) {
    return two;
}else if (three > two && three > one) {}
return three;
}

console.log(findLargest( 112,15,81))