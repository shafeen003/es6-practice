/*  1.let const
    2.Stirng templete
    2.a: use variable
    2.b: use object property
    3.arrow function
    3.a: with one parameter will return the number after dividing by 5
    3.b: with two parameters will add two to each number and then multiply the result
    3.c: with three parameters will multiply all three parameter
    3.d: two parameters will add two to each number and then multiply the result with multiline
    make sure return the result
    4. (home work): javascript funtion declaration vs arrow funtion
    5. array of numbers then map to get each element multiplyed by 5 .must use arrow funtion
    6.[challenging]: numbers of array . get by using filter odd number with arrow funtion
    7.[challanging]: array of objects (e.g. products) use to find get the object with price 5000
    8.You have an object.Now use destructuring to create a simple variable of any property of object
    9.[challenging]: You have an array.Now use destructuring to create a simple(or more) variable to get the third element of the array in a variable called 'three'.
    10. [optional]: just write a function with three parameter and the last parameter will have a default parameter with value "7" and the function will take three parameters and will return the sum of all the three parameters.
*/

// 1. 
let age = 18;
const gravity = 9.8;
const me = {
    name: 'shafeen',
    address: 'Sherpur,Mymenshing,Bangladesh',
    college: 'Dhaka Residential Model College',
    hobby: 'Driving'
}
// 2. 
const myDetails = `Hellow every one I am ${me.name}.I am ${age} years old.I read in ${me.college}.I live in ${me.address}.And my hobby is ${me.hobby}.`

// console.log(myDetails);

// 3. 

// a 
const first = x => x / 5;
// console.log(first(10));

// b 
const second = (x, y) => (x + 2) * (y + 2);

// console.log(second(2, 4));

// c 
const third = (x, y, z) => x * y * z;

// console.log(third(2, 3, 4));

// d 
const fourth = (x, y) => {
    const num1 = x + 2;
    const num2 = y + 2;
    const result = num1 * num2;
    return result;
}

// console.log(fourth(2, 4));

// 5 
const numbers = [2, 4, 5, 6, 7, 8, 913, 3, 57, 85, 8, 57, 8];
const multiplyByFive = numbers.map(number => number * 5);

// console.log(multiplyByFive);

// 6

const oddNumbers = numbers.filter(number => number % 2 == 1);
// console.log(oddNumbers);

// 7
const products = [
    { name: 'mobile', price: 15000, color: 'White' },
    { name: 'smart watch', price: 5000, color: 'Black' },
    { name: 'laptop', price: 25000, color: 'silver' },
    { name: 'Cycle', price: 5000, color: 'orange' },
    { name: 'bed', price: 6000, color: 'gray' }
];
const price5000 = products.find(product => product.price == 5000);
// console.log(price5000);

// 8
const { name, address, college } = me;
// console.log(name, address, college);

// 9
// const three = products[2];
// console.log(three);

const [one, two, three] = [3, 6, 8, 10];
// console.log(three);

// 10
const sum = (x, y, z = 7) => x + y + z;
// console.log(sum(1, 3, 0));
