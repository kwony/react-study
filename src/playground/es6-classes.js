class Person {
    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.age = age
    }

    getGretting() {
        return `Hi. I am ${this.name}! age: ${this.age} years old.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasLocation() {
        return !!this.homeLocation;
    }

    getGretting() {
        let description = super.getGretting();

        if (this.hasLocation) {
            description += ` I am visiting from ${this.homeLocation}.`;
        }

        return description;
    }
}

const me = new Student('kwony', 30, 'computerscience');

const traveler = new Traveler('kwony', 30, 'pangyo');

console.log(traveler.getGretting())

console.log(me.getDescription());

const other = new Student();

console.log(other.hasMajor());