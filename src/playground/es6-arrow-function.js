const square1 = function(x) {
    return x * x
};

const square2 = (x) => {
    return x * x;
};

const square3 = (x) => x * x;

console.log(square1(10));

const getFirstName = (name) => name.split(' ')[0]

console.log(getFirstName('Frank Underwood'))

const add = function(a, b) {
    return a + b;
}

const add2 = (a, b) => {
    return a + b;
}

const add3 = (a, b) => a + b;

console.log('add: ' + add(1, 2))
console.log('add2: ' + add2(1, 4))
console.log('add3: ' + add3(4, 5))

const user = {
    name: 'kwony',
    cities: ['pangyo', 'sinchon', 'madrid'],
    printPlacedLived: function() {
        return this.cities.map((city) => {
            return this.name + ' has lived in ' + city + '!';
        });
    },

    printPlacedLived2() {
        return this.cities.map((city) => {
            return this.name + ' has lived in ' + city + '!';
        });
    }
}

const multipler = {
    numbers: [1, 2, 3, 4],

    multiply(by) {
        const result = this.numbers.map((num) => {
            return num * by
        })

        console.log(result)
    },

    multiply2: function(by) {
        const result = this.numbers.map((num) => {
            return num * by
        })

        console.log(result)
    }

}

user.printPlacedLived()
user.printPlacedLived2()

multipler.multiply(3)
multipler.multiply2(10)