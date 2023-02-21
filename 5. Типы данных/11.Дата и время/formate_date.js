// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

//     Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
//     В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
//     В противном случае, если меньше часа, вывести "m мин. назад".
//     В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.


function formatDate(date) {
    let now = new Date()
    timeDiff = now - date
    if (timeDiff > 0 && timeDiff < 1000) {
        return "прямо сейчас"
    } else if (timeDiff < 60000) {
        return `${new Date(timeDiff).getSeconds()} сек. назад`
    } else if (timeDiff < 3600000) {
        return `${new Date(timeDiff).getMinutes()} мин. назад`
    } else return (
        `0${date.getDate()}`.slice(-2) + '.' +
        `0${date.getMonth() + 1}`.slice(-2) + '.' +
        `${date.getFullYear()}`.slice(-2) + ' ' +
        `0${date.getHours()}`.slice(-2) + ':' +
        `0${date.getMinutes()}`.slice(-2) 
    )
}