/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(words) {

    let result = words
        .trim()
        .split(/\s+/)
        .map(word => {
            return word[0].toUpperCase() + word.slice(1).toLowerCase()
        })
        .join(" ")
    return result
}


console.log(capitalizeWords("hello world from javascript"))