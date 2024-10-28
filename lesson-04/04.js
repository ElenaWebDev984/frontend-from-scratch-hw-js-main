/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
    let doubleStr = "";

    for (let i = 0; i < str.length; i++) {
        doubleStr += str[i].repeat(2);
    }
    return doubleStr;
}
// console.log(doubleEachCharacter('hello')); // 'hheelllloo'
// console.log(doubleEachCharacter('hello world')); // 'hheelllloo wwoorrlldd'
// console.log(doubleEachCharacter('9354')); // '99335544'

