//1. Array Operations
const head = (array) => {
    let [firstElement] = array;
    return firstElement;
}

//console.log(head([1, 2, 3]));

const tail = (array) => {
    let [, ...others] = array;
    return others;
}

//console.log(tail([1, 2, 3]));

const init = (array) => {
    return array.slice(0, -1);
}

//console.log(init([1, 2, 3]));

const last = (array) => {
    return array.slice(-1);
}

//console.log(last([1, 2, 3]));

//2. Concat
const concat = (a, b) => {
    return [...a, ...b];
}

//console.log(concat([1, 2, 3], [4, 5, 6]));

const concatMultiple = (...a) => {
    return a.reduce((acc, current) => [...acc, ...current], []);
}

//console.log(concatMultiple([1, 2, 3], [4, 5, 6]));

//3. Clone merge
function clone(source) {
    return { ...source };
}

//console.log(clone({a: "coso", b: "coso2"}));

function merge(source, target) {
    return { ...clone(target), ...clone(source) };
}
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

//console.log(merge(a, b));

//4. Read books





