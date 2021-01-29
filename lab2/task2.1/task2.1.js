function calculateLetterCost() {
    let letterWordNumber = document.getElementById('letterText').value.replace(/\n/g, ' ').split(' ').filter(value => value !== '').length;
    let letterCost = parseFloat(document.getElementById('wordCost').value);
    if (isNaN(letterCost) || letterCost < 0) {
        alert('Некоректный ввод стоимости слова');
    }
    else {
        alert(`Стоимость письма равна ${letterWordNumber * letterCost}`);
    }
}
