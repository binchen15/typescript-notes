
const char = "mario";

const inputs = document.querySelectorAll('input');

console.log(char);
//console.log(inputs);

inputs.forEach(input=> console.log(input))

const circ = (d: number) =>{
	return Math.PI * d
}

console.log(circ(2));

let names =["chen", "nana"];
// names.push(12); will fail

// function
let greet: Function;
greet = () => {
	console.log("hello");
}

const add = (a: number, b: number, c ? : number|string) : void => {
	console.log(a+b);
	console.log(c);
}

add(5, 10) // c will be undefined

const sub = (a:number, b:number) : number  => { 
	return a + b;
}

type StringNumber = string | number;
type UserType = {name:string, uid:StringNumber}


