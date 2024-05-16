function countProperties(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return 0; 
    }

    return Object.keys(obj).length;
}

const myObject = {
    name: 'Taosif',
    age: 21,
    state:"Maharashtra"
};
let newObj = {}

console.log(countProperties(myObject)); 
console.log(countProperties(newObj)); 

