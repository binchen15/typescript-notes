interface IsPerson {
	name: string;
	age: string
	speak(a: string): void;   // only signature
	spend(a: number): number;
}

const greetPerson = (p: IsPerson) => {
	console.log(`${p.name} ${p.age}`)
}
