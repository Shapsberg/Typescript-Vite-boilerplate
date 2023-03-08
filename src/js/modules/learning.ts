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













}