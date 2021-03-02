'use strict';
alert('welcome my friend')
let f =0
let username=prompt('what your name ?')

document.getElementById('pallet').innerHTML = username;

alert('Thank you, my friend'    +    username     +     'for your visit to my website. Welcome to your home')



let question1 = prompt('Have I lived in hay nazzal my whole life?').toLowerCase();
function q1() {
if (question1 === 'yes' || question1 === 'y' ) {
console.log('The user answered correct with: ' + question1);
alert('Your answer is correct')
f++
} else 
{if(question1 === 'no' || question1 === 'n') { 
console.log('The user answered incorrect with: ' + question1);
alert('Your answer is not correct')
}
else{
question1=prompt("please try again").toLocaleLowerCase()
q1()
}
}
}
q1();




let question2 = prompt('Is my favorite color yellow?').toLowerCase();

function q2() {
if (question2 === 'yes' || question2 === 'y' ) {
console.log('The user answered incorrect with: ' + question2);
alert('Your answer is not correct')
} else 
{if(question2 === 'no' || question2 === 'n') { 
console.log('The user answered correct with: ' + question2);
alert('Your answer is  correct')
f++
}
else{
question2=prompt("please try again").toLocaleLowerCase()
q2()
}
}
}
q2();



let question3 = prompt('Is my favorite team Man city').toLowerCase();

function q3() {
if (question3 === 'yes' || question3 === 'y' ) {
console.log('The user answered correct with: ' + question3);
alert('Your answer is correct')
f++
} else 
{if(question3 === 'no' || question3 === 'n') { 
console.log('The user answered incorrect with: ' + question3);
alert('Your answer is not correct')
}
else{
question3=prompt("please try again").toLocaleLowerCase()
q3()
}
}
}
q3();

let question4 = prompt('Is my height = 180').toLowerCase();

function q4() {
if (question4 === 'yes' || question4 === 'y' ) {
console.log('The user answered incorrect with: ' + question4);
alert('Your answer is not correct')
} else 
{if(question4 === 'no' || question4 === 'n') { 
console.log('The user answered correct with: ' + question4);
alert('Your answer is  correct')
f++
}
else{
  question4=prompt("please try again").toLocaleLowerCase()
  q4()
}
}
}
q4();

let question5 = prompt('Do I have white hair').toLowerCase();

function q5() {
if (question5 === 'yes' || question5 === 'y' ) {
console.log('The user answered correct with: ' + question5);
alert('Your answer is correct')
f++
} else 
{if(question5 === 'no' || question5 === 'n') { 
console.log('The user answered incorrect with: ' + question5);
alert('Your answer is not correct')
}
else{
question5=prompt("please try again").toLocaleLowerCase()
q1()
}
}
}
q1();

alert('Thank you, my friend'    +    username     +     'for answer my question')
let x =0;

do{
x+=1
let question6 = parseInt( prompt('guss the number between 1$10').toLowerCase());
if( question6<=10 && question6>5 ){
alert(' too low')
}else if(question6>=1 && question6<=4){
alert('too high')
} else if (question6=5){
alert('coreect anser')
f++
break
}
} while( x<4 );


let Hobby= ['history','watch anime','swimming']
let z=0

{
let question7 =  prompt('guss 3 Hobby for me').toLocaleLowerCase()
let hobby1=Hobby.length
for(let i=0;i<5;i++){
if(question7===Hobby[0]){
z++
alert('corect')
console.log('anser:'+question7)
question7 =  prompt('try').toLocaleLowerCase()
f++
}else if(question7===Hobby[1]){
alert('corect')
console.log('anser:'+question7)
question7 =  prompt('try').toLocaleLowerCase()
z++
f++
}else if(question7===Hobby[2]){
alert('corect')
console.log('anser:'+question7)
z++
question7 =  prompt('try').toLocaleLowerCase()
f++
}else{
alert('try again')
question7 =  prompt('try').toLocaleLowerCase()
}
if(z==2){
break
}
}
}

alert('My favorite hoppy are: history, watch anime, swimming, ');
alert('Good Job!... You got ' + f + ' correct answers!');
