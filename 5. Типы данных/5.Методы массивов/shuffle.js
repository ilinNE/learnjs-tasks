// Напишите функцию shuffle(array), которая перемешивает 
// (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к 
// разным последовательностям элементов. Например:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...

// Все последовательности элементов должны иметь одинаковую вероятность.
// Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д.,
//  с равной вероятностью каждого случая.

function shuffle(arr) {
    let length = arr.length;
    let result = []
    for (let i =0; i < length; i++) {
        let j = Math.floor(Math.random() * arr.length)
        result.push(arr.splice(j,1))
    }
    arr.push(result)
}

let arr;
let probabilities = {}
for (let i = 0; i < 100000; i++) {
    arr = [1,2,3,4,5];
    shuffle(arr);
    let key = arr.join('');
    (probabilities[key] += 1) || (probabilities[key] = 1);
}
for (let item in probabilities) {
    console.log(item + ": " + probabilities[item] / 1000 + "%" );
}
