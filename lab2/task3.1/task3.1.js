class Vector {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    }

    plus(other) {
        return new Vector(this.x + other.x, this.y + other.y, this.z + other.z);
    }

    scalar(other) {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    }

    toString() {
        return `(${this.x}, ${this.y}, ${this.z})`;
    }

    valueOf() {
        return this.length;
    }
}

function getVector(vectorNumber) {
    let x = parseFloat(document.getElementById(`x${vectorNumber}`).value);
    let y = parseFloat(document.getElementById(`y${vectorNumber}`).value);
    let z = parseFloat(document.getElementById(`z${vectorNumber}`).value);
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        alert(`Некоректно задан вектор ${vectorNumber}`);
        throw `Некоректно задан вектор ${vectorNumber}`;
    }
    return new Vector(x, y, z);
}

function sum() {
    let v1 = getVector(1);
    let v2 = getVector(2);
    alert(`Сумма двух векторов равна ${v1.plus(v2)}`);
}

function scalar() {
    let v1 = getVector(1);
    let v2 = getVector(2);
    alert(`Скалярное произведение двух векторов равна ${v1.scalar(v2)}`);
}

function inform() {
    let v1 = getVector(1);
    let v2 = getVector(2);
    alert(`Векторы ${v1.toString()} и ${v2.toString()}`);
}

function eval() {
    let v1 = getVector(1);
    let v2 = getVector(2);
    alert(`Длины двух векторов равны ${v1.valueOf()} и ${v2.valueOf()}`);
}
