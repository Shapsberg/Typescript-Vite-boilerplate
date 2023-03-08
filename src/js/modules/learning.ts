export default function learning() {
	console.log('hva er ts');
	// variabler

	let firstName = 'Adrian';
	firstName = 'PootyTang';

	let age = 43;
	
	let isLogged = true;
	isLogged = false;

	let myName: string;
	let myAge: number|undefined;
	let isInlogged: boolean;

	myName = 'Carlo';
	myAge = undefined;

	function add(
		a:number, 
		b:number|undefined, 
		c?:string
		): number {
			if (b !== undefined) {
				return (a + b);
			}
			return 0
	}

	console.log(add(3,6));

	let multiply: (x:number, y:number) => number;
	multiply = (number1:number, number2: number): number => {
		return number1 * number2 
	}

	let data;
	let results: any = data; // det burde ungås å bruke "any" i produksjonen. 
	results = 'text';

	/* ARRAYS */
	////////////////////////////////////////////////////////////////////////////////////////////////
	let persons = [
		'adrian',
		'brage',
		'krage',
		'drage'
	 ];

	// en måte å definere en array type (kom ut først)
	 let newPersons: (string|boolean)[] = [];
	 newPersons.push('hei');
	 newPersons.push(true);
	 console.log(newPersons);

	// en annen måte å definere en array type (Caro foretrekker denne) som er lettere å lese. 
	let newPersons2: Array <string|boolean> = [];
	newPersons2.push(true);
	newPersons2.push('hello');
	console.log(newPersons2); 


	/* OBJECTS */
	//////////////////////////////////////////////////////////////////////////////////////////////////
	
	//let person: object; // definerer person som et objekt
	//person = {};

	let animal = {
		name: 'Doug',
		type: 'Dog',
		age: 2
	}

	animal.name = 'Dawg';
		
	/* let person: {
		firstName: string,
		lastName: string,
		age: number,
		isLogged: boolean,
		skills?: Array<string>
	} */
	
	interface Person {
		firstName: string,
		lastName: string,
		age: number,
		isLogged: boolean,
		skills?: Array<string>
	}

	let person: Person; 

	type Animal = {
		name: string,
		type: string,
		skills: Array<string>
	}

	type stringOrNumber = string|number; 
	
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
	}

	function display(isPerson: Person, name: stringOrNumber) {
		console.log(isPerson.lastName)
	}
	
	/* DOM HÅNDTERING */
	//////////////////////////////////////////////////////////////////////////////////////////////////
	const containerElement = document.querySelector('#container')!;
	containerElement.textContent = 'hei';

	// en lettere måte å gjøre det på. Dette kan vi bruker andre steder, men brukes ofte i DOM håndteringer. 
	const inputElement = document.getElementById('name') as HTMLInputElement;

	const allInputElements: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');








}