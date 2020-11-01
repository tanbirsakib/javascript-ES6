////------about let and const----//////
/*
var name = 'tanbir';
var age = 24;
name = 'youmon';
console.log(name);

const name1 = 'Tuhin';
let age1 = 23;
*/
//es5 function with var//
 
/*
function ableToPlay5(verrified){
  
    if(verrified){
        var name5 = "Tanbir";
        var position5 = "defender";
        
    } 
   
    console.log(name5 +' able to play football as ' + position5 );
    
}
ableToPlay5(true);

//es6 functin with let and const//

function ableToPlay6(verrified){
    let name6 = 'Rumman';
    const position6 = 'Attacking Mid';
   
    if (verrified) {
        
       
         console.log(name6 + ' able to play as ' + position6);
        
        
    }
   
}
ableToPlay6(true);
*/

///////////////////------BLOCK  AND IIFEs---------/////////////

/*
//es6
{
    const a = 4;
    let b = 3;
}
//console.log(a + b); //will not show any result.its not accessable outside Block

//es5

(function(){
    var c = 33;
})();
console.log(c);//not accessable outside function
*/

//////----Strings and template literals----////
/*
let firstName = 'Tanbir';
let lastName = 'Sakib';
const dateOfBirth = 1996;
function caclAge(year){
    return 2020-year;
}
//es5
console.log('My name is ' + firstName +' '+ lastName +'.I was born in ' + dateOfBirth + '.Now I am '+caclAge(dateOfBirth) + ' years old.')
//es6
console.log(`His name is ${firstName} ${lastName}.He was born in ${dateOfBirth}.Now he is ${caclAge(dateOfBirth)} years old`);

var fullname = `${firstName} ${lastName}`;
//console.log(fullname);
console.log(fullname.startsWith('T'));
console.log(fullname.endsWith('B'));
console.log(fullname.includes('ki'));
console.log(fullname.startsWith('T'));
console.log(`${lastName} `.repeat(5));
*/



////////-------ARROW FUNCTION----////
///----ES5
/*const years =[1990, 1995, 1997, 2002];

var ages =  years.map(function(el){
    return 2020-el;
});

console.log(ages);

//---ES6

var ages1 = years.map(el => 2020-el);
console.log(ages1);
*/

////------Arrow Function Lexical----///////

//////-----Destructuring-------//////
/*
const [name, age] = ['Tanbir Sakib', 23];

console.log(name);
console.log(age);
*/
///---Arrays in JS6------////
/** 
const boxes = document.querySelectorAll('.box');

Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'pink');
*/  
/* 
function addAges(a, b, c, d){
    return a + b + c + d;
}

let ages = [19,33,46,22];
let sumOfAges = addAges(...ages); //spreading array elements as function arguements
console.log(sumOfAges);

const h = 
document.querySelector('h1');

const boxes = 
document.querySelectorAll('.box');

const all = [h, ...boxes]; //spreading and adding two array

Array.from(all).forEach(cur => cur.style.color = 'white');  //changeing all the text color
 */


///--------Rest Parameters --------------////////

/* function ageMap(limit, ...years){  ///taking single arguements and binding them into an ARRAY
    years.forEach(cur => console.log((2020 - cur) >= limit));
    
}

ageMap(18, 1995,20005,1997,1996,2010);
 */

////////////----Default Parameters-----------////////////

//Default Parameters in ES5
/* function TeamIIUC(name, yearOfBirth, position, home){
    position === undefined ? position = 'Defender' : position = position;
    home === undefined ? home = 'Chittagong' : home = home;
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.position = position;
    this.home = home;
}

var player1 = new TeamIIUC('Sakib' , 1997);
var player2 = new TeamIIUC('Munna', 1995);
 */

//Default Parameters in ES6

/* function TeamIIUC(name, yearOfBirth, position = 'Striker', home = 'Dhaka'){
  
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.position = position;
    this.home = home;
}

var player1 = new TeamIIUC('Abdullah' , 1997);
var player2 = new TeamIIUC('ANik', 1995); */

//////////--------MAP------------////////

/* onst sakib = new Map();

sakib.set('fullname', 'Muhammed Tanbir Hossen Sakib')
sakib.set('hobby', 'Football');
sakib.set('favColor', 'Black');
sakib.set('occupation', 'Student');
console.log(sakib.size);
//we can loop through a map
sakib.forEach((value, key) => console.log(`key is ${key} and the value is ${value}`));
//we can also through for loop
for(let [key, value] of sakib.entries()) {
    console.log(`Key is: ${key} and the value is: ${value}`);
 } */


//////-----Class------///////


/* function Child(name,dob){
    this.name = name;
    this.dob = dob;
}

var child1 = new Child('Mim', 2017);
var child2 = new Child('Meher', 2018);
console.log(child1.name);

Child.prototype.currentAge = function () {
    console.log(this.name + ' is ' + (2020 - this.dob) + ' years old.')
    
}

child1.currentAge();
child2.currentAge();
 */

/* class Person6 {
    constructor(name, age, job) {
       this.name = name;
       this.age = age; 
       this.job = job  //class is kind of function constructor.Its just syntexetic suger.
    }
    dateOfBirth() {
       console.log(`${this.name} is born in ${2018 - this.age}`);
    }
 }
 const zawad6 = new Person6('Zawad Ahmed', 23, 'Child');
 zawad6.dateOfBirth();
 */


///////----Class ans Inheritence------/////

/* 
class CseFamily {
    constructor(id,name,age){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    dob(){
        console.log(`${this.name} is born in ${2018 -this.age} at Noapara`) 
    }
    static secret(){ //with the static method we restrict a methos.it cant be usable outside the class
        console.log('i dont wanna share this');
    }
}

class BmFamily extends CseFamily {
    constructor(id, name, age, address){
        super(id, name, age); //inherited the property of CseFamily Class
        this.address = address;
    }
}

const student1 = new BmFamily(171038, "Tanbir Sakib", '24', 'Noapara');
//console.log(student1.name);
//console.log(student1.id);
student1.dob(); //we can inherit the METHOD also
CseFamily.secret();
student1.secret(); //it will be undefined */



////////////////////////////////////////////////////////////////////////////
///////////////////--MODERN JAVASCRIPT---//////////////////////////////////
///////////////////////////////////////////////////////////////////////////


///////---First class function and higher order function----//////


//passing function as arguement
/*
function callMyname(name, callback) {
    var myAge = 23;
    callback(myAge);
    console.log(`It is Muhammed Tanbir Hossen ${name}`);
}
function hello(age) {
    console.log(`I am passed through the arguements and my age is ${age}`);
}
callMyname('Sakib', hello); //passing function as arguement

//return functin from function


function cseFamily(name) {
    console.log(`Our family name is ${name}`);
    return function cr(crName) {
        console.log(`${name} family's CR name is ${crName}`);
    }
}

cseFamily('ERROR44')('Md Riadul Islam');


/////----Map() function---///


 var items = [2,43,1,32,113,12,3];
var anotherItems = [];
for(var i = 0; i < items.length; i++){  
    anotherItems.push(items[i] * 2);
}
console.log(anotherItems); 

 var items = [2,43,1,32,113,12,3];
var anotherItems = items.map(function(item){
    return item * 2;
})
console.log(anotherItems);
var items = [2,43,1,32,113,12,3];
var anotherItems = items.map(item => item * 3);
console.log(anotherItems);
*/

////////////-------map(),filter(),reduce()-------////////////


/* 
var arr = [3,5,3,2,5,3,5,2];

var newArr = arr.map(function(item, index, fullArr){
    console.log(`Item : ${item} and Index : ${index}.Full Array : ${fullArr}`)
    
}) */

/* var arr = [1,2,3,4,5,6,7,8,9];

var newArr = arr.filter(item => item%2 ==  0);
console.log(newArr); */




/* var arr = [1, 2, 3, 4]

var total = arr.reduce(function(sum, item, index, fullArr) {
    console.log('Item: ' + item + ' and index: ' + index + '. Full Array: ' + fullArr + ' and sum: ' + sum);
    return sum += item
 }, 0)
 */


////////------Array() & some() --------//////////

/* onst anArr = [2,1,4,55,38];
anArr.some(function(el,index,fullArr){
   console.log(`an element = ${el}`);
   return el ===1;
 
   

}) */


/* const objSome = [
    {
        name : 'sakib',
        age : 24,
        job : 'student'
    },
    {
        name : 'mahi',
        age : 6,
        job : 'child'
    },
    {
        name : 'Kaiser',
        age : 23,
        job : 'bekar'
    }
]

console.log(objSome.some(el => el.age));
console.log(objSome.some(el => el.job === 'teacher')); */


/* const numArr = [1,1,3,1,1,1,1];
numArr.every(el => {
    console.log(`element is : ${el}`);
    console.log(typeof el ==='number');
    return el === 1;
})

 */

//////////////-----loop through object-----------///////////

/*
var favColor = {
    sakib : 'black',
    sajid : 'blue',
    moni : 'green',
    mahi : 'yellow'
}

 var colors = Object.values(favColor);
console.log(colors);

colors.map(el => {
    console.log(`Fav color is : ${el}`);
}) 

Object.values(favColor).map(el =>
    console.log(`His fav color is ${el}`));
Object.keys(favColor).map(el => {
    console.log(`Fav color of ${el} is ${favColor[el]}`);
})
*/

///////////////----dot notation and bracket notation------/////////////




////we can read value from an object by dot notation and bracket notation.they are mostly similar


////////------ math() method ------//////




/* console.log(Math.pow(11,2));
console.log(Math.floor(11.8));


const numbers = [1,2,3,5,2,56,6,7,22,44,24,23,44];

console.log(Math.max(...numbers));
console.log(Math.min(...numbers)); */

/* console.log(Math.floor(Math.random() * 7));


const text = 'Contrary to popular belief, Lorem Ipsum is not simply aehfddddddddddddddddddddddddddddddakldddddddddddddddddddddddddddddddd random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet comes from a line in section 1.10.32Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet comes from a line in section 1.10.32Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet comes from a line in section 1.10.32Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.';

const readingTime = Math.ceil(text.split(/\s/g).length / 200);

console.log(`${readingTime} mir reading time`);
 */


////////////////////-----Date() object-------////////////////////////


/* console.dir(Date);

console.log(Date.now());
console.log(Date.parse('10 Oct 1996 21:29:00 GMT')); //parse time into mili second since 1970
const date = Date();
console.log(date); //we can store date function constructor into variable
 */


/* if (NaN) {
    console.log('sakib');
}

const empty = '';
const something = 'Eat';
const work = empty || something;
console.log(work);  //this will print only the true value.this will assume empty string as false

const aFunc = () => {
    console.log('print me');
}

false || aFunc(); //it will check from left to right.if it gets true it will be exicuted


const andVar = 'Tanbir' && 'Sakib';
console.log(andVar); //if all true then it will print the last ture one

 */

//////-----conditional and ternary operator--------///////



/* const age = 21;
console.log(age > 18 ? 'You are adult' : 'You are child');

 */


//////////////------Regular expression-------/////////////

/* const exToreplace = /Mydesh/;

const mainText = 'I am from Mydesh';

const newText = mainText.replace(exToreplace, 'Bangladesh');
console.log(newText);

console.log(mainText.match(exToreplace));
console.log(newText.match(exToreplace));


const text1 = 'This is Tanbir Sakib'
console.log(text1.match(/tanbir/i)) //i is the modifier.it will fixed the match even if it is uppercase or lowecase
const text2 = 'This is my girl'
console.log(text2.match(/is/g)); //g modifier will find the all is in the text.here "is" is two times.


 */

///////------error handling----/////

/* try{
    console.aula('this is an error');
} catch(err){
    console.log('try anything here');
    console.log(err);
}


//custom error by throw statement

const age = 17;
try {
    if (age < 18) {
        throw 'You are too young' //custom error throw
    } else {
        console.log('You are adult');
    }
} catch (error) {
    console.log(error)
}finally{
    console.log("I am done handling error.");
}


const ageNew = 17;
try {
   if(ageNew < 18) {
      throw new Error('You are too young');
   } else {
      console.log('You are adult');
   }
} catch(err) {
   console.log(err);
}
 */

/////////------Developer Console-----///////


/* console.dir(console);

console.assert(1==2,"This is not valid");

console.clear();
console.count();

console.info('This is just a info method');

const anArr = ['sakib','tanbir','mahi','meher'];
console.table(anArr);

const anObj = {
    name : 'sakib',
    age : 23,
    study : 'IIUC'

}
console.table(anObj);

console.time(); for(var i = 0; i < 10000; i++) { console.log('Fake Time'); } console.timeEnd();
 */

/* 
const userInfo = getSomeData('https://aremoteserver.com');
console.log(userInfo); */

getSomeData('https://aremoteserver.com', (userInfo) => {
   console.log(userInfo);
});














































































































































 











































































































































































































































































































































