//
const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key'
    }
};

// shallow copy
const o2 = Object.assign({}, o);

o2.obj.key = 'new value';

console.log(o.obj.key);

// o.a = 'new value'

// console.log(o2.a);

// deep copy
/*  check if values are objects
    if so, copy that object
    else return the value 

    USE A LIBRARY
*/