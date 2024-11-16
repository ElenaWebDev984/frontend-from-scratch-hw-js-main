/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  // Преобразуем строку в массив символов
  let chars = str.split('');

  // Делаем первую букву заглавной
  if (chars.length > 0) {
      chars[0] = chars[0].toUpperCase();
  }

  // Проходим по массиву символов и делаем заглавными первые буквы каждого слова
  for (let i = 1; i < chars.length; i++) {
      if (chars[i - 1] === ' ') {
          chars[i] = chars[i].toUpperCase();
      } else {
          chars[i] = chars[i].toLowerCase();
      }
  }

  // Объединяем массив символов обратно в строку
  return chars.join('');
}

console.log(capitalizeWords("hello world from javascript")); // "Hello World From JavaScript"
