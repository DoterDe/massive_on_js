// //1
// let array = [5, 8, 2, 9, 4, 1, 7, 6, 3, 10]; 
// let max = Math.max(...array);
// let min = Math.min(...array);
// console.log("Наибольшее значение: " + max);
// console.log("Наименьшее значение: " + min);

// //2
// let array = [];
// let sum = 0; 
// let average = 0; 
// for (let i = 0; i < 5; i++) { 
//   let number = Number(prompt("Введите число"));
//   array.push(number); 
//   sum += number;
// }
// average = sum / 5; 
// console.log("Массив: " + array); 
// console.log("Сумма: " + sum);
// console.log("Среднее: " + average); 

// // 3
// let array1 = [1, 3, 5, 7, 9, 11, 13];
// let array2 = [2, 4, 6, 8, 10, 12, 14];
// for (let i = 0; i < 7; i++) { 
//   if (array1[i] > array2[i]) { 
//     console.log("Элемент с индексом " + i + " в первом массиве больше, чем во втором: " + array1[i] + " > " + array2[i]);
//   } else if (array1[i] < array2[i]) { 
//     console.log("Элемент с индексом " + i + " в первом массиве меньше, чем во втором: " + array1[i] + " < " + array2[i]);
//   } else { 
//     console.log("Элементы с индексом " + i + " в обоих массивах равны: " + array1[i] + " = " + array2[i]);
//   }
// }

// // 4
// let array = [5, 8, 2, 9, 4, 1, 7, 6, 3, 10];
// let evenArray = []; 
// for (let i = 0; i < 10; i++) { 
//   if (array[i] % 2 == 0) { 
//     evenArray.push(array[i]); 
//   }
// }
// console.log("Второй массив: " + evenArray);