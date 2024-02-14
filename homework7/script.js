/*Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.*/
function least (num1, num2) {
    if (num1 < num2) {
        console.log(num1);
    } else if (num1 === num2) {
        console.log("Числа равны");
    } else 
        console.log(num2);
}
least (10, 5)
least (10, 10)
least (2, 5)

/*Напишите функцию, которая принимает два числовых аргумента
и выводит в консоль все четные числа от большего к меньшему.*/

//from more to less even
//Функция не работает, ничего не отображает в консоли
function showFromMoreToLessEven(numb1, numb2) {
    let start 
    let finish
    if (numb1 > numb2) {
        start = numb1
        finish = numb2
    } else if (numb1 < numb2) {
        start = numb2
        finish = numb1
    } else {
        console.log("Числа равны");
    }
    for (let i = start; i <= finish; i--) {
        if (i % 2 === 0) {
         console.log(i)   
        }   
    }
}
console.log(showFromMoreToLessEven(30, 20))


 

/*Напишите функцию power, которая принимает два числовых аргумента 
(основание степени и саму степень) и возвращает число в указанной степени. 
Значение степени должно быть указано по умолчанию 2.*/
let exponent = 2

function power(base, exponent) {
    const raiseToAPower = base ** exponent
    console.log(raiseToAPower);
}
power(6,3)

//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

function sumFromOne(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    console.log(sum);
}
sumFromOne(4)

/*Напишите функцию, которая принимает два числовых аргумента n и m 
и считает сумму четных чисел и нечетных чисел от n до m. 
Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
Примечание: заменила обозначение n на k.*/

function sumEvenAndNotEven(m, k) {
    let sumEven  = 0 
    let sumNotEven  = 0 
    if (m < k) {
       for (let i = m; i <= k; i++) {
            if (i % 2 === 0) {
            sumEven = sumEven + i
        } else  {
            sumNotEven = sumNotEven + i
        } 
    } 
        
    } else if (m > k) {
        for (let i = k; i <= m; i++) {
            if (i % 2 === 0) {
            sumEven = sumEven + i
        } else  {
            sumNotEven = sumNotEven + i
        } 
    } 
    } else {
        console.log("Числа равны");
    }
    console.log(`Сумма четных чисел: ${sumEven}, сумма нечетных чисел: ${sumNotEven}`);
} 
sumEvenAndNotEven (2,10)
sumEvenAndNotEven (15,4)
sumEvenAndNotEven (8,8)

/*Напишите функцию, которая принимает в качестве аргументов массив строк, 
а возвращает первый самый длинный элемент массива. 
Если входной массив пуст, функция возвращает null. 
Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
Пример: [ 'one', 'two', 'three' ] => 'three'*/

//array.lenght - количество элементов массива
//string.length - количество символов в строке
//const arr = [ 'one', 'two', 'three' ] 
function firstOfLongest(arr) {
    if (arr.length == 0) {
        return null
    } 
    let longestSrting = 0
    for (let i = 0; i < arr.length; i++) {
        if (longestSrting < arr[i].length) {
            longestSrting = arr[i].length
        }
    } return longestSrting
    
}
console.log(firstOfLongest(['one', 'two', 'three']));
