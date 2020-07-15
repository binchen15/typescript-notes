import {Invoice} from "./classes/invoice.js"
import {Payment} from "./classes/payment.js"
import {HasFormatter} from "./interfaces/hasFormatter.js"
import {ListTemplate} from "./classes/ListTemplate.js"

const anchor = document.querySelector('a')!;
//console.log(anchor.href);

const invOne = new Invoice('mario', "mario game", 50);
const invTwo = new Invoice('yoshi', "yoshi game", 60);

let invoices: Invoice[] = [invOne, invTwo];
//console.log(invoices);

// HTMLFormElement
const form = document.querySelector('form')!;
// type Element cast >  
const form1 = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form1.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
console.log("-----", ul);
const list = new ListTemplate(ul);

form1.addEventListener('submit', e=>{
	e.preventDefault();
	let doc: HasFormatter;
	if (type.value === "invoice") {
		doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
	} else {
		doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
	}
	console.log(
		doc
	);
	list.render(doc, type.value, "end");
})


