while (true) {
    let index = parseInt(prompt('Введите коэффициент последовательности Фибоначчи'));
    if (isNaN(index) || index < 0) {
        alert('Ввод - некоректен');
        throw 'Ввод - некоректен';
    }
    alert(`F[${index}]=${getFibonacciElement(index)}`);
}

function getFibonacciElement(index) {
    let fibonacciRow = Array(index + 1);
    fibonacciRow[0] = 0;
    fibonacciRow[1] = 1;
    for (let i = 2; i <= index; i++) {
        fibonacciRow[i] = fibonacciRow[i - 1] + fibonacciRow[i - 2];
    }
    return fibonacciRow[index];
}
