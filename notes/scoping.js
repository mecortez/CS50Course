thisIsHoisted();

const thisIsAConst = 50;

// thisIsAConst++ -> ERROR

const constObj = {};

constObj.a = 'a';



let thisIsALet = 51;
thisIsALet = 50;

// let thisIsALet = 51 -> ERROR



var thisIsAVar = 50;
thisIsAVar = 51;
var thisIsAVar = 'new value';

// console.log(thisIsAVar);


function thisIsHoisted() {
    console.log('this is a function declared at the bottom of a file');
}

