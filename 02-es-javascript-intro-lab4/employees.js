function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.toString = function() {
    return this.name + ", age: " + this.age;
}

Person.prototype.bio = function() {
    return "I'm " + this.name + " and I'm " + this.age + " old. I can develop with ";
}

//Replaced with extends in ES6. Represents inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

function Employee(name, age, aPractice, qualifications) {
    Person.call(this, name, age);
    this.practice = aPractice;
    this.qualifications = qualifications;
}

var employees = [
    new Employee("John Smith", 35, 12, ['JS', 'Fortran', 'PHP']),
    new Employee("George Hamilton", 42, 5, ['JS', 'NodeJS', 'Express']),
    new Employee("Amy Smith", 45, 15, ['Java', 'JS', 'PHP']),
    new Employee("Simon Mangroove", 27, 3, ['PHP', 'HTML', 'CSS']),
    new Employee("Andrew Harrison", 22, 0, []),
    new Employee("Caren Blake", 39, 9, ['JS', 'Ruby', 'Kotlin']),
    new Employee("Jana Blake", 22, 0, [])
];

Employee.prototype.toString = function() {
    return Person.prototype.toString.apply(this, []) + ", practice: " + this.practice + ", qualificaions: [" + (this.qualifications && this.qualifications.join(", ")) + "]";
}

// employees.forEach(function(emp) {
//     console.log(emp.toString());
//     console.log(emp.bio());
// });

var allEmpQualifications = employees
.filter(emp => emp.qualifications.length > 0)
.flatMap(function(emp) {
    return emp.qualifications;
})
.reduce((accumulator, qual) => {
    return (accumulator.indexOf(qual) < 0) ? accumulator.concat(qual) : accumulator;
}, [])
.sort();

console.log(allEmpQualifications);