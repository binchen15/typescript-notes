1.	introduction

	intall typescript compiler

	$ npm i -g typescript

2.	compiling typescript

	tsc sandbox.ts

	tsc sandbox.ts -w
		; watch the file

3.	type basics

	let age = 35;
	age = "40"; // error


4.	objects and arrays

	array can be fixed/mixed type

	object structure is fixed and must be maintained.
	attribute type checked too.

5.	explicit types

```
	let ninjas: string[]

  	// union type
		let mix: (string|number)[] = []
		mix.push(3)
		mix.push('hei')

		let uid: string|number

	// object type
		let var: object
		let var: {}

		let obj: {
			name: string,
			age: number,
			belt: string
		}
```

6.	dynamic/any types

```
	let a: any = 25
	a = true; // ok

	let ar: any[]
```

7.	tsconfig

	tsc --init
	; tsconfig.json

	```
	"outDir": "./public", 
	"rootDir": "./src",
	```   

8.	function basics

```
const add = (a: number, b: number, c ? : number|string)
const add = (a: number, b: number, c: number|string = 15)
```

9.	type aliases

	type MyType = string|number

10.	function signature

```
	let greet: Function;
	let greet: (a:string, b:string) => void
```
11.	DOM and Type Casting

12.	Classes
13.	Public, Private, Readonly

	readonly
		both inside/outside the class

14.	modules

	<script type="module" src='app.js'></script>

	; to use type="module", file must be served with a http server,
	; e.g., npm  http-server

15.	interface
16.	interface with class

	let docs: HasFormat[]
	; HasFormat is an interface
	; polymorphism


17.	Rendering a HTML template

18.	Generics

	similar to C++ templates

e.g.,

```
interface Resource<T> {
	uid: string|number;
	resource:string;
	data: T
}

const doc: Resource<object> = {
	uid:1,
	resouceName: "Book",
	data: {name:"Go with Wind"}
}
```

19.	Enums

```
	enum ResourceType {BOOK, AUTHOR, FILM}
	ResourceType.BOOK
```

20.	typles


	`let tup:[string, number] = ["123", 1]  // each entry type is fixed. can change value, but not type`

	

