/*
Попробуйте написать свою версию метода `map`. Ваша задача — создать функцию `map`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна иметь возможность принимать следующие параметры:

- `element` (текущий элемент массива),
- `index` (индекс текущего элемента),

Ваша функция `map` должна возвращать новый массив, где каждый элемент является результатом вызова функции `callback` на каждом элементе исходного массива.
*/

/*
Пример использования вашей функции:

const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = map(numbers, (element, index) => {
  return element * 2
})

console.log(doubledNumbers) // Должен вывести: [2, 4, 6, 8, 10]
*/

const map = (array, callback) => {
  // Создаем новый массив, в который будем добавлять результаты выполнения колбэка
  const result = [];

  // Проходим по каждому элементу исходного массива
  for (let i = 0; i < array.length; i++) {
    // Вызываем колбэк с текущим элементом и его индексом
    const newElement = callback(array[i], i);
    // Добавляем результат в новый массив
    result.push(newElement);
  }

  // Возвращаем новый массив с результатами
  return result;
};

// Пример использования:
// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = map(numbers, (element, index) => {
//   return element * 2;
// });

// console.log(doubledNumbers); // Должен вывести: [2, 4, 6, 8, 10]
