// Напишите функцию getWeekDay(date), показывающую день недели в
//  коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"

function getWeekDay(date) {
    let daysOfWeek = new Map(
        [[0,"ВС"],[1,"ПН"],[2,"ВТ"],[3,"СР"],[4,"ЧТ"],[5,"ПТ"],[6,"СБ"]]
    )
    return daysOfWeek.get(date.getDay())
}
