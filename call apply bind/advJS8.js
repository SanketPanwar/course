const obj={num:2};

function addToObj(a,b,c){
    return this.num+a+b+c;
}
let arr=[1,2,3];

// call (using ES6 spread feature)
console.log(addToObj.call(obj,...arr));

// apply
console.log(addToObj.apply(obj,arr));

// bind
let bound_func=addToObj.bind(obj);
console.log(bound_func(...arr));

// part 4 of task
let student={
    name:'sanket',
    age:24
};
function printAge(){
    console.log(this.age);
}
printAge.bind(student)();

// currying using bind
function multiply(x,y){
    console.log(x*y);
}
let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(5);

//currying using closures
let divide=function (x){
    return function (y){
        console.log(y/x);
    }
}
let divideByTwo=divide(2);
divideByTwo(10);
