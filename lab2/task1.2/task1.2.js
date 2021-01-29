let floorsNumber = readPositiveNumber('Введите количество этажей');
let entrancesNumber = readPositiveNumber('Введите количество подъездов');
let flatsOnFloorNumber = readPositiveNumber('Введите количество квартир на этаже');
let flatNumber = readPositiveNumber('Введите номер квартиры');
let entrance = getEntranceNumber(floorsNumber, entrancesNumber, flatsOnFloorNumber, flatNumber);
if (!isNaN(entrance)) {
    alert(`Квартира находится в ${entrance} подъезде`);
}
else {
    alert('Такой квартиры нет');
}

function readPositiveNumber(enterMessage) {
    let number = parseInt(prompt(enterMessage));
    if (isNaN(number) || number <= 0) {
        alert('Ввод - некоректен');
        throw 'Ввод - некоректен';
    }
    return number
}

function getEntranceNumber(floorsNumber, entrancesNumber, flatsOnFloorNumber, flatNumber) {
    let flatsInEntrance = floorsNumber * flatsOnFloorNumber;
    let entrance = Math.floor((flatNumber - 1) / flatsInEntrance) + 1;
    if (entrance > entrancesNumber) {
        return null;
    }
    else {
        return entrance;
    }
}
