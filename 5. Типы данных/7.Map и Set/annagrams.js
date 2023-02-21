// Напишите функцию aclean(arr), которая возвращает массив слов,
// очищенный от анаграмм.
// Например:

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

function aclean(arr) {
    let unique = new Set();
    let result = [];
    for (let word of arr) {
        let letters = word.toLowerCase().split('').sort().join('');
        if (!unique.has(letters)) {
            unique.add(letters);
            result.push(word);
        }
    }
    return result;
}
