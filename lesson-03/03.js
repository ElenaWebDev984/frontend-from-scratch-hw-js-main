// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(n1, n2, n3) {
    let largest = 0;

    if (n1 > n2) {
        largest = n1;
    } else {
        largest = n2;
    }
    if (n3 > largest) {
        largest = n3;
    } else {}
    return largest;
}
console.log(findLargest(48, 38, 14));
console.log(findLargest(1500, 1765, 3));
console.log(findLargest(100, 51, 366));