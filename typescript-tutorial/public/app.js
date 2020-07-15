import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const anchor = document.querySelector('a');
//console.log(anchor.href);
const invOne = new Invoice('mario', "mario game", 50);
const invTwo = new Invoice('yoshi', "yoshi game", 60);
let invoices = [invOne, invTwo];
//console.log(invoices);
// HTMLFormElement
const form = document.querySelector('form');
// type Element cast >  
const form1 = document.querySelector('.new-item-form');
console.log(form1.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
console.log("-----", ul);
const list = new ListTemplate(ul);
form1.addEventListener('submit', e => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, type.value, "end");
});
