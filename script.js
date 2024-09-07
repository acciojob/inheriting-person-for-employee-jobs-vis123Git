function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
    };
}

const person = Object.create(Person.prototype);
person.name = 'Alice';
person.age = 14;
person.greet();

function Employee(name, age, jobTitle) {
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
    this.introduce = function() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
    };
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const employee = Object.create(Employee.prototype);
employee.name = 'Bob';
employee.age = 30;
employee.jobTitle = 'Developer';
employee.introduce();

window.Person = Person;
window.Employee = Employee;