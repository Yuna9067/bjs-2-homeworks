function parseCount (value) {
    const parsed = Number.parseFloat(value);

    if (Number.isNaN(parsed)) {
        throw new Error('Невалидное значение');
    }

    return parsed;
}

function validateCount (value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(b, t, s) {
        if(b + t <= s || b + s <= t || t + s <= b) {
            throw new Error('Треугольник с такими сторонами не существует')
        };
        this.b = b;
        this.t = t;
        this.s = s;
    }

    get perimeter() {
        return this.b + this.t + this.s;
    }

    get area() {
        const p = this.perimeter / 2;
        const areaStr = Math.sqrt(p * (p - this.b) * (p - this.t) * (p - this.s)).toFixed(3);
        const area = +areaStr;
        return area;
    }
}

function getTriangle(b, t, s) {
    try {
        return new Triangle(b, t, s);
    } catch (error) {
        return {
            get area () {
                return 'Ошибка! Треугольник не существует';
            },
            get perimeter () {
                return 'Ошибка! Треугольник не существует';
            }
        };
    }
}