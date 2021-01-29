while (true) {
    let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let dayOfTheWeek = {
        0: 'Среда',
        1: 'Четверг',
        2: 'Пятница',
        3: 'Суббота',
        4: 'Воскресенье',
        5: 'Понедельник',
        6: 'Вторник',
    };

    let month = readPositiveNumber('Введите номер месяца', 12);
    let day = readPositiveNumber('Введите число в месяце', daysInMonths[month - 1]);
    let dayInYear = daysInMonths.filter((value, index) => index < month - 1).reduce((sum, x) => sum + x, 0) + day
    alert(`${day}.${month} - ${dayOfTheWeek[dayInYear % 7]}`)
}

function readPositiveNumber(enterMessage, limit) {
    let number = parseInt(prompt(enterMessage));
    if (isNaN(number) || number <= 0 || number > limit) {
        alert('Ввод - некоректен');
        throw 'Ввод - некоректен';
    }
    return number
}
