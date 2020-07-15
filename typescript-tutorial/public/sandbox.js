"use strict";
const char = "mario";
const inputs = document.querySelectorAll('input');
console.log(char);
//console.log(inputs);
inputs.forEach(input => console.log(input));
const circ = (d) => {
    return Math.PI * d;
};
console.log(circ(2));
let names = ["chen", "nana"];
// names.push(12); will fail
// function
let greet;
greet = () => {
    console.log("hello");
};
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10); // c will be undefined
const sub = (a, b) => {
    return a + b;
};
