// Выведите односвязный список из предыдущего задания 
// Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};


function printCycle(list) {
    let values = []
    while (true){
        values.push(list.value);
        if (list.next) {
            list = list.next;
        } else break;
    }
    for (let i of values.reverse()) {
        console.log(i)
    }
}

function printRecursive(list) {
    (list.next) ? printRecursive(list.next) : null ;
    console.log(list.value);
}




printCycle(list)
console.log('')
printRecursive(list)