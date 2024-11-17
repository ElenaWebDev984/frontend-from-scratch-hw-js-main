/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  // Проверяем, является ли строка пустой или состоит только из пробелов
  if (str.trim() === "") {
    return false;
  }

  // Пытаемся преобразовать строку в число
  const num = Number(str);

  // Проверяем, является ли результат числом
  return !isNaN(num);
}

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
//  console.log(isNumeric(" ")) // Ожидаемый результат: false
