console.log("wellcome to java script");
console.log("jagriti singh");


// data type in js 
// number, string,boolean, underfined, null, biglint, symbol

// fullname = "tony stark";
// console.log(fullname);
// age = 24;
// console.log(age);
// price = 99.99;
// console.log(price);
// radius = 14;
// console.log(radius);
// ab = null;
// console.log(ab);
// y = undefined;
// console.log(y);
// isfollow = true;
// console.log(isfollow);

// object --- collection of values 

// const student = {
//     fullname : "rahul kumar",
//     age : "20",
//     cgpa : "8.2",
//     ispass : true,
// } ;

// console.log(student);

// create a const object called "product"to store information shown in the picture.

// const product = {
//     title : "ball pen",
//     ratting : 4,
//     offer : 5,
//     price : 270,
// };
// console.log(product);

// // create a const object called "profite" to store  information shown in the picture

// const profile = {
//     username : "sradha khapra",// string 
//     isfollow : "true", // boolean
//     post : 195,
//     followers : 599,
//     following : 4,
// };
// console.log(profile);

// operators in js 
// 1. ARIRTHMETIC OPERATORS 

// addition
// let a = 5;
// let b = 2;
// console.log("a+b = ",a+b);

// // substraction
// let A = 10;
// let B = 8;
// console.log("A-B =",A-B);

// // multiply
// let c = 2;
// let d = 4;
// console.log("c*d=",c*d);

// // divded 
// let e = 8;
// let f = 2;
// console.log("e/f=",e/f);

// // modulus 
// let g = 5;
// let h = 2;
// console.log("g%h=",g%h);

// EXPONENTIONTION 
// let i = 5**2;
// console.log("i=",i);

// increment unary operator
//  let j = ++a ;
//  console.log("++a=",++a);

//  let k = a++ ;
//  console.log("a++=",a++);

//  let l = --a ;
//  console.log("--a",--a);
 
//  let m = a--;
//  console.log("a--",a--);

//  ASSIGNMENT OPERATORS

// = , +=, -=, *=, %=, **=

// let n = 6;
// n+= 5;
// console.log("n=",n);

// loop & strings 

// loops are used to execute a piece of code again & again. 
// for loop

// for (let count=1; count<=5; count++){
//     console.log("apna colloge");
// }

//calculate sum of 1 to 5 
// let sum=0;
// for (i=1; i<=5; i++){
//     sum=sum+i;
// }
// console.log("sum =",sum);

// console.log("loops has ended");
//  while loop

// let z=1;
// while(z<=5){
//     console.log("hello javasricpt");
//     z++;
// }

//  do while loop

// let x=1;
// do{
//     console.log("i=",i);
//     i++;
// }while(i<=5);

//   for - of loop

// let _str = "ApnaCillege";

// let size =0;
// for(let val of _str){
//     console.log("val=",val);//iterator->charactors
//  size++;
// }
// console.log("string size=",size);

// for -in loop

// let student_ = {
//     Name: "rahul kumar",
//     age: 20,
//     cgpa: 7.5,
//     ispass: true,

// };
// for (let key in student){
//     console.log("key =", key,"value=",student [key]);
// }

// // practic qs1 

// //                                    NUMBER CONDITION

// for(let num = 0; num <= 100; num++) {
//     console.log("num=",num);
// }

// //                                       EVEN NUMBER CONDITION

// for(let num = 0; num<= 100; num++){
//     if (num % 2 === 0){
//         // even number
//         console.log("num=",num);
//     }
// }

// //                                    ODD NUMBER CONDITION
// for(let num = 0; num<= 100; num++){
//     if (num % 2 !== 0){
//         //odd number
//         console.log("num=",num);
//     }
// }

// // PRACTICE QUESTION 2

// //  let gamenumber = 25;

// //  let username = prompt("guess the game number:");

// //  while (username != gamenumber){
// //     username = prompt("you entered wrong number,guess again :");
// //  }

// //  console.log("congratulations, you entered the right number");

// //   STRINGs

// // let str = "apnacollege";

// // let str2 = 'jagriti';

// // console.log(str[0]);

// // // TEMPLATE LITERALS 

// // let specialstring = `this is a template literals`;

// // console.log( typeof specialstring);

// // // temlate literals example
// // let obj = {
// //     item: "pen",
// //     price: 10,
// // };

// // let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// // console.log(output);

// //  string interpolation 

// // let str3 =`this is interpolation sting ${1+2+3}`;
// // console.log(str3);

// // console.log("apna\ncollege")
// // console.log("apna\tcollege")
// // let str4 = "apna\tcolloge";
// // console.log(str4.length);

// // string method 

// // 1 str.toupper case()

// // let str5 = "apnacolloge";

// // OR

// // let str6 = "apnacollege";
// //  let newstr = str6.toUpperCase();// str6 = str6.touppercase()
// // console.log(str6);
// // console.log(newstr);

// // let str7 = "     apna  college in  js  ";
// // console.log(str7.trim());


// // str.slice(start,end?)  returns part of string

// // let str = "0123456";
// // console.log(str.slice(1,5));

// // str1.concat(str2) join str2 with str1

// // let str1 = "jagriti";
// // let str2 = "singh";

// // let res = str1.concat(str2);//  let res =  "my name is "+str1 + str2; 
// // console.log(res);

// // str.replace(search val,new val)

// // let str = "hello";
// //  console.log(str.replace("h","y"));



// // str.charat(idx)

// let str = "ilovejs";
// console.log(str.charAt(2));

// // Q3 prompt the user to enter their full name generate a username for them based on the input start username with @, followed by their fullname and ending with the fullname length.

// let fullname = prompt ("enter your fullname without Spaces");

// let username = "@"+ fullname + fullname.length;
// console.log(username);

//                                                  ARRAY 

// let marks = [96, 82, 75, 64, 36];
// console.log(marks);


// let heroes = ["ironman","thor","hulk","saktiman","spiderman"];

// for loops

// for(let idx = 0; idx<heroes.length; idx++){
//     console.log(heroes[idx]);
// }

// for of loops 

// for (let hero of heroes){
//     console.log(hero);
// }

// let cities = ["delhi","pune","mumbai","hyderabad","gurgaon"];

// for(let city of cities){
//     console.log(city);
// }

// Q4 FOR  a given array with marks of students -> [85, 97, 44, 37, 76,60]
// find the average marks of the entire class.

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
 
// for(let val of marks){
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);


// Q5  FOR a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// all items have an after at 10% off on them. change the array to store final price ofter applying after.

// let items = [250, 645, 300, 900, 50];

// let i = 0;
// for (let val of items){
//     // console.log(`value of index ${1} = ${val}`);
//     let offer = val / 10;
//     items [i] = items[i] - offer;

//     console.log(`value offer - ${items[i]}`);
//     i++;
// }                  OR

// let items = [250, 645, 300, 900, 50];

// for (let i = 0; i<items.length; i++){
//     let offer = items[i]/10;
//     items[i] -= offer;
// }

// console.log(items);

// push()

// let fooditems = ["potato","apple","litchi"];


// // fooditems.push("chips","paneer","burger");
// console.log(fooditems);
//  let deleteditem = fooditems.pop();
// console.log(fooditems);
// console.log("deleteditem",deleteditem);

// // slice() method

// let marvelheroes = ["thor","spiderman","ironman","antman","dr. strange"];
// console.log(marvelheroes);
// console.log(marvelheroes.slice(1,3));

// // splice()method 

// let arr = [1,2,3,4,5,6,7];

// arr.splice(2,2,101,103);
  

// Q6  create an array to store companies -> "bloombeg","microsoft","uber","google","ibm","netflex"
//   1. remove the first company form the array
//  2. remove uber & add ola in its place
//  3. add amazon at the end 


// let companies = ["bloombeg", "microsoft","uber","google","iron","netflex"];

// // companies.shift();
// //  companies.splice(2, 1, "ola");
// companies.push("amazon");

//  function 

// function firstfunction( msg,num){
//     console.log("wellcome to my programing world");
//     console.log("we are learning in forntend web devlepment");
// }

// firstfunction();
// firstfunction();

// function firstfunction( msg,num){
//     // console.log(msg*100);
//     console.log(msg,num);
// }

// firstfunction("i love learning JS");

// function sum(x, y){
//     console.log(x + y);
// // }

// // const arrowmultiply = (a, b) => {
// //     console.log(a*b);
// // };

// function countvowels(str){
//     let count = 0;
//     for (const char of str){
//         if(
//             char === "a" || char === "e"|| char ==="i"|| char === "o"|| char === "u"
//         ){
//             count++;
//         }
//     }
//     console.log(count);
// }

// const countvow = (str) => {
//     let count = 0;
//     for (const char of str){
//         if(
//             char === "a" || char === "e"|| char ==="i"|| char === "o"|| char === "u"
//         ){
//             count++;
//         }
//     }
//     return count;
// };

// FOR EACH LOOP

// let arr = [1,2,3,4,5];

// arr.forEach(function printval(val){
//     console.log(val);
// });

// let arr =["puna","mumbai", "delhi","hydrabad", "banglor"];

// arr.forEach((val, idx, arr) =>{
//     console.log(val,idx, arr);
// })

// Q1 FOR A GIVEN ARRAY OF NUMBERS, PRINT THE SQUARE OF EACH VALUE USING THE FOREACHLOOP. 
 
// let nums =[2,3,4,5,6];

// nums.forEach((num) => {
//     console.log(num*num);
// });
//            MAP   ARR.MAP (CALLBACK FNX (VALUE,INDEX, ARRAY))
// let nums =[52, 64,87];

//  let newarr = nums.map((val)=>{
// return val*val;
// });

// console.log(newarr);

// FILTER

// let arr = [1, 2, 3, 4, 5, 6, 7, 8,9];

// let evenarr = arr.filter((val)=>{
//     return val % 2 === 0;
// });

// console.log(evenarr);


//              REDUCE 

// let arr = [1,2,3,4];
// const output = arr.reduce((res,curr)=>{
//     return res + curr;
// });
// console.log (output);
//  alert("hello java script");

// let h2 = document.querySelector("h2");
// console.dir(h2.innertext);
// h2.innertext = h2.innertext + " from apna college student";

// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for(divs of divs){
//     divs.innertext = `new unique value ${idx}`;
//     idx++;}

// divs[0].innertext = "new unique value 1";
// divs[1].innertext = "new unique value 2";

// let div = document.querySelector("p");
// console.log(para.setAttribute("class", "new class"));

// let div = document.querySelector("div");
//  div.style.backgroundColor = "green";
//  div.style.backgroundcolor = "purple";

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click",() =>{
//     console.log("btn1 was clilked");
// });
// btn1.onclick = () =>{
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }
// let box = document.querySelector("#box");

// box.onmouseover = () =>{
//     console.log("this is a div box");
// }

//  let btn1 = document.querySelector("#btn1");

//  let modebtn = document.querySelector("#mode");

//  let currmode = "light"; //dark
//  modebtn.addEventListener("click", () =>{
//    if(currmode === "light"){
//     currmode = "dark";
// document.querySelector("body").style.backgroundColor = "black";
   
//    }else{
//     currmode = "light";
// document.querySelector("body").style.backgroundColor = "pink";
   
//    }
//    console.log(currmode);
//  });

let data = "secret information";

class user {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewdata(){
        console.log("data =", data);
    }
}
let student1 = new user("shardha","abc@email.com");
let student2 = new user("aman", "aman@email.com");

