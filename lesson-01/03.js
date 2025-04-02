/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum =0;
let count =0;
let sum2 =count;
while (count < 20) {
    count++
    sum2 = count % 2;
    if (sum2 === 1) {
        sum=sum + count;

        console.log (count, sum2, sum);
    }
}