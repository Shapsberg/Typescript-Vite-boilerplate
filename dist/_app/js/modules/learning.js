export default function learning() {
    console.log('hva er ts');
    let firstName = 'Adrian';
    firstName = 'PootyTang';
    let age = 43;
    let isLogged = true;
    isLogged = false;
    let myName;
    let myAge;
    let isInlogged;
    myName = 'Carlo';
    myAge = undefined;
    function add(a, b, c) {
        if (b !== undefined) {
            return (a + b);
        }
        return 0;
    }
    console.log(add(3, 6));
    let multiply;
    multiply = (number1, number2) => {
        return number1 * number2;
    };
    let data;
    let results = data;
    results = 'text';
    let persons = [
        'adrian',
        'brage',
        'krage',
        'drage'
    ];
    let newPersons = [];
    newPersons.push('hei');
    newPersons.push(true);
    console.log(newPersons);
    let newPersons2 = [];
    newPersons2.push(true);
    newPersons2.push('hello');
    console.log(newPersons2);
    let animal = {
        name: 'Doug',
        type: 'Dog',
        age: 2
    };
    animal.name = 'Dawg';
    let person;
    person = {
        firstName: 'Otto',
        lastName: 'Bergman',
        age: 27,
        isLogged: true,
        skills: [
            'football',
            'sleeping',
            'eating'
        ]
    };
    function display(isPerson, name) {
        console.log(isPerson.lastName);
    }
    const containerElement = document.querySelector('#container');
    containerElement.textContent = 'hei';
    const inputElement = document.getElementById('name');
    const allInputElements = document.querySelectorAll('input');
}
