/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code
let factorial = 1;
let i = 1;

while (i <= 10) {
  factorial = factorial * i++;
  console.log(`Уже: ${factorial}`)

  if (i <= 10) {
    factorial = i * i;
  } else if (i === 10) {
  }
  else {}
}
i++
//i = i * (i+1)
console.log(`Итоговая сумма: ${factorial}`);



