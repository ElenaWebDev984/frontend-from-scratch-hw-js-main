// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code

let sum = 0; 
let num = 0;

while (num <= 20) {
    console.log(`Текущее число: ${sum + num}`)

    if (num <= 20) {
         sum = sum + num;
    } else if (num === 20) {
        //break
    }
    else {
    }
    num++;
}
console.log(`Итоговая сумма: ${sum}`);





   