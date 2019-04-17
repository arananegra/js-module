//1. Array Operations
const head = (array: Array<any>) => {
    let [firstElement] = array;
    return firstElement;
}

const tail = (array: Array<any>): Array<any> => {
    let [, ...others] = array;
    return others;
}

const init = (array: Array<any>): Array<any> => {
    return array.slice(0, -1);
}

const last = (array: Array<any>): Array<any> => {
    return array.slice(-1);
}

//2. Concat
const concat = (a: Array<any>, b: Array<any>): Array<any> => {
    
}