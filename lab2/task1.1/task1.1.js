while (true) {
    let number1 = parseFloat(prompt('Введите первое число'));
    if (isNaN(number1)) {
        alert('первый ввод - не число');
        break;
    }

    let number2 = parseFloat(prompt('Введите второе число'));
    if (isNaN(number2)) {
        alert('второй ввод - не число');
        break;
    }

    if (number1 < number2) {
        alert('первое число меньше');
    }
    else if (number1 > number2) {
        alert('второе число меньше');
    }
    else {
        alert('числа равны');
    }
}
