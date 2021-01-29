class Product {
    constructor(group, code, name, model, cost, count){
        this.group = group;
        this.code = code;
        this.name = name;
        this.model = model;
        this.cost = cost;
        this.count = count;
    }

    update(product) {
        for (let key in this) {
            if (product[key] !== null) {
                this[key] = product[key];
            }
        }
    }

    toString() {
        return `Продукт ${this.code}: группа=${this.group}, название=${this.name}, ` +
            `модель=${this.model}, стоимость=${this.cost}, количество=${this.count}`;
    }
}

class Shop {
    constructor(products=[]) {
        this.products = products;
    }

    findProductIndex(code) {
        return this.products.findIndex(x => x.code === code);
    }

    addProduct(product) {
        if (this.findProductIndex(product.code) !== -1) {
            throw new Error('Продукта с этим кодом нет')
        }

        this.products.push(product);
    }

    deleteProduct(code) {
        let productIndex = this.findProductIndex(code);
        if (productIndex === -1) {
            throw new Error('Продукта с этим кодом нет');
        }

        this.products.splice(productIndex, 1);
    }

    updateProduct(product) {
        let productIndex = this.findProductIndex(product.code);
        if (productIndex === -1) {
            throw new Error('Продукта с этим кодом нет');
        }

        this.products[productIndex].update(product);
    }

    getSortProductsBy(property) {
        return this.products.sort((p1, p2) => p1[property] < p2[property] ? -1 : 1)
    }

    getProductsByCountLimit(countLimit) {
        return this.products.filter(product => product.count < countLimit);
    }

    getProductsByValue(property, value) {
        return this.products.filter(product => product[property] === value);
    }

    toString() {
        return this.products.map(product => product.toString()).join('\n');
    }
}

function readString(stringId, isRequired=true, property='') {
    let string = document.getElementById(stringId).value;
    if (string === '') {
        if (isRequired) {
            throw new Error(`Поле '${property}' обязательно для заполнения`);
        }
        string = null;
    }
    return string;
}

function readNumber(numberId, isRequired=true, property='') {
    let textNumber = readString(numberId, isRequired, property);
    if (textNumber !== null) {
        let number = parseInt(textNumber);
        if (isNaN(number) || number < 0) {
            throw new Error(`${property} должно быть целым положительным числом`);
        }
        return number
    }
    return textNumber;
}

function getCheckedRadioValue(name) {
    let elements = document.getElementsByName(name);
    for (let i = 0; i < elements.length; ++i) {
        if (elements[i].checked) {
            return elements[i].value;
        }
    }
}

function readProduct(isRequired=true) {
    let group = readNumber('group', isRequired, 'группа');
    let code = readNumber('code', true, 'уникальный код');
    let name = readString('name', isRequired, 'название');
    let model = readString('model', isRequired, 'модель');
    let cost = readNumber('cost', isRequired, 'цена за единицу');
    let count = readNumber('count', isRequired, 'количество');

    return new Product(group, code, name, model, cost, count);
}

let shop = new Shop();

function addProduct() {
    try {
        shop.addProduct(readProduct(true));
    }
    catch (error) {
        alert(error.message);
    }
}

function updateProduct() {
    try {
        shop.updateProduct(readProduct(false));
    }
    catch (error) {
        alert(error.message);
    }
}

function deleteProduct() {
    try {
        let code = readNumber('deleteCode', true, 'уникальный код');
        shop.deleteProduct(code);
    }
    catch (error) {
        alert(error.message);
    }
}

function showShop() {
    alert(shop);
}

function showByLimit() {
    try {
        let countLimit = readNumber('countLimit', true, 'граничное значение');
        let foundProducts = shop.getProductsByCountLimit(countLimit);
        alert(foundProducts.map(product => product.toString()).join('\n'));
    }
    catch (error) {
        alert(error.message);
    }
}

function sort() {
    shop.getSortProductsBy(getCheckedRadioValue('sortProperty'));
    alert(shop);
}

function search() {
    try {
        let key = getCheckedRadioValue('searchProperty');
        let value = readString('propertyValue', true, 'значение признака');
        let foundProducts = shop.getProductsByValue(key, value);
        alert(foundProducts.map(product => product.toString()).join('\n'));
    }
    catch (error) {
        alert(error.message);
    }
}
